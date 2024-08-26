const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo-routes');



const app = express();
app.use(express.json());

const dbURI = 'mongodb+srv://Aderemi123:test1234@Cluster0.vbcmw.mongodb.net/Remi-tuts?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/todo-routes', todoRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));