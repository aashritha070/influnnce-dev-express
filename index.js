let express = require('express');
let app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//routes import
const authRoutes = require('./routes/authRoutes');
const authorRoutes = require('./routes/authorRoutes');
const blogAuthRoutes = require('./routes/blogAuthRoutes');
const blogRoutes = require('./routes/blogRoutes');
const tagRoutes = require('./routes/tagRoutes');

//middleware import
const authMiddleware = require("./middleware/authMiddleware")

dotenv.config();


const config = process.env;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('connnected to Mongo'))
  .catch((err) => console.log(err));


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");

app.use('/auth', authRoutes);
app.use('/author', authMiddleware, authorRoutes);
app.use('/blogAuth', authMiddleware, blogAuthRoutes);
app.use('/blog', blogRoutes);
app.use('/tags', authMiddleware, tagRoutes);

app.listen(config.PORT, () => {
  console.log('server listening on PORT', config.PORT);
});
