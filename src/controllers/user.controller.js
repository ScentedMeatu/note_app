import * as UserService from '../services/user.service';

/**
 * Controller to register a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const regUser = async (req, res, next) => {
  try {
    await UserService.registerUser(req,res);
  } catch (error) {
    next(error);
  }
}

/**
 * Controller to login a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const logUser = async (req, res, next) => {
  try{
    await UserService.loginUser(req, res);
  } catch (error) {
    next(error);
  }
}
