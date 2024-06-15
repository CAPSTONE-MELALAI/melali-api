const tf = require('@tensorflow/tfjs-node');

const predict = async (userIds, tourismIds, model) => {
    try {
        console.log('Starting prediction...');
        console.log('User IDs:', userIds);
        console.log('Tourism IDs:', tourismIds);

        if (!model) {
            throw new Error('Model is undefined');
        }

        const userInput = tf.tensor2d(userIds, [10, 1]);
        const tourismInput = tf.tensor2d(tourismIds, [10, 1]);

        console.log('User Input Tensor:', userInput.arraySync());
        console.log('Tourism Input Tensor:', tourismInput.arraySync());

        const predictions = model.predict([userInput, tourismInput]);
        const ratings = await predictions.array();

        console.log('Predictions:', ratings);

        const finalRatings = ratings.map(rating => rating[0]);
        console.log('Final Ratings:', finalRatings);

        return finalRatings;
    } catch (error) {
        console.log('Error in predict function:', error);
        throw error;
    }
};

module.exports = predict;
