const form = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

async function sendFormData(data) {
  try {
    const response = await fetch("https://server-ob4d.onrender.com/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const resData = await response.json();
    return resData;
  } catch (error) {
    throw new Error(error);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = {
    firstName: firstName.value,
    secondName: lastName.value,
    phoneNumber: phone.value,
    email: email.value,
    message: message.value,
  };

  firstName.value = "" ; 
  lastName.value = "" ; 
  phone.value = "" ; 
  email.value = "" ; 
  message.value = "" ; 

  sendFormData(data);
});
