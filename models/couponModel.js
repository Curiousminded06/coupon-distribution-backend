import mongoose from "mongoose";

const couponSchema = mongoose.Schema({
  code: { type: String, required: true },
  isClaimed: { type: Boolean, default: false },
  claimedBy: { type: String, default: null },
  claimedAt: { type: Date, default: null },
});

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
