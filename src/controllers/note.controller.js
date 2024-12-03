import * as NoteService from '../services/note.service';

/**
 * Controller to create a new note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createNote = async (req, res, next) => {
  try {
    await NoteService.createNote(req,res);
  } catch (error) {
    next(error);
  }
}

/**
 * Controller to get all notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getNotes = async (req, res, next) => {
  try {
    await NoteService.getAllNotes(req,res);
  } catch (error) {
    next(error);
  }
}

/**
 * Controller to get notes by id
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getNotesById = async (req, res, next) => {
  try {
    await NoteService.getNotesById(req,res);
  } catch (error) {
    next(error);
  }
}

/**
 * Controller to update notes by id
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateById = async (req, res, next) => {
  try {
    await NoteService.updateById(req,res);
  } catch (error) {
    next(error);
  }
}