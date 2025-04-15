const express = require("express");
const router = express.Router();
const db = require("../database/database");


// 모든 여행지 조회
router.get("/", (req, res) => {
  const query = "SELECT id, name FROM travelList";
  db.query(query, (err, results) => {
    if (err) {
      console.error("디비 쿼리 실패 : ", err);
      return res.status(500).send("Internal Server Error");
    }
    const travelList = results;
    res.render("travel", { travelList });
  });
});

// addTravel 페이지 보기
router.get("/add", (req, res) => {
  res.render("addTravel");
});

// 게시글 생성
router.post("/", (req, res) => {
  const { name } = req.body;
  const query = "INSERT INTO travelList (name) VALUE (?)";
  db.query(query, [name], (err, results) => {
    if (err) {
      console.error("디비 쿼리 실패 : ", err);
      return res.status(500).send("Internal Server Error");
    }

    res.redirect("/travel");
  });
});

// 하나의 여행지 조회
router.get("/:id", (req, res) => {
  const travelId = req.params.id;
  const query = "SELECT * FROM travelList WHERE id = ? ";
  db.query(query, [travelId], (err, results) => {
    if (err) {
      console.error("디비 쿼리 실패 : ", err);
      return res.status(500).send("Internal Server Error");
    }
    if (results.length === 0) {
      return res.status(404).send("여행지를 찾을 수 없습니다.");
    }
    const travel = results[0]; // 배열에서 꺼내기
    res.render("travelDetail", { travel });
  });
});


router.get("/:id/edit", (req, res) => {
  const travelId = req.params.id;
  const query = "SELECT * FROM travelList WHERE id = ? ";
  db.query(query, [travelId], (err, results) => {
    if (err) {
      console.error("디비 쿼리 실패 : ", err);
      return res.status(500).send("Internal Server Error");
    }

    const travel = results[0];
    res.render("editTravel", { travel });
  });
});

router.put("/:id", (req, res) => {
  const travelId = req.params.id;
  const { name } = req.body;
  const query = "UPDATE travelList SET name=? WHERE id=?";
  db.query(query, [name, travelId], (err, results) => {
    if (err) {
      console.error("디비 쿼리 실패 : ", err);
      return res.status.apply(500).send("Internal Server Error");
    }

    res.render("updatedSuccess");
  });
});

router.delete("/:id", (req, res) => {
  const travelId = req.params.id;
  const query = "DELETE FROM travelList WHERE id=?";
  db.query(query, [travelId], (err, results) => {
    if (err) {
      console.error("디비 쿼리 실패 : ", err);
      return res.status.apply(500).send("Internal Server Error");
    }

    res.render("deletedSuccess");
  });
});

module.exports = router;
