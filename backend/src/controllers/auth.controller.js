import User from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/password.util.js";
import { generateAccessToken } from "../utils/jwt.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1. Validate request
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, email and password are required",
      });
    }
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // 2. Check existing user
    const normalizedEmail = email.toLowerCase().trim();
    const existing = await User.findOne({
      $or: [{ email: normalizedEmail }, { username }],
    });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Email or username already in use",
      });
    }

    // 3. Hash password + create user
    const hashed = await hashPassword(password);
    const user = await User.create({
      username: username.trim(),
      email: normalizedEmail,
      password: hashed,
    });

    // 4. Respond without the password
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          createdAt: user.createdAt,
        },
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate request
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // 2. Find user (+password only if the schema uses select: false)
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    }).select("+password");

    // 3. Same message for "no user" and "wrong password"
    const invalid = () =>
      res.status(401).json({ success: false, message: "Invalid email or password" });

    if (!user) return invalid();

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) return invalid();

    // 4. Generate token and respond
    const accessToken = generateAccessToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        accessToken,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getMe = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        avatar: req.user.avatar,
      },
    },
  });
};