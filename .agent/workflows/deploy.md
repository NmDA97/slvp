---
description: Update and Deploy SLVP Website
---

Follow these steps whenever you make changes to the website and want to publish them.

1.  **Make Changes**: Edit your files as needed.
2.  **Commit Changes**: Save your changes to git.
    ```bash
    git add .
    git commit -m "Description of changes"
    ```
3.  **Push to GitHub**: Upload your source code.
    ```bash
    git push
    ```
4.  **Deploy**: Build and publish to GitHub Pages.
    ```bash
    npm run deploy
    ```
    
// turbo
5.  **Verification**: Visit `https://NmDA97.github.io/slvp/` to see your changes (it may take 1-2 minutes to update).
