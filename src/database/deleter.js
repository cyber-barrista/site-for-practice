import mongoose from 'mongoose'
import mongo from './credentials'

const deleteState = (reserveModel, dishModel) => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('bufferCommands', false);


    mongoose.connect(mongo.development.connectionString)
        .then(() => {
            console.log("Connected to database!")
        })
        .catch((error) => {
            console.log("Connection failed!", error)
        });

    reserveModel.deleteMany(
        {},
        (error, result) => {
            if (error) {
                console.error(error)
            } else {
                console.log('all reserves is deleted')
            }
        }
    )

    dishModel.deleteMany(
        {},
        (error, result) => {
            if (error) {
                console.error(error)
            } else {
                console.log('all dishes is deleted')
            }
        }
    )

}

export default deleteState