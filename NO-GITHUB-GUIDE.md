# Getting Project Code Without GitHub

If you don't want to use GitHub, here are alternative methods to get your project code on your local machine.

---

## Method 1: Download Project as ZIP (Easiest)

Unfortunately, Lovable doesn't have a direct "Download ZIP" button, but you can use this workaround:

### Option A: Browser "Save Page" Method
1. **Open your project preview** in Lovable
2. Press **Ctrl+S** (Windows/Linux) or **Cmd+S** (Mac)
3. This saves the HTML, but NOT the source code

**Note**: This method only saves the rendered page, not the actual code files. **Not recommended** for development.

---

## Method 2: Copy Files Manually from Code Editor (Recommended)

This is the best way without GitHub. You'll copy files one by one.

### Step 1: Create a Folder on Your Computer

**Windows:**
1. Open File Explorer
2. Navigate to Documents (or wherever you want)
3. Right-click → New → Folder
4. Name it: `axion-platform`

**Mac:**
1. Open Finder
2. Go to Documents
3. Right-click → New Folder
4. Name it: `axion-platform`

---

### Step 2: Open the Code Editor in Lovable

1. In the Lovable editor, click the **Code Editor** icon (looks like `</>`) in the top navigation
2. You'll see a file tree on the left with all your files

---

### Step 3: Copy Each File

**Important Files to Copy First:**

#### 1. Configuration Files (Root Level)
Click on each file in the file tree, then copy ALL the content:

| File | What to Do |
|------|------------|
| `package.json` | Click file → Select all code → Copy → Paste into new file |
| `vite.config.ts` | Same process |
| `tsconfig.json` | Same process |
| `tsconfig.app.json` | Same process |
| `tsconfig.node.json` | Same process |
| `tailwind.config.ts` | Same process |
| `index.html` | Same process |
| `postcss.config.js` | Same process |
| `eslint.config.js` | Same process |
| `components.json` | Same process |

**How to create these files on your computer:**

**Windows:**
1. Open VS Code
2. Click File → New File
3. Paste the code
4. Press Ctrl+S
5. Navigate to your `axion-platform` folder
6. Type the exact filename (e.g., `package.json`)
7. Click Save

**Mac:**
1. Open VS Code
2. Click File → New File (or Cmd+N)
3. Paste the code
4. Press Cmd+S
5. Navigate to your `axion-platform` folder
6. Type the exact filename
7. Click Save

---

#### 2. Source Files (src/ folder)

You need to maintain the folder structure. Create these folders first:

```
axion-platform/
├── src/
│   ├── components/
│   │   ├── site/
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   └── test/
└── public/
```

**Create folders in VS Code:**
1. Right-click in the Explorer sidebar
2. Click "New Folder"
3. Type the folder name

---

#### 3. Copy Component Files

**Main Components (src/components/site/):**
- Header.tsx
- Hero.tsx
- Services.tsx
- TrustSignals.tsx
- LeadForm.tsx
- Footer.tsx

**UI Components (src/components/ui/):**
- button.tsx
- card.tsx
- input.tsx
- label.tsx
- textarea.tsx
- select.tsx
- form.tsx
- And others you see in the list...

**Pages (src/pages/):**
- Index.tsx
- NotFound.tsx

**Other Source Files:**
- src/App.tsx
- src/App.css
- src/index.css
- src/main.tsx
- src/vite-env.d.ts

**Hooks & Utilities:**
- src/hooks/use-mobile.tsx
- src/hooks/use-toast.ts
- src/lib/utils.ts

**Public Files:**
- public/placeholder.svg
- public/robots.txt

---

### Step 4: File-by-File Copy Checklist

Print this and check off as you go:

