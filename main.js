var main = function () {
    $('#toggle').click(function () {
        $('#showme').fadeToggle();
    });
}

$(document).ready(main);

function sendMail() {
    var link = "mailto:me@example.com" + "?cc=myCCaddress@example.com" + "&subject=" + escape(document.getElementById('mySubject').value) + "&body=" + escape(document.getElementById('myText').value);

    window.location.href = link;

    document.getElementById("myText").value = "";
    document.getElementById("mySubject").value = "";
}
