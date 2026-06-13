import { User, Mail, Calendar, PlaySquare } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
        <div className="rounded-3xl overflow-hidden border border-zinc-800">
          <div className="h-24 md:h-40 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500" />

          <div className="px-8 pb-8">
            <div className="-mt-16">
              <div
                className="
                  h-32
                  w-32
                  rounded-full
                  border-4
                  border-black
                  bg-zinc-800
                  flex
                  items-center
                  justify-center
                "
              >
                <User size={48} />
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-3xl font-bold">Kenzo Developer</h1>

              <p className="text-zinc-400 mt-1">
                Full Stack Developer • Content Creator
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-zinc-900 rounded-2xl p-5">
                <PlaySquare className="mb-2" />
                <p className="text-zinc-400 text-sm">Videos Uploaded</p>
                <h2 className="text-2xl font-bold">50</h2>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5">
                <User className="mb-2" />
                <p className="text-zinc-400 text-sm">Subscribers</p>
                <h2 className="text-2xl font-bold">12.4K</h2>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5">
                <Calendar className="mb-2" />
                <p className="text-zinc-400 text-sm">Joined</p>
                <h2 className="text-2xl font-bold">Jan 2026</h2>
              </div>
            </div>

            <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">About</h2>

              <p className="text-zinc-400 leading-relaxed">
                Passionate full stack developer focused on building modern web
                applications using Next.js, TypeScript, and scalable backend
                architectures.
              </p>

              <div className="mt-6 flex items-center gap-3 text-zinc-400">
                <Mail size={18} />
                <span>kenzo@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
