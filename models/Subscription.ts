import mongoose, { Schema, Document, Model, models } from "mongoose";

export interface ISubscription extends Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const subscriptionSchema: Schema<ISubscription> = new Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);

const Subscription: Model<ISubscription> = models.Subscription || mongoose.model<ISubscription>("Subscription", subscriptionSchema);

export default Subscription;
