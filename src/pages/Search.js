import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetSearchMovieQuery } from '../features/movieApi';
import Loading from '../components/Loading';
import { imageUrl } from '../features/constants';

const Search = () => {
    const nav=useNavigate();
    const {search} = useParams();
    const {data, isLoading, error, isError} = useGetSearchMovieQuery(search);

    if(isLoading){
        <Loading />
    }
    
  return (
    <div className="grid grid-cols-4 gap-y-11 gap-x-4 px-4 mt-7 items-center">

        {data && data.results.map((movie) => {
          return <div
            onClick={() => nav(`movieDetail/${movie.id}`)}
            className="cursor-pointer hover:scale-110 h-[500px] overflow-hidden duration-300 ease-in" key={movie.id}>
            <img className="w-full h-[350px]" src={`${imageUrl}${movie.poster_path}`} alt="" />
            <div className="p-2 shadow-lg">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>

          </div>
        })}
      </div>
  )
}

export default Search
