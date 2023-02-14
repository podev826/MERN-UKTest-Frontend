import http from "./httpService";
import { apiUrl } from "../config.json";

export function saveQuestion(testId, questionId, question) {
  const body = { ...question };
  return http.post(apiUrl + ["/questions", testId, questionId].join("/"), body);
}

export function upload(body) {
  return http.post(apiUrl + "/questions/upload", body);
}
