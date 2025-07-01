# Contributor Guidelines

## Coding Style
- Use **2 spaces** for indentation. Never use tabs.
- For TypeScript files (`*.ts`), prefer **single quotes** for strings.
- Ensure each file ends with a newline and has no trailing whitespace.

## Testing
- Run `npm test` before committing. It invokes the Angular CLI's Karma tests.
- If the environment lacks required dependencies, note this in the PR testing section.

## Commit Messages
- Use short, present-tense messages such as `Add hero component` or `Fix nav link`.
- Group related changes into a single commit when practical.

## Pull Request Summary
- Summarize the important changes in bullet points.
- Reference modified files using GitHub's file path quoting (e.g., `src/app/app.component.ts`).
- Include a Testing section describing the result of running `npm test`.


# Meet Your Creative Partners | lowkey.frames & twinedheartsbyloki

_Discover the team behind the lens at lowkey.frames and twinedheartsbyloki. Meet your creative agents—your collaborators in capturing stories that matter._

---

## 📸 Meet Your Agents of Storytelling

At **lowkey.frames** and **twinedheartsbyloki**, we don’t just snap photos—we **craft timeless visual experiences**.

Our agents aren't just photographers. They’re creative partners who:
- Understand your story
- Bring emotional depth to visuals
- Capture moments with precision and style

We believe every session is more than a photoshoot—it's a **collaboration** rooted in trust and creativity.

---

## 🤝 What Is an Agent?

Your photography agent is your personal guide through the creative process. Someone who:
- Listens to your ideas and vision
- Helps plan styling, wardrobe, and mood
- Picks the right time, lighting, and location
- Makes the shoot feel relaxed, confident, and fun
- Translates raw moments into stunning visuals

We’re here to make sure your story is told beautifully—down to the last frame.

---

## 🧠 Our Creative Intelligence (Human + AI)

We pair human touch with **AI-powered tools** to deliver results faster, sharper, and more intuitively:
- Smart curation of your best moments
- Optimized edits for web, print, and social
- Personalized visual recommendations
- Emotion-based storytelling through sequencing

This hybrid workflow means **you get gallery-worthy results, faster and more aligned with your vibe**.

---

## 🌱 Who We Work With

We collaborate with:
- **Families** – maternity, newborn, birthdays, milestones
- **Couples** – engagements, proposals, anniversaries
- **Artists & Creators** – branding, headshots, fashion
- **Communities & Events** – local festivals, school events, fundraisers

If your story is real, we’re here to capture it.

---

## 🌍 Where We Work

Based in **McKinney, Texas**, we serve:
- The greater DFW metro (Plano, Frisco, Allen, Dallas, Fort Worth)
- **Available for travel and destination shoots** upon request

Let us come to you—wherever your story unfolds.

---

## 📅 Book Your Agent

When you book an agent with us, you're not just hiring a photographer—you're gaining a trusted visual partner who brings energy, expertise, and a creative eye.

Ready to book?
📧 Email: [lowkeyframestx@gmail.com](mailto:lowkeyframestx@gmail.com)
📷 Instagram: [@lowkey.frames](https://instagram.com/lowkey.frames)

---

## 🔍 SEO & AI Keywords
# 🧠 Prompt Title: Optimize & Update Existing Photography Portfolio Website

## 🗂️ Context:
The website is live and functional. I want to improve specific areas of the **Portfolio page** and overall site to enhance **UI experience, SEO visibility, modern animations**, and **mobile-first performance**. This prompt is meant for refining and upgrading — not full rebuilds.

## 👤 Role:
You are a senior front-end engineer and technical SEO expert with 20+ years of experience. You specialize in optimizing existing codebases for performance, discoverability, and visual engagement, especially for creative and photography-based sites. You write scalable, clean, and semantic code that balances visual polish with SEO best practices.

## ✅ Action:
Once I provide the current framework and style system, review and generate the following:

1. Identify and improve **areas of the Portfolio page**, such as:
   - Album grid layout (masonry or responsive tiles)
   - Click-to-view logic for image galleries (modal vs page navigation)
   - Smooth **entry animations** using Framer Motion or CSS
   - Dynamic **SEO metadata** injection (album title, alt text, Open Graph)

2. Provide code updates to:
   - Implement **lazy loading** and `srcSet` for images
   - Optimize **alt tags** dynamically for SEO
   - Add structured data (Schema.org markup for albums/galleries)
   - Create a reusable `SEOHead` component (for React/Next.js/Angular)
   - Enhance mobile responsiveness (improve spacing, image aspect ratios)

3. Add:
   - ⚙️ Animation tips (entry, hover, scroll)
   - 📈 Technical SEO enhancements (title tags, meta descriptions, Open Graph)
   - 🧼 Light refactoring to improve code cleanliness and scalability

4. Bonus: Suggest how to:
   - Auto-fetch album/image data from a local JSON file or headless CMS
   - Auto-generate sitemap from album routes
   - Support `aria-*` labels for accessibility

## 📐 Format:
Return in **Markdown format**, with:
- Clear code blocks using triple backticks
- File path suggestions (e.g., `/components/AlbumCard.tsx`)
- Comments inline in the code to explain changes
- Folder structure examples if needed

## 🎯 Target Audience:
A mid-to-senior developer maintaining a personal photography portfolio built with a modern JavaScript framework. Familiar with components, styling, and performance—but wants guidance to level up **UX polish, SEO power, and content visibility.**

## 📝 Ask Me First:
Before generating updates, ask:
- What framework I’m using (React, Next.js, Angular, etc.)
- What animation library is currently installed (Framer, GSAP, etc.)
- Current portfolio layout (grid, flexbox, custom CSS)
- Whether I want modal galleries or new routes for albums
- Whether I prefer dark mode, light mode, or toggle support
- If album-level metadata exists (e.g., album title, shoot location, year)

## 💬 Once I answer, return:
- Code updates with comments
- SEO enhancements explained
- UI animation upgrade suggestions
- Best practices for ongoing SEO health
