import * as BookModel from '../models/bookmodel.js';

export const fetchBooks = async (req, res) => {
    try {
        const books = await BookModel.getAllBooks();
        res.status(200).json({success: true, Message: books});
    } catch (e){
        console.log(e);
        res.status(500).json({
            success: false, 
            message: 'Internal Server Error'

        })
    }
}

export const createbook = async (req, res) => {
    const { title, genre, status } = req.body;
    try{ 
        const insertId = await BookModel.insertbook (title, genre, status);
        res.status(201).json({ success: true, message : insertId})
    } catch (e){
        console.log(e)
        res.status(500).json({success : false, message : 'Internal Server Error'})
    }
}
export const editBook = async (req, res) => {
    const {title, genre, status} = req.body;
    const {bookId} = req.params;

    try{
        const updatedId = await BookModel.updateBook(title, genre, status, bookId);
        res.status(200).json({ success: true, message: updatedId});
    }catch(e){
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error"});
    }
}

export const deleteBook = async (req, res) => {
    const {bookId} = req.params;

    try{
        const deletedId = await BookModel.deleteBook(bookId);
        res.status(200).json({ success: true, message: deletedId});
    }catch(e){
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error"});
    }
}