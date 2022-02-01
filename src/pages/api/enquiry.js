export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  if (!body) {
    return res.status(500).json({ msg: 'Body empty' })
  }

  const result = await fetch(process.env.ENQUIRY_FORM_API_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  await res.status(200).json({ status: 'OK', result: result })
}
