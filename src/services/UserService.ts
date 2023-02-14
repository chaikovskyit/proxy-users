import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IAlbum } from '../models/IAlbum';
import { IPost } from '../models/IPost';
import { IUser } from '../models/IUser';


export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], any>({
      query: () => ({
        url: '/users'
      })
    }),
    fetchUserPosts: build.query<IPost[], number>({
      query: (id: number) => ({
        url: `/users/${id}/posts`
      })
    }),
    fetchUserAlbums: build.query<IAlbum[], number>({
      query: (id: number) => ({
        url: `/users/${id}/albums`
      })
    })
  })

})