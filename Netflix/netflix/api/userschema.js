const mongoose=require('mongoose');
const user=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'creates'
    },
    adult: {type:Boolean},
backdrop_path:{type: String},
genre_ids: {type:Array},
id: {type:Number},
original_language: {type:String},
original_title: {type:String},
overview: {type:String},
poster_path: {type:String},
release_date: {type:String},
title: {type:String},
video: {type:Boolean},
vote_count: {type:Number}
})

module.exports=new mongoose.model('movie',user)