(function(){
    Array.prototype.map.call(document.getElementsByClassName("formInputs"),function(field){
        field.addEventListener("click",function (e){
                clearLabels();
                e.target.previousSibling.style.display="block";
            });
        });

    function clearLabels() {
        Array.prototype.map.call(document.getElementsByClassName("inputLabels"),function(field) {
            field.style.display="none";
        });
        }
})();
