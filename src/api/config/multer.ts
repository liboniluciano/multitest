import multer from "multer";
import crypto from "crypto";
import { extname, resolve } from "path";

const storage = multer.diskStorage({
  destination: resolve(__dirname, "..", "tmp", "uploads"),
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, res) => {
      if (err) return cb(null, err.message);

      return cb(null, res.toString("hex") + extname(file.originalname));
    });
  },
});

export default {
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "text/plain" ||
      file.mimetype == "text/plain" ||
      file.mimetype == "text/plain"
    ) {
      return cb(null, true);
    } else {
      return cb(null, false);
    }
  },
};

// export default {
//   storage: multer.diskStorage({
//     destination: resolve(__dirname, "..", "tmp", "uploads"),
//     filename: (req, file, cb) => {
//       crypto.randomBytes(16, (err, res) => {
//         if (err) return cb(null, err.message);

//         return cb(null, res.toString("hex") + extname(file.originalname));
//       });
//     },
//   }),
// };
