const express = require("express");
const router = express.Router();
const User = require("../models/Administration");
const Patient = require("../models/patient");

const auth = require("../middleware/auth");

router.get("/api/info", auth.verifyToken, async (req, res, next) => {
  const now = new Date().toISOString().slice(0, 10);
  try {
    const nbuser = await User.count({ created_at: now });
    const nbuserA = await User.count({ created_at: now, role: "analyste" });
    const nbuserMark = await User.count({ created_at: now, role: "markiting" });
    const nbPation = await Patient.count();

    const data = { nbuser, nbuserA, nbuserMark, nbPation };
    if (data) {
      res.status(200).json({ data });
    } else res.status(200).json({ err });
  } catch (err) {
    next(err);
  }
});

router.get("/api/activeUser", async (req, res, next) => {
  const now = new Date().getFullYear();

  try {
    var months = [
      {
        January: await User.count({
          created_at: new RegExp(".*" + now + "-01" + ".*"),
        }),
        February: await User.count({
          created_at: new RegExp(".*" + now + "-02" + ".*"),
        }),
        March: await User.count({
          created_at: new RegExp(".*" + now + "-03" + ".*"),
        }),
        April: await User.count({
          created_at: new RegExp(".*" + now + "-04" + ".*"),
        }),
        May: await User.count({
          created_at: new RegExp(".*" + now + "-05" + ".*"),
        }),
        June: await User.count({
          created_at: new RegExp(".*" + now + "-06" + ".*"),
        }),
        July: await User.count({
          created_at: new RegExp(".*" + now + "-07" + ".*"),
        }),
        August: await User.count({
          created_at: new RegExp(".*" + now + "-08" + ".*"),
        }),
        September: await User.count({
          created_at: new RegExp(".*" + now + "-09" + ".*"),
        }),
      },
    ];
    const data = { months };
    if (data) {
      res.status(200).json(data);
    } else res.status(500).json({ err });
  } catch (err) {
    next(err);
  }
});

router.get("/api/analyste", async (req, res, next) => {
  const now = new Date().getFullYear();
  try {
    var months = [
      {
        January: await User.count({
          created_at: new RegExp(".*" + now + "-01" + ".*"),
          role: "analyste",
        }),
        February: await User.count({
          created_at: new RegExp(".*" + now + "-02" + ".*"),
          role: "analyste",
        }),
        March: await User.count({
          created_at: new RegExp(".*" + now + "-03" + ".*"),
          role: "analyste",
        }),
        April: await User.count({
          created_at: new RegExp(".*" + now + "-04" + ".*"),
          role: "analyste",
        }),
        May: await User.count({
          created_at: new RegExp(".*" + now + "-05" + ".*"),
          role: "analyste",
        }),
        June: await User.count({
          created_at: new RegExp(".*" + now + "-06" + ".*"),
          role: "analyste",
        }),
        July: await User.count({
          created_at: new RegExp(".*" + now + "-07" + ".*"),
          role: "analyste",
        }),
        August: await User.count({
          created_at: new RegExp(".*" + now + "-08" + ".*"),
          role: "analyste",
        }),
        Octobre: await User.count({
          created_at: new RegExp(".*" + now + "-09" + ".*"),
          role: "analyste",
        }),
        Novembre: await User.count({
          created_at: new RegExp(".*" + now + "-10" + ".*"),
          role: "analyste",
        }),
        Decembre: await User.count({
          created_at: new RegExp(".*" + now + "-11" + ".*"),
          role: "analyste",
        }),
        September: await User.count({
          created_at: new RegExp(".*" + now + "-12" + ".*"),
          role: "analyste",
        }),
      },
    ];
    const data = { months };
    if (data) {
      res.status(200).json(data);
    } else res.status(500).json({ err });
  } catch (err) {
    next(err);
  }
});

router.get("/api/markiting", async (req, res, next) => {
  const now = new Date().getFullYear();
  try {
    var months = [
      {
        January: await User.count({
          created_at: new RegExp(".*" + now + "-01" + ".*"),
          role: "markiting",
        }),
        February: await User.count({
          created_at: new RegExp(".*" + now + "-02" + ".*"),
          role: "markiting",
        }),
        March: await User.count({
          created_at: new RegExp(".*" + now + "-03" + ".*"),
          role: "markiting",
        }),
        April: await User.count({
          created_at: new RegExp(".*" + now + "-04" + ".*"),
          role: "markiting",
        }),
        May: await User.count({
          created_at: new RegExp(".*" + now + "-05" + ".*"),
          role: "markiting",
        }),
        June: await User.count({
          created_at: new RegExp(".*" + now + "-06" + ".*"),
          role: "markiting",
        }),
        July: await User.count({
          created_at: new RegExp(".*" + now + "-07" + ".*"),
          role: "markiting",
        }),
        August: await User.count({
          created_at: new RegExp(".*" + now + "-08" + ".*"),
          role: "markiting",
        }),
        September: await User.count({
          created_at: new RegExp(".*" + now + "-09" + ".*"),
          role: "markiting",
        }),
        Octobre: await User.count({
          created_at: new RegExp(".*" + now + "-10" + ".*"),
          role: "markiting",
        }),
        Novembre: await User.count({
          created_at: new RegExp(".*" + now + "-11" + ".*"),
          role: "markiting",
        }),
        Decembre: await User.count({
          created_at: new RegExp(".*" + now + "-12" + ".*"),
          role: "markiting",
        }),
      },
    ];
    const data = { months };
    if (data) {
      res.status(200).json(data);
    } else res.status(500).json({ err });
  } catch (err) {
    next(err);
  }
});
router.get("/api/Patient", async (req, res, next) => {
  const now = new Date().getFullYear();
  try {
    var months = [
      {
        January: await Patient.count({
          created_at: new RegExp(".*" + now + "01" + ".*"),
          // role: "patient",
        }),
        February: await Patient.count({
          created_at: new RegExp(".*" + now + "02" + ".*"),
          role: "patient",
        }),
        March: await Patient.count({
          created_at: new RegExp(".*" + now + "03" + ".*"),
          role: "patient",
        }),
        April: await Patient.count({
          created_at: new RegExp(".*" + now + "04" + ".*"),
          role: "patient",
        }),
        May: await Patient.count({
          created_at: new RegExp(".*" + now + "05" + ".*"),
          role: "patient",
        }),
        June: await Patient.count({
          created_at: new RegExp(".*" + now + "06" + ".*"),
          role: "patient",
        }),
        July: await Patient.count({
          created_at: new RegExp(".*" + now + "07" + ".*"),
          role: "patient",
        }),
        August: await Patient.count({
          created_at: new RegExp(".*" + now + "08" + ".*"),
          role: "patient",
        }),
        September: await Patient.count({
          created_at: new RegExp(".*" + now + "09" + ".*"),
          role: "patient",
        }),
        Octobre: await Patient.count({
          created_at: new RegExp(".*" + now + "10" + ".*"),
          role: "patient",
        }),
        Novembre: await Patient.count({
          created_at: new RegExp(".*" + now + "11" + ".*"),
          role: "patient",
        }),
        Decembre: await Patient.count({
          created_at: new RegExp(".*" + now + "-12" + ".*"),
          role: "patient",
        }),
      },
    ];
    const data = { months };
    if (data) {
      res.status(200).json(data);
    } else res.status(500).json({ err });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
