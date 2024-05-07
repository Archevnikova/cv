const submitButton = document.getElementById("submit");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const botApiKey = "6516918195:AAEAU_MFCy35rhDT-jzffsG6GApAc0qe_C8";
const chatId = "-4266897000";


submitButton.onclick =  function() {
    const nameInputValue = nameInput.value;
    const emailInputValue = emailInput.value;
    const messageInputValuee = messageInput.value;
    
    const text = `
    <b>имя: ${nameInputValue}</b>
    <b>email: ${emailInputValue}</b>
    <b>сообщение: ${messageInputValuee}</b>
    `

    const bodyJSON = {
        chat_id:chatId,
        parse_mode:("HTML"),
        text
    }
    const bodyString = JSON.stringify(bodyJSON);
    const response =  fetch (`https://api.telegram.org/bot6516918195:AAEAU_MFCy35rhDT-jzffsG6GApAc0qe_C8/sendMessage`,{
        method:"POST",
        body:bodyString,
        mode: "cors",
        headers:{"Content-Type": "application/json",},
    })
    response.then(v => { 
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    })
    
    
}