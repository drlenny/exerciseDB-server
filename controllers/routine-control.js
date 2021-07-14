// const Routine = require('../models/routine-model')

// getRoutines = async (req, res) => {
//     await Routine.find({}, (err, routines) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!routines.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Routine not found` })
//         }
//         return res.status(200).json({ success: true, data: routines })
//     }).catch(err => console.log(err))
// }

// module.exports = {
//     getRoutines
// }