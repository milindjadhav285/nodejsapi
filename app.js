const express = require('express');
const app = express();
const port = 3000;
//const client = express().listen(port, ()=>console.log('connected to server:'+port));
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


app.use(cors());
app.use(bodyParser.json());

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send("we are on home");
});

app.listen(port, () => {
	console.log('connected to server: '+port)
	mongoose.connect(
		process.env.DB_Connection,{
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
		() => console.log('connected to DB'))
});

/*

mongoose.connect(
	process.env.DB_Connection,{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => console.log('connected to DB'))
*/

/*
app.listen(port, () => {
	console.log('connected to server: '+port);
	mongoose.connect(process.env.DB_Connection,
		{useNewUrlParser: true, useUnifiedTopology: true},
		(err) => {
			if (err) {
				throw err;
			}
			console.log('connected to DB');
		});
    
});
*/
