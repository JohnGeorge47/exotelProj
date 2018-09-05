import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import router from './route.js';
import morgan from 'morgan';
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a'
});
const app = express();
app.use(morgan('combined', { stream: accessLogStream }));
app.use(bodyParser.json());
app.use('/api', router);
export default app;
