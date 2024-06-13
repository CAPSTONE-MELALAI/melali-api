const predict = require('../services/predict');

async function predictHandler(req, res) {
    const { location, category, cost, foodHalal } = req.body;

    try {
        const prediction = await predict(location, category, cost, foodHalal);
        res.status(200).json({
            status: 'success',
            data: {
                prediction
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error making prediction',
            error: error.message
        });
    }
}

module.exports = { predictHandler };
