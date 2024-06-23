document.getElementById("name-input").addEventListener("input", function () {
  const input = document.getElementById("name-input").value.trim();

  const output = input || "Anonymous";

  document.getElementById("name-output").textContent = output;
});
