const express = require('express');
const cors = require('cors');
const path = require("path");



const app = express();





app.use(express.json());
app.use(cors());
const {getData, createProduct, deleteData} = require('./controller')

app.post('/api/data', createProduct)
app.get('/api/data', getData)
app.delete('/api/data/:id', deleteData)


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/resume.html'));
});
app.get('/fun.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/fun.html'));
});
app.get('/references.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/references.html'));
});
app.get('/resume.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/resume.html'));
});
app.get('/experience.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/experience.html'));
});
app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/contact.html'));
});
app.get('axios', (req, res) => {
  res.sendFile(path.join(__dirname, '../axios'));
});
app.get('../index.css', (res,req) => {
  res.sendFile(path.join(__dirname, '../index.css'));
});
app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.js'));
});
app.get('/controller.js', (res,req) => {
  res.sendFile(path.join(__dirname, './templates/controller.js'));
});
app.get('/db.json', (res,req) => {
  res.sendFile(path.join(__dirname, './templates/db.json'));
});
app.get('/about.html', (res,req) => {
  res.sendFile(path.join(__dirname, '../templates/about.html'));
});
app.get('/projects.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../templates/projects.html'));
});
app.get('/pay.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../templates/pay.html'));
});
app.get('/pc.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../templates/pc.html'));
});
app.get('/phones.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../templates/phones.html'));
});
app.get('/processors.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../templates/processors.html'));
});
app.get('/sell.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../templates/sell.html'));
});
app.get('/vr.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../templates/vr.html'));
});
app.get('/interests.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../templates/interests.html'));
});
app.use(express.static("."));


const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
  });
