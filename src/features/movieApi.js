import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { accessToken } from './constants';






export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({

    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        headers: {
          'Authorization': accessToken
        },
        params: {
          page: 1
        }
      })
    }),

    getMovieVideo: builder.query({
      query: (query) => ({
        url: `/movie/${query}/videos`,
        headers: {
          'Authorization': accessToken
        },
        params: {
          page: 1
        }
      })
    }),

    getMovieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        headers: {
          'Authorization': accessToken
        },
        params: {
          page: 1
        }
      })
    }),

    getMovieDetail: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        headers: {
          'Authorization': accessToken
        },
        params: {
          page: 1
        }
      })
    }),

    getSearchMovie: builder.query({
      query: (query) => ({
        url: `/search/movie`,
        headers: {
          'Authorization': accessToken
        },
        params: {
          query
        }
      })
    }),




  })

});


export const { useGetMovieByCategoryQuery, useGetMovieDetailQuery, 
  useGetMovieVideoQuery, useGetMovieByPageQuery,
  useGetSearchMovieQuery } = movieApi;

