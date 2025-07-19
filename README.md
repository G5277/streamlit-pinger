# 🚀 Streamlit Pinger

Keep your Streamlit apps awake by pinging them periodically using Vercel's Cron Jobs.

---

## 🧾 Project Structure

```md
streamlit-pinger/
├── api/
│   └── ping.js          # Pings your Streamlit apps
└── vercel.json          # Defines scheduled cron job
```

---

## ⚙️ How It Works

- `api/ping.js`: Sends HTTP requests to your specified Streamlit apps.
- `vercel.json`: Configures a cron job to run `/api/ping` at defined intervals.
- Deployed on [Vercel](https://vercel.com), this ensures your apps don’t go idle.

---

## 🔧 Setup

1. Clone this repo:

   ```bash
   git clone https://github.com/your-username/streamlit-pinger.git
   cd streamlit-pinger
   ```

2. Update the list of Streamlit app URLs inside `api/ping.js`.

3. Push to GitHub and deploy via [Vercel Dashboard](https://vercel.com).

4. Ensure `vercel.json` contains:

   ```json
   {
     "crons": [
       {
         "path": "/api/ping",
         "schedule": "*/20 * * * *"
       }
     ]
   }
   ```

---

## ✅ Result

Your Streamlit apps will be pinged every 20 minutes to stay alive.

---

## 🛠 Built With

- Vercel Cron Jobs
- Node.js (API route)

---
