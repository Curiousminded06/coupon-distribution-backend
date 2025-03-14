# 🎟️ Round-Robin Coupon Distribution - Backend

## 🚀 Overview
This backend API distributes coupons **sequentially** while preventing abuse using **IP & cookie tracking**.

## 🛠️ Setup
1. **Clone the repo:**
   ```sh
   git clone https://github.com/Curiousminded06/coupon-distribution-backend && 
   cd coupon-distribution-backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up `.env` file:**
   ```sh
   MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/coupons-db
   PORT=5000
   ```
4. **Start the server:**
   ```sh
   npm start
   ```

## 🔌 API Endpoints
- **Claim a coupon** → `POST /api/coupons/claim`
- Prevents multiple claims within an hour

## 🌍 Deployment
- **Recommended:** [Render](https://render.com/) / [Railway](https://railway.app/)
- Set `MONGO_URI`, deploy, and get your API live at:
```
https://coupon-distribution-backend-hltc.onrender.com/
```

## 📩 Contact
🔗 **GitHub**: [Sahil Dale](https://github.com/Curiousminded06/)

