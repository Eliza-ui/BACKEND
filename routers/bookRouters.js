import * as Bookcontroller from '../controllers/BookController.js';
import express from 'express';

const bookRouter = express.Router();

bookRouter.get('/all', Bookcontroller.fetchBooks);
bookRouter.post('/new', Bookcontroller.createbook)
bookRouter.put('/edit/:bookId', Bookcontroller.editBook);
bookRouter.delete('/delete/:bookId', Bookcontroller.deleteBook);


export default bookRouter;