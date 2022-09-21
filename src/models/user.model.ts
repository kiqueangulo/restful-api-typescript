import mongoose, { HydratedDocument } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// Check this section due to adjustments with documentation
userSchema.pre<HydratedDocument<UserDocument>>("save", async function (next) {
  let user = this as UserDocument;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;

  return next();
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
