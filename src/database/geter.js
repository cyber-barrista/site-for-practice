import mongo from './credentials'
import mongoose from 'mongoose'

const getState = async (reserveModel, dishModel) => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('bufferCommands', false);


    mongoose.connect(mongo.development.connectionString)
        .then(() => {
            console.log("Connected to database!")
        })
        .catch((error) => {
            console.log("Connection failed!", error)
        });

    var reserves, dishes

    await reserveModel.find(
        {},
        (error, result) => {
            if (error) {
                console.error(error)
            } else {
                reserves = result.slice()
            }
        }
    )

    await dishModel.find(
        {},
        (error, result) => {
            if (error) {
                console.error(error)
            } else {
                dishes = result.slice()
            }
        }
    )

    return {
        reserves,
        dishes
    }


}


export default getState