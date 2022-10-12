export default async function handleForm (req, res) {
  res.status(200).json(req.body)
  console.log(req.body)
}
