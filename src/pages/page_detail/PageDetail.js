import { useNavigate } from "react-router";
import { imageUrl } from "../../features/constants";
import { useGetMovieVideoQuery } from "../../features/movieApi";
import Recommendations from "../Recommendations";

const PageDetail = ({ data, id }) => {

  const nav = useNavigate();
  const { isError, isLoading, error, data: videoData } = useGetMovieVideoQuery(data.id);
  console.log(videoData);

  return (
    <div className=" bg-black">

      <div
        style={{ backgroundImage: `url(${imageUrl}${data.backdrop_path})`, height: "75vh", backgroundSize: 'cover', }} >

        {videoData && <div className="mx-auto pt-10 max-w-2xl">
          <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${videoData.results[0]?.key}`}
            title="YouTube video player" frameborder="0"
            Allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>}

      </div>
      {data && <Recommendations data={data} />}
    </div>

  )
}
export default PageDetail