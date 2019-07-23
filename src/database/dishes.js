import mongoose from 'mongoose'

const dishShema = new mongoose.Schema(
    {
        name: String,
        smallDescription: String,
        fullDescription: String,
        recipes: [
            {
                ingredient: String,
                amount: Number,
                unit: String,
            }
        ],
        urlOfImage: String,
    },
    {
        versionKey: false
    }
)

const Dish = mongoose.model('Dish',dishShema)

export default Dish