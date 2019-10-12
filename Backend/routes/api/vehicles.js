const express = require("express");
const router = express.Router();
const db = require("../../database");

/* Get all the vehicle list from the database */
router.get("/", async (req, res, next) => {
  let vehicleList;
  try {
    vehicleList = await db.select().from("vehicle");
  } catch (error) {
    return next(error);
  }
  /* Return status 200 and the vehicle list */
  return res.status(200).send(vehicleList);
});

/* Get an unique vehicle from the list */
router.get('/:id', async (req, res, next) => {
    let selectedVehicle
    try {
        selectedVehicle = await
        db('vehicle').where({id:req.params.id}).select()
    } catch (error) {
        return next(error)
    }
    return res.status(200).send(selectedVehicle)
})

/* Insert a new vehicle to the database */
router.post("/", async (req, res, next) => {
  let newVehicle;
  try {
    newVehicle = await db("vehicle").insert(req.body);
  } catch (error) {
    return next(error);
  }
  /* Return the vehicle id just inserted */
  return res.status(200).send(newVehicle);
});

/* Update the vehicle information */
router.put("/:id", async (req, res, next) => {
    try {
      updateVehicle = await db("vehicle")
        .where({ id: req.params.id })
        .update(req.body);
    } catch (error) {
      return next(error);
    }

    return res.sendStatus(200);
});

/* Delete a vehicle from the list */
router.delete("/:id", async (req, res, next) => {
  try {
    deleteCourse = await db("vehicle")
      .where({ id: req.params.id })
      .del();
  } catch (error) {
    return next(error);
  }
  return res.status(200).json({ deleted: true });
});

module.exports = router;
