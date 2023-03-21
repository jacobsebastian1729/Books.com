// server here
import Express from "express";
import cors from "cors";
import passport from "passport";

import productRouter from "./routes/products";
import userRouter from "./routes/users";
import orderRouter from "./routes/orders";
import commentRouter from "./routes/comments";

const app = Express();

app.use(Express.json());

app.use(cors());
app.use(passport.initialize());

app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/comments", commentRouter);

export default app;
