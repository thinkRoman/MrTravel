import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISuggestion extends Document {
  name: string;
  dateAffected: string;
  place: string;
  changeType: string;
  details: string;
  createdAt: Date;
}

const SuggestionSchema = new Schema<ISuggestion>(
  {
    name: { type: String, required: true, trim: true, maxlength: 60 },
    dateAffected: { type: String, required: true, trim: true, maxlength: 60 },
    place: { type: String, required: true, trim: true, maxlength: 120 },
    changeType: { type: String, required: true, trim: true, maxlength: 60 },
    details: { type: String, required: true, trim: true, maxlength: 2000 },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const Suggestion: Model<ISuggestion> =
  mongoose.models.Suggestion ?? mongoose.model<ISuggestion>("Suggestion", SuggestionSchema);
