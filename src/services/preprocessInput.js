const tf = require('@tensorflow/tfjs-node');
const { tourismId } = require('../utils/constants');

function prepareInput(userIdArray) {
    try {
        // Memastikan userIdArray adalah array
        if (!Array.isArray(userIdArray)) {
            throw new Error('userIdArray harus berupa array');
        }

        // Memastikan setiap elemen di dalam userIdArray adalah bilangan bulat
        for (let i = 0; i < userIdArray.length; i++) {
            if (typeof userIdArray[i] !== 'number' || !Number.isInteger(userIdArray[i])) {
                throw new Error('Setiap elemen dalam userIdArray harus merupakan bilangan bulat');
            }
        }

        // Buat tensor untuk userInput dari userIdArray
        const userInput = tf.tensor2d(userIdArray, [userIdArray.length, 1]);

        // Buat tensor untuk tourismInput dari tourismId
        const tourismInput = tf.tensor2d(tourismId, [tourismId.length, 1]);

        console.log('Prepared input:', { userInput, tourismInput });
        return { userInput, tourismInput };
    } catch (error) {
        console.error('Error preparing input:', error);
        throw error;
    }
}

module.exports = {
    prepareInput,
};
