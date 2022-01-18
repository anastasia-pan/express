const router = require("express").Router();

const staff = [
  { name: "Bob", age: 34, id: 1 },
  { name: "Sally", age: 45, id: 2 },
  { name: "Jo", age: 24, id: 3 },
];

// router.get("/", (req, res) => res.status(200).get("Accounting"));

router.get("/", (req, res) => res.status(200).json(staff));

router.get("/:name", (req, res) => {
  console.log(req.params);
  res.status(200).json({ name: req.params.name });
});
const getId = () => Math.floor(Math.random() * 100);

router.get("/:name/:age/id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    person: {
      name: req.params.name,
      age: req.params.age,
      id: getId(),
    },
  });
});

module.exports = router;
