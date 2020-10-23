const express=require('express');
const { dirname } = require('path');
const path=require('path');
mongoose.connect('mongodb://localhost/classroom',{ useNewUrlParser: true,useUnifiedTopology: true  });

app.use(connectFlash());

const app=express();

const mongoStore=connectMongo(expressSession);

app.use(expressSession({
    secret:'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))

app.use(express.static('public'));
app.use('*',(req,res,next)=>{
    edge.global('auth',req.session.userID)
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const createPostController=require('./controllers/createPost');

const homePageController=require('./controllers/homePage');

const storePostController=require('./controllers/storePost');

const getPostController=require('./controllers/getPost');

const createUserController=require('./controllers/createUser');

const storeUserController=require('./controllers/storeUser');

const loginController=require('./controllers/login');

const loginUserController=require('./controllers/loginUser');

const logoutController=require('./controllers/logout');


const storePost=require('./middleware/storePost');

const auth=require('./middleware/auth');

const redirectIfAuthenticated=require('./middleware/redirectIfAuthenticated');


app.use('/posts/store',storePost);
//app.use('/posts/new',auth);
app.get('/',homePageController);

app.get('/auth/register',redirectIfAuthenticated,createUserController);

app.get('/auth/login',redirectIfAuthenticated,loginController);

app.get('/auth/logout',auth,logoutController);

app.post('/users/login',redirectIfAuthenticated,loginUserController);

app.post('/users/register',redirectIfAuthenticated,storeUserController);

app.get('/posts/new',auth,createPostController);

app.post('/posts/store',auth,storePost,storePostController);

app.get('/post/:id',getPostController);

app.use((req,res)=>res.render('not-found'));

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views','login.html'));
})
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views','signup.html'));
})
app.use('/',(req,res)=>{
    res.send('hello');
})


const port=3000;
app.listen(port,()=>{console.log(`app is running on port ${port}`)});