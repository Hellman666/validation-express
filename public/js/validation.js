const jmeno = document.getElementById('jmeno')
const prijmeni = document.getElementById('prijmeni')
const heslo = document.getElementById('heslo')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (jmeno.value === '' || jmeno.value == null){
        messages.push('Zadejte Vaše jméno')
    }

    if (prijmeni.value === '' || prijmeni.value == null){
        messages.push('Zadejte Vaše příjmení')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})