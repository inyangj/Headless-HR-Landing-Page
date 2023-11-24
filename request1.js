//Waitlist for the footer section

const head = {
  accept: "application/json",
  "content-type": "application/json",
};

const apiCall = {
  headers: head,
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const joinList = async () => {
  const emailInput = document.getElementById("emailnput").value;

  if (!emailInput) {
    Toastify({
      text: "Please enter an email address",
      duration: 3000,
      position: "top-right",
      className: "toastify-warning",
    }).showToast();
    return;
  }

  if (!isValidEmail(emailInput)) {
    Toastify({
      text: "Please enter a valid email address",
      duration: 3000,
      position: "top-right",
      className: "toastify-warning",
    }).showToast();
    return;
  }

  const loader = {
    email: emailInput,
    emailBlacklisted: false,
    smsBlacklisted: false,
    listIds: [3],
    updateEnabled: false,
  };

  axios
    .post(
      "https://headless-hr-backend-v2-35a261853dcc.herokuapp.com/api/v1/waitlist",
      loader,
      { apiCall }
    )
    .then((response) => {
      if (response.status === 201) {
        Toastify({
          text: "Your email was sent successfully",
          duration: 3000,
          position: "top-right",
          className: "toastify-success",
        }).showToast();

        document.getElementById("emailnput").value = "";
      } else {
        Toastify({
          text: "Error: Unable to send email, Please try again",
          duration: 3000,
          position: "top-right",
          className: "toastify-error",
        }).showToast();
      }
    })
    .catch((error) => {
      Toastify({
        text: "Error: Unable to send email, Please try again",
        duration: 3000,
        position: "top-right",
        className: "toastify-error",
      }).showToast();
    });
};

document.getElementById("WaitlistBtn").addEventListener("click", joinList);
