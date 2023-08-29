import MovieByCategory from "../components/MovieByCategory";
import { imageUrl } from "../features/constants";
import { useGetMovieByCategoryQuery } from "../features/movieApi"



const HomePage = () => {



  return (
    <>
      <MovieByCategory />

    </>
  )
}
export default HomePage