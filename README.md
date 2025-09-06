<h1> LWC + Lenis Smooth Scrolling 🚀 <h1>
    
A Lightning Web Component that demonstrates buttery‑smooth scrolling using the Lenis library, plus elegant UI, animated emojis, and scoped CSS. Built for Salesforce developers who want a clean, performant scroll experience inside Lightning. ✨

Table of Contents 📚
• Overview

• Features

• Demo GIFs

• Prerequisites

• Quick Start

• Implementation Steps

• Component Structure

• Configuration

• Troubleshooting

• Contributing

<h1>Overview 🧭</h1>
This component shows how to:

Load a third‑party JS library (Lenis) via Static Resources and initialize it with loadScript.

Keep styles clean with LWC‑scoped CSS and simple CSS keyframe animations for emojis.

Present developer‑friendly instructions inside the component for team onboarding.

<h1>Features ✨</h1>
Smooth, inertial scrolling powered by Lenis.

Accessible, rem‑based typography.

Animated emoji header (wave, float, bounce).

Modular CSS in a separate .css file scoped to the LWC.

<h1>Demo GIFs 🎥 </h1>
Add short screen recordings or GIFs showing the scroll effect and emoji animations.

<h1> Prerequisites 🧩</h1>
Salesforce DX project or a scratch/sandbox org.

Permission to upload Static Resources.

Access to create and deploy LWCs in the org.

<h1> Quick Start ⚡</h1>
Clone the repo:

git clone https://github.com/<your-org>/<your-repo>.git
cd <your-repo>

Deploy the LWC to your org (via VS Code Salesforce extensions or sfdx).

Assign the component to a Lightning App page or a Record page and preview.

<h1> Implementation Steps 🛠️ </h1>
Follow these in Salesforce:

Download Lenis:

1. Open: https://cdn.jsdelivr.net/gh/studio-freight/lenis@latest/bundled/lenis.js and save as lenis.js locally.

2. Enable Lightning Web Security:

    • Setup → Session Settings → Lightning Web Security → Enable “Use Lightning Web Security for Lightning web components and Aura components” → Save.

3. Upload lenis.js as a Static Resource:

    • Setup → Static Resources → New → Name: lenis → Upload lenis.js → Save.

4. Create the LWC:

    • Component e.g., smoothScrolling with files: .html, .js, .css, .js-meta.xml.

5. Load and initialize Lenis:

    • In renderedCallback, use loadScript to load the static resource and start the requestAnimationFrame loop for Lenis.

Tip: Keep animations to transform/opacity for smooth performance and minimal layout thrash.

Component Structure 🧱
force-app/main/default/lwc/smoothScrolling

• smoothScrolling.html — markup and sections (steps, experience, expertise, links)

• smoothScrolling.js — loadScript + Lenis initialization

• smoothScrolling.css — scoped styles + emoji animations

• smoothScrolling.js-meta.xml — exposure/config

LWC CSS in same-named .css file is automatically scoped to the component.

<h1> Configuration ⚙️ </h1>
Lenis options to tune:

• lerp: smoothness (0–1; lower is smoother; default ~0.1)

• smoothWheel, smoothTouch: enable smoothing for inputs

wheelMultiplier: scroll speed
Reference Lenis docs for latest options if needed.

<h1> Troubleshooting 🧯 </h1>
Script not found:

• Ensure Static Resource name matches the import (e.g., @salesforce/resourceUrl/lenis).

No smooth effect:

• Confirm loadScript resolved before initializing.

• Ensure there is enough scrollable content in the DOM.

CSS not applied:

• Verify the CSS filename matches the component and is in the same folder for scoping.

Performance:

• Prefer transform/opacity in animations; avoid heavy layout properties.

<h1> Contributing 🤝</h1>
Fork the repo and create a feature branch:

git checkout -b feat/<short-name>

Commit with clear messages and open a PR describing changes, screenshots/GIFs, and testing notes.

<h1> Connect 🔗 </h1>
LinkedIn: [https://www.linkedin.com/in/ashutosh-tiwari](https://www.linkedin.com/in/ashutosh-tiwari-59578416a/)

Mention “Lenis in LWC” in messages for quick context.

References

LWC CSS scoping and stylesheets.

GitHub README best-practices.

MDN CSS animations and @keyframes guidance.

Lenis library page and repository.



