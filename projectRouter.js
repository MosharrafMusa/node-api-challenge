const express = require("express");

const db = require("./data/helpers/projectModel");
const router = express.Router();

const { checkValidProject } = require("./middleware");

//GET ALL PROJECT
router.get("/", async (req, res) => {
  try {
    const projects = await db.get();
    if (projects) {
      return res.status(200).json(projects);
    }
    res.status(404).json({ message: "projects not found" });
  } catch (e) {
    res.status(500).json({ message: "Error retrieving projects" });
  }
});

// GET ACTIONS BY PROJECT ID
router.get("/:id/actions", async (req, res) => {
  const id = req.params.id;
  try {
    const projects = await db.getProjectActions(id);
    if (projects) {
      return res.status(200).json(projects);
    }
    res
      .status(404)
      .json({ message: "Project with specified id does not exist" });
  } catch (e) {
    res.status(500).json({ message: "Error retrieving project information" });
  }
});

//ADD NEW PROJECT
router.post("/", checkValidProject, async (req, res) => {
  const body = req.body;
  try {
    const project = await db.insert(body);
    if (project) {
      return res.status(201).json(project);
    }
    res.status(400).json({ message: "project not found" });
  } catch (e) {
    res.status(500).json({ message: "Error adding new project" });
  }
});

//EDIT PROJECT
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const project = await db.update(id, body);
    if (project) {
      return res.status(201).json(project);
    }
    res.status(400).json({ message: "Please provide proper information" });
  } catch (e) {
    res.status(500).json({ message: "Error updating project" });
  }
});

//DELETE PROJECT
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const amountDeleted = await db.remove(id);
    if (amountDeleted > 0) {
      return res.status(201).json(amountDeleted);
    }
    res.status(400).json({ message: "Project could not found" });
  } catch (e) {
    res.status(500).json({ message: "Error removing project" });
  }
});

module.exports = router;
