var elementosDuvida = document.querySelectorAll('.Duvidas')

elementosDuvida.forEach(function (duvida){
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('Ativa')
    })
}) // forEach siginifica para cada exemplo para cada opçao
//classLista igual lista de classe de cada elemento