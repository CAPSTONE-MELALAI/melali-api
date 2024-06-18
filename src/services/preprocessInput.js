function preprocessInput(userIds, tourismIds) {
    // Example of preprocessing: Convert array of strings to array of integers
    const processedUserIds = userIds.map(id => parseInt(id));
    const processedTourismIds = tourismIds.map(id => parseInt(id));

    return { processedUserIds, processedTourismIds };
}

module.exports = preprocessInput;