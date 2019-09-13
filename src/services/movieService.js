import http from "./httpService";

const APIEndPoint = "/movies";

function MovieUrl(id) {
  return `${APIEndPoint}/${id}`;
}

export function getMovies() {
  return http.get(APIEndPoint);
}

export function getMovie(id) {
  return http.get(MovieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(MovieUrl(movie._id), body);
  }
  return http.post(APIEndPoint, movie);
}

export function deleteMovie(id) {
  return http.delete(MovieUrl(id));
}