```
ROOT LEVEL FILES:
☐ package.json
☐ vite.config.ts
☐ tsconfig.json
☐ tsconfig.app.json
☐ tsconfig.node.json
☐ tailwind.config.ts
☐ index.html
☐ postcss.config.js
☐ eslint.config.js
☐ components.json
☐ vitest.config.ts
☐ README.md

SRC FOLDER:
☐ src/App.tsx
☐ src/App.css
☐ src/index.css
☐ src/main.tsx
☐ src/vite-env.d.ts

COMPONENTS (site/):
☐ src/components/site/Header.tsx
☐ src/components/site/Hero.tsx
☐ src/components/site/Services.tsx
☐ src/components/site/TrustSignals.tsx
☐ src/components/site/LeadForm.tsx
☐ src/components/site/Footer.tsx
☐ src/components/NavLink.tsx

UI COMPONENTS (copy all you see):
☐ src/components/ui/button.tsx
☐ src/components/ui/card.tsx
☐ src/components/ui/input.tsx
☐ src/components/ui/label.tsx
☐ src/components/ui/textarea.tsx
☐ src/components/ui/select.tsx
☐ src/components/ui/dialog.tsx
☐ src/components/ui/form.tsx
☐ src/components/ui/checkbox.tsx
☐ src/components/ui/badge.tsx
☐ src/components/ui/accordion.tsx
☐ ... (and all others)

PAGES:
☐ src/pages/Index.tsx
☐ src/pages/NotFound.tsx

HOOKS:
☐ src/hooks/use-mobile.tsx
☐ src/hooks/use-toast.ts

LIB:
☐ src/lib/utils.ts

TEST:
☐ src/test/example.test.ts
☐ src/test/setup.ts

PUBLIC:
☐ public/placeholder.svg
☐ public/robots.txt
```

---

## Method 3: Automated Copy with Browser Console (Advanced)

If you're comfortable with browser tools:

1. Open Lovable Code Editor
2. Open Browser Console (F12 → Console tab)
3. You can use JavaScript to help copy multiple files, but this requires technical knowledge

**Not recommended for beginners.**

---

## After Copying All Files

### Step 1: Verify File Structure

Your folder should look EXACTLY like this:

```
axion-platform/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── index.html
├── postcss.config.js
├── eslint.config.js
├── components.json
├── vitest.config.ts
├── README.md
├── DOCUMENTATION.md
├── public/
│   ├── placeholder.svg
│   └── robots.txt
└── src/
    ├── App.tsx
    ├── App.css
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── components/
    │   ├── NavLink.tsx
    │   ├── site/
    │   │   ├── Header.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Services.tsx
    │   │   ├── TrustSignals.tsx
    │   │   ├── LeadForm.tsx
    │   │   └── Footer.tsx
    │   └── ui/
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── textarea.tsx
    │       ├── select.tsx
    │       ├── dialog.tsx
    │       ├── form.tsx
    │       └── (all other UI components)
    ├── hooks/
    │   ├── use-mobile.tsx
    │   └── use-toast.ts
    ├── lib/
    │   └── utils.ts
    ├── pages/
    │   ├── Index.tsx
    │   └── NotFound.tsx
    └── test/
        ├── example.test.ts
        └── setup.ts
```

### Step 2: Run the Project

Open terminal in your project folder:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: http://localhost:8080

---

## ⚠️ Important Warnings

1. **Maintain Exact Folder Structure**: The project won't work if files are in wrong folders
2. **Don't Rename Files**: Keep exact filenames including capitalization
3. **Check for Hidden Files**: Some config files might not be visible in the file tree
4. **Copy ALL UI Components**: The site needs shadcn/ui components to render correctly

---

## Time Estimate

- **Manual copying**: 30-45 minutes for all files
- **Installation**: 2-3 minutes
- **First run**: Instant after install

---

## Need Help?

If a file is missing or the project doesn't run:
1. Check the browser console for errors (F12)
2. Compare your file structure with the checklist above
3. Re-copy any files that might have been missed

**Alternative**: GitHub is actually much easier (2 minutes vs 45 minutes). Consider connecting GitHub if you plan to make frequent updates!
