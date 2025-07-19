export default async function handler(req, res) {
  const urls = [
    "https://twitter-us-airline-sentiment-dashboard.streamlit.app/",
    "https://gazal-portfolio.streamlit.app/",
  ];

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
}
