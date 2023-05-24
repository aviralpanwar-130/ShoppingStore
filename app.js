const express = require('express');
const path = require('path');


const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const rootdir = require('./util/path');

app.use(express.static(path.join(__dirname,'public')));
app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','404.html'));
})


app.listen(3000);




