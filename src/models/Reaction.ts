import mongoose, { Schema, Document, Model } from "mongoose";

export type ReactionValue = "like" | "too_pricey" | "find_alternative";
export type ReactionItemType = "stay" | "flight";

export interface IReaction extends Document {
  name: string;
  itemType: ReactionItemType;
  itemId: string;
  value: ReactionValue;
  createdAt: Date;
}

const ReactionSchema = new Schema<IReaction>(
  {
    name: { type: String, required: true, trim: true, maxlength: 60 },
    itemType: { type: String, required: true, enum: ["stay", "flight"] },
    itemId: { type: String, required: true, trim: true, maxlength: 80 },
    value: {
      type: String,
      required: true,
      enum: ["like", "too_pricey", "find_alternative"],
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

// One reaction per person per item — re-reacting replaces the previous one.
ReactionSchema.index({ name: 1, itemId: 1 }, { unique: true });

export const Reaction: Model<IReaction> =
  mongoose.models.Reaction ?? mongoose.model<IReaction>("Reaction", ReactionSchema);
