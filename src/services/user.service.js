import User from '../models/user.model';
import HttpStatus from 'http-status-codes';
const bcrypt = require('bcrypt');

//register user
export const registerUser = async(req, res) =>{
  const { first_name, last_name, email, password } = req.body;
  const present = await User.findOne({email});
    if (present) {
      res.status(HttpStatus.CONFLICT).json({
        code: HttpStatus.CONFLICT,
        message: 'User already exist'
      });
    } else {
      const hashValue = await bcrypt.hash(password, 10);
      await User.create({
        first_name,
        last_name,
        email,
        password: hashValue
      });
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        message: 'User registered successfully'
      });
    }
}