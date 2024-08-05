const messageEle = document.getElementById("message");
messageEle.innerText = 10;
setTimeout(function(){
    messageEle.innerText = 9;
    setTimeout(function(){
        messageEle.innerText = 8;
        setTimeout(function(){
            messageEle.innerText = 7;
            setTimeout(function(){
                messageEle.innerText = 6;
                setTimeout(function(){
                    messageEle.innerText = 5;
                    setTimeout(function(){
                        messageEle.innerText = 4;
                        setTimeout(function(){
                            messageEle.innerText = 3;
                            setTimeout(function(){
                                messageEle.innerText = 2;
                                setTimeout(function(){
                                    messageEle.innerText = 1;
                                    setTimeout(function(){
                                        messageEle.innerText = "Happy\n Independance\n Day!";
                                        messageEle.style.backgroundColor = "orange";
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)