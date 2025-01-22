console.log("lib/js/index.js");

/** @param {SubmitEvent} e  */
async function emailFormSubmitHandler(e) {
  e.preventDefault();

  /** @type {HTMLFormElement} */
  const formEl = e.currentTarget;
  console.log("The form");
  console.log(formEl);

  console.log("Sending to PHP backend");
  const formData = new FormData(formEl);
  const body = Object.fromEntries(formData.entries());

  const url = formEl.target;

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
}

document
  .querySelector("#emailForm")
  .addEventListener("submit", emailFormSubmitHandler);
