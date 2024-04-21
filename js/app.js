const test = document.querySelector('#kek')

const input = document.querySelector('.input-pa')

const submit = document.querySelector('.input-submit')

submit.addEventListener('click', () =>
{
 test.innerHTML = `${input.value} Па это ${input.value / 100} ГПа, ${input.value / 1000} КПа, ${input.value / 1000000} МПа`
})
