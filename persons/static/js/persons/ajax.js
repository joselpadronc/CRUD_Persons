function ajax () {
    const request = new XMLHttpRequest()
    const url = '/list-persons/'

    request.onreadystatechange = () => {
        if (this.readyState == 4 && this.readyStatus == 200) {
            console.log(this.responseText);
        }
    }

    request.open('GET', url);
    request.send();
}

document.getElementById('update-list-btn').addEventListener('click', () => {
    ajax();
});