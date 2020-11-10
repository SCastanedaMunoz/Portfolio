const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/webdev", (req, res) => {
    res.render("webdev");
});

module.exports = router;