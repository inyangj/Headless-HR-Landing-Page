//Logic for join beta button

const emailInput = document.querySelector(".mailList");
const handleJoinBeta = () => {
  if (emailInput) {
    emailInput.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

    emailInput.focus();
  } else {
    console.error("Element with ID 'mailList' not found.");
  }
};
const joinBeta = () => {
  const menuContainer = document.getElementById("menuContainer");
  if (emailInput) {
    emailInput.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    menuContainer.classList.add("hidden");
    emailInput.focus();
  } else {
    console.error("Element with ID 'mailList' not found.");
  }
};

document.getElementById("beta").addEventListener("click", joinBeta);
document.getElementById("betaBtn").addEventListener("click", handleJoinBeta);
document.getElementById("bet").addEventListener("click", handleJoinBeta);
document.body.addEventListener("click", function (event) {
  if (event.target.id === "joinBeta") {
    handleJoinBeta();
  }
});

//Logic to focus on input div

const inputDiv = document.getElementById("hero");

inputDiv.addEventListener("focusin", () => {
  inputDiv.classList.add("focused-border");
});

inputDiv.addEventListener("focusout", () => {
  inputDiv.classList.remove("focused-border");
});

const footDiv = document.getElementById("footinput");

footDiv.addEventListener("focusin", () => {
  footDiv.classList.add("focused-border");
});

footDiv.addEventListener("focusout", () => {
  footDiv.classList.remove("focused-border");
});
