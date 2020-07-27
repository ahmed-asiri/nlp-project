import "./assets/css/style.scss";
import "./assets/css/footer.scss";
import "./assets/css/form.scss";
import "./assets/css/header.scss";
import "./assets/css/main.scss";

import {isEmptyField} from "./js/is-empty-field";
import {checkElementExisting} from "./js/exist-element";
import {getData} from "./js/get-data"

var submitBtn = checkElementExisting("#submit-btn");
submitBtn.addEventListener("click", async function(eve) {
    eve.preventDefault();
    if(submitBtn !== null){
        var message = document.querySelector("#sentence");
        if(!isEmptyField(message.value)){
            //Sending Request to the server.
            let data = await getData(message.value);
            document.querySelector(".result").innerHTML = "<strong>Polarity: </strong>" + data.polarity + "<br>" + "<strong>Subjectivity: </strong>" +data.subjectivity + "<br>" + "<strong>Polarity Confidence: </strong>" +data.polarity_confidence.toFixed(2) + "<br>" + "<strong>Subjectivity Confidence: </strong>" +data.subjectivity_confidence.toFixed(2);

        }else {
            //Give him alert that he has problem with the URL.
            alert("you need to enter sentence please!!");
        }
    }
});



