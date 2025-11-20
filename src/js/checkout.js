import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

const order = new CheckoutProcess("so-cart", ".order__summary");

order.init();

document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();
  const myForm = document.forms[0];
  const chk_status = myForm.checkValidity();
  myForm.reportValidity();
  if (chk_status) {
    order.checkout();
  }
});
