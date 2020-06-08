var express = require('express');
var router = express.Router();

const {newComment,findCommentByRecordId} = require('../data');


// find all the comment under the record id
router.use('/commentList/:recordId',async (req, res) =>{
  recordId = req.params.recordId;
  let rs = await findCommentByRecordId(parseInt(recordId));
  res.statusCode=200;
  res.json(rs);
});

// add new comment
router.use('/newComment', async (req, res) => {

  console.log(req.body);
  let comment={};
  comment.recordId = parseInt(req.body.recordId);
  comment.content = req.body.content;

  let rs = await newComment(comment);
  if(rs){
    res.statusCode=200;
    res.json({Message:'Comment added'});
  }
})


module.exports = router;
