const express = require('express');
const path = require('path');


const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const rootdir = require('./util/path');
const errorRoutes = require('./routes/404');

app.use(express.static(path.join(__dirname,'public')));
app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(errorRoutes);



app.listen(3000);




