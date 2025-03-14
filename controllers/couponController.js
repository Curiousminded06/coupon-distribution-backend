import Coupon from "../models/couponModel.js";

export const claimCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOneAndUpdate(
      { isClaimed: false },
      { isClaimed: true, claimedBy: req.ip, claimedAt: new Date() },
      { new: true }
    );

    if (!coupon) {
      return res.status(400).json({ message: "No available coupons." });
    }

    res.json({ message: `You received coupon: ${coupon.code}` });
  } catch (error) {
    res.status(500).json({ message: "Error claiming coupon." });
  }
};
