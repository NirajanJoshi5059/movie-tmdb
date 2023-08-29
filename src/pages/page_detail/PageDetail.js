import { imageUrl } from "../../features/constants";
import { useGetMovieVideoQuery } from "../../features/movieApi";

const PageDetail = ({ data, id }) => {


  const { isError, isLoading, error, data: videoData } = useGetMovieVideoQuery(data.id);
  console.log(videoData);

  return (

    <div style={{ backgroundImage: `url(${imageUrl}${data.backdrop_path})`, height: "100vh" ,backgroundSize:'cover'}} >

    {videoData && <div className="mx-auto pt-20 max-w-2xl">
      <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${videoData.results[0]?.key}`} 
      title="YouTube video player" frameborder="0" 
      Allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
      </div>}

    </div>



  )
}
export default PageDetail