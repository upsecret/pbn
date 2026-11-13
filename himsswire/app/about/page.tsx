import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", alternates: { canonical: "/about" } };

export default function About() {
  return <article className="about">
    <div className="page-heading"><h1>About HIMSSwire</h1></div>
    <div className="prose">
      <p>HIMSSwire is an independent publication operated by Upsecret. We cover the technology and workflows that support healthcare, from electronic health records to hospital operations.</p>
      <p>Our reporting is written for healthcare technology teams, clinical operations leaders, and readers who want to understand how digital systems affect care delivery.</p>
      <p>HIMSSwire is independently operated and is unaffiliated with the Healthcare Information and Management Systems Society (HIMSS).</p>
    </div>
  </article>;
}
