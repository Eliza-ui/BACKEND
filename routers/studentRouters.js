import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const StudentRouter = express.Router();

StudentRouter.get('/all', StudentController.fetchStudents);
//bookRouter.post('new, Bookcontroller.createBook)

export default StudentRouter;
