const express=require('express');
const router=express.Router();
const model=require('./userschema')
const fetchuser=require('./fetchuser');
const { useParams } = require('react-router-dom');

router.get('/addwatch/:id',fetchuser,async (req,res)=>{
    const {id}=req.params
    const data=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6509851ee4937c001d4e97bc3e8a5417&language=en-US`)
    const req1=await data.json();
const d=await model.find({original_title:req1.original_title});

if(d.length==0){
    const use=await new model({
        user:req.user,
        adult: req1.adult,
    backdrop_path:req1.backdrop_path,
    genre_ids: req1.genre_ids,
    id: req1.id,
    original_language: req1.original_language,
    original_title: req1.original_title,
    overview: req1.overview,
    poster_path: req1.poster_path,

    release_date: req1.release_date,
    title:req1.title,
    video: req1.video,
    vote_count: req1.vote_count
    })
    use.save();
}
else{
    return;
}
})
module.exports=router;