// // const Users = require("../models/UserModel.js");
// const { FireStore } = require("@google-cloud/firestore");
// const argon2 = require("argon2");

// const firestore = new FireStore();
// const 

// // Mendapatkan semua pengguna
// const getUsers = async (req, res) => {
//     try {
//         const response = await Users.findAll({
//             attributes: ['id', 'username', 'email', 'phoneNumber']
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

// // Mendapatkan pengguna berdasarkan ID
// const getUserById = async (req, res) => {
//     try {
//         const response = await Users.findOne({
//             attributes: ['id', 'username', 'email', 'phoneNumber'],
//             where: {
//                 id: req.params.id
//             }
//         });
//         if (!response) return res.status(404).json({ msg: "User tidak ditemukan" });
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

// // Membuat pengguna baru
// const createUser = async (req, res) => {
//     const { username, email, password, confPassword, phoneNumber } = req.body;
//     if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
//     try {
//         const hashPassword = await argon2.hash(password);
//         await Users.create({
//             username,
//             email,
//             password: hashPassword,
//             phoneNumber,
//         });
//         res.status(201).json({ msg: "Register Success" });
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// }

// // Memperbarui pengguna
// const updateUser = async (req, res) => {
//     try {
//         const user = await Users.findOne({
//             where: {
//                 id: req.params.id
//             }
//         });
//         if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

//         const {
//             username,
//             email,
//             password,
//             confPassword,
//             phoneNumber
//         } = req.body;

//         let hashedPassword = user.password;
//         if (password && confPassword) {
//             if (password === confPassword) {
//                 hashedPassword = await argon2.hash(password);
//             } else {
//                 return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
//             }
//         }

//         await Users.update({
//             username,
//             email,
//             password: hashedPassword,
//             phoneNumber
//         }, {
//             where: {
//                 id: user.id
//             }
//         });

//         res.status(200).json({ msg: "User Updated" });
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// }

// // Menghapus pengguna
// const deleteUser = async (req, res) => {
//     try {
//         const user = await Users.findOne({
//             where: {
//                 id: req.params.id
//             }
//         });
//         if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

//         await Users.destroy({
//             where: {
//                 id: user.id
//             }
//         });
//         res.status(200).json({ msg: "User Deleted" });
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// }

// module.exports = {
//     getUsers,
//     getUserById,
//     createUser,
//     updateUser,
//     deleteUser
// };