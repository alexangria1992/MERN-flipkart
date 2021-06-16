import mongoose from "mongoose"



const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@mern-flipkart.f41qt.mongodb.net/mern-flipkart?retryWrites=true&w=majority`

    try {
      await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
      console.log("Database Connected Successfully!!")
    } catch(error){
        console.log("Error:", error.message)
    }
  }
  
export default Connection