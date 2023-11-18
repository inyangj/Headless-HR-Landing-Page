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

  try {
    const res = await api.post("/contacts", payload);
    if (res.status === 201) {
      alert("Your message was sent successfully");
    } else {
      alert("Something went wrong! Try again");
    }
  } catch (err) {
    alert("Something went wrong! Try again");
  }
};

document
  .getElementById("joinWaitlistBtn")
  .addEventListener("click", joinWaitList);
document.getElementById("WaitlistBtn").addEventListener("click", joinWaitList);
document.getElementById("joinWaitlist").addEventListener("click", joinWaitList);
