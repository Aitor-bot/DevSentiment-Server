import Express from "express";
const router = Express.Router();

import { getAndInsertJavascriptTweets } from "../controllers/javascriptController.js";

router.get('/', (req, res) => {
    res.send('Hello World');
  });

router.get('/getAndInsertJavascriptTweets', (req, res) => {
    getAndInsertJavascriptTweets()
  });

export default router;