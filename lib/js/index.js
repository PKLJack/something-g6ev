console.log("lib/js/index.js");

const url = "http://localhost:8201/index.php";
//const url = "http://localhost:8201/phpinfo.php";

document
  .querySelector("#emailForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    console.log("The form");
    console.log(this);

    console.log("Sending to PHP backend");
    const formData = new FormData(this);
    const body = Object.fromEntries(formData.entries());

    console.log("POST to", url, body);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(body),
    });

    const resObj = await res.json();
    console.log("Response:");
    console.table(resObj);

    document.querySelector("pre").append(JSON.stringify(resObj, null, 2));
  });

setTimeout(() => {
  const el = document.querySelector("#emailForm button[type=submit]");

  if (el) {
    //el.click();
  }
}, 200);
