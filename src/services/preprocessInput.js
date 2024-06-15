// const tf = require('@tensorflow/tfjs-node');
// const { tourismId } = require('../utils/constants');
// const { predictController } = require('../controllers/predictController');

// function prepareInput() {
//     try {
//         const userId = predictController.userIdArray;
//         const placeId = tourismId.tourismId;
//         // Memastikan userIdArray adalah array
//         if (!Array.isArray(userId)) {
//             throw new Error('userIdArray harus berupa array');
//         }

//         // Memastikan setiap elemen di dalam userIdArray adalah bilangan bulat
//         for (let i = 0; i < userId.length; i++) {
//             if (typeof userId[i] !== 'number' || !Number.isInteger(userId[i])) {
//                 throw new Error('Setiap elemen dalam userIdArray harus merupakan bilangan bulat');
//             }
//         }

//         // Buat tensor untuk userInput dari userIdArray
//         const userInput = tf.tensor2d(userId, [userId.length, 1]);

//         // Buat tensor untuk tourismInput dari tourismId
//         const tourismInput = tf.tensor2d(placeId, [tourismId.length, 1]);

//         console.log('Prepared input:', { userInput, tourismInput });
//         return { userInput, tourismInput };
//     } catch (error) {
//         console.error('Error preparing input:', error);
//         throw error;
//     }
// }

// module.exports = {
//     prepareInput,
// };
