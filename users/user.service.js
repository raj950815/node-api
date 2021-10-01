const db = require('helpers/db');
const User = db.User;

module.exports = {
    getById,
};

async function getById(id) {
    return await User.findById(id);
}
