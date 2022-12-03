import express, { Router } from "express"
import { isLoggedIn, validateRegister } from "$/middleware/user"; 

import loginUser from "$/controllers/auth.controller"
const router: Router = express.Router();


// routes/router.js

router.post('/' ,loginUser.index)
router.get('/secret-route', isLoggedIn, (req, res) => {
    console.log(req.body.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});
export default router
