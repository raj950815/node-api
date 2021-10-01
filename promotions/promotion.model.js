const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    event_title: { type: String, required: true },
    event_desc: { type: String, required: true },
    start_date: { type: Date, required: true },
    banner_image: { type: String, required: true },
    rule_image: { type: String, required: true },
    reward_image: { type: String, required: true },
    category_id: { type: Number, type: Schema.Types.ObjectId, ref: 'category_id', required: true, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Promotion', schema);
