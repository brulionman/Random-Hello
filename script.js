const toaster = document.getElementById('toaster')
const toasts = document.getElementById('toasts')


const translations = [
'German: hallo',
'Punjabi: sate srī akāla',
'Japanese: kon’nichiwa',
'Russian: privet',
'Bengali: hyālō',
'Portuguese: olá',
'Hindi: namaste',
'English: hello',
'Spanish: hola',
'Mandarin: nǐ hǎo',
'Javanese: nggoleki',
'Shanghainese: nóng hō',
'Malay/Indonesian: selamat siang',
'Korean: annyeong haseyo',
'Telugu: vandanalu',
'Vietnamese: xin chào',
'French: bonjour',
'Marathi: namaskar',
'Italian: ciao',
'Basque: kaixo',
'Georgian: gamarjoba',
'Polish: cześć',
]



// creating random types of toasts (colors)

const types = ['info', 'success', 'warning', 'danger', 'nothingbox', 'blue', 'orange', 'pink' ]




toaster.addEventListener('click', () => bakeAToast()) /* 'This could be your message', 'success' */

function bakeAToast(message = null, type = null) { /* message = null, type = null) */
    
    const anotherHello = document.createElement('div')
    anotherHello.classList.add('hello')
    anotherHello.classList.add(type ? type : getRandomType()) /* whole line to change type */

    anotherHello.innerHTML = message ? message : getRandomHello() /* message ? message :  */

    toasts.appendChild(anotherHello)

    setTimeout(() => {
        anotherHello.remove()
    }, 5000)
}


function getRandomHello() {
    return translations[Math.floor(Math.random() * translations.length)]
}



function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}