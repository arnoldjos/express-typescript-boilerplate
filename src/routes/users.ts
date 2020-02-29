import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a 123456');
});

module.exports = router;
