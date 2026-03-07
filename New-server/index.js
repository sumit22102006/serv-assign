const express = require('express')
const mongoose  = require('mongoose');
const app = express();
const port = 3000;


// middlware 
app.use(express.json());


// ==================================================

// connnect with database 
mongoose.connect('mongodb+srv://kushawahyogesh93:12345@cluster0.j9tkecq.mongodb.net/Day7UserLab1?appName=Cluster0')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// ==================================================



// Today Class aobut schema validation  

// Define a schema and model for the data you want to store 
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// }
// );
// const User = mongoose.model('User', userSchema);   /// collection name will be users



// const userSchema = new mongoose.Schema({
//   name:{
//    type:String,
//    minlength:2
//   },
//   email:{
//     type:String,
//     required:true,
//     lowercase:true,
//     unique:true
//   },
//   password:{
//   type:String,
//    required:true,
//    minlength:6
//   }
// })

// const User = mongoose.model("User",userSchema)   // collection 


const userSchema = new mongoose.Schema({
  name:{
   type:String,
   required:[true,"Name is Required"],
   minlength:[2,"Name Muste be at lease 2 character"],
   trim:true
  },
  email:{
    type:String,
    required:[true,"Email is required"],
    lowercase:true,
    unique:true
  },
   password:{
   type:String,
   required:[true,"Password is required"],
   minlength:[6,"Password Muste be at lease 6 character"],
  },

  role:{
     type:String,
     enum:["Student","Mentor","Admin"],
     default:"Student"
  }
})

const User = mongoose.model("User",userSchema)












// Create a new user
// ==================================================
// Add a new user

app.post('/add-users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();                /// 
    res.status(201).send(user);
  }
    catch (err) {
    res.status(400).send(err);
  }
});

// ======

// Add bulk user 
app.post("/addmultipleusers",async (req,res)=>{
  try{
  const users = await User.insertMany(req.body);  // bulk post 
  res.json(users)
  } catch(err){
    res.status(400).send(err)
  }
})

//==================================================

// Get all users 
app.get('/get-users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
    } catch (err) {
    res.status(500).send(err);
    }
});

// ==================================================


// Get By Id 
app.get("/users/:id",async(req,res)=>{
  try{
    const user = await User.findById(req.params.id);
   res.json(user)
  }catch(err){
    res.status(500).send(err)
  }
})



//  Update Users 

app.put("/userupdate/:id",async(req,res)=>{
  const userId = req.params.id; 
  try {
    const Updateuser = await User.findByIdAndUpdate(userId,req.body,{new:true})
    res.json(Updateuser)
  } catch (error) {
    res.status(500).send(err)
  }
})

//  Delete User 

app.delete("/userdelete/:id",async(req,res)=>{
  try {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  res.json(deletedUser)
  } catch (err) {
  res.status(500).send(err)
  }
})




// ================================================


// Start the server 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
rhr-faxi-drr