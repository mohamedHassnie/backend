const express = require("express");
//const readline = require("linebyline");
const readline = require("readline");
const fs = require("fs");
const util = require("util");
const path = require("path");
const router = express.Router();
const AnalyseGenetique = require("../models/BaseNucleotide");

const userCsv = require("../models/UserCsv");
const log = require("../models/log_file");

const { success } = require("consola");
const uploadFileToServerStorage = (file, name, storage) => {
  return new Promise((resolve, reject) => {
    file.mv(`./uploads${storage}/${name}`, (err, data) => {
      if (err) reject(err.message);
      else {
        success({ message: `${name} uploaded successfully`, badge: true });
        resolve();
      }
    });
  });
};
const treatFile = async (file) => {
  try {
    uploadFileToServerStorage(file, file.name, "VCF");
    var FILE_USER_PATH = path.join(
      __dirname,
      "../uploadsCSV/",
      file.name.split(".")[0] + ".csv"
    );
    var FILE_CHROMO_USER_PATH = path.join(
      __dirname,
      "../uploadsVCF/",
      file.name.split(".")[0] + ".vcf"
    );
    // newPath = log.create({
    //   pathCsv: FILE_USER_PATH,
    //   pathVcf: FILE_CHROMO_USER_PATH,
    //   name: file.name,
    // });

    const userdata = fs.readFileSync(FILE_USER_PATH).toLocaleString();
    const rows = userdata.split("\n"); // SPLIT ROWS
    console.log(rows[1]);
    const Barcode = rows[0].split(";")[1];
    const Name = rows[4].split(";")[1];
    const ID_Passport = rows[5].split(";")[1];
    const Nationality = rows[6].split(";")[1];
    const Gender = rows[7].split(";")[1];
    // const Email_address = rows[9].split(";")[1];
    // const Contact_number = rows[10].split(";")[1];
    //const Physical_Address = rows[11].split(";")[1];
    const Country_of_Origin = rows[14].split(";")[1];

    const Do_you_drink_Alcohol_You = rows[16].split(";")[1];
    const Do_you_drink_Alcohol_Father = rows[16].split(";")[2];
    const Do_you_drink_Alcohol_MOther = rows[16].split(";")[3];
    const Have_you_ever_smoked_You = rows[17].split(";")[1];
    const Have_you_ever_smoked_Father = rows[17].split(";")[2];
    const Have_you_ever_smoked_MOther = rows[17].split(";")[3];
    const Do_you_currently_smoke_You = rows[18].split(";")[1];
    const Do_you_currently_smoke_Father = rows[18].split(";")[2];
    const Do_you_currently_smoke_MOther = rows[18].split(";")[3];
    const Breast_cancer_You = rows[26].split(";")[1];
    const Breast_cancer_Father = rows[26].split(";")[2];
    const Breast_cancer_Mother = rows[26].split(";")[3];
    const Breast_cancer_Child = rows[26].split(";")[4];
    const Colon_rectal_colorectal_cancer_You = rows[27].split(";")[1];
    const Colon_rectal_colorectal_cancer_Father = rows[27].split(";")[2];
    const Colon_rectal_colorectal_cancer_Mother = rows[27].split(";")[3];
    const Colon_rectal_colorectal_cancer_Child = rows[27].split(";")[4];
    const Female_reproductive_cancer_You = rows[28].split(";")[1];
    const Female_reproductive_cancer_Father = rows[28].split(";")[2];
    const Female_reproductive_cancer_Mother = rows[28].split(";")[3];
    const Female_reproductive_cancer_Child = rows[28].split(";")[4];
    const Liver_cancer_You = rows[29].split(";")[1];
    const Liver_cancer_Father = rows[29].split(";")[2];
    const Liver_cancer_Mother = rows[29].split(";")[3];
    const Liver_cancer_Child = rows[29].split(";")[4];
    const Lung_cancer_You = rows[30].split(";")[1];
    const Lung_cancer_Father = rows[30].split(";")[2];
    const Lung_cancer_Mother = rows[30].split(";")[3];

    const Lung_cancer_Child = rows[30].split(";")[4];

    const Pancreatic_cancer_You = rows[31].split(";")[1];

    const Pancreatic_cancer_Father = rows[31].split(";")[2];

    const Pancreatic_cancer_Mother = rows[31].split(";")[3];

    const Pancreatic_cancer_Child = rows[31].split(";")[4];

    const Prostate_cancer_You = rows[32].split(";")[1];

    const Prostate_cancer_Father = rows[32].split(";")[2];

    const Prostate_cancer_Mother = rows[32].split(";")[3];

    const Prostate_cancer_Child = rows[32].split(";")[4];

    const Skin_cancer_You = rows[33].split(";")[1];

    const Skin_cancer_Father = rows[33].split(";")[2];

    const Skin_cancer_Mother = rows[33].split(";")[3];

    const Skin_cancer_Child = rows[33].split(";")[4];

    const ovarian_syndrome_You = rows[35].split(";")[1];

    const ovarian_syndrome_Father = rows[35].split(";")[2];

    const ovarian_syndrome_Mother = rows[35].split(";")[3];

    const ovarian_syndrome_Child = rows[35].split(";")[4];

    const Endometriosis_You = rows[36].split(";")[1];

    const Endometriosis_Father = rows[36].split(";")[2];

    const Endometriosis_Mother = rows[36].split(";")[3];

    const Endometriosis_Child = rows[36].split(";")[4];

    const falling_pregnant_You = rows[37].split(";")[1];

    const falling_pregnant_Father = rows[37].split(";")[2];

    const falling_pregnant_Mother = rows[37].split(";")[3];

    const falling_pregnant_Child = rows[37].split(";")[4];

    const Past_miscarriages_You = rows[38].split(";")[1];

    const Past_miscarriages_Father = rows[38].split(";")[2];

    const miscarriages_Mother = rows[38].split(";")[3];

    const miscarriages_Child = rows[38].split(";")[4];

    const Currently_pregnant_You = rows[39].split(";")[1];

    const Currently_pregnant_Father = rows[39].split(";")[2];

    const Currently_pregnant_Mother = rows[39].split(";")[3];

    const Currently_pregnant_Child = rows[39].split(";")[4];

    const Reproductive_history_Menopausal_You = rows[40].split(";")[1];

    const Reproductive_history_Menopausal_Father = rows[40].split(";")[2];

    const Reproductive_history_Menopausal_Mother = rows[40].split(";")[3];

    const Reproductive_history_Menopausal_Child = rows[40].split(";")[4];

    const Reproductive_Post_menopausal_You = rows[41].split(";")[1];

    const Reproductive_Post_menopausal_Father = rows[41].split(";")[2];

    const Reproductive_Post_menopausal_Mother = rows[41].split(";")[43];

    const Reproductive_Post_menopausal_Child = rows[41].split(";")[4];

    let user = await userCsv.findOne({ Barcode });

    if (user) {
      console.log(Name, "user deja existe");
    } else {
      await userCsv.create({
        Barcode,
        Name,
        ID_Passport,
        Nationality,
        Gender,
        Country_of_Origin,
        Do_you_drink_Alcohol_You,
        Do_you_drink_Alcohol_Father,
        Do_you_drink_Alcohol_MOther,
        Have_you_ever_smoked_You,
        Have_you_ever_smoked_Father,
        Have_you_ever_smoked_MOther,
        Do_you_currently_smoke_You,
        Do_you_currently_smoke_Father,
        Do_you_currently_smoke_MOther,
        Breast_cancer_You,
        Breast_cancer_Father,
        Breast_cancer_Mother,
        Breast_cancer_Child,
        Colon_rectal_colorectal_cancer_You,
        Colon_rectal_colorectal_cancer_Father,
        Colon_rectal_colorectal_cancer_Mother,
        Colon_rectal_colorectal_cancer_Child,
        Female_reproductive_cancer_You,
        Female_reproductive_cancer_Father,
        Female_reproductive_cancer_Mother,
        Female_reproductive_cancer_Child,
        Liver_cancer_You,
        Liver_cancer_Father,
        Liver_cancer_Mother,
        Liver_cancer_Child,
        Lung_cancer_You,
        Lung_cancer_Father,
        Lung_cancer_Mother,
        Lung_cancer_Child,
        Pancreatic_cancer_You,
        Pancreatic_cancer_Father,
        Pancreatic_cancer_Mother,
        Pancreatic_cancer_Child,
        Prostate_cancer_You,
        Prostate_cancer_Father,
        Prostate_cancer_Mother,
        Prostate_cancer_Child,
        Skin_cancer_You,
        Skin_cancer_Father,
        Skin_cancer_Mother,
        Skin_cancer_Child,
        ovarian_syndrome_You,
        ovarian_syndrome_Father,
        ovarian_syndrome_Mother,
        ovarian_syndrome_Child,
        Endometriosis_You,
        Endometriosis_Father,
        Endometriosis_Mother,
        Endometriosis_Child,
        falling_pregnant_You,
        falling_pregnant_Father,
        falling_pregnant_Mother,
        falling_pregnant_Child,
        Past_miscarriages_You,
        Past_miscarriages_Father,
        miscarriages_Mother,
        miscarriages_Child,
        Currently_pregnant_You,
        Currently_pregnant_Father,
        Currently_pregnant_Mother,
        Currently_pregnant_Child,
        Reproductive_history_Menopausal_You,
        Reproductive_history_Menopausal_Father,
        Reproductive_history_Menopausal_Mother,
        Reproductive_history_Menopausal_Child,
        Reproductive_Post_menopausal_You,
        Reproductive_Post_menopausal_Father,
        Reproductive_Post_menopausal_Mother,
        Reproductive_Post_menopausal_Child,
      });
    }
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: fs.createReadStream(FILE_CHROMO_USER_PATH),
        crlfDelay: Infinity,
      });
      // let normalizedCase = {
      //   CASENS: [],
      // };
      const CASE00 = new RegExp(/0\/0:[1-14]*/gm);
      const CASE01 = new RegExp(/0\/1:[1-14]*/gm);
      const CASE11 = new RegExp(/1\/1:[1-14]*/gm);
      const CASE12 = new RegExp(/.\/.:[1-14]*/gm);
      rl.on("error", reject);
      lineCount = 0;
      rl.on("line", async (line) => {
        lineCount++;
        if (line.split("\t")[0][0] !== "#" && lineCount < 500000) {
          //console.log("Processing line number: ", lineCount);
          let qualityScore = line.split("\t")[9];
          switch (true) {
            case CASE00.test(qualityScore):
              await AnalyseGenetique.create({
                Barcode: rows[0].split(";")[1],
                ID_chrom: line.split("\t")[2],
                // POS: line.split("\t")[1],
                GénoType: line.split("\t")[3] + " | " + line.split("\t")[3],
                type: "00",
              });
            case CASE01.test(qualityScore):
              await AnalyseGenetique.create({
                ID_chrom: line.split("\t")[2],
                // POS: line.split("\t")[1],
                GénoType: line.split("\t")[3] + " | " + line.split("\t")[4],
                type: "01",
              });
            case CASE11.test(qualityScore):
              await AnalyseGenetique.create({
                Barcode: rows[0].split(";")[1],
                ID_chrom: line.split("\t")[2],
                // POS: line.split("\t")[1],
                GénoType: line.split("\t")[4] + " | " + line.split("\t")[4],
                type: "11",
              });
            // break;
            //else if (qualityScore.match(CASE12))
            case CASE12.test(qualityScore):
              await AnalyseGenetique.create({
                Barcode: rows[0].split(";")[1],
                ID_chrom: line.split("\t")[2],
                // POS: line.split("\t")[1],
                GénoType: line.split("\t")[3] + " | " + line.split("\t")[4],
                type: "information invalid",
              });
              // // break;
              // default:
              //   // normalizedCase.CASENS.push({
              await AnalyseGenetique.create({
                Barcode: rows[0].split(";")[1],
                ID_chrom: line.split("\t")[2],
                // POS: line.split("\t")[1],
                GénoType: line.split("\t")[3] + " | " + line.split("\t")[4],
                type: ".",
              });
            //  break;
          }
        }
      });

      rl.on("close", function () {
        console.log(
          "end" +
            file.name +
            "a eté stocker dans la base de donneé et supprimer dans le serveur"
        );
        resolve();
        fs.unlinkSync(FILE_USER_PATH);
        fs.unlinkSync(FILE_CHROMO_USER_PATH);
      });
    });
  } catch (error) {
    throw Error;
    //console.log("error: ", error);
    //reject(error);
    // throw Error;
  }
};

