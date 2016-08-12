function sendMail() {
    var link = "mailto:me@example.com" + "?cc=myCCaddress@example.com" + "&subject=" + escape(document.getElementById('mySubject').value) + "&body=" + escape(document.getElementById('myText').value);

    window.location.href = link;
}
