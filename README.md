# Android Interview Prep

A simple static site of Android interview questions and answers, hosted free on GitHub Pages.

## Publish on GitHub Pages
1. Create a new public repository on GitHub, for example `android-interview-prep`.
2. Upload `index.html`, `questions.js` and `README.md` to the repository root.
3. Open **Settings > Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, then click **Save**.
4. After a minute your site is live at `https://<your-username>.github.io/android-interview-prep/`.

## Add a new question
Open `questions.js`, copy an existing block inside the `QUESTIONS` array, and change `id`, `category`, `question`, `intro`, `sections` and `keyPoint`. Commit the change and the site updates itself.
