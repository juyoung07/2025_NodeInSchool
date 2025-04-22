const express = require("express");
const router = express.Router();
const db = require("../database/database");

// 모든 여행지 조회
router.get("/", async (req, res) => {
  try {
    const query = "SELECT id, name FROM travelList";
    const [results] = await db.query(query);
    const travelList = results;

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
    const query = "INSERT INTO travelList (name) VALUE (?)";
     await db.query(query, [name]);

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
    const query = "SELECT * FROM travelList WHERE id = ? ";
    const results = await db.query(query, travelId);
    if (results.length === 0) {
      return res.status(404).send('여행지를 찾을 수 없습니다.')
    }
    const travel = results[0]
    res.render("travelDetail", { travel });
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
});

router.get("/:id/edit", async (req, res) => {
  try {
    const travelId = req.params.id;
    const query = "SELECT * FROM travelList WHERE id = ? ";
    const [results] = await db.query(query, travelId);
    const travel = results[0];

    res.render("editTravel", { travel });
  } catch (err) {
    console.error("디비 쿼리 실패 : ", err);
    return res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const travelId = req.params.id;
    const { name } = req.body;
    const query = "UPDATE travelList SET name=? WHERE id=?";
    await db.query(query, [name, travelId]);

    res.render("updatedSuccess");
  } catch (err) {
    console.error("디비 쿼리 실패 : ", err);
    return res.status.apply(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const travelId = req.params.id;
    const query = "DELETE FROM travelList WHERE id=?";
    await db.query(query, travelId);

    res.render("deletedSuccess");
  } catch (err) {
    console.error("디비 쿼리 실패 : ", err);
    return res.status.apply(500).send("Internal Server Error");
  }
});

module.exports = router;
