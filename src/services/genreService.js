import http from "./httpService";
const APIEndPoint = "/genres";

export async function getGenres() {
  return http.get(APIEndPoint);
}
