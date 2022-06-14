let compra = document.querySelector("#compra");
let venta = document.querySelector("#venta");
function traer() {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((res) => res.json())
    .then((date) => {
      console.log(date[0].casa.compra);
      compra.innerHTML = `<p> ${date[0].casa.compra}</p>`;
      venta.innerHTML = `<p> ${date[0].casa.venta}</p>`;
    });
}

traer();
