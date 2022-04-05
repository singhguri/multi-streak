import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const user = await db
    .collection("users")
    .find({ _id: req.params.id, isActive: true });

  res.json(user);
};
