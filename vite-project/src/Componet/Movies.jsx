import React from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";

function Movies({handleAddwatchlist, handlremovefillter,watchlist}) {
    const[movies,setMovies]=useState([])
    const[pageN,setPagen] =useState(1)
    function hanlePREV(){
      if(pageN===1){
        setPagen(pageN)
      }
      else{
        setPagen(pageN-1);
      }
    }

    function hanleNEXT(){
      setPagen(pageN+1);
    }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6b8cab11c6cd03f84c13f216132643e1&language=en-US&page=${pageN} `
      )
      .then(function (resp) {
        setMovies(resp.data.results);
      });
  }, [pageN]);
  return (
    <div>
      <div className="text-2xl m-5 font-bold text-center text-white">Tranding moves</div>
      <div className=" flex flex-row flex-wrap justify-around">
        {movies.map((movObj)=>{
            return <Moviecard 
            key={movObj.id}
            movObj={movObj}  watchlist={watchlist} poster_path={movObj.poster_path} name={movObj.original_title} handleAddwatchlist={handleAddwatchlist} handlremovefillter={handlremovefillter} />
        })}
        
   

        
      </div>
     
        <Pagination handlenext={hanleNEXT} handleprev={hanlePREV} pagen={pageN} />
        </div>
   
  );
}

export default Movies;
