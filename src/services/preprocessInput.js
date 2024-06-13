const tf = require('@tensorflow/tfjs-node');

function preprocessInput(location, category, cost, foodHalal) {
    // Assume inputs are integers corresponding to embedding indices
    const locationTensor = tf.tensor2d([location], [1, 1]);
    const categoryTensor = tf.tensor2d([category], [1, 1]);
    const costTensor = tf.tensor2d([cost], [1, 1]);
    const foodHalalTensor = tf.tensor2d([foodHalal], [1, 1]);

    // Combine tensors into a single input tensor
    const inputTensor = tf.concat([locationTensor, categoryTensor, costTensor, foodHalalTensor], 1);

    return inputTensor;
}

module.exports = preprocessInput;
