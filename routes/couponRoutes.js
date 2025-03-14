import express from "express";
import { claimCoupon } from "../controllers/couponController.js";
import { preventAbuse } from "../middleware/abusePrevention.js";

const router = express.Router();

router.post("/claim", preventAbuse, claimCoupon);

export default router;
