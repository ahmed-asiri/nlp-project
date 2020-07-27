import {getData} from "../src/client/js/get-data";
import 'babel-polyfill';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

it("get data correctly", async () => {
  fetch.mockResponseOnce(JSON.stringify({subjectivity: "subjective"}));
  const data = await getData("am very happy");
  expect(data.subjectivity).toEqual("subjective");
})
