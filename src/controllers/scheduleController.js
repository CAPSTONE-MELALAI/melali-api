const recommendationService = require('../services/predict');

exports.getSchedule = async (req, res) => {
    const { location, category, cost, foodHalal } = req.body;

    try {
        const schedule = await recommendationService(location, category, cost, foodHalal);
        res.status(200).json({
            success: true,
            data: {
                schedule
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error generating schedule',
            error: error.message
        });
    }
};
