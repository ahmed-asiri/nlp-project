import "./assets/css/style.scss";
import {isValidUrl} from "./js/validate-url";
import {checkElementExisting} from "./js/exist-element";


var submitBtn = checkElementExisting("#submit-btn");
submitBtn.addEventListener("click", function(eve) {
    eve.preventDefault();
    if(submitBtn !== null){
        var url = document.querySelector("#sentence");
        if(isValidUrl(url.value)){
            //Sending Request to the server.
            getData(url.value);

        }else {
            //Give him alert that he has problem with the URL.
            alert("it's not valid URL format, try again!!as");
        }
    }
});


async function getData(URL) {
    let user = {
        url: URL
    };
    console.log(user);
    let response = await fetch("./nlp" ,{
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
          }
      });

    let data = await response.json();
    document.querySelector(".result").innerHTML = data.label + "<br>" + data.confidence;
}

