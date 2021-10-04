const express = require("express");
const { redirect } = require("express/lib/response");
const Teams = require("../models/teams");
const Mercenary_board = require("../models/mercenary_board");

const router = express.Router();

// 구단 리스트 화면
router.route("/").get(async (req, res, next) => {
  try {
    const mercenary_board = await Mercenary_board.findAll();
    res.render("mercenary_board", { mercenary_board });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// // 구단 생성
// router
// 	.route("/create")
// 	.get(async (req, res, next) => {
// 		try {
// 			res.render("teamCreate");
// 		} catch (err) {
// 			console.error(err);
// 			next(err);
// 		}
// 	})
// 	.post(async (req, res, next) => {
// 		try {
// 			const create = await Teams.create({
// 				team_name: req.body.team_name,
// 				team_homeGround: req.body.team_homeGround,
// 				team_headCount: req.body.team_headCount,
// 				team_manner: req.body.team_manner,
// 				team_area: req.body.team_area,
// 				team_leaderId: req.body.team_leaderId,
// 				team_info: req.body.team_info,
// 			});
// 			res.redirect("/teams");
// 		} catch (err) {
// 			console.error(err);
// 			next(err);
// 		}
// 	});

// // 구단 관리
// router
//   .get("/edit/:team_name", async (req,res,next)=>{
//     try {
//       const teams = await Teams.findAll({
//         where: {
//           team_name : req.params.team_name,
//         }
//       });
//       res.render('teamEdit', {teams});
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   })
//   .post("/edit/:team_name", async(req,res,next)=>{
//     try {
//       const teams = await Teams.update(
//         {
//         // team_name: req.body.team_name,
// 				// team_homeGround: req.body.team_homeGround,
// 				team_headCount: req.body.team_headCount,
// 				// team_manner: req.body.team_manner,
// 				// team_area: req.body.team_area,
// 				// team_leaderId: req.body.team_leaderId,
// 				// team_info: req.body.team_info,
//       },
//       {
//         where: {team_name: req.params.team_name}
//       }
//       )
//       res.redirect('/teams');
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   })

// // 구단 선택 시
// router.route("/:team_name").get(async (req, res, next) => {
// 	try {
// 		const team = await Teams.findAll({
// 			where: {
// 				team_name: req.params.team_name,
// 			},
// 		});
// 		res.json(team);
// 	} catch (err) {
// 		console.error(err);
// 		next(err);
// 	}
// });

module.exports = router;
