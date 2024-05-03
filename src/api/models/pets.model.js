const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema ({
    name: {type: String, require: true},
    race: {type: String},
    age: {type: Number},
    chip: {type: Boolean},
    owner: {type: String}
},
    {
        collection: "pet"
    }
)
const Pet = mongoose.model("pet", petSchema)
module.exports = Pet;