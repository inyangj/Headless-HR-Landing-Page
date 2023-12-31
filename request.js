//Waitlist for the hero section

const headers = {
  accept: "application/json",
  "content-type": "application/json",
};

const api = {
  headers: headers,
};

const validEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const joinWaitList = async () => {
  const email = document.getElementById("emailInput").value;

  if (!email) {
    Toastify({
      text: "Please enter an email address",
      duration: 3000,
      position: "top-right",
      className: "toastify-warning",
    }).showToast();
    return;
  }

  if (!validEmail(email)) {
    Toastify({
      text: "Please enter a valid email address",
      duration: 3000,
      position: "top-right",
      className: "toastify-warning",
    }).showToast();
    return;
  }

  const payload = {
    email: email,
    emailBlacklisted: false,
    smsBlacklisted: false,
    listIds: [3],
    updateEnabled: false,
  };

  axios
    .post(
      "https://headless-hr-backend-v2-35a261853dcc.herokuapp.com/api/v1/waitlist",
      payload,
      { api }
    )
    .then((response) => {
      if (response.status === 201) {
        Toastify({
          text: "Your email was sent successfully",
          duration: 3000,
          position: "top-right",
          className: "toastify-success",
        }).showToast();

        document.getElementById("emailInput").value = "";
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

document
  .getElementById("joinWaitlistBtn")
  .addEventListener("click", joinWaitList);
document.getElementById("joinWaitlist").addEventListener("click", joinWaitList);
