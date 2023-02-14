import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/tests";

function testUrl(id) {
  return `${apiEndpoint}/${id}`;
}
function questionUrl(testId, questionId) {
  return `${apiEndpoint}/${testId}/${questionId}`;
}

export function getTests() {
  return http.get(apiEndpoint);
}

export function getTest(testId) {
  return http.get(testUrl(testId));
}

export function saveTest(test) {
  if (test._id) {
    const body = { ...test };
    delete body._id;
    return http.put(testUrl(test._id), body);
  }

  return http.post(apiEndpoint, test);
}

export function deleteTest(testId) {
  return http.delete(testUrl(testId));
}

export function deleteQuestion(testId, questionId) {
  return http.delete(questionUrl(testId, questionId));
}
