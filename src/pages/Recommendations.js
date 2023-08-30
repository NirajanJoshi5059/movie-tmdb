import React from 'react'
import { imageUrl } from '../features/constants'
import { useNavigate } from 'react-router'
import { useGetMovieRecommendationsQuery } from '../features/movieApi';

const Recommendations = ({data, id}) => {
    const nav=useNavigate();
    const { data: recoData } = useGetMovieRecommendationsQuery(data.id);
    return (
        <>
            <div className='text-white'>
                <h1 className="font-bold text-xl font-serif text-white px-5 mt-5">Recommendations</h1>
                <div className="grid grid-cols-4 gap-y-11 gap-x-4 px-4 mt-7 items-center scr">
                    {recoData && recoData.results.map((movie) => {
                        return <div
                            onClick={() => nav(`/movieDetail/${movie.id}`)}
                            className="cursor-pointer hover:scale-110 h-[520px] overflow-hidden duration-300 ease-in" key={movie.id}>
                            <img className="w-full h-[350px]" src={`${imageUrl}${movie.poster_path}`} alt="" />
                            <div className="p-2 shadow-lg shadow-gray-900">
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>
                            </div>

                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Recommendations
