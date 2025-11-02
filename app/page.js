export default function Home() {
  return (
    <main className="min-h-screen bg-gradient to-b from-[blue]-50 via-[white] to-[blue]-100 flex flex-col items-center justify-center text-center px-4 animate-fadeIn z-10">
      {/* Header */}
      <h1 className="text-5xl font-bold text-secondary mb-4">
        Welcome to <span className="text-primary">My Portfolio</span>
      </h1>
      <hr className="border-2 border-primary w-1/3 mb-8" />

      {/* Profile Picture */}
<img
  src="/profile.png"
  alt="Profile"
  width={160}  // same as 40 * 4
  height={160}
  className="rounded-full object-cover border-4 border-primary shadow-lg"
/>


      {/* Introduction */}
      <h2 className="text-2xl font-semibold text-secondary mb-2">
        Hello, I&apos;m <span className="text-primary">Kevin Kurniawan Cahyadi</span>
      </h2>
      <p className="text-gray-700 max-w-2xl mb-6">
        I&apos;m a passionate Biomedical Engineering student at Gadjah Mada
        University — a dedicated leader and lifelong learner. Welcome to my
        personal space where I share my academic journey, activities, and
        hobbies.
      </p>

      {/* Links */}
      <div className="flex gap-6 text-lg">
        <a
          href="https://linkedin.com"
          className="text-primary font-medium hover:text-accent transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          className="text-primary font-medium hover:text-accent transition"
        >
          GitHub
        </a>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex gap-6 text-xl font-semibold">
        <a
          href="/academic"
          className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-accent transition shadow-md"
        >
          🎓 Academic
        </a>
        <a
          href="/activities"
          className="px-6 py-3 bg-secondary text-white rounded-xl hover:bg-accent transition shadow-md"
        >
          ⚙️ Activities
        </a>
      </div>
    </main>
  );
}