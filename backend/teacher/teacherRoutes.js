const express = require("express");
const router = express.Router();
const teacherModel = require("./teacherSchema");

router.get("/test", (req, res) => res.json({msg: "instructor Works"}));

//
router.get("/all", (req, res) => {
    teacherModel.find((err, instructor) => {
        if (err) {
            console.log(err);
        } else {
            res.json(instructor);
        }
    });
});

//Get Instructor By ID
router.get("/edit/:id", (req, res) => {
    let id = req.params.id;
    teacherModel.findById(id, (err, instructor) => {
        res.json(instructor);
    });
});

//add new Instructor
router.post("/add", (req, res) => {
    let instructormodel = new teacherModel(req.body);

    instructormodel
        .save()
        .then(instructor => {
            res.status(200).json({teacher: "instructor added successfully"});
        })
        .catch(err => {
            res.status(400).send("adding new instructor failed");
        });
});

//Update instructor
router.post("/update/:id", (req, res) => {
    teacherModel.findById(req.params.id, (err, instructor) => {
        if (!instructor) {
            res.status(404).send("data is not found");
        } else {
            instructor.name = req.body.name;
            instructor.mail = req.body.mail;
            instructor.contactNumber = req.body.number;
            instructor.dept = req.body.dept;
            instructor.title = req.body.title;
            instructor.password = req.body.password;

            instructor
                .save()
                .then(instructor => {
                    res.json("instructor updated");
                })
                .catch(err => {
                    res.status(400).send("updated not successfully");
                });
        }
    });
});

//instructor Delete
router.delete("/delete/:id", (req, res) => {
    teacherModel.findOneAndDelete(
        {_id: req.params.id},
        (err, instructor) => {
            if (err) {
                res.json(err);
            } else {
                res.json("deleted successfully");
            }
        }
    );
});

module.exports = router;
