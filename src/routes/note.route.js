import express from 'express';
import * as noteController from '../controllers/note.controller';


const router = express.Router();

router.post('/create',noteController.createNote);

export default router;