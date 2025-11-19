import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const StudentRoutes = express.Router();

StudentRoutes.get('/all', StudentController.fetchStudents);
//bookRouter.post('new, Bookcontroller.createBook)

StudentRoutes.post('/new', StudentController.creatStudent);
StudentRoutes.put('/edit/:studentId', StudentController.editStudent);
StudentRoutes.delete('/delete/:studentId', StudentController.deleteStudent);


export default StudentRoutes;