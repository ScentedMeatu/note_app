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

//get all notes
export const getAllNotes = async(req, res)=>{
  const data = await Note.find((err,data)=>{
    if(err){
      console.log(err);
    } else {
      return data;
    }
  })
  if(data){
    res.status(HttpStatus.ACCEPTED).send(data);
  }else{
    res.status(HttpStatus.NOT_FOUND).json({
      code: HttpStatus.NOT_FOUND,
      message: 'no notes found'
    });
  }
}

//get notes by id
export const getNotesById = async(req, res)=>{
  const data = await Note.findById(req.params.id)
  if(data){
    res.status(HttpStatus.ACCEPTED).json(data);
  } else {
    res.status(HttpStatus.NOT_FOUND).json({
      code: HttpStatus.NOT_FOUND,
      message: `no notes with id ${req.params.id} found`
    });
  }
}

//update notes by id
export const updateById = async (req, res)=>{
  const work = await Note.findByIdAndUpdate(req.params.id,req.body); 
  if(work){
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      message: `note with id ${req.params.id} updated`
    });
  } else {
    res.status(HttpStatus.NOT_FOUND).json({
      code: HttpStatus.NOT_FOUND,
      message: `no notes with id ${req.params.id} found`
    });
  }
}

//delete notes by id
export const deleteById = async (req, res)=>{
  const data = await Note.findByIdAndDelete(req.params.id);
  if(data){
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      message: `note with id ${req.params.id} deleted`
    });
  }else {
    res.status(HttpStatus.NOT_FOUND).json({
      code: HttpStatus.NOT_FOUND,
      message: `no notes with id ${req.params.id} found`
    });
  }
}