let DOcompra = document.getElementById("compra");
let DOventa = document.getElementById("venta");
let DOvariacion = document.getElementById("varia");
let fecha = document.getElementById("fecha");
let hoy = new Date();
const api_url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
function traer() {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((res) => res.json())
    .then((date) => {
      console.log(date[0].casa.compra);
      DOcompra.innerHTML = `<p> Compra<br>${date[0].casa.compra}</p>`;
      DOventa.innerHTML = `<p> Venta<br>${date[0].casa.venta}</p>`;
      DOvariacion.innerHTML = `<p>Variacion : ${date[0].casa.variacion}</p>`;
      fecha.innerHTML = `<p>${hoy.toDateString()}</p>`;
    });
}

traer();
async function Dolar_Blue() {
  const Respuesta = await fetch(api_url);
  const Data = await Respuesta.json();
  document.getElementById("Compra_Blue").textContent = Data[1].casa.compra;
  document.getElementById("Venta_Blue").textContent = Data[1].casa.venta;
  document.getElementById("Variacion_Blue").textContent =
    Data[1].casa.variacion;
  document.getElementById("Fecha").textContent = hoy;
}
Dolar_Blue();
async function Mostrar_Consola() {
  const Respuesta = await fetch(api_url);
  const Data = await Respuesta.json();

  console.log(Data[1]);
  console.log(Data[1].casa.compra);
  console.log(Data[1].casa.venta);
  console.log(Data[1].casa.variacion);
}
Mostrar_Consola();
