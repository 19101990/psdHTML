function increaseValue() {
  let value = parseInt(document.getElementById("items").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("items").value = value;
}

function decreaseValue() {
  let value = parseInt(document.getElementById("items").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("items").value = value;
}
