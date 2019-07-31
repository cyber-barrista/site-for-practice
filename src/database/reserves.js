import  mongoose from 'mongoose'

const reserveShema = new mongoose.Schema(
    [{
        _id: String,
        eventDate: String,
        eventTime: String,
        quantity: String,
        visitors: [
            {
                _id: String,
                firstName: String,
                lastName: String
            }
        ],
        phone: String,
        email: String,
        status: String,
    }],
    {
        versionKey: false
    }
)

const Reserve = mongoose.model('Reserve', reserveShema)

export default Reserve