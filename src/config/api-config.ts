import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNjZDMzNzdiZjkzNGYxYWEwNDg1NzYiLCJlbWFpbCI6InZpZXR0aGFuZ2FkOTdAZ21haWwuY29tIiwiZnVsbG5hbWUiOm51bGwsImF2YXRhciI6bnVsbCwicGhvbmUiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjItMDctMTJUMDE6NDk6NDMuNTA1WiIsInVwZGF0ZWRBdCI6IjIwMjItMDctMTJUMDE6NDk6NDMuNTA1WiIsIl9fdiI6MCwiaWF0IjoxNjU4MTk0NzQ1LCJleHAiOjE2NTgxOTgzNDV9.sUp3DjfG2sJQADNfiEXegseVZc7ceS-yVeyO-CelaWE";

export const API = axios.create({
  baseURL: "http://localhost:2101/api/v1/",
  timeout: 5000,
  headers: {
    // "X-Custom-Header": "foobar",
    "Content-Type": "application/json"
  }
});

API.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    // console.log(config);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// API.interceptors.response.use(
//   (config) =>
//     // Do something before request is sent
//     {
//       console.log("data", config);
//       return config.data;
//     },
//   (error) =>
//     // Do something with request error
//     Promise.reject(error)
// );
