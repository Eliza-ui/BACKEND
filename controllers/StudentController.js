import * as StudentModel from '../models/studentmodel.js';

export const fetchStudents = async (req, res) => {
    try {
        const books = await StudentModel.getstudents();
        res.status(200).json({success: true,Message: books});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false, 
            message: 'Internal Server Error'

        })
    }
};