function ajax () {
    const httpRequest = new XMLHttpRequest()
    const url = '/list-persons/'

    httpRequest.addEventListener('readystatechange', e => {

        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            let data = JSON.parse(httpRequest.responseText);

            let res = document.getElementById('res');
            res.innerHTML = '';

            for (let person of data) {

                res.innerHTML += `
                    <tr>
                        <td>
                            ${person.name}
                        </td>
                        <td>
                            ${person.id_card}
                        </td>
                        <td>
                            ${person.nationality}
                        </td>
                        <td>
                            ${person.age}
                        </td>
                        <td>
                            <a href="/editar/${person.id}/">
                                <button type="button" class="btn btn-warning">Editar</button>
                            </a>
                            <a href="#" id="delete-btn">
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </a>
                        </td>
                    </tr>
                `;
            }
        }
    });

    httpRequest.open('GET', url);

    httpRequest.send()
}

ajax();

document.getElementById('update-list-btn').addEventListener('click', () => {
    ajax();
}); 


