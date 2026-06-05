import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events | MotionWorks Physical Therapy",
  description:
    "Stay up to date with the latest news, health tips, and events from MotionWorks Physical Therapy in Portland, OR.",
};

interface NewsCard {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  gradientStyle: React.CSSProperties;
  readTime: string;
  thumbSrc: string;
  thumbAlt: string;
}

const articles: NewsCard[] = [
  {
    category: "Health Tips",
    date: "February 14, 2026",
    title: "5 Signs You Should See a Physical Therapist",
    excerpt:
      "Persistent pain, limited range of motion, and recurring injuries are all signs your body needs professional attention. In this article, our Doctors of Physical Therapy share the top warning signs that it's time to schedule an evaluation — and why early intervention leads to better outcomes.",
    gradientStyle: {
      background: "linear-gradient(135deg, #5B8533 0%, #8aaa60 100%)",
    },
    readTime: "4 min read",
    thumbSrc: "/images/news-thumb-1.svg",
    thumbAlt: "Physical therapy benefits and tips",
  },
  {
    category: "Manual Therapy",
    date: "January 28, 2026",
    title: "What Is Manual Therapy — And Why Does It Work?",
    excerpt:
      "Manual therapy is more than massage. Our therapists use evidence-based joint mobilization, myofascial release, and soft tissue techniques to target the root cause of pain and dysfunction. We break down the science behind manual therapy and explain why it's a cornerstone of care at MotionWorks.",
    gradientStyle: {
      background: "linear-gradient(135deg, #3a6ea5 0%, #6a9ec5 100%)",
    },
    readTime: "6 min read",
    thumbSrc: "/images/news-thumb-2.svg",
    thumbAlt: "Manual therapy techniques",
  },
  {
    category: "Community",
    date: "January 10, 2026",
    title: "MotionWorks Hosts Free Injury Screening Day",
    excerpt:
      "On Saturday, February 1st, MotionWorks Physical Therapy will host a free injury screening event open to the Neenah community. No appointment required. Our Doctors of PT will be available to assess your pain or movement concerns, answer your questions, and provide guidance — completely free of charge.",
    gradientStyle: {
      background: "linear-gradient(135deg, #8a7a6a 0%, #aa9a8a 100%)",
    },
    readTime: "3 min read",
    thumbSrc: "/images/news-thumb-3.svg",
    thumbAlt: "Sports injury prevention",
  },
];

const upcomingEvents = [
  {
    date: "Mar 15",
    title: "Free Injury Screening Day",
    time: "9:00am – 12:00pm",
    location: "MotionWorks PT Clinic, Neenah",
  },
  {
    date: "Apr 5",
    title: "Spine Health Seminar",
    time: "6:00pm – 7:30pm",
    location: "Neenah Public Library, Community Room",
  },
  {
    date: "Apr 20",
    title: "Runner's Clinic — Injury Prevention",
    time: "8:00am – 10:00am",
    location: "Riverside Park, Neenah",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8751A" }}>
            Stay Informed
          </p>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">News &amp; Events</h1>
          <div className="h-1 w-16" style={{ backgroundColor: "#E8751A" }} />
          <p className="mt-4 text-gray-600 max-w-2xl">
            Health tips, clinic updates, and community events from MotionWorks Physical Therapy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Articles — takes 2 cols */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Latest Articles</h2>
            <div className="flex flex-col gap-8">
              {articles.map((article, i) => (
                <article key={i} className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
                  {/* Article thumbnail */}
                  <img
                    src={article.thumbSrc}
                    alt={article.thumbAlt}
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded text-white"
                        style={{ backgroundColor: "#E8751A" }}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400">{article.date}</span>
                      <span className="text-xs text-gray-400">· {article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:underline inline-flex items-center gap-1"
                      style={{ color: "#E8751A" }}
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Upcoming Events */}
            <div className="bg-white rounded border border-gray-200 shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-5">Upcoming Events</h2>
              <div className="space-y-5">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="w-14 h-14 rounded flex flex-col items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: "#E8751A" }}
                    >
                      <span className="text-xs font-bold uppercase leading-none">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="text-lg font-extrabold leading-none">
                        {event.date.split(" ")[1]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm leading-tight">
                        {event.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{event.time}</p>
                      <p className="text-xs text-gray-400">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe / contact */}
            <div
              className="rounded p-6 text-white"
              style={{ backgroundColor: "#3A3A3A" }}
            >
              <h3 className="font-bold text-base mb-2">Stay Connected</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Follow us on social media for health tips, clinic updates, and community events.
              </p>
              <div className="flex gap-2 flex-wrap">
                {[
                  { label: "Facebook", bg: "#3b5998" },
                  { label: "YouTube", bg: "#cc0000" },
                  { label: "Twitter", bg: "#1da1f2" },
                ].map(({ label, bg }) => (
                  <a
                    key={label}
                    href="#"
                    className="px-3 py-1.5 rounded text-white text-xs font-semibold hover:opacity-80"
                    style={{ backgroundColor: bg }}
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-gray-600">
                <p className="text-sm font-semibold mb-1">Free Injury Screening</p>
                <p className="text-gray-400 text-xs mb-3">
                  Not sure if PT is right for you? We offer free screenings — no obligation.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-4 py-2 rounded text-white text-sm font-bold hover:opacity-90"
                  style={{ backgroundColor: "#E8751A" }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
