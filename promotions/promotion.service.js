const db = require('helpers/db');
const Promotion = db.Promotion;

module.exports = {
    getAll
};

async function getAll() {
    return await Promotion.find();
}
