# cui

Ink recreation of the Claude Code terminal welcome screen.

## Setup (Termux or any Node 18+ env)

```
cd cui
npm install
npm start
```

## Structure

```
cui/
├── package.json
├── index.js              # renders <App />
└── src/
    ├── theme.js           # all colors — edit here to restyle everything
    ├── App.js             # layout: composes all panels
    └── components/
        ├── Header.js       # "── Claude Code v2.1.6" line
        ├── Mascot.js        # ascii mascot art
        ├── WelcomePanel.js  # left box: greeting, mascot, model, cwd
        ├── TipsPanel.js     # right box: tips + recent activity
        ├── HintLine.js      # "/model to try Opus 4.5" line
        ├── InputPrompt.js   # "> " prompt with placeholder (functional input)
        └── Footer.js        # "? for shortcuts" line
```

Note: the browser-tab-style bar (×, +, chevron) in the original screenshot is
the terminal emulator's own window chrome, not something a CLI app renders —
so it isn't reproduced here. Everything below that (the actual Claude Code
output) is rebuilt.

Positioning, colors, spacing, mascot art, and copy are all yours to tweak —
`src/theme.js` for colors, each component file for layout/text.
