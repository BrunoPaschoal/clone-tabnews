export default function status(request, response) {
  response.status(200).json({ key: "value" });
}
