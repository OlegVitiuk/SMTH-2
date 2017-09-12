(function(){
    Array.prototype.map.call(document.getElementsByClassName("formInputs"),function(field){
        field.addEventListener("click",function (e){
                clearLabels();
                try {
                    e.target.previousSibling.style.display = "block";
                }
                catch(e){
                    console.log("PreviousSibling gets text node against element!")
                }
            });
        });
    var emailField = document.getElementById("inputEmail");
    emailField.addEventListener("blur",function (e) {
        var el = e.target.previousSibling.classList;
        if(!validateEmail(e.target.value)){
            try {
                el.add("error");
            }catch(e){
                console.log("PreviousSibling gets text node against element!")
            }
        }else if(el.contains("error")){
            el.remove("error");
            }
    });

    var websiteField = document.getElementById("inputWebsite");
    websiteField.addEventListener("blur",function (e) {
        var el = e.target.previousSibling.classList;
        if(!validateUrl(e.target.value)){
            try {
                el.add("error");
            }catch(e){
                console.log("PreviousSibling gets text node against element!")
            }
        }else if(el.contains("error")){
            el.remove("error");
        }
    });

    function clearLabels() {
        Array.prototype.map.call(document.getElementsByClassName("inputLabels"),function(field) {
            if(!field.classList.contains("error")) {
                field.style.display = "none";
            }
        });
        }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateUrl(url){
        var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        return re.test(url);
    }
})();
