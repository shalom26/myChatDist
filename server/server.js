/**
 * Created by Shalom on 02/01/2017.
 */
const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let Promise = require('bluebird');
let Schema = mongoose.Schema;


mongoose.Promise = Promise;

app.use(bodyParser.json());


app.get('/', function(request, response) {
    response.sendFile('/index.html',{root:__dirname + '/../chat/dist'});
});

mongoose.connect('mongodb://shalom26:seventy6@ds155028.mlab.com:55028/chat');

var db = mongoose.connection;

var userSchema = new Schema({
    name:String,
    avatar:Object,
    date:Date
});

var msgSchema = new Schema({
    msg:String,
    user:String,
    avatarUrl:String,
    date:Date
});

var User =  mongoose.model('User',userSchema);
var Msg  = mongoose.model('msg',msgSchema);



db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', function() {
    // we're connected!

    app.get('/msg',(req,res)=>{
        Msg.find().exec().then(data=>{
            res.json(data);
        });
    });


    app.post('/msg',(req,res)=>{
        var msg = new Msg(req.body);
        console.log(msg);
        msg.save()
            .then(data=>{
                res.json(data)
            })
            .catch(error=>{
                console.log(error)
        });
    });

    app.post('/login',(req,res)=>{
        var user = new User();

        user.name = req.body.name;
        user.avatar = req.body.avatar;
        user.date =  Date.now();

        user.save((error)=>{
            if(error)console.log(error);
            res.json(req.body)
        });
    });

    app.listen(3800,()=>{
        console.log(`Listening on port 3800`);
    });

});



