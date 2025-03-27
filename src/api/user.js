import { google } from 'googleapis'

export default async function handler(req, res) {
  try {
    const auth = new google.auth.JWT(
      process.env.VITE_GOOGLE_CLIENT_EMAIL,
      null,
      process.env.VITE_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets.readonly']
    )

    const sheets = google.sheets({ version: 'v4', auth })

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.VITE_GOOGLE_SHEET_ID,
      range: 'X!A1:Z1000', // Adjust sheet name/range
    })

    const rows = response.data.values
    res.status(200).json(rows)
  } catch (err) {
    console.error('Error fetching Google Sheet:', err)
    res.status(500).json({ error: 'Failed to fetch data' })
  }
}