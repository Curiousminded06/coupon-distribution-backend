const cooldownPeriod = 3600000; // 1 hour in milliseconds
const claimTracking = {};

export const preventAbuse = (req, res, next) => {
  const ip = req.ip;
  console.log(ip);
  const lastClaimTime = claimTracking[ip];

  if (lastClaimTime && Date.now() - lastClaimTime < cooldownPeriod) {
    return res.status(429).json({ message: `Wait ${(cooldownPeriod - (Date.now() - lastClaimTime)) / 60000} minutes.` });
  }

  claimTracking[ip] = Date.now();
  next();
};
