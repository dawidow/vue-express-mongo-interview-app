require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

const questions = require('./routes/api/questions');

app.use('/api/questions', questions);

if(process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + '/public/'));


}

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}.`);
});