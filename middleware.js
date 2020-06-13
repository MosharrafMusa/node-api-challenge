function checkValidProject(req, res, next) {
  validProps = new Set(["name", "description"]);
  for (const prop in req.body) {
    if (!validProps.has(prop)) {
      return res
        .status(400)
        .json({ message: `${prop} doesn't belong in here!` });
    }
  }
  next();
}

module.exports = {
  checkValidProject,
};
