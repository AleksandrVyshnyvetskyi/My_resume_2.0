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
        Notiflix.Report.success(
          "Super !",
          "Your message has been sent!",
          "Close",
          {
            svgSize: "200px",
            titleFontSize: "24px",
            messageFontSize: "20px",
            buttonFontSize: "16px",
            width: "300px",
            backOverlay: true,
            backOverlayClickToClose: true,
          }
        );
      })
      .catch((error) => {
        Notiflix.Report.failure(
          "Oopps...",
          "Something broke... Try again.",
          "Close",
          {
            svgSize: "200px",
            titleFontSize: "24px",
            messageFontSize: "18px",
            buttonFontSize: "16px",
            width: "300px",
            backOverlay: true,
            backOverlayClickToClose: true,
          }
        );
      });
  }

  function formValidate() {
    let formReq = document.querySelectorAll("._req");
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];

      if (input.classList.contains("_req")) {
        if (input.value === "") {
          Notiflix.Report.warning(
            "Oopps...",
            "Please fill in all fields",
            "Close",
            {
              svgSize: "200px",
              titleFontSize: "24px",
              messageFontSize: "18px",
              buttonFontSize: "16px",
              width: "300px",
              backOverlay: true,
              backOverlayClickToClose: true,
            }
          );
        }
      }
    }
  }

  function togglerErrorMessageClass() {
    const formBox = document.querySelector(".contact-form-box ");
    formBox.classList.toggle("is-hiden");
    const sending = document.querySelector(".js-sending__message--error");
    sending.classList.toggle("is-hiden");
  }
});
