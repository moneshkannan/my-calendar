import React from 'react'

function Chatbot() {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"35adc738e5033e8be54b73612733e52d9","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    return (
        <></>
    )
}

export default Chatbot
