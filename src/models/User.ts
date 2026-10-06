import mongoose, { Schema, Document, Model } from "mongoose";

export type UserRole = "admin" | "member";

export interface IUser extends Document {
  name: string;
  email?: string;
  role: UserRole;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true, maxlength: 60, unique: true },
    email: { type: String, trim: true, maxlength: 120 },
    role: { type: String, required: true, enum: ["admin", "member"], default: "member" },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const User: Model<IUser> =
  mongoose.models.User ?? mongoose.model<IUser>("User", UserSchema);
