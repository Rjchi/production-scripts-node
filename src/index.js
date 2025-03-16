import express from "express";
const app = express();

console.log("SCRIPTS PARA PRODUCCIÓN");

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`El servidor se esta ejecutando en el puerto ${app.get("port")}`);
});
