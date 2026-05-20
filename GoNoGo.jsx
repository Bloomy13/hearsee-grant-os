// All Claude API calls route through Supabase Edge Function
// so your API key is never exposed in the browser.
import { supabase } from './supabase'

export async function callClaude(prompt, systemContext = '') {
  const { data, error } = await supabase.functions.invoke('claude-proxy', {
    body: { prompt, systemContext }
  })
  if (error) throw new Error(error.message)
  return data
}

export async function runGoNoGo(grant, hearseeProfile) {
  return callClaude(
    JSON.stringify({ type: 'gonogo', grant, hearseeProfile }),
    'You are a grant strategy evaluator for Hearsee Mobility.'
  )
}

export async function draftProposal(grant, hearseeProfile) {
  return callClaude(
    JSON.stringify({ type: 'proposal', grant, hearseeProfile }),
    'You are a grant writer for Hearsee Mobility. Voice: warm, professional, bold. Never use pity language.'
  )
}

export async function discoverGrants(searchQuery, hearseeProfile) {
  return callClaude(
    JSON.stringify({ type: 'discovery', searchQuery, hearseeProfile }),
    'You are a grant researcher finding opportunities for Hearsee Mobility.'
  )
}
