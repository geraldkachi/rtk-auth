import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export interface AuthType {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: `https://reqres.in/`,
        baseUrl: `https://testtourapp.herokuapp.com`,
        // credentials: 'include',
        // prepareHeaders: (headers, { getState }: { getState: any }) => {
        //     const token = getState().auth.token
        //     if (token) {
        //         headers.set("authorization", `Bearer ${token}`)
        //     }
        //     return headers
        // }
    }),
    // https://xxxx.backendless.app/api/users/login 
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        loginUser: builder.mutation<{}, AuthType>({
            query: (body) => ({
                url: `/users/signin`,
                method: `POST`,
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        registerUser: builder.mutation<{}, AuthType>({
            query: (body) => ({
                url: `users/signup`,
                method: `POST`,
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
    })
})

export const { useLoginUserMutation, useRegisterUserMutation } = authApi

// create an apiSlice
// const baseQueryWithReauth = async (args ,api,extraOptions) => {
//     let result = await
// }