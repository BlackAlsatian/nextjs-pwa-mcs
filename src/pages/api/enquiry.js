export default function handler(req, res) {
  const body = req.body

  if (
    !body.name ||
    !body.number ||
    !body.email ||
    !body.message ||
    !body.privacy_policy
  ) {
    return res
      .status(400)
      .json({ status: 'Error', result: 'Form missing fields.' })
  }

  const result = fetch(process.env.ENQUIRY_FORM_API_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  res.status(200).json({ status: 'OK', result: result })
}
