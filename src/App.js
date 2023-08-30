import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import RootLayOut from "./components/RootLayOut"
import MovieByCategory from "./components/MovieByCategory"
import Detail from "./pages/Detail"
import MoviePage from "./pages/MoviePage"
import Search from "./pages/Search"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path="movie/:category" element={<MovieByCategory />} >
          {/* <Route path="page/:page" element={<MoviePage />} /> */}
        </Route>
        <Route path="movieDetail/:id" element={<Detail />} />
        <Route path="movieSearch/:search" element={<Search />} />
        <Route path="movie/:category/page/:page" element={<MoviePage />} />

      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default App