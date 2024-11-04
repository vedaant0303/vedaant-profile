const scriptURL = 'https://script.google.com/macros/s/AKfycbzv8zusF_RIaCjAVuGGu_oVfAkQnTGkVO0EgXdOOHSdq0AcfwK-4-x5at9vsF1n1W69Sw/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
