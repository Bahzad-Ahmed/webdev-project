const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let inbox = [
{id: "collegue12@examplemail.com", name: "collegue1", subject: "Example", datesent: "20th January",data:"HELLO"},
{id: "collegue13333@examplemail.com", name: "collegue1", subject: "Example", datesent: "20th January",data:"HELLO"}
];
let outbox=[    
    {id: "c001@con.com", name: "Contact out", subject: "Contact 001 des", datesent: "20th January",data:"HELLO"}
];

let spam=[
    {id: "freelotterytickets@gmail.com", name: "KSJD123", subject: "Claim your prize", datesent: "20th January",data:"HELLO"}
];
let deleted=[
 {id: "c002@con.com", name: "Contact del", subject: "description", datesent: "20th January",data:"HELLO"}
];

let selected= {};
let selectedfrom={};

app.get('/get-inbox', (req, res) => {
    res.send(inbox);
})


app.get('/getselectedfrom', (req, res) => {
    res.send(selectedfrom);
})
app.get('/get-outbox', (req, res) => {
    res.send(outbox);
  })
app.get('/get-spam', (req, res) => {
    res.send(spam);
  })
app.get('/get-trash', (req, res) => {
    res.send(deleted);
})
app.get('/get-select', (req, res) => {
    res.send(selected);
})

app.post('/from-inbox-to-trash', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    inbox = inbox.filter(obj => (obj.id !== data.id || obj.data!== data.data || obj.datesent !== data.datesent));
    deleted.push(data);
    res.send(inbox);
})

app.post('/from-inbox-to-spam', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    inbox = inbox.filter(obj => (obj.id !== data.id || obj.data!== data.data || obj.datesent !== data.datesent));
    spam.push(data);
    res.send(inbox);
})

app.post('/from-spam-to-trash', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    spam = spam.filter(obj => (obj.id !== data.id || obj.data!== data.data || obj.datesent !== data.datesent));
    deleted.push(data);
    res.send(inbox);
})
app.post('/postinbox', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    inbox.push(data);
    res.send({message:'success'});
})

app.post('/postoutbox', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    outbox.push(data);
    res.send({message:'success'});
})

app.post('/postspam', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    spam.push(data);
    res.send({message:'success'});
})

app.post('/posttrash', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    deleted.push(data);
    res.send({message:'success'});
})


app.post('/prem-delete-trash', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    deleted = deleted.filter(obj => (obj.id !== data.id || obj.data!== data.data || obj.datesent !== data.datesent));
    res.send({message:'success'});
  })

  
app.post('/prem-delete-outbox', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    outbox = outbox.filter(obj => (obj.id !== data.id || obj.data!== data.data || obj.datesent !== data.datesent));
    res.send({message:'success'});
  })

app.post('/post-select', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    selected = data;
    res.send({message:'success'});  
  })

  app.post('/post-select-from', (req, res) => {
    let data = req.body;
    console.log('req data',data);
    selectedfrom = data;
    res.send({message:'success'});  
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})