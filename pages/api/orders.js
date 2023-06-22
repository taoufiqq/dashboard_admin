import { Order } from "@/models/Order";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  await mongooseConnect();
  res.json(await Order.find().sort({ createdAt: -1 }));
}
