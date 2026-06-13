"use client";

import { use } from "react";
import Image from "next/image";
import { useVideos } from "@/app/hooks/useVideos";
import Recommended from "@/app/components/Recommended";

export default function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { findVideo } = useVideos();

  const video = findVideo(id);

  if (!video) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Video Not Found
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen w-full rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Content */}
        <section className="xl:col-span-2">
          <div className="overflow-hidden rounded-2xl pt-4">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={1280}
              height={400}
              className="w-full aspect-video object-cover"
            />
          </div>

          <h1 className="text-2xl font-bold mt-5">{video.title}</h1>

          <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-zinc-700" />

              <div>
                <p className="font-semibold">{video.creator}</p>

                <p className="text-sm text-zinc-400">125K subscribers</p>
              </div>
            </div>

            <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-zinc-200">
              Subscribe
            </button>
          </div>

          <div className="mt-6 rounded-xl bg-zinc-900 p-4">
            <p className="text-sm text-zinc-400 mb-2">15K views • 3 days ago</p>

            <p>{video.description}</p>
          </div>
        </section>

        <Recommended id={id} />
      </div>
    </main>
  );
}
