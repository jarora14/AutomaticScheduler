function test(){
    // Get the modal
    var modal = document.getElementById('id01');
    var modal2 = document.getElementById('id02');
    var modal3 = document.getElementById('id03');
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal || event.target == modal2 || event.target == modal3) {
            modal.style.display = "none";
            modal2.style.display = "none";
            modal3.style.display = "none";

        }
    }
}