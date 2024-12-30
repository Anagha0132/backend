const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://anagha123:Anagha123@cluster0.sta3x.mongodb.net/Providence?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDb!");
    })
        .catch ((err)=> {
    console.log(err);
    
})
