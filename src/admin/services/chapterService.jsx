import http from "./httpService";
import { apiUrl } from "../config.json";

export function getChapters() {
  return http.get(apiUrl + "/chapters/");
}
