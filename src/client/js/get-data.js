export async function getData(message) {
    let user = {
        'message': message
    };
    console.log(user);
    let response = await fetch("http://localhost:3000/nlp" ,{
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
          }
      });

    let data = await response.json();
    return data;
}