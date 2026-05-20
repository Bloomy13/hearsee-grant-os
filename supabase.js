export const ROLES = {
  ADMIN: 'admin',
  GRANT_WRITER: 'grant_writer',
  REVIEWER: 'reviewer',
  READ_ONLY: 'read_only',
}

export const STAGES = {
  IDENTIFIED:    { label: 'Identified',   color: '#004B87', bg: 'rgba(0,75,135,.08)' },
  GONOGO:        { label: 'Go/No-go',     color: '#7A3C00', bg: 'rgba(232,119,34,.1)' },
  PROPOSAL:      { label: 'Proposal',     color: '#0D4A77', bg: 'rgba(26,126,194,.1)' },
  SUBMITTED:     { label: 'Submitted',    color: '#0A5C78', bg: 'rgba(65,182,230,.1)' },
  UNDER_REVIEW:  { label: 'Under review', color: '#3D3D8F', bg: 'rgba(61,61,143,.1)' },
  AWARDED:       { label: 'Awarded',      color: '#0D4424', bg: '#E6F4EC' },
  DECLINED:      { label: 'Declined',     color: '#718096', bg: '#F0F2F5' },
  ARCHIVED:      { label: 'Archived',     color: '#718096', bg: '#F0F2F5' },
}

export const VERDICTS = {
  GO:             { label: '✓ Go',          cls: 'badge-go' },
  CONDITIONAL_GO: { label: '~ Conditional', cls: 'badge-maybe' },
  NO_GO:          { label: '✕ No-go',       cls: 'badge-nogo' },
  PENDING:        { label: 'Pending',        cls: 'badge-pending' },
}

export const HEARSEE_PROFILE = {
  name: 'Hearsee',
  dba: 'Hearsee Mobility',
  founded: 2018,
  status: '501(c)(3) nonprofit',
  location: 'Utah',
  budget: '~$300K/year (operations, excl. R&D)',
  staff: '3-5 paid',
  fundraising: 'Board-led',
  mission: 'Build structured indoor navigation infrastructure for blind and low-vision individuals. RFID technology + smart cane + app = independent indoor navigation. Free to users. Venue subscription model.',
  differentiators: [
    'Community-first: designed WITH blind people, not for them',
    'First scalable indoor nav infrastructure — no federal standard exists',
    'Equity by design — permanently free to users',
  ],
  deployments: ['Utah Arts Academy (2025 — first fully mapped building)', 'NFB Utah Center (2023 — early test)'],
  currentFunders: ['Sorenson Legacy Foundation', 'Miner Foundation', 'InfoWest', 'TDS Telecom'],
  voice: 'Warm + personal, professional, bold. Never pity language. Lead with independence and infrastructure.',
}
