import { google } from 'googleapis'

const client = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  ['https://www.googleapis.com/auth/spreadsheets']
)

const sheets = google.sheets({ version: 'v4', auth: client })

export { sheets }
