const mongoose = require('mongoose')

// Function to delete user data from all collections
async function deleteUserFromAllCollections(tempId) {
    try {
        const collections = await mongoose.connection.db.collections();
        await Promise.all(collections.map(async (collection) => {
            await collection.deleteMany({ tempId });
        }));
        console.log('Data deleted from all collections');
    } catch (err) {
        console.error('Error deleting data from collections:', err);
    }
}

module.exports = deleteUserFromAllCollections