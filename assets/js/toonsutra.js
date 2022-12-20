document.getElementById("mail-form").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  let spinner = document.getElementById("cover-spin");
  try {
    spinner.style.display = "block";
    let email = document.getElementById("email");
    // let response = await fetch(
    //   "https://devapi.toonsutra.com/api/v1.0/user/sendEnquiry",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: email.value.trim(),
    //     }),
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // let data = await response.json();
    let emailData = await fetch(
      "https://ovk8yfmyxk.execute-api.us-east-1.amazonaws.com/Production",
      {
        method: "POST",
        body: JSON.stringify({
          email: email.value.trim(),
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(await emailData.json());
    spinner.style.display = "none";
    window.location.href = window.location.href + "/success.html";
  } catch (error) {
    spinner.style.display = "none";
    console.log(error);
  }
});