router.post("/api/analyse", async (req, res, next) => {
  if (!req.files) {
    res.send("File was not found");
  }
  const { file } = req.files;
  const responses = [];
  try {
    const execute = async (file, responses) => {
      console.log(file, "execute file");
      let response;
      const fileName = file.name.split(".")[0];
      const fileExtension = file.name.split(".")[1];

      if (fileExtension === "csv") {
        if (
          fs.existsSync(
            path.join(__dirname, "../uploadsCSV/", fileName + ".csv")
          )
        ) {
          response = `Un fichier du même nom appelé ${file.name} existe déjà !`;
        } else {
          uploadFileToServerStorage(file, file.name, "CSV");
          response = `Téléchargement du fichier CSV appelé ${file.name} au serveur...`;
        }
      } else if (fileExtension === "vcf") {
        if (
          fs.existsSync(
            path.join(__dirname, "../uploadsVCF/", fileName + ".vcf")
          )
        ) {
          response = `Un fichier du même nom appelé ${file.name} existe déjà!`;
        } else {
          if (
            fs.existsSync(
              path.join(__dirname, "../uploadsCSV/", fileName + ".csv")
            )
          ) {
            treatFile(file);
            response = `En cours d'analyse ${file.name} les fichiers ont démarré avec succès`;
          } else {
            response = `Le fichier CSV n'a pas encore été téléchargé ! Veuillez le télécharger avant de télécharger le fichier VCF appelé${file.name}!`;
          }
        }
      } else {
        response = `Extension de fichier invalide ${file.name}! accepter uniquement CSV ou VCF`;
      }
      responses.push(response);
    };

    if (Array.isArray(file)) {
      // for (const f of file) {
      //   console.log("file f est :", f);
      //   await execute(f, responses);

      //  recursivté
      console.log(file.length);
      let i = file.length;
      console.log(file[0].name, "nchoufou i");
      const executeAll = async (file, i) => {
        console.log(i, "i f recusersive");
        if (i < 0) return null;
        else {
          await execute(file[i], responses).then(() => {
            executeAll(file, i - 1);
          });
        }
      };
      executeAll(file, i - 1);
    } else {
      await execute(file, responses);
    }
    return res.json({ message: responses });
  } catch (error) {
    next(error);
    throw error;
  }
});

