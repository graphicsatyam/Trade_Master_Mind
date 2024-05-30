function SendMail() {
    var params = {
        fullName : document.getElementById("fullName").value ,
        emailAddress : document.getElementById("emailAddress").value ,
        phoneNumber : document.getElementById("phoneNumber").value ,
        state : document.getElementById("state").value ,
        tradingOption : document.getElementById("tradingOption").value ,
        tradingCapital : document.getElementById("tradingCapital").value ,
        
    }    

emailjs.send("service_1wme7jn", "template_7011mv4", params).then(function(res) {
        alert("Your details have been submitted successfully!");

    })
}
