import {isValidUrl} from "../src/client/js/validate-url";
import { TestScheduler } from "jest";


describe("Testing the Url Validation Function", () => {
    test("Testing the isValidUrl() Function", () => {
        expect(isValidUrl("https://www.google.com/")).toEqual(true);
    });
});