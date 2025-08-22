import createAPP from "./app.js";

const port = process.env.PORT;
const app = createAPP();

app.listen(port, () => {
  console.log("Server running");
});

