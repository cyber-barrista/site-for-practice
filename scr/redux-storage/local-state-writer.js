import fs from 'fs'

export const writeJSON = (path, obj = {}) => {
    try {
        fs.writeFileSync(path,JSON.stringify(obj))
    } catch (err) {
        console.error(err)
    }
}


export const readJSON = (path) => {
   try {
       return JSON.parse(fs.readFileSync(path))
   } catch (err) {
       console.error(err)
   }

}
