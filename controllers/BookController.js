import * as BookModel from '../models/bookmodel.js';

export const fetchBooks = async (req, res) => {
    try {
        const books = await BookModel.getAllBooks();
        res.status(200).json({success: true,Message: books});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false, 
            message: 'Internal Server Error'

        })
    }
}