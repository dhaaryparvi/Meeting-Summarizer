

````markdown
# AI Meeting Notes Summarizer & Sharer

An AI-powered web application to **summarize meeting transcripts** and **share structured summaries via email**.  
Built with **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS**, and the **OpenAI API**.

---

## 🚀 Features

- Upload or paste meeting transcripts.
- Add a **custom instruction/prompt** (e.g., “Summarize in bullet points for executives”).
- Generate **AI-powered structured summaries**.
- Edit the generated summary before finalizing.
- Share the summary via **email** by entering recipient addresses.
- Clean and simple UI built with TailwindCSS.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: TailwindCSS
- **Backend**: Next.js API routes
- **AI**: OpenAI GPT model
- **Email**: Nodemailer (using SMTP / Gmail / any provider)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/meeting-summarizer.git
cd meeting-summarizer
````

Install dependencies:

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root of the project:

```env
OPENAI_API_KEY=your_openai_api_key_here
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

> ⚠️ If you use Gmail, you’ll need to create an **App Password** instead of your normal password.

---

## ▶️ Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing the App

1. Go to the homepage.
2. Paste a transcript (e.g., meeting notes).
3. Enter a prompt (example: *“Summarize in bullet points for executives”*).
4. Click **Generate Summary** → AI will create a structured summary.
5. Edit the summary if needed.
6. Enter one or more email addresses and click **Share via Email**.
7. Check the recipient’s inbox to confirm delivery.

---

## 📄 Example Transcript to Test

Paste this in the transcript box:

```
Today’s meeting covered three main points. First, the product team will finish the UI redesign by next Friday. Second, the sales team reported a 12% increase in leads this quarter. Finally, action items include scheduling a client demo and preparing the Q3 budget report.
```

Prompt:

```
Summarize in bullet points highlighting only key action items.
```

---

## ✅ Expected Output Example

* Product team to finish UI redesign by next Friday.
* Schedule a client demo.
* Prepare the Q3 budget report.

---

## 📤 Deployment

To deploy on **Vercel**:

```bash
npm run build
```

Push to GitHub, then connect your repo to [Vercel](https://vercel.com).
Make sure to set your `.env` values in Vercel’s **Environment Variables** settings.

---

## 📌 Future Improvements

* Support for **file uploads** (PDF, DOCX, TXT).
* Save summaries in a **user dashboard**.
* Support for multiple languages.
* Integration with Slack/Teams for direct sharing.

---

## 👩‍💻 Author

Built by **\[Khushi Pandey]**
📧 Contact:pandeykhushhi@gmail.com

```

