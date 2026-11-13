"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <section className="page-heading">
    <h1>News is temporarily unavailable</h1>
    <p>Please try again in a moment.</p>
    <button className="retry" onClick={reset}>Try again</button>
  </section>;
}
