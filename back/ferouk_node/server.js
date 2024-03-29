const express= require('express');
const User = require('./models/user');
require('./config/connect');
const app = express();
app.use(express.json());

app.post('/add',(req , res)=>{
    data = req.body;
    usr = new User(data);
    usr.save()
            .then(
            (savedUser)=>{res.send(savedUser)}
            )
            .catch(
                (err)=>{
                res.send(err)
                }
            )
});
app.post('/add', async (req , res)=>{
try{
data = req.body;
usr = new User(data);
savedUser = await usr.save();
res.send(savedUser)
}catch (error){
    res.send(error)
}
})

app.get('/getall',(req,res)=>{
    User.find()
    .then(
(users)=>{
    res.send(users)
}
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
});

app.get('/all',async (req,res)=>{
   try{
     users= await User.find({age : 21});
     res.send(users)
    
   }catch (error){
    res.send(error)
   }
   
});

app.put('/update',()=>{
    console.log('update work');
});
app.delete('/delete',()=>{
    console.log('delete work');
});
app.listen(3000,()=>{
    console.log('service work');
});
