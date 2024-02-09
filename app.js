const express = require("express");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const profileRouter = require("./routes/profileRoutes");
const postRouter = require("./routes/postRoutes");

const app = express();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/post", postRouter);

module.exports = app;
