var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

var transporter  



router.get('/', function(req, res){

	res.json({message: "hooray! welcome to my app!"});

});

router.post('/sendemail', function(req,res){
	var email = req.body.email;
	var name = req.body.name;

	nodemailer.createTestAccount(function(err,account){
 transporter = nodemailer.createTransport({
	host:'smtp.gmail.com',
	port:587,
	secure:false,
	auth:{
		user :"wanmuz.ada@gmail.com",
		pass: "wbzsseonkjrdkrpm"
	}
	})

 var mailOptions = {
		from: '"Wan Muzaffar" <wanmuz.ada@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Hello '+name, // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body

    }

	transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return res.json(error);
        }
		res.json({message:"sending email to "+name+ " at "+email});
    	});
	
	})

	
	

	})

app.use('/api', router);

app.listen(port);

console.log('Magic happens on port '+port);