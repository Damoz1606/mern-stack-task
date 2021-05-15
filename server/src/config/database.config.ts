import mongoose from 'mongoose';
import config from './config';

const URL = `mongodb://${config.MONGO_HOST}/${config.MONGO_URL}`;

mongoose.connect(URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(res => {console.log(`Database is connected to: ${res.connection.name}`)})
.catch(error => {console.log(error)});