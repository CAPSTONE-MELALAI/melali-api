const tf = require('@tensorflow/tfjs-node');
const process = require('process');

async function loadModel() {
    const model = await tf.loadGraphModel(process.env.MODEL_URL);
    return model;
}

module.exports = loadModel;