router.get("/api/dataUser", async (req, res) => {
  try {
    const results = await userCsv.find();
    res.send({ results });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/api/dataGT", async (req, res) => {
  try {
    const results = await AnalyseGenetique.find();
    res.send(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// router.get("/api/stats/:limit", async (req, res, next) => {
//   try {
//     const { limit } = req.params || 1000;
//     const users = await userCsv.find().limit(limit);
//     const dna = await AnalyseGenetique.find().limit(limit);

//     res.json({
//       users,
//       dna,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Json.Document(
//   Web.Contents(
//    "http://10.10.50.24:3017/api/stats/?type=dna&limit=10000&page="&[page]
//   )

router.get("/api/stats/", async (req, res, next) => {
  try {
    const limit = req.query.limit || 1000;
    const type = req.query.type || dna;
    const page = req.query.page || 1;

    let stats = null;
    switch (type) {
      case "dna":
        stats = await AnalyseGenetique.find()
          .skip((page - 1) * limit)
          .limit(limit);
        break;
      case "users":
        stats = await userCsv
          .find()
          .skip((page - 1) * limit)
          .limit(limit);
        break;
      default:
        break;
    }
    res.json(stats);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/api/getCount", async (req, res) => {
  try {
    const readdir = util.promisify(fs.readdir);
    const FILE_USER_PATH = path.join(__dirname, "../uploadsCSV/");
    const FILE_CHROMO_USER_PATH = path.join(__dirname, "../uploadsVCF/");

    let UserfileCSV = 0;
    let UserfileVCF = 0;
    const UserfileVCFRes = await readdir(FILE_CHROMO_USER_PATH);
    if (!UserfileVCFRes)
      throw new Error("Error while checking number of VCF files!");
    else UserfileVCF = UserfileVCFRes.length - 1;
    const UserfileCSVRes = await readdir(FILE_USER_PATH);
    if (!UserfileCSVRes)
      throw new Error("Error while checking number of CSV files!");
    else UserfileCSV = UserfileCSVRes.length - 1;

    data = { UserfileCSV, UserfileVCF };
    res.status(200).json(data);
  } catch (error) {
    err = res.json({ error: error.message });
  }
});

module.exports = router;
