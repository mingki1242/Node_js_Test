/*
const express = require('express');
const morgan = require('morgan');
const app = express(); // top-level function. Express application을 생성
const cookieParser = require('cookie-parser');
const session = require('express-session');

const indexRouter = require('./Routes/index');
const userRouter = require('./Routes/user');

app.use('/', indexRouter);
app.use('/user', userRouter);

const DB = [];

app.set('port', 3000); // app.set(name, value), app.get(name)
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public")) //폴더안 접근
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.get('/', function(req, res, next) { // Access the session as req.session
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})

/!*app.get('/', (req, res) => { // app.get(path, callback)
    console.log('Cookies: ', req.cookies);
    res.cookie('name' , 'mkpark')
    res.json(DB); // res.send(body)
});
app.post('/',(req , res) => {
    DB.push(req.body);
    res.redirect('/');
});
app.get('/:id' , (req , res) => {
    const record = DB.find(x => x.id === req.params.id)
    res.json(record)
});

app.put('/:id' , (req , res) => {
    const index = DB.findIndex(x => x.id === req.params.id)
    DB[index] = req.body
    res.redirect('/')
});

app.delete('/:id' , (req , res) => {
    const idx = DB.find(x => x.id === req.params.id)
    DB.splice(idx , 1);
    res.redirect('/')
});*!/
app.listen(app.get('port'), () => { // app.listent(port, callback)
    console.log(app.get('port'), '번 포트에서 대기 중');
});*/
