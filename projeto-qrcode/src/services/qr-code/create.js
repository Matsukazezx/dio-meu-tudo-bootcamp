import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  prompt.start();

  prompt.get(promptSchemaQRCode, async (err, result) => {
    if (err) {
      console.log("Erro ao capturar entrada");
      return;
    }

    await handle(result); 
  });
}

export default createQRCode;
