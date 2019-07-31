import mongoose from 'mongoose'

const dishShema = new mongoose.Schema(
    [{
        _id: String,
        name: String,
        smallDescription: String,
        fullDescription: String,
        recipes: [
            {
                _id: String,
                ingredient: String,
                amount: String,
                unit: String,
            }
        ],
        urlOfImage: String,
    }],
    {
        versionKey: false
    }
)

const Dish = mongoose.model('Dish',dishShema)

export default Dish