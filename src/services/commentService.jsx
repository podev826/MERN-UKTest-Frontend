import http from "./httpService";
import { apiUrl } from "../config.json";

export function saveComment(comment) {
  const body = { ...comment };
  return http.post(apiUrl + "/comments", body);
}
export function getComments(testId) {
  return http.get( [apiUrl, "comments", testId].join("/") );
}
