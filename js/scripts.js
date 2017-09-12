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

    function clearLabels() {
        Array.prototype.map.call(document.getElementsByClassName("inputLabels"),function(field) {
            field.style.display="none";
        });
        }
})();
