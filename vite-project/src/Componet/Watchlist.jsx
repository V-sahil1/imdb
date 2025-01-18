import React, { useEffect } from "react";
import { useState } from "react";
import genres from "../Utility/Genres";
function Watchlist({ watchlist, setWatchlist, handlremovefillter }) {
  console.log(watchlist);
  let [search, setSearch] = useState("");
  let [genrelIst, setGenreList] = useState(["All Genres"]);
  let [curemtGen, setcuremtGen] = useState();
  let handlefilter = (genre) => {
    setcuremtGen(genre);
  };

  let handlfun = (e) => {
    setSearch(e.target.value);
  };
  function sortincresingorder() {
    let sortesincree = watchlist.sort((moviesA, moviesB) => {
      return moviesB.vote_average - moviesA.vote_average;
    });
    setWatchlist([...sortesincree]);
  }
  function sortdecresingorder() {
    let sortesdecre = watchlist.sort((moviesA, moviesB) => {
      return moviesA.vote_average - moviesB.vote_average;
    });
    setWatchlist([...sortesdecre]);
  }
  useEffect(() => {
    let temp = watchlist.map((moviesObj) => {
      return genres[moviesObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-4">
        {genrelIst.map((genres) => {
          return (
            <div
              onClick={() => {
                handlefilter(genres);
              }}
              className={
                curemtGen === genres
                  ? "flex justify-center items-center h-[3rem] w-[9rem]  rounded-xl bg-blue-500 "
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl "
              }
            >
              {" "}
              {genres}
            </div>
          );
        })}
      </div>

      <div className="my-4 flex justify-center">
        <input
          onChange={handlfun}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[2.8rem] w-[16rem] px-4 bg-gray-200"
        />
      </div>
      <div className="border rounded-lg overflow-hidden  border-gray-200 m-9">
        <table className="w-full text-center">
          <thead className="border-b-2">
            <tr>
              <th>NAME</th>

              <th className="flex justify-center ">
                <div onClick={sortincresingorder} className="p-2">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortdecresingorder} className="p-2">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>popularity</th>
              <th>genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((moviesObj) => {
                if (curemtGen == "All Genres") {
                  return true;
                } else {
                  return genres[moviesObj.genre_ids[0]] == curemtGen;
                }
              })
              .filter((moviesObj) => {
                return moviesObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((moviesObj) => {
                return (
                  <tr className="border-b-2">
                    <th className="px-2 m-2 flex items-center">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${moviesObj.poster_path})`}
                        className="h-[6rem] w-[6rem] "
                        alt=""
                      />
                      <div className="px-10">{moviesObj.title}</div>
                    </th>
                    <td>{moviesObj.vote_average}</td>
                    <td>{moviesObj.popularity}</td>
                    <td>{genres[moviesObj.genre_ids[0]]}</td>
                    <td className="text-red-800">
                      <button onClick={() => handlremovefillter(moviesObj)}>
                        {" "}
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <div></div>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
