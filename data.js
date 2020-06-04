'use strict';


const DataSource = require('loopback-datasource-juggler').DataSource;
const ModelBuilder = require('loopback-datasource-juggler').ModelBuilder;
const ds = new DataSource('memory');

// define models
const Comment = ds.define('Comment', {
  recordId: {type: Number},
  content: {type: DataSource.Text},
  timestamp: {type: Number, default: Date.now}
});


//create new comment
function newComment(obj){
    return new Promise((resolve,reject) => {
        //check input
        if(!obj.recordId || !obj.content){
            reject(new Error('comment content not input!'));
        }

        //add new comment
        Comment.create(obj,(err, res) => {
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        });
    });
}


//find the comment by record id             
function findCommentByRecordId(recordId){
    return new Promise((resolve, reject) => {
        if(!recordId){
            reject(new Error('No record id input!'));
        }else{
            Comment.find({where:{recordId:recordId}},(err,res) => {
                if(err){
                    reject(err);
                }{
                    resolve(res);
                }
            })
        }
    })

}


//exports the function
module.exports = {
    newComment: newComment,
    findCommentByRecordId:findCommentByRecordId
}