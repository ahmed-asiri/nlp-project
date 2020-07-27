import {getData} from "../src/client/js/get-data";

  it("the ", async function(){
    const data = await getData("am very happy");
    expect(data.subjectivity).toBe('subjective');
  });