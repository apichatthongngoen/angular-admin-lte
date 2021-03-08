const { writeFile } = require("fs");
const { argv } = require("yargs");
require("dotenv").config();
const environment = argv.environment;
const isProduction = environment === "prod";
let environmentFileContent;
let targetPath;
if (isProduction == true) {
  targetPath = "./src/environments/environment.prod.ts";
  environmentFileContent = `
  export const environment = {
     production: ${isProduction},
     apiHost:'${process.env.apiHost}',
     KPHSMartCardReaderHost: '${process.env.KPHSMartCardReaderHost}',
     KPHGTTSServerHost: '${process.env.KPHGTTSServerHost}',
  };
  `;
} else {
  targetPath = "./src/environments/environment.ts";
  environmentFileContent = `
  export const environment = {
     production: ${isProduction},
     apiHost:'${process.env.apiHostLocal}',
     KPHSMartCardReaderHost: '${process.env.KPHSMartCardReaderHost}',
     KPHGTTSServerHost: '${process.env.KPHGTTSServerHostLocal}',
  };
  `;
}

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
