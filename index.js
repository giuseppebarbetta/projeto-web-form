const form = document.querySelector('.fale-conosco')
const mascForm = document.querySelector('.masc-form')
const sendBtn = document.querySelector('.sendBtn')
const contactsFrom = []


function showForm () {
    form.classList.add('show')
    mascForm.style.visibility = 'visible'
}


function closeForm() {
    form.classList.remove('show')
    mascForm.style.visibility = 'hidden'
}

function ocultForm() {
    form.classList.remove('show')
    mascForm.style.visibility = 'hidden'
}

sendBtn.addEventListener("click", function(ev) {
    ev.preventDefault(); // Evita o envio do formulário

    const name = document.getElementById('name').value
    const tel = document.getElementById('tel').value
    const textArea = document.getElementById('textArea').value

    if(name === "" || tel === "" || textArea === ""){
        alert("Preencha todos os campos corretamente")        
    } else {
        const newContact = {
            name,
            tel,
            textArea
        }
    
        ocultForm()
        contactsFrom.push(newContact)
        
        console.log(contactsFrom)
    
        document.getElementById('name').value = ''
        document.getElementById('tel').value = ''
        document.getElementById('textArea').value = ''
    }
});  