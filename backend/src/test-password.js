
import {
  hashPassword,
  comparePassword,
} from "./utils/password.util.js";

const testPassword = "TemporaryTest123!";

const hashedPassword = await hashPassword(testPassword);

console.log("Hash created:", Boolean(hashedPassword));
console.log(
  "Correct password:",
  await comparePassword(testPassword, hashedPassword)
);
console.log(
  "Wrong password:",
  await comparePassword("WrongPassword123!", hashedPassword)
);
