const argon2 = require("argon2");
const { firestore } = require("../services/storeData");
const jwtUtils = require("../utils/jwtUtils");

const usersCollection = firestore.collection("users");

const signup = async (req, res) => {
  const { username, email, password, confPassword, phoneNumber } = req.body;

  if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });

  try {
    const emailQuery = await usersCollection.where("email", "==", email).limit(1).get();
    if (!emailQuery.empty) {
      return res.status(400).json({ msg: "Email sudah digunakan" });
    }

    const id = crypto.randomUUID();
    const hashPassword = await argon2.hash(password);
    await usersCollection.add({
      id: id,
      username,
      email,
      password: hashPassword,
      phoneNumber,
    });

    const token = jwtUtils.generateToken({ email: email });

    res.status(201).json({ msg: "Akun berhasil dibuat", token: token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userQuery = await usersCollection.where("email", "==", email).limit(1).get();
    if (userQuery.empty) {
      return res.status(401).json({ msg: "Email atau password salah" });
    }
    const user = userQuery.docs[0].data();
    const passwordMatch = await argon2.verify(user.password, password);
    if (!passwordMatch) {
      return res.status(401).json({ msg: "Email atau password salah" });
    }

    const token = jwtUtils.generateToken({ email: email });

    res.status(200).json({ msg: "Login berhasil", token: token });
  } catch (error) {
    if (error.code === "permission-denied") {
      return res.status(403).json({ msg: "Permission denied" });
    } else {
      return res.status(500).json({ msg: "Firestore error: " + error.message });
    }
  }
};

module.exports = {
  login,
  signup,
};
