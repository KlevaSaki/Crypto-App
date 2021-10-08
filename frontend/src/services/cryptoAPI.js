// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'c587ae4cbemsh52488d35981edf4p1ff46cjsnb0a06b047a42'
//     }
//   };


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'c587ae4cbemsh52488d35981edf4p1ff46cjsnb0a06b047a42'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery( {baseUrl} ),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});


export const { useGetCryptosQuery } = cryptoApi;