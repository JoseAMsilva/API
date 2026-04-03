import multer from 'multer';
import { extname, resolve } from 'path';

const aleatory = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (!allowedMimes.includes(file.mimetype)) {
      return cb(new multer.MulterError('Invalid file type'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatory()}${extname(file.originalname)}`);
    },
  }),
};
