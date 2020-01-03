const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get questions
router.get('/', async (req, res) => {
	const questions = await loadQuestionsColection();
	res.send(await questions.find({}).toArray());
})

// Add question
router.post('/', async (req, res) => {
	const questions = await loadQuestionsColection();
	await questions.insertOne({
		text: req.body.text,
		answer: req.body.answer,
		technology: req.body.technology,
		difficulty: req.body.difficulty
	});

	res.status(201).send();
});

// Delete question
router.delete('/:id', async (req, res) => {
	const questions = await loadQuestionsColection();
	await questions.deleteOne({
		_id: new mongodb.ObjectID(req.params.id)
	});

	res.status(200).send();
});

async function loadQuestionsColection() {
	const client = await mongodb.MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-s67az.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true
});

	return client.db('vue_interview_app').collection('questions');
}


module.exports = router;