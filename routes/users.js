const express = require("express");
const User = require("../models/user");

const router = express.Router();

router
    .get("/", async (req, res, next) => {
        try {
            const user = await User.findAll();

            res.render("user", { user });
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post("/", async (req, res, next) => {
        try {
            const user = await User.create({
                user_id: req.body.user_id,
                user_password: req.body.user_password,
                user_name: req.body.user_name,
                user_age: req.body.user_age,
                user_area: req.body.user_area,
                user_gender: req.body.user_gender,
                user_mail: req.body.user_mail,
                user_position: req.body.user_position,
                user_team: req.body.user_team,
                user_aboutMe: req.body.user_aboutMe,
                user_grade: req.body.user_grade,
            });

            res.redirect("/user");

            // res.status(201).json(user);
        } catch (err) {
            console.error(err);
        }
    });

router
    .get("/edit/:user_id", async (req, res, next) => {
        try {
            const user = await User.findAll({
                where: {
                    user_id: req.params.user_id,
                },
            });
            res.render("edit", { user });
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post("/edit/:user_id", async (req, res, next) => {
        try {
            const user = await User.update(
                {
                    user_id: req.body.user_id,
                    user_password: req.body.user_password,
                    user_name: req.body.user_name,
                    user_age: req.body.user_age,
                    user_area: req.body.user_area,
                    user_gender: req.body.user_gender,
                    user_mail: req.body.user_mail,
                    user_position: req.body.user_position,
                    user_team: req.body.user_team,
                    user_aboutMe: req.body.user_aboutMe,
                    user_grade: req.body.user_grade,
                },
                {
                    where: { user_id: req.params.user_id },
                }
            );
            res.redirect("/user");
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .delete("/:user_id", async (req, res, next) => {
        try {
            const user = await User.destroy({
                where: { user_id: req.params.user_id },
            });
            res.redirect();
        } catch (err) {
            console.error(err);
        }
    });

// router
//     .get("/:user_id", async (req, res, next) => {
//         try {
//             const user = await User.findAll({
//                 where: {
//                     user_id: req.params.user_id,
//                 },
//             });
//         } catch (err) {
//             console.error(err);
//             next(err);
//         }
//     })
//     .delete("/:user_id", async (req, res, next) => {
//         try {
//             const user = await User.destroy(
//                 {
//                     user_id: req.body.user_id,
//                     user_password: req.body.user_password,
//                     user_name: req.body.user_name,
//                     user_age: req.body.user_age,
//                     user_area: req.body.user_area,
//                     user_gender: req.body.user_gender,
//                     user_mail: req.body.user_mail,
//                     user_position: req.body.user_position,
//                     user_team: req.body.user_team,
//                     user_aboutMe: req.body.user_aboutMe,
//                     user_grade: req.body.user_grade,
//                 },
//                 {
//                     where: { user_id: req.params.user_id },
//                 }
//             );
//             res.redirect("user");
//         } catch (err) {
//             console.error(err);
//             next(err);
//         }
//     });

router.get("/:user_id", async (req, res, next) => {
    try {
        const user = await User.findAll({
            where: {
                user_id: req.params.user_id,
            },
        });
        res.json(user);
    } catch (error) {
        console.error(err);
        next(err);
    }
});
module.exports = router;
