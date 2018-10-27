var Folder = require('./models/folder');
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

// expose the routes to our app
module.exports = (app) => {

    // api ---------------------------------------------------------------------
    


// get all folders
app.get('/api/folders', (req, res) => {

    Folder.find({}, (err, folders) => {
        res.send(folders).status(200);
        console.log('ok /api/folders')
    })

});
// app.post('/api/folders/create', bodyParser.json(), (req, res) => {
//     console.log('ouuuuhouuuuu');
//     res.json(req.body)
// })
app.post('/api/folders/create', bodyParser.json(), (req, res) => {
    var newFolder = new Folder();
    newFolder.name = req.body.name;
    console.log(`value node : `, newFolder.name);

    newFolder.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// delete a todo
app.delete('/api/todos/:todo_id',(req, res) => {

    
});

// application -------------------------------------------------------------
app.get('*',(req, res) => {
    res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

};
