const frmEmail = document.getElementById("frmemail")
frmEmail.addEventListener("submit", sendEmail)


const serviceId = "service_x833uoo"
const templateId = "template_uilkxui"
const apikey = "CsBHDZxKfvEBgMhh0"

function sendEmail(event) {
  event.preventDefault()  
  emailjs.init(serviceId)

  emailjs,sendForm(serviceId,templateId,frmEmail,apikey)
  .then( result => Swal.fire("Su mensaje se ha enviado con exito.") )
  .catch( error => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No ha sido posible enviar el mensaje!",
      });
  } ) 
}