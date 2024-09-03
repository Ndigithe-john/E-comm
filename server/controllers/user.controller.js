import UserModel from "#models/user.model.js";
import generateToken from "#utils/generate-token.utils.js";

/**
 * @desc Login User
 * @route Post /api/v1/users/login
 * @access public
 
 */

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  res.send("Auth user");
};

/**
 * @desc Register User
 * @route Post /api/v1/users
 * @access public
 
 */

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exits. Proceed to login");
  }

  const user = await UserModel.create({ name, email, password });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

/**
 * @desc Logout User
 * @route Post /api/v1/users/logout
 * @access public
 */

const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    message: "Logged out successfully",
  });
};

/**
 * @desc Get user profile
 * @route Get  /api/v1/users/profile
 * @access private
 */

const getUserProfile = async (req, res) => {
  res.send("get user profile");
};

/**
 * @desc update user profile
 * @route Put  /api/v1/users/profile
 * @access public
 */

const updateUserProfile = async (req, res) => {
  res.send("Update user profile");
};

/**
 * @desc get all users
 * @route Get /api/v1/users
 * @access private/admin
 */

const getUsers = async (req, res) => {
  res.send("Get all Users");
};

/**
 * @desc Get user by ID
 * @route Get /api/v1/users/:id
 * @access private/admin
 */

const getUserById = async (req, res) => {
  res.send("Get user by id");
};

/**
 * @desc delete user
 * @route Delete /api/v1/users/:id
 * @access private/admin
 */

const deleteUser = async (req, res) => {
  res.send("Delete User");
};

/**
 * @desc update user
 * @route Put /api/v1/users/:id
 * @access private/admin
 */

const upadateUser = async (req, res) => {
  res.send("update user");
};

export {
  loginUser,
  logoutUser,
  deleteUser,
  getUserProfile,
  getUsers,
  updateUserProfile,
  registerUser,
  getUserById,
  upadateUser,
};
