
function request_data(){
  var text = document.getElementById('message_input').value

  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  };

  function json(response) {
    return response.json()
  };

  fetch("https://somal.brunolcarli.repl.co/graphql/", {
    "method": "POST",
    "headers": {
      "cookie": "csrftoken=9oFLQuuB9SmMKM3ulDlv8I1hxTtD1IGuWLSMi3IT3ewU9A2l6QwzxH0nWHBo1Pfd",
      "content-type": "application/json"
    },
    "body": `{\"query\":\"query{ guess(text: \\\"${text}\\\") }\"}`
  })
  .then(json)
  .then(function (data) {
    console.log(data['data']['guess']);
    // Se der bom
    var response = data['data']['guess'];
    document.getElementById("saida").innerHTML = '<div id="saida">';
    document.getElementById("saida").innerHTML += `<h3> ${response.charAt(0).toUpperCase()+response.slice(1)} </h3>`;
    document.getElementById("saida").innerHTML += '</div>';
  })


  .catch(err => {
    console.error(err);
    alert(err)
  });

};