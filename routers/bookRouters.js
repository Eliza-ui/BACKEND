import * as Bookcontroller from '../controllers/BookController.js';
import express from 'express';

const bookRouter = express.Router();

bookRouter.get('/all', Bookcontroller.fetchBooks);
//bookRouter.post('new, Bookcontroller.createBook)

export default bookRouter;