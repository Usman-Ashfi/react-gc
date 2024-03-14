import db from "@/Config/Db";
import User from "@/Models/User";

db();

export default async function handler(req, res) {
  console.log(req.body);

  switch (req.method) {
    case "POST":
      const user = User.create(req.body);

      res.status(200).json({
        message: "created successfully",
      });

      break;

    case "GET":
      try {
        const users = await User.find();

        res.status(200).json({
          message: users,
        });
      } catch (error) {
        console.log(error)
        res.status(500).json({
          message: error,
        });
      }

      break;

    default:
      res.status(405).json({
        message: "Method Not Allowed",
      });

      break;
  }
}
