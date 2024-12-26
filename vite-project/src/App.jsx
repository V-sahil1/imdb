import { useEffect, useState } from "react";
import Navbar from "./Componet/Navbar";
import "./App.css";
import Movies from "./Componet/Movies";
import Watchlist from "./Componet/Watchlist";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Banner from "./Componet/Banner";

function App() {
  let [watchlist,setWatchlist] = useState([])

  function handleAddwatchlist(movObj){
    let newWatchlist=[...watchlist,movObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
      console.log(newWatchlist);
  }
  function handlremovefillter(movObj){
     let fillterwatchlist = watchlist.filter((movie)=>{
      return movie.id != movObj.id
     })
     setWatchlist(fillterwatchlist);
  }
  useEffect(()=>{
    let managethedata= localStorage.getItem('moviesApp')
      if(!  managethedata){
        return
      }
      setWatchlist(JSON.parse(managethedata))
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
          <Banner/>
           <Movies watchlist={watchlist} handleAddwatchlist={handleAddwatchlist} handlremovefillter={handlremovefillter} />
           </>}/>
            <Route path="/watchlist" element ={ <Watchlist setWatchlist={setWatchlist} watchlist={watchlist}/>}/>
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
