const express = require("express");
const router = express.Router();
const db = require("../../database");

/* Get all the brands from the database */
router.get("/", async (req, res, next) => {
  let brandList;
  try {
    brandList = await db.select().from("brand");
  } catch (error) {
    return next(error);
  }
  /* Return status 200 and the brand list */
  return res.status(200).send(brandList);
});

/* Insert a new brand to the database */
router.post("/", async (req, res, next) => {
  let newBrand;
  try {
    newBrand = await db("brand").insert(req.body);
  } catch (error) {
    return next(error);
  }
  /* Return the brand id just inserted */
  return res.status(200).send(newBrand);
});

/* Update the brand information */
router.put("/:id", async (req, res, next) => {
    try {
      updateBrand = await db("brand")
        .where({ id: req.params.id })
        .update(req.body);
    } catch (error) {
      return next(error);
    }

    return res.sendStatus(200);
});

/* Delete a brand from the list */
router.delete("/:id", async (req, res, next) => {
  try {
    deleteCourse = await db("brand")
      .where({ id: req.params.id })
      .del();
  } catch (error) {
    return next(error);
  }
  return res.status(200).json({ deleted: true });
});

module.exports = router;
