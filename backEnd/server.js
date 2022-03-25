const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./app/models/user');
const bodyParser = require('body-parser');
const cors = require("cors");
const server = require('http').createServer();

// var corsOptions = {
//     origin: "http://localhost:8081"
// };
mongoose.connect('mongodb://localhost:27017/Management', function(err){
    if(err){
        console.log('not connected to db' + err);
    }
    else {
        console.log('Management (mongoDB) connected successfully');
    }
});

app.use(express.static("public"));
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.use(morgan('dev'));

// app.get("/", (req, res) => {
//     res.send('hello')
// })

app.use("/api", require('./app/routes/userRoutes'));

app.listen(port, ()=>{
    console.log('server is running on port');
})

// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "../../my-app/src", "index.html"));
//   });

// mongoose.connect("mongodb+srv://user_1:test1@cluster0.dbq8q.mongodb.net/User_Management_test2")




// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
// const Blog = require('./app/models/blog');


// const dbURI = 'mongodb+srv://user_1:test1@cluster0.dbq8q.mongodb.net/User_Management_test2?retryWrites=true&w=majority';
// mongoose.connect(dbURI)
//     .then((result)=> console.log('connected'))
//     .catch((err)=> console.log(err));






// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.get('/users', (req,res) => {
//     const user = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.get('/users', (req,res) => {
//     res.send('hello from users')

//     })
// });

// app.get('/home', function(req, res){
//     res.send('Hello World from home');
// })



//http://localhost:8000/users
// app.get('/users', function(req, res){
    
//     res.send('userspage');
// });
// app.post('/users', function(req, res){
//      res.send('testing users route');
//     let user =  new User({
//         username : req.body.username,
//         password : req.body.password,
//         email : req.body.email,
//     });
    
//     user.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
        // })

    // let user = new User({
    //     username: 'robot3',
    //     password: 'robot3',
    //     email: 'robo3@yahoo.com'
    // })
    // user.save()
    // .then((result) => {
    //                     res.send(result)
    //                 })
    //                 .catch((err) => {
    //                     console.log(err);
    //                 })
    
// });

// app.get('/users', (req,res) => {
//     const user = new User({
//         username : 'robot5',
//         password : 'robot4',
//         email : 'robot5@yahoo.com'
//     });
    
//         user.save()
//             .then((result) => {
//                 res.send(result)
//             })
//             .catch((err) => {
//                 console.log('usernama/pw/email already exits');
//                 res.send('usernama/pw/email already existed')
//             })
//     });

// app.listen(8000);





