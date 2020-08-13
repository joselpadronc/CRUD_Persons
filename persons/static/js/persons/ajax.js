(()=> {
    const request = new XMLHttpRequest(),
        $request = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment();

    request.addEventListener('readystatechange', e => {
        if (request.readyState !== 4) {
            return;
        }

        if (request.status >= 200 && request.status < 300) {
            // console.log(request.responseText);
            console.log("Exito");

            //console.log(request.responseText);
            let json = JSON.parse(request.responseText);
            console.log(json);

            //json.forEach((person) => {
            //    const $li = document.createElement('li');
            //    $li.innerHTML = `${person.name} --- ${person.id_card} --- ${person.nationality} --- ${person.age}`;
            //    $fragment.appendChild($li);
            //});

            //$request.appendChild($fragment);

        }else {
            console.log("Error");
            let message = request.statusText || 'Ocurrio un error :(';
            $request.innerHTML = `Error ${request.status}:${message}`;
        }
    });

    request.open('GET', "/list-persons/");

    request.send()
})();