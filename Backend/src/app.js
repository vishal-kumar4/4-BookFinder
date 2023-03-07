const express = require("express");
const app = express();
const port = 8000;
const jwt = require('jsonwebtoken');
const jwt_secret = 'bcsakjmcx555d5'

app.use(express.json())
var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('../db/conn.js')
let bdata=require('../src/a.json')

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// let bdata = require('./data.json')
// console.log(bdata)


const datab = require('../models/data.js')
const Detail = datab.Detail
const Libtail = datab.Libtail
app.get('/', (req, res) => {
    res.send("hello");
})

// app.post('/post', async (req, res) => {
//     // console.log(req.body)
//     const user = await Detail.findOne({ email: req.body.email })
//     if (user) {
//         return res.json({ status: 'user already exists' })
//     }
//     else {
//         const newUser = new Detail({
//             Name: req.body.username,
//             email: req.body.email,
//             password: req.body.pass
//         });
//         const registered = await newUser.save();
//         return res.json({ status: 'signup success' })
//     }
// })


// app.post('/post_log', async (req, res) => {
//     // console.log(req.body)
//     const email_l = req.body.email_log
//     const password_l = req.body.pass_log

//     const user = await Detail.findOne({ email: email_l })
//     // console.log(user)
//     if (!user) {
//         return res.json({ status: 'invalid', error: 'user not found' })
//     }
//     console.log(user)
//     if (password_l === user.password) {
//         const token = jwt.sign({ email_l }, jwt_secret);
//         if (res.status(201)) {
//             return res.json({ status: 'ok', data: token })
//         }
//         else {
//             return res.json({ error: "error" })
//         }

//     }
//     else {
//         return res.status(400).send({ error: 'invalid data' })
//     }




// })


app.post('/postliblog', async (req, res) => {
    // console.log(req.body)
    const email_l = req.body.email
    const password_l = req.body.pass
    const libname_l = req.body.libname
    const regid_l = req.body.regid

    const user = await Libtail.findOne({ Email: email_l })
    console.log(email_l)
    // console.log(user)
    if (!user) {
        return res.json({ status: 'invalid', error: 'user not found' })
    }
    console.log(user)
    if (password_l === user.Password && libname_l==user.Name && regid_l==user.Regid) {
        const token = jwt.sign({ email_l }, jwt_secret);
        if (res.status(201)) {
            return res.json({ status: 'ok', data: token })
        }
        else {
            return res.json({ status: 'invalid', error: "invalid details" })
        }

    }
    else {
        return res.status(400).send({ status: 'invalid',error: 'invalid details' })
    }




})

app.post('/postlib', async (req, res) => {
    // console.log(req.body)
    const user = await Libtail.findOne({ Email: req.body.email })
    if (user) {
        return res.json({ status: 'Library already exists' })
    }
    else {
        const newUser = new Libtail({
            Regid: req.body.regid,
            Name: req.body.libname,
            Area: req.body.area,
            Phone: req.body.phone,
            Email: req.body.email,
            Password: req.body.pass,
            Books: bdata
        });
        const registered = await newUser.save();
        return res.json({ status: 'signup success' })
    }
})


app.get('/authorizedLib',async(req,res)=>{
    console.log('hs')
    // const user = await Libtail.find({Regid:req.params.id})
    // res.send(user)
})

app.post('/sbybname', async (req, res) => {
    // console.log(req.body)
    //by book name
    const user = await Libtail.find()
    if (user) {
        let b=[]
        let g=0
        for (let i in user) {
            for (let j in user[i]["Books"]) {
                if (j == req.body.bname) {
                    let a = user[i]["Books"][j]
                    a['bookname'] = j
                    a['libname'] = user[i]["Name"]
                    // a['city']=user[i]["City"]
                    a['area']=user[i]["Area"]
                    b.push(a)
                    // g=g+1
                    
                    // return res.json({ status: 'success', data: a })
                }
            }
        }
        console.log(b)
        if(isEmpty(b)=== false){
            // b = JSON.stringify(b)
            // console.log(b)
            return res.json({ status: 'success', data: b })
        }
        else{
            return res.json({ status: 'no data found' })
        }
    }
    return res.json({ status: 'no data found' })

})

app.post('/sbyauth', async (req, res) => {
    // console.log(req.body)
    //by author name
    const user = await Libtail.find()
    if (user) {
        let b=[]
        let g=0
        for (let i in user) {
            for (let j in user[i]["Books"]) {
                if (user[i]["Books"][j]["author"] === req.body.authname) {
                    // console.log(user[i]["Books"][j],j)
                    // console.log(user[i]["Name"])
                    let a = user[i]["Books"][j]
                    a['bookname'] = j
                    a['libname'] = user[i]["Name"]
                    // a['city']=user[i]["City"]
                    a['area']=user[i]["Area"]
                    b.push(a)
                    
                    
                }
            }
        }
        console.log(b)
        if(isEmpty(b)=== false){
            // b = JSON.stringify(b)
            console.log(b)
            return res.json({ status: 'success', data: b })
        }
        else{
            return res.json({ status: 'no data found' })
        }
    }
    return res.json({ status: 'no data found' })
}


)






app.post('/sbycity', async (req, res) => {
    // console.log(req.body)
    //by author name
    // {"author":"param","copies":5,"bookname":"hello","libname":"lala"}
    const user = await Libtail.find()
    if (user) {
        let b=[]
        let g=0
        for (let i in user) {
            if(user[i]["Area"]===req.body.city){
                for (let j in user[i]["Books"]){
                    let a = user[i]["Books"][j]
                    a['bookname'] = j
                    a['libname'] = user[i]["Name"]
                    // a['city']=user[i]["City"]
                    a['area']=user[i]["Area"]
                    b.push(a)
                }
            }
        }
        if(isEmpty(b)=== false){
            // b = JSON.stringify(b)
            console.log(b)
            return res.json({ status: 'success', data: b })
        }
        else{
            return res.json({ status: 'no data found' })
        }
    }
    return res.json({ status: 'no data found' })
}


)

app.listen(port, () => {
    console.log(`running on port ${port}`);
})