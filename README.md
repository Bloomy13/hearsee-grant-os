# Hearsee Grant OS

AI-powered grant management system for Hearsee Mobility.

## Tech stack
- **Frontend**: React 18 + Vite + Tailwind CSS
- **Brand**: Poppins (headings) + Atkinson Hyperlegible (body) · Official 2025 style guide colors
- **Auth + Database**: Supabase (Postgres + Auth + Storage + Edge Functions)
- **AI**: Anthropic Claude API (via Supabase Edge Function proxy)
- **Hosting**: GitHub Pages (free)

## Quick start

### 1. Clone and install
git clone https://github.com/YOUR_USERNAME/hearsee-grant-os.git
cd hearsee-grant-os
npm install

### 2. Set up Supabase
- Create a project at supabase.com
- Run supabase/schema.sql in the SQL Editor
- Copy .env.example to .env and fill in your Project URL + anon key
- Disable public signups (Authentication > Settings > Disable signup)

### 3. Deploy Claude proxy
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase secrets set ANTHROPIC_API_KEY=sk-ant-your-key-here
supabase functions deploy claude-proxy

### 4. Run locally
npm run dev

### 5. Deploy to GitHub Pages
npm run deploy

## Build sessions
Each session with Claude adds one complete screen:
- Session 1: Auth is wired ✓ (this repo)
- Session 2: Admin panel + user management
- Session 3: Dashboard with live Supabase data
- Session 4: Grant detail page
- Session 5: Go/No-go evaluator (Claude API)
- Session 6: Proposal writer + email templates
- Session 7: Smart discriminator + win rate tracker
- Session 8: Google Calendar sync + polish

## Brand
Colors, fonts, and components follow Hearsee Brand Style Guide 2025.
Token file: src/styles/tokens.css
