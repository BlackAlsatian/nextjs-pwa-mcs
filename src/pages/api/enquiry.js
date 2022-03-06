export default async function handler(req, res) {
  const body = req.body

  if (body.lastname !== '') {
    return res.status(200).json({
      status: 'OK',
      result: 'Thanks.'
    })
  }
  if (
    !body.name ||
    !body.number ||
    !body.email ||
    !body.message ||
    !body.privacy_policy
  ) {
    return res.status(400).json({
      status: 'Error',
      result: 'Name, number, email or message not found.'
    })
  }

  const response = await fetch(process.env.ENQUIRY_FORM_API_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  await res.status(200).json({ status: 'OK', result: response.statusText })
}
