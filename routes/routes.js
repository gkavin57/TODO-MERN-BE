const express =require("express");
const { getList, createList, deleteList} = require("../controller/TodoFunction");
const router = express.Router();
const authenticate =require('../Middleware/authenticate')

router.route('/getList').get(authenticate,getList);
router.route('/createList').post(authenticate,createList);
router.route('/deleteList/:id').delete(authenticate,deleteList);

module.exports=router;