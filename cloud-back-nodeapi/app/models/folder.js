var mongoose = require('mongoose');

module.exports = mongoose.model('Folder', {
    id: String,
    id_parent: String,
    name: String
});