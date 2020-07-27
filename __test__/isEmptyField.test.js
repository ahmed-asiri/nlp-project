import {isEmptyField} from "../src/client/js/is-empty-field";


describe("Testing the Url Validation Function", () => {
    test("Testing the isValidUrl() Function", () => {
        expect(isEmptyField("")).toEqual(true);
    });
});