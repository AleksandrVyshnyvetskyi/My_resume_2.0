const TOKEN = "5439825587:AAFiZeos74ZIV8HS4lMgzvMsHS5iR1RJGPc";
const CHAT_ID = "-1001518217052";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formValidate();

  if (
    this.name.value !== "" &&
    this.email.value !== "" &&
    this.subject.value !== "" &&
    this.message.value !== ""
  ) {
    let messageToBot = `<i>✋Привет ! Тебе пришел новый офер !</i>\n`;
    messageToBot += `<i>😎Офер пришел от:  </i>\n`;
    messageToBot += `<b>${this.name.value}</b>\n`;
    messageToBot += `<i>📧Email:  </i>\n`;
    messageToBot += `<b>${this.email.value}</b>\n`;
    messageToBot += `<i>Он(а) работает в  </i>\n`;
    messageToBot += `<b>"${this.subject.value}"</b>\n`;
    messageToBot += `<i>Вот сообщение, которое он(а) оставил(а):</i>\n`;
    messageToBot += `<b>"${this.message.value}"</b>\n`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageToBot,
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
      .catch((error) => {
        togglerErrorMessageClass();
        setTimeout(() => {
          togglerErrorMessageClass();
        }, "3000");
      });
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
    const sending = document.querySelector(".js-sending__message--comlete");
    sending.classList.toggle("is-hiden");
  }

  function togglerErrorMessageClass() {
    const formBox = document.querySelector(".contact-form-box ");
    formBox.classList.toggle("is-hiden");
    const sending = document.querySelector(".js-sending__message--error");
    sending.classList.toggle("is-hiden");
  }
});
