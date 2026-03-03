
(function () {
    const paginas = document.querySelectorAll('.pagina');
    const menuItems = document.querySelectorAll('.submodulo-item');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    const indicador = document.getElementById('indicador-pagina');

    // orden: página1(índice0), página2(1), página3(2), página4(3), página5(4)
    let paginaActual = 0;  // empezamos en página1 (bienvenida)

    function actualizarVista() {
        // ocultar todas
        paginas.forEach(p => p.classList.remove('activa'));
        paginas[paginaActual].classList.add('activa');

        // actualizar menú lateral activo (submodulo-item) según corresponda:
        // menú índice 0 (2.1 datos) se activa cuando páginaActual = 0? pero lo dejamos siempre linkeado:
        menuItems.forEach((item, idx) => {
            item.classList.remove('activo');
            // resaltamos solo el item que coincide con la página:
            // idx0 -> página1 (bienvenida) – 2.1 datos
            // idx1 -> página2 (2.1.1)
            // idx2 -> página3 (2.1.2)
            // idx3 -> página4 (2.2)
            // idx4 -> página5 (2.3)
            if (idx === paginaActual) {
                item.classList.add('activo');
            }
        });

        // texto indicador
        indicador.innerText = (paginaActual + 1) + '/5';
    }

    btnSiguiente.addEventListener('click', (e) => {
        e.preventDefault();
        if (paginaActual < paginas.length - 1) {
            paginaActual++;
            actualizarVista();
        } else {
            alert("Fin de la Etapa 0");
        }
    });

    btnAnterior.addEventListener('click', (e) => {
        e.preventDefault();
        if (paginaActual > 0) {
            paginaActual--;
            actualizarVista();
        }
    });

    // click en items del menú
    menuItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            paginaActual = idx;
            actualizarVista();
        });
    });

    // mostrar/ocultar opciones CRO según radio
    const croSi = document.getElementById('croSi');
    const croNo = document.getElementById('croNo');
    const croOpciones = document.getElementById('croOpciones');

    function toggleCRO() {
        if (croSi && croSi.checked) {
            croOpciones.style.display = 'block';
        } else {
            croOpciones.style.display = 'none';
        }
    }
    if (croSi && croNo) {
        croSi.addEventListener('change', toggleCRO);
        croNo.addEventListener('change', toggleCRO);
    }

    // simulación de check en submódulos según se navega (ya se ve visual)
    // iniciar vista
    actualizarVista();
})();
