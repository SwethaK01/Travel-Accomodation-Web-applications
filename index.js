var express=require("express");
var bodyParse=require("body-parser");
const stripe = require("stripe")("sk_test_51NzXxFSJNTLQYyrVDYAbFqxOrcB7OAHye4Ii7tJJJUm0TTVA2R4tZuvmh3qBVLDDY6BfP2cgRt9mbRkg8UxjoGeD00nbGekLQY");

var mongoose=require("mongoose");
var cost;
const path = require('path');
const app=express()
const ejs = require('ejs');

app.use(bodyParse.json())
app.use(express.static('public'))
app.use(bodyParse.urlencoded({
    extended:true
}))


mongoose.connect('mongodb://0.0.0.0:27017/travel',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;

db.on('error',()=> console.log("error in connecting database"));
db.once('open',()=> console.log("Connected to Database"));



app.post("/charge", async (req, res) => {
    
    const amount = cost; // 10 dollars in cents
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            payment_method_types: ['card'],
            amount: amount,
            currency: "inr",
            
            
        });
        
        console.log('transaction done Successfully');
    
        res.json({ client_secret: paymentIntent.client_secret });
        
    } catch (err) {
        console.log('transaction not done Successfully');
        res.status(500).json({ error: err.message });
    }
});


function getnum(startDate, endDate) {
  
    const date1 = new Date (startDate);
    const date2 = new Date (endDate);
  
    
    const oneDay = 1000 * 60 * 60 * 24;
  
    
    const diffInTime = date2.getTime () - date1.getTime ();
  
  
    const diffInDays = Math.round (diffInTime / oneDay);
    return diffInDays;
  }
  

app.post("/booking",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*5500;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})


app.post("/booking1",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*4900;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})


app.post("/booking2",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*3000;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})


app.post("/booking3",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*14000;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})




app.post("/booking5",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*8400;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})


app.post("/booking6",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*10400;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})


app.post("/booking7",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*6500;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})


app.post("/booking8",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*4500;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})


app.post("/booking9",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*7500;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})


app.post("/booking10",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*5000;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})


app.post("/booking11",(req,res)=> {

    var name =req.body.name;
    var email =req.body.email;
    var checkin =req.body.check;
    var checkout =req.body.checks;
 
    

    //return res.redirect("#");
    var a1=getnum(checkin,checkout);
    cost=a1*12000;
    

    var data={
        "name":name,
        "email":email,
        "checkin":checkin,
        "checkout":checkout,
        "numberofdays":a1,
        "Totalcost":cost
        
    }

    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("Booking Record inserted Successfully");
    });
    
    return res.redirect("stripe payment.html");
    
})





app.get('/dashboard', (req, res) => {
    // get all the booking records from the database
     db.collection('Booking').find({}).toArray((err, data) => { 
       if (err) throw err;
        // render the dashboard.html file and pass the data as a variable
         res.render('dashboard', { bookings: data });
        });
});


app.post("/adminlog", async (request, response) => {
    try {
        
        const username = request.body.username;
        const password = request.body.password;

        const usermail = db.collection('Admindetails').findOne({ email: username }, (err, res) => {
            
            if (err) throw err;
            if(res){
            if (res.password == password) {
                return response.redirect('admindash.html');
            }
            else {
                return response.redirect('adminlogin.html');
                             
            }
        }
        else {
            
            response.send("You haven't created the account on this Mail Id.Please enter the valid Mail Id or create an account.");
        }
        });

    }
    catch (error) {
        response.status(400).send("Invalid information❌");
    }

})
app.post("/login", async (request, response) => {
    try {
        //adding
        const username = request.body.username;
        const password = request.body.password;

        const usermail = db.collection('users').findOne({ email: username }, (err, res) => {
            
            if (err) throw err;
            if(res){
            if (res.password == password) {
                return response.redirect('home.html');
            }
            else {
                return response.redirect('login.html') ;  
            }
        }
        else {
            
            response.send("You haven't created the account on this Mail Id.Please enter the valid Mail Id or create an account.");
        }
        });

    }
    catch (error) {
        response.status(400).send("Invalid information❌");
    }

})



app.post("/submit_review",(req,res)=> {

    var review =req.body.review;
    var rating =req.body.rating;
   

    var data={
        "review":review,
        "rating":rating
       
    }

    db.collection('review data').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log("review Record insert Successfully");
    });

    return res.redirect("home.html");
    
})


app.post("/sign_up",(req,res)=> {

    var name =req.body.username;
    var email =req.body.email;
    var pass =req.body.password;
    var password =req.body.confirmPassword;

    var data={
        "name":name,
        "email":email,
        "pass":pass,
        "password":password
    }

    db.collection('users').findOne({ email: email }, (err, result) => {
        if (err) throw err;
        if (result)
         {
            // email exists
            res.send("This email has an account already.");
        }
        else
         {
            db.collection('users').insertOne(data,(err,collection)=>{
                if(err) throw err;
                console.log("Record insert Successfully");
             });
             return res.redirect("login.html");
            }
        });
    })


  app.post("/addhotel",(req,res)=> {
    var username=req.body.hotelname;
    var email =req.body.location;
    var firstname=req.body.cost;
    var lastname =req.body.rating;
    
        
    
    var data={
        "Hotelname":username,
        "Location":email,
        "Cost":firstname,
        "Rating":lastname
       

    }
    
    db.collection('Hoteldetails').insertOne( data, ( err , collection) => {

        if(err) throw err;
        console.log("Hotel added Successfully");
    });

    return res.redirect("admindash.html");
})

app.post("/pro_file",(req,res)=> {
    var firstname=req.body.fname;
    var lastname =req.body.lname;
    var email =req.body.email;
    var address =req.body.add;
    var state =req.body.state;
    var country =req.body.country;
    var Pincode =req.body.pin;
    var phone =req.body.phone;
        
    
    var data={
        "Firstname":firstname,
        "lastname":lastname,
        "email":email,
        "address":address,
        "state":state,
        "country":country,
        "Pincode":Pincode,
        "phno":phone

    }
    
    db.collection('User profile').insertOne( data, ( err , collection) => {

        if(err) throw err;
        console.log("Profile Record insert Successfully");
    });

    return res.redirect("home.html");
})

  
app.post("/adminsign",(req,res)=> {

    var name =req.body.username;
    var email =req.body.email;
    var pass =req.body.password;
    var password =req.body.confirmPassword;

    var data={
        "name":name,
        "email":email,
        "pass":pass,
        "password":password
    }

    db.collection('Admindetails').findOne({ email: email }, (err, result) => {
        if (err) throw err;
        if (result)
         {
            // email exists
            res.send("This email has an account already.");
        } else
        {
           db.collection('Admindetails').insertOne(data,(err,collection)=>{
               if(err) throw err;
               console.log("Record insert Successfully");
            });
            return res.redirect("Adminlogin.html");
           }
       });
    
})

app.get ("/",(request , response ) => {

    response.set({
        "Allow-access-Allow-Origin": '*'
    })

    return response.redirect("front_page.html");
    
}).listen(4000)