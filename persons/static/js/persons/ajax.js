function ajax () {
    const request = new XMLHttpRequest();
    const url = '/list-persons/';

    request.addEventListener('readystatechange', e => {
        if (this.readyState == 4 && this.readyStatus == 200) {
            let jsonResponse = JSON.parse(this.responseText);
            console.log(responseText);
        }
    });

    request.open('GET', url);
    request.send();
}

document.getElementById('update-list-btn').addEventListener('click', () => {
    ajax();
});