const express = require('express');
const router = express.Router();
const Travel = require('../models/Travel');
const { where } = require('sequelize');

// 모든 여행지 조회
router.get("/", async (req, res) => {
  try {
    const travelList = await Travel.findAll({attributes: ['id', 'name']});

    res.render("travel", { travelList });
  } catch (err) {
    console.error("디비 쿼리 실패 : ", err);
    return res.status(500).send("Internal Server Error");
  }
});

// addTravel 페이지 보기
router.get("/add", (req, res) => {
  res.render("addTravel");
});

// 게시글 생성
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    await Travel.create({name});

    res.redirect("/travel");
  } catch (err) {
    console.error("디비 쿼리 실패 : ", err);
    return res.status(500).send("Internal Server Error");
  }
});

// 하나의 여행지 조회
router.get("/:id", async (req, res) => {
  try {
    const travelId = req.params.id;
    const travel = await Travel.findByPk(travelId);

    if (!travel) {
      return res.status(404).send('여행지를 찾을 수 없습니다.')
    }

    res.render("travelDetail", { travel });
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
});

router.get("/:id/edit", async (req, res) => {
  try {
    const travelId = req.params.id;
    const travel = await Travel.findByPk(travelId);

    res.render("editTravel", { travel });
  } catch (err) {
    console.error("디비 쿼리 실패 : ", err);
    return res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const travelId = req.params.id;
    const travel = await Travel.findByPk(travelId);

    if (!travel) {
      return res.status(404).send('여행지를 찾을 수 없습니다.')
    }
    
    const { name } = req.body;
    await travel.update({ name })

    res.render("updatedSuccess");
  } catch (err) {
    console.error("디비 쿼리 실패 : ", err);
    return res.status.apply(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const travelId = req.params.id;
    const travel = await Travel.findByPk(travelId);

    if (!travel) {
      return res.status(404).send('여행지를 찾을 수 없습니다.')
    }

    await travel.destroy();

    res.render("deletedSuccess");
  } catch (err) {
    console.error("디비 쿼리 실패 : ", err);
    return res.status.apply(500).send("Internal Server Error");
  }
});

module.exports = router;
