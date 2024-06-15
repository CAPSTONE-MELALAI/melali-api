const { predict } = require('../services/predict');

const predictRatings = async (req, res) => {
    const { userIds, tourismIds } = req.body;

    if (!userIds || !tourismIds || userIds.length !== 10 || tourismIds.length !== 10) {
        return res.status(400).json({ error: 'Invalid input. Please provide arrays of 10 integers for both userIds and tourismIds.' });
    }

    try {
        const model = req.models;
        const ratings = await predict(userIds, tourismIds, model);
        res.json(ratings.map(rating => Math.round(rating)));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    predictRatings,
};
