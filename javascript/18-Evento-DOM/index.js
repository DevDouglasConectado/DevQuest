let selectDeEstado = document.querySelector("select[name='estado']");

selectDeEstado.addEventListener('change', 
    function(event){
                console.log(event.target.value)

    }
)
/*document
    .querySelector("select[name='estado']")
    .addEventListener('chage',function(event){
        console.log(event.target.value)
    });*/

//console.log(selectDeEstado);
