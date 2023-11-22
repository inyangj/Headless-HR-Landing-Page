const apiKey =
  "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";

const headers = {
  "api-key": apiKey,
  accept: "application/json",
  "content-type": "application/json",
};


const api = axios.create({
  baseURL: "https://api.sendinblue.com/v3",
  headers: headers,
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
    listIds: [3],
    updateEnabled: false,
  };

  try {
    const response = await api.post("/contacts", payload);

    if (response.status === 201) {
      console.log(response.data);
   
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
