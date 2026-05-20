import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Mail } from 'lucide-react'

function HearseeLogo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="3"   r="2.1" fill="#41B6E6" />
      <circle cx="17" cy="6.5" r="1.5" fill="rgba(65,182,230,.7)" />
      <circle cx="5"  cy="6.5" r="1.5" fill="rgba(65,182,230,.7)" />
      <circle cx="11" cy="11"  r="2.4" fill="#fff" />
    </svg>
  )
}

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [magicSent, setMagicSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signIn, signInWithMagicLink } = useAuth()
  const navigate = useNavigate()

  async function handleSignIn(e) {
    e.preventDefault()
    setLoading(true); setError('')
    const { error } = await signIn(email, password)
    if (error) setError(error.message)
    else navigate('/')
    setLoading(false)
  }

  async function handleMagicLink(e) {
    e.preventDefault()
    if (!email) { setError('Enter your email address first'); return }
    setLoading(true); setError('')
    const { error } = await signInWithMagicLink(email)
    if (error) setError(error.message)
    else setMagicSent(true)
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', height: 42, padding: '0 12px',
    border: '1.5px solid rgba(0,75,135,.2)', borderRadius: 8,
    fontSize: 14, color: '#111', background: '#fff',
    outline: 'none', fontFamily: 'var(--hs-font-body)',
  }

  return (
    <div style={{
      background: 'var(--hs-deep-navy)', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Dot pattern background */}
      <div style={{ position: 'absolute', inset: 0, opacity: .04,
        backgroundImage: 'radial-gradient(circle, #41B6E6 1px, transparent 1px)',
        backgroundSize: '28px 28px' }} />
      {/* Gradient top bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'linear-gradient(90deg, #004B87, #41B6E6, #004B87)' }} />

      <div style={{
        background: '#fff', borderRadius: 16, padding: '32px 28px',
        width: '100%', maxWidth: 380, position: 'relative', zIndex: 1,
        borderTop: '4px solid var(--hs-deep-vision-blue)',
        boxShadow: '0 20px 60px rgba(0,0,0,.25)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 24 }}>
          <div style={{ width: 38, height: 38, background: 'var(--hs-deep-vision-blue)',
            borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HearseeLogo size={22} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--hs-font-head)', fontSize: 15, fontWeight: 700, color: 'var(--hs-deep-vision-blue)', letterSpacing: '.04em' }}>HEARSEE</div>
            <div style={{ fontFamily: 'var(--hs-font-head)', fontSize: 9, fontWeight: 600, color: '#718096', letterSpacing: '.1em', textTransform: 'uppercase' }}>Grant OS</div>
          </div>
        </div>

        {magicSent ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>✉️</div>
            <p style={{ fontFamily: 'var(--hs-font-head)', fontSize: 16, fontWeight: 700, color: 'var(--hs-deep-vision-blue)', marginBottom: 8 }}>Check your email</p>
            <p style={{ fontSize: 13, color: '#4A5568' }}>We sent a magic link to <strong>{email}</strong>. Click it to sign in.</p>
          </div>
        ) : (
          <form onSubmit={handleSignIn}>
            <h1 style={{ fontFamily: 'var(--hs-font-head)', fontSize: 24, fontWeight: 700, color: 'var(--hs-deep-vision-blue)', marginBottom: 4 }}>Welcome back.</h1>
            <p style={{ fontSize: 13, color: '#4A5568', marginBottom: 22 }}>Sign in to your grant management workspace</p>

            {error && <div style={{ background: '#FDECEA', border: '1px solid #B83224', borderRadius: 8, padding: '8px 12px', fontSize: 12, color: '#711E17', marginBottom: 14 }}>{error}</div>}

            <div style={{ marginBottom: 12 }}>
              <label style={{ fontFamily: 'var(--hs-font-head)', fontSize: 10, fontWeight: 600, color: 'var(--hs-deep-vision-blue)', display: 'block', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.05em' }}>Email address</label>
              <input style={inputStyle} type="email" placeholder="you@hearseemobility.org" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <label style={{ fontFamily: 'var(--hs-font-head)', fontSize: 10, fontWeight: 600, color: 'var(--hs-deep-vision-blue)', textTransform: 'uppercase', letterSpacing: '.05em' }}>Password</label>
                <span style={{ fontSize: 11, color: 'var(--hs-mid-blue)', cursor: 'pointer', fontFamily: 'var(--hs-font-head)', fontWeight: 600 }}>Forgot password?</span>
              </div>
              <input style={inputStyle} type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>

            <button type="submit" disabled={loading} style={{
              width: '100%', height: 42, background: 'var(--hs-deep-vision-blue)', color: '#fff',
              border: 'none', borderRadius: 8, fontFamily: 'var(--hs-font-head)', fontSize: 13,
              fontWeight: 700, cursor: 'pointer', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.04em',
              opacity: loading ? .7 : 1,
            }}>{loading ? 'Signing in...' : 'Sign in'}</button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '14px 0' }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,75,135,.1)' }} />
              <span style={{ fontSize: 12, color: '#718096' }}>or</span>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,75,135,.1)' }} />
            </div>

            <button type="button" onClick={handleMagicLink} disabled={loading} style={{
              width: '100%', height: 42, background: 'transparent',
              color: 'var(--hs-deep-vision-blue)', border: '1.5px solid rgba(0,75,135,.25)',
              borderRadius: 8, fontFamily: 'var(--hs-font-head)', fontSize: 11, fontWeight: 700,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 6, textTransform: 'uppercase', letterSpacing: '.04em',
            }}>
              <Mail size={14} /> Send magic link
            </button>

            <p style={{ textAlign: 'center', marginTop: 16, fontSize: 11, color: '#718096' }}>
              Access by invitation only · <a href="mailto:info@hearseemobility.org" style={{ color: 'var(--hs-mid-blue)', textDecoration: 'none', fontWeight: 700 }}>Contact admin</a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
