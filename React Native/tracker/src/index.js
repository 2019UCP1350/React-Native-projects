require("./models/User");
require("./models/tracks");
const express=require('express');
const mongoose=require('mongoose');
const authRoutes=require('./routes/authroutes');
const bodyParser=require('body-parser'); // module to convert the json data into javascript object
const mongoUri="mongodb+srv://admin:<password>@cluster0.najxd.mongodb.net/<dbname>?retryWrites=true&w=majority";
const reqAuth=require('./middlewares/reqAuth');
const trackRoutes=require('./routes/trackRoutes');
mongoose.connect(mongoUri,{         // creating a mongoose instance
	useNewUrlParser: true,			// these to are used inorder to avoid warnings
	useCreateIndex:true,			// there is a need to use this because the node.js driver 
	useUnifiedTopology: true ,		// has made some change in how to interpret mongodb instance string
});									// so in order tyo ensure both the thing work they had done this

mongoose.connection.on('connected',()=>{            // use to check if we are connected or not
	console.log('connected to mongo instance');
});

mongoose.connection.on('error',(err)=>{
	console.error('Error conneting monoogoose',err); // use to find the error
});

const app=express();			// creating an instance of express
app.use(bodyParser.json());
app.use(authRoutes);			// used to make all request handle to get tied to our main express application
app.use(trackRoutes);

app.get('/',reqAuth,(req,res)=>{ res.send(`Your email: ${req.user.email}`)});   // making API request 

app.listen(3000,()=>{ console.log("Listening on port 3000")}); // telling computer on which port to recieve the response
