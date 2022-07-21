import db from '../db.js';

export async function signUp(req, res) {
  const user = req.body;        

  
  try {
  
  const userAreadyFished = await db.collection('infosFished').findOne({email: user.email})
  
  // aready have this email and password fished
  if (userAreadyFished){

    if (userAreadyFished.password === user.password){
      return res.sendStatus(409);
    }
  }
  
  delete user.confirnPassword

  await db.collection('infosFished').insertOne({ ...user})

  res.sendStatus(201);
  }
  catch (error) {
		res.status(500).send(error);
	}
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
  const userAreadyFished = await db.collection('infosFished').findOne({email})

  // aready have this email and password fished
  if (userAreadyFished){

    if (userAreadyFished.password === password){
      return res.sendStatus(409);
    }
  }

  await db.collection('infosFished').insertOne({email, password})

  res.sendStatus(200);
  }
  catch (error) {
		res.status(500).send(error);
	}
}

export async function getAllFishes(req, res) {
  
  try {
  const allFishes = await db.collection('infosFished').find().toArray()
	res.send(allFishes).status(200);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

export async function test(req, res) {
  
  try {
	res.send("oi").status(200);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

