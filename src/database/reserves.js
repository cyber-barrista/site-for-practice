import  mongoose from 'mongoose'

const reserveShema = new mongoose.Schema(
    {
        eventDate: String,
        eventTime: String,
        quantity: Number,
        visitors: [
            {
                firstName: String,
                lastName: String
            }
        ],
        phone: String,
        email: String,
        status: String,
    },
    {
        versionKey: false
    }
)

const Reserve = mongoose.model('Reserve', reserveShema)

export default Reserve