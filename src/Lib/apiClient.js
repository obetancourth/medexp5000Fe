import axios from 'axios';

export const publicAxios = axios.create();
export const privateAxios = axios.create();

publicAxios.defaults.headers.common['apitoken'] = process.env.REACT_APP_APITOKEN;
privateAxios.defaults.headers.common['apitoken'] = process.env.REACT_APP_APITOKEN;

publicAxios.defaults.baseURL = process.env.REACT_APP_APIURL;
privateAxios.defaults.baseURL = process.env.REACT_APP_APIURL;

publicAxios.defaults.headers.common['cache-control'] = 'no-cache';
privateAxios.defaults.headers.common['cache-control'] = 'no-cache';

publicAxios.defaults.headers.common['Content-Type'] = 'application/json';
privateAxios.defaults.headers.common['Content-Type'] = 'application/json';

export const setJWT = ( jwt ) => {
  privateAxios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}

//TODO: que sucede si el token ya vencio
// 1) Tener un mecanismo de refresh token  (Inventigar :) )
// 2) Interceptar y solicitar el login ( en otra clase :P )
