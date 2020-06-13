const express = require("express");

const db = require("./data/helpers/actionModel");
const router = express.Router();

//GET ACTIONS
router.get("/", async (req, res) => {
  try {
    const actions = await db.get();
    if (actions) {
      return res.status(200).json(actions);
    }
    res.status(404).json({ message: "Actions not found" });
  } catch (e) {
    res.status(500).json({ message: "Error retrieving action" });
  }
});

//ADD NEW ACTION BY PROJECT ID
router.post("/:project_id", async (req, res) => {
  const project_id = req.params.project_id;
  const body = req.body;
  try {
    const action = await db.insert({ ...body, project_id });
    if (action) {
      return res.status(201).json(action);
    }
    res.status(400).json({ message: "please provide proper information" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "There was an error while saving new action" });
  }
});

//EDIT ACTION
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const action = await db.update(id, body);
    if (action) {
      return res.status(201).json(action);
    }
    res.status(400).json({ message: "the action could not found" });
  } catch (e) {
    res.status(500).json({ message: "Error updating action" });
  }
});

//DELETE ACTION
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const amountDeleted = await db.remove(id);
    if (amountDeleted > 0) {
      return res.status(201).json(amountDeleted);
    }
    res.status(400).json({ message: "action could not found" });
  } catch (e) {
    res.status(500).json({ message: "Error removing action" });
  }
});

module.exports = router;
