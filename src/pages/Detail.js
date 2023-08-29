import { useParams } from "react-router"
import { useGetMovieDetailQuery, useGetMovieVideoQuery } from "../features/movieApi";
import PageDetail from "./page_detail/PageDetail";
import Loading from "../components/Loading";


const Detail = () => {

  const { id } = useParams();

  const { isError, error, isLoading, data } = useGetMovieDetailQuery(id);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>

      {data && <PageDetail data={data} />}

    </>
  )
}
export default Detail