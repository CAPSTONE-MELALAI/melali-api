const argon2 = require("argon2");
const { firestore } = require("../services/storeData");
const jwtUtils = require("../utils/jwtUtils");
const process = require("process");

const usersCollection = firestore.collection("users");
const secretKey = process.env.SECRET_KEY;
console.log("Secret Key:", process.env.SECRET_KEY);


const signup = async (req, res) => {
  const { username, email, password, confPassword, phoneNumber } = req.body;

  if (password !== confPassword) return res.status(400).json({ success: false, message: "Password dan Confirm Password tidak cocok", data: {} });

  try {
    const emailQuery = await usersCollection.where("email", "==", email).limit(1).get();
    if (!emailQuery.empty) {
      return res.status(400).json({ success: false, message: "Email sudah digunakan", data: {} });
    }

    const hashPassword = await argon2.hash(password);
    const now = new Date();
    const newUserRef = usersCollection.doc();
    await firestore.runTransaction(async (transaction) => {
      transaction.set(newUserRef, {
        uid: newUserRef.id,
        username,
        email,
        password: hashPassword,
        phoneNumber,
        age: null,
        gender: null,
        createdAt: now,
        updatedAt: now,
      });
    });

    const token = jwtUtils.generateToken({ email: email }, secretKey); // Menggunakan secretKey

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token: token,
        uid: newUserRef.id,
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        createdAt: now,
        updatedAt: now,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message, data: {} });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Starting login process for email:", email);

    const userQuery = await usersCollection.where("email", "==", email).limit(1).get();
    if (userQuery.empty) {
      return res.status(401).json({ success: false, message: "Email atau password salah", data: {} });
    }

    const user = userQuery.docs[0].data();
    const passwordMatch = await argon2.verify(user.password, password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: "Email atau password salah", data: {} });
    }

    const token = jwtUtils.generateToken({ email: email });
    console.log("Token generated for email:", email);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token: token,
        uid: user.uid,
        email: user.email,
        username: user.username,
        phoneNumber: user.phoneNumber,
      },
    });
  } catch (error) {
    console.error("Error during login process:", error);
    if (error.code === "permission-denied") {
      return res.status(403).json({ success: false, message: "Permission denied", data: {} });
    } else {
      return res.status(500).json({ success: false, message: "Firestore error: " + error.message, data: {} });
    }
  }
};


module.exports = {
  login,
  signup,
};
