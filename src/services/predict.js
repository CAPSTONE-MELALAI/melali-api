const tf = require('@tensorflow/tfjs-node');
const loadModel = require('./loadModel');

let modelPromise;

// Function to get model instance (lazy initialization)
async function getModel() {
    if (!modelPromise) {
        modelPromise = loadModel();
    }
    return modelPromise;
}

// Function to perform prediction
async function predict(tourismInput, userInput) {
    const model = await getModel();

    // Convert input to tensors
    const tourismInputTensor = tf.tensor2d([[parseFloat(tourismInput)]]);
    const userInputTensor = tf.tensor2d([[parseFloat(userInput)]]);

    // Perform prediction
    const prediction = await model.predict([tourismInputTensor, userInputTensor]).data();
    
    return prediction[0]; // Assuming output is a single value
}

module.exports = predict;
