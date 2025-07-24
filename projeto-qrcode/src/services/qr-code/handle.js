import qr from "qrcode-terminal";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import QRCode from "qrcode";

function isValidUrl(link) {
  return link.startsWith("http://") || link.startsWith("https://");
}

async function handle(result) {
  const link = result.link.trim();
  const isSmall = result.type == 2;

  if (!isValidUrl(link)) {
    console.log(chalk.red("❌ Link inválido! Certifique-se de que ele começa com http:// ou https://"));
    return;
  }

  // Gerar QR Code no terminal
  qr.generate(link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("✅ QR Code gerado com sucesso no terminal:\n"));
    console.log(qrcode);
  });

  // Gerar QR Code como imagem .png
  const outputPath = path.resolve("qrcode.png");

  try {
    await QRCode.toFile(outputPath, link, {
      width: 300,
    });

    console.log(chalk.green(`🖼️  QR Code também salvo em ${outputPath}`));
  } catch (err) {
    console.log(chalk.red("❌ Erro ao salvar QR Code como imagem"), err);
  }
}

export default handle;
