$(document).ready(() => {
  const url = "http://localhost:4000/timeout";
  const validation = () => {
    $("#result").html("");
    const promiseRes = new Promise((resolve, reject) => {
      $.get({ url }).done((data) => {
        clearTimeout();
        resolve("Request Aproved");
      });
      setInterval(() => {
        reject("Timeout");
      }, 3000);
    });
    promiseRes
      .then((data) => {
        $("#result").html(`<h2 class='fontGreen'>${data}</h2>`);
      })
      .catch((err) => {
        $("#result").html(`<h2 class='fontRed'>${err}</h2>`);
      });
  };
  $("#request").click(validation);
});
