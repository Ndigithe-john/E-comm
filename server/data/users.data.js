import bcrypt from "bcryptjs";

const users = [
  {
    name: "Administrator",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: bcrypt.hashSync("1234567", 12),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("mypassword", 10),
    isAdmin: false,
  },
];

console.log(users);
export default users;
