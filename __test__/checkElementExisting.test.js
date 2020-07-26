import {checkElementExisting} from "../src/client/js/exist-element";


describe("Testing the Url Validation Function", () => {
    test("Testing the isValidUrl() Function", () => {
        var obj = checkElementExisting("#submit-btn");
        expect(obj).toBeNull();
    });
});