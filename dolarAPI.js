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
  document.getElementById("Fecha_B").textContent = hoy.toDateString();
}
Dolar_Blue();
async function Dolar_Liqui() {
  const Respuesta = await fetch(api_url);
  const Data = await Respuesta.json();
  document.getElementById("Compra_Liqui").textContent = Data[3].casa.compra;
  document.getElementById("Venta_Liqui").textContent = Data[3].casa.venta;
  document.getElementById("Variacion_Liqui").textContent =
    Data[3].casa.variacion;
  document.getElementById("Fecha_L").innerText = hoy.toDateString();
}
Dolar_Liqui();
async function Dolar_Promedio() {
  const Respuesta = await fetch(api_url);
  const Data = await Respuesta.json();
  document.getElementById("Compra_Promedio").textContent = Data[7].casa.compra;
  document.getElementById("Venta_Promedio").textContent = Data[7].casa.venta;
  document.getElementById("Variacion_Promedio").textContent =
    Data[7].casa.variacion;
  document.getElementById("Fecha_P").innerText = hoy.toDateString();
}
Dolar_Promedio();
async function Dolar_Bolsa() {
  const Respuesta = await fetch(api_url);
  const Data = await Respuesta.json();
  document.getElementById("Compra_Bolsa").textContent = Data[4].casa.compra;
  document.getElementById("Venta_Bolsa").textContent = Data[4].casa.venta;
  document.getElementById("Variacion_Bolsa").textContent =
    Data[4].casa.variacion;
  document.getElementById("Fecha_Bolsa").innerText = hoy.toDateString();
}
Dolar_Bolsa();
async function Dolar_Turista() {
  const Respuesta = await fetch(api_url);
  const Data = await Respuesta.json();
  document.getElementById("Compra_Turista").textContent = Data[6].casa.compra;
  document.getElementById("Venta_Turista").textContent = Data[6].casa.venta;
  document.getElementById("Variacion_Turista").textContent =
    Data[6].casa.variacion;
  document.getElementById("Fecha_Turista").innerText = hoy;
}
Dolar_Turista();
async function Mostrar_Consola() {
  const Respuesta = await fetch(api_url);
  const Data = await Respuesta.json();

  console.log(Data[6]);
  console.log(Data[7].casa.compra);
  console.log(Data[7].casa.venta);
  console.log(Data[7].casa.variacion);
}
Mostrar_Consola();
