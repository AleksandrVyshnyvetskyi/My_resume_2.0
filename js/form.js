// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector(".contact-form");
//   form.addEventListener("submit", formSend);

//   async function formSend(event) {
//     event.preventDefault();
//     let error = formValidate(form);
//     let formData = new FormData(form);
//     if (error === 0) {
//       form.classList.add("_sending");
//       let response = await fetch("sendmail.php", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         let result = await response.json();
//         alert(result.message);
//         form.reset();
//         form.classList.remove("_sending");
//       } else {
//         alert("Error 🙄");
//         form.classList.remove("_sending");
//       }
//     } else if (error !== 0) {
//       alert("Please enter all areas 🤗");
//       form.classList.remove("_sending");
//     }
//   }

//   function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll("._req");
//     for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];
//       formRemoveError(input);

//       if (input.classList.contains("_req")) {
//         if (input.value === "") {
//           formAddError(input);
//           error++;
//         }
//       }
//     }
//     return error;
//   }

//   function formAddError(input) {
//     input.parentElement.classList.add("_error");
//     input.classList.add("_error");
//   }

//   function formRemoveError(input) {
//     input.parentElement.classList.remove("_error");
//     input.classList.remove("_error");
//   }
// });

const TOKEN = "5439825587:AAHmX5b7EerFzZOmmefFRROXlly1AsK6LI0";
const CHAT_ID = "-1001518217052";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formValidate();

  if (
    this.name.value !== "" ||
    this.email.value !== "" ||
    this.subject.value !== "" ||
    this.message.value !== ""
  ) {
    let message = `<i>✋Привет ! Тебе пришел новый офер !</i>\n`;
    message += `<i>😎Офер пришел от:  </i><b>${this.name.value}</b>\n`;
    message += `<i>📧Email:  </i><b>${this.email.value}</b>\n`;
    message += `<i>Он(а) работает в  </i><b>"${this.subject.value}"</b>\n`;
    message += `<i>Вот сообщение, которое он(а) оставил(а):</i>\n`;
    message += `<b>"${this.message.value}"</b>\n`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        this.name.value = "";
        this.email.value = "";
        this.subject.value = "";
        this.message.value = "";
        togglerSendClass();
        setTimeout(() => {
          togglerSendClass();
        }, "3000");
      })
      .cath((error) => {})
      .finally(() => {});
  }
  if (
    this.name.value === "" ||
    this.email.value === "" ||
    this.subject.value === "" ||
    this.message.value === ""
  ) {
    return alert("Please enter all areas 🤗");
  }

  function formValidate() {
    let formReq = document.querySelectorAll("._req");
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_req")) {
        if (input.value === "") {
          formAddError(input);
        }
        if (input.value !== "") {
          formRemoveError(input);
        }
      }
    }
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function togglerSendClass() {
    const formBox = document.querySelector(".contact-form-box ");
    formBox.classList.toggle("is-hiden");
    const sending = document.querySelector(".sending");
    sending.classList.toggle("is-hiden");
  }
});
