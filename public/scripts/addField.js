// Procurar o botao
document.querySelector("#add-time")
// quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField(){
    // duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //limpar campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })
   
    //colocar na página 

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}