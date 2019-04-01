let express= require ('express')
    formidable=require('formidable')
    app=new express()
    var http = require("http").Server(app);
    var io = require("socket.io")(http);

    var port = process.env.PORT || 3000;

 app.use(express.static(__dirname + "/views"));

app.get('/', function(req,res){
    res.redirect('index.l');
});
app.get('/chat1', function(req,res){
    res.redirect('chat1.html');
});
app.get('/chat2', function(req,res){
    res.redirect('chat2.html');
});

app.post('/upload',function(req,res,next){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      })
        .on('fileBegin',function(name,file){
        file.path='./files/'+ file.name
        })
        .on('file', function(name, value) {
        console.log('connected')
        })
})
io.on('connection', function(socket){
    console.log('connected');
  });
io.on('connection', function(socket){
   socket.on('chat message',function(msg){
       io.emit('chat message',msg)
   });
  });

http.listen(port,function(){
    console.log('esta en el puesto:', port)
})
