import Link from "next/link";
import { ArrowRight, Eye, LockKeyhole } from "lucide-react";

function Logo() {
  return (
    <Link className="brand auth-brand" href="/" aria-label="MedOptio home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>MedOptio</span>
    </Link>
  );
}

export default function SignInPage() {
  return (
    <main className="auth-page">
      <section className="auth-quote">
        <Logo />
        <div>
          <p>
            “Medication work should feel reviewable. MedOptio gives every
            request a source, an owner, a next action, and a professional review
            state.”
          </p>
          <span>Operations director · Warsaw pharmacy group</span>
        </div>
      </section>
      <section className="auth-panel">
        <Link className="auth-back" href="/">
          Back to website
        </Link>
        <form className="signin-card">
          <div className="lock-icon">
            <LockKeyhole size={20} />
          </div>
          <h1>Sign in to MedOptio</h1>
          <p>Access medication review, refill, and care workflows.</p>
          <label>
            Email address
            <input type="email" placeholder="anna@apteka-saska.pl" />
          </label>
          <label>
            <span>
              Password <a href="#reset">Forgot password?</a>
            </span>
            <div className="password-field">
              <input type="password" placeholder="Enter your password" />
              <Eye size={17} />
            </div>
          </label>
          <button className="button primary" type="button">
            Continue <ArrowRight size={17} />
          </button>
          <small>
            Need access? <Link href="/#contact">Request a demo</Link>
          </small>
        </form>
      </section>
    </main>
  );
}
