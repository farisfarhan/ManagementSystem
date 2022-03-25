const express = require('express');
const router = express.Router();
const User = require("../models/user");
// const bodyParser = require('body-parser');

//
// router.get('/create', (req,res)=> {
//     res.send("create");
// })
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended:true}));
router.post('/userCreate', (req, res) => {
    var user = new User();
    user.username = req.body.username,
    user.password = req.body.password,
    user.email = req.body.email
    
    // console.log(user);
    user.save()
    .then(()=> 
    {
        console.log('saved');
        res.json(user);
    }
    )
    .catch((err)=> {
        console.log(err);
        res.send(err);
    });
    // res.send("created your user successfully")
})

router.get("/userGet", (req, res, next) => {
    User.find((err, docs) => {
        if (!err)
            res.send(docs);
        else 
            console.log("what happened in backend get??")
    }
    );
});

router.get("/userGet/:id", (req, res, next) => {
    const id = req.params.id;
    User.findById(id, (err, docs)=> {
        if (!err)
            res.send(docs);
        else 
            console.log("what happened in backend user id get??")
    })
});

router.put('/userUpdate/:id', (req, res) => {   
    User.findByIdAndUpdate(req.params.id, 
        { 
            $set: {username: req.body.username, password: req.body.password, email: req.body.email}
        }, 
        {
            new: true
        },
        function(err, updatedUser){
            if(err){
                res.send("Error updating user")
            }
            else{
                res.json(updatedUser);
            }
        }
        );

   })

module.exports = router;