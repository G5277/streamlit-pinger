import fetch from 'node-fetch';

export default async function handler(req, res) {
  const urls = [
    "https://twitter-us-airline-sentiment-dashboard.streamlit.app/",
    "https://gazal-portfolio.streamlit.app/",
  ];

  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        try {
          const response = await fetch(url);
          return { url, status: response.status };
        } catch (err) {
          return { url, status: "error", message: err.message };
        }
      })
    );

    res.status(200).json({ time: new Date().toISOString(), results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
