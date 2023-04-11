// jwt passport here
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import UserServices from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    console.log(payload, "payload");
    const userEmail = payload.email;
    const foundUser = await UserServices.findUserByEmail(userEmail);
    if (!foundUser) {
      return "no user";
    }
    done(null, foundUser);
  }
);
