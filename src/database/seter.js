import mongo from './credentials'
import mongoose from 'mongoose'

const setState = (obj, reserveModel, dishModel) => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('bufferCommands', false);


    mongoose.connect(mongo.development.connectionString)
        .then(() => {
            console.log("Connected to database!")
        })
        .catch((error) => {
            console.log("Connection failed!", error)
        });

    const setOne = (objOne, model) => {
        new model(objOne).save(
            err => {
                if (err) {
                    return console.error(err)
                } else {
                    console.log('saved')
                }
            }
        )
    }

    obj.reserves.forEach(
        (item, i, arr) => setOne(item, reserveModel)
    )
    obj.dishes.forEach(
        (item, i, arr) => setOne(item, dishModel)
    )
}

export default setState