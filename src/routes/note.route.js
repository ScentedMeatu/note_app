import express from 'express';
import * as noteController from '../controllers/note.controller';


const router = express.Router();

router.post('/create',noteController.createNote);

router.get('/',noteController.getNotes);

router.get('/:id',noteController.getNotesById);

router.put('/:id',noteController.updateById);

export default router;