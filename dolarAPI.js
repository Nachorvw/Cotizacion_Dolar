let DOcompra = document.getElementById("compra");
let DOventa = document.getElementById("venta");
let DOvariacion = document.getElementById("varia");
let fecha = document.getElementById("fecha");
let hoy = new Date();

function traer() {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((res) => res.json())
    .then((date) => {
      console.log(date[0].casa.compra);
      DOcompra.innerHTML = `<p> ${date[0].casa.compra}</p>`;
      DOventa.innerHTML = `<p> ${date[0].casa.venta}</p>`;
      DOvariacion.innerHTML = `<p>Variacion : ${date[0].casa.variacion}</p>`;
      fecha.innerHTML = `<p>${hoy.toDateString()}</p>`;
    });
}

traer();
