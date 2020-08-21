const request = ((method, url, cb) => {
    const xhr = new XMLHttpRequest()
    const prefix = 'http://localhost:8000';

    xhr.addEventListener('readystatechange', e => {

        if (xhr.readyState === 4 && xhr.status === 200) {
            return cb ? cb(JSON.parse(xhr.responseText)) : null;
        
        } else {
            return new Error('Network Error');
        }
    });

    
    xhr.open(method, prefix + url);

    xhr.send()
});


const renderRows = ((pyload) => {
    const table = document.querySelector('#table');
    const tbody = table.querySelector('#tbody');
    tbody.innerHTML = '';

    for (let person of pyload) {
        tbody.innerHTML += `
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
});

window.onload = () => {
    const reloadBtn = document.getElementById('update-list-btn');
    request("GET", /list-persons/, renderRows);

    reloadBtn.addEventListener('click', () => {
        request("GET", /list-persons/, renderRows);
    });
}
