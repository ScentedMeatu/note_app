import Note from '../models/note.model';
import HttpStatus from 'http-status-codes';

//create a note
export const createNote = async(req, res) =>{
  const { title, desc, color } = req.body;
  const present = await Note.findOne({title});
    if (present) {
      res.status(HttpStatus.CONFLICT).json({
        code: HttpStatus.CONFLICT,
        message: 'Note with same title exist, provide new Title'
      });
    } else {
      await Note.create({
        title,
        desc,
        color
      });
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        message: 'Note created successfully'
      });
    }
}