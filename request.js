const apiKey =
  "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";

const api = axios.create({
  baseURL: "https://api.sendinblue.com/v3",
  headers: {
    "api-key": apiKey,
    accept: "application/json",
    "content-type": "application/json",
  },
});


const joinWaitList = async () => {
  const email = document.getElementById("emailInput").value;

  if (!email) {
    alert("Please enter a valid email address");
    return;
  }

  const payload = {
    email: email,
    emailBlacklisted: false,
    smsBlacklisted: false,
    listIds: [34],
    updateEnabled: false,
  };
  console.log(payload);

  try {
    const response = await api.post("/contacts", payload);

    if (response.status === 201) {
      console.log(response.data);
      //to empty the input when successful
      document.getElementById("emailInput").value = "";
      alert("Your email was sent successfully");
    } else {
      console.log(response);
      alert("Error: Unable to send email");
    }
  } catch (err) {
    console.error(err);
    console.error(err.response.data);
    alert("Error: Unable to send email, Please try again");
  }
};

document
  .getElementById("joinWaitlistBtn")
  .addEventListener("click", joinWaitList);
document.getElementById("WaitlistBtn").addEventListener("click", joinWaitList);
document.getElementById("joinWaitlist").addEventListener("click", joinWaitList);
