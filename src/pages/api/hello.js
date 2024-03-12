export default function handler(req, res) {
  console.log(req.body);

  switch (req.method) {
    case "GET":
      var data = req.body;
      console.log();

      res.status(201).json({
        message: data.num + data.num2,
      });
      break;

    default:
      res.status(405).json({
        message: "Method Not Allowed",
      });

      break;
  }
}
