import React from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'
import { imageUrl } from '../features/constants';
import Loading from '../components/Loading';
import { useGetMovieByPageQuery } from '../features/movieApi';

const MoviePage = () => {
    const { category, page } = useParams();
    const { isError, isLoading, data, error } = useGetMovieByPageQuery({ category, page });
    const nav = useNavigate();

    if (isLoading) {
        return <Loading />
    }


    return (<>
        <div className="grid grid-cols-4 gap-y-11 gap-x-4 px-4 mt-7 items-center">
            {data && data.results.map((movie) => {
                return <div
                    onClick={() => nav(`/movieDetail/${movie.id}`)}
                    className="cursor-pointer hover:scale-110 h-[500px] overflow-hidden duration-300 ease-in" key={movie.id}>
                    <img className="w-full h-[350px]" src={`${imageUrl}${movie.poster_path}`} alt="" />
                    <div className="p-2 shadow-lg">
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                    </div>

                </div>
            })}
        </div>

        <div className="flex justify-center space-x-3 my-7">
            <button onClick={() => nav(-1)} disabled={data?.page === 1 ? true : false}
                className={data?.page == 1 ? "bg-gray-500 text-white px-3 py-1 rounded-lg" : "bg-black text-white px-3 py-1 rounded-lg"}>Prev</button>
            <h1 className="text-lg">{data?.page}</h1>
            <button onClick={() => nav(`/movie/${category}/page/${data?.page + 1}`)}
                className="bg-black text-white px-3 py-1 rounded-lg">Next</button>
        </div>
        <Outlet />
    </>
    )
}

export default MoviePage
