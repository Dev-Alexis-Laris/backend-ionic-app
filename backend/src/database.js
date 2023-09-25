const mongoose = require('mongoose');


//mongodb://localhost:27017

mongoose.connect('mongodb://0.0.0.0:27017/projectDMM',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));