import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Video } from "../types/types";
import { useVideos } from "../hooks/useVideos";

const Recommended = ({ id }: { id: string }) => {
  const { videos } = useVideos();
  function getRecommendedVideos(videos: Video[], currentId: string) {
    return [...videos]
      .filter((v) => v.id !== currentId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const recommended = useMemo(
    () => getRecommendedVideos(videos, id),
    [videos, id],
  );
  return (
    <aside className="space-y-4">
      {recommended.map((item) => (
        <Link href={`/videos/${item.id}`} key={item.id}>
          <div
            key={item.id}
            className="flex gap-3 cursor-pointer hover:bg-zinc-900 rounded-xl p-2 transition"
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={160}
              height={90}
              className="rounded-lg object-cover"
            />

            <div>
              <h3 className="font-medium line-clamp-2">{item.title}</h3>

              <p className="text-sm text-zinc-400 mt-1">{item.creator}</p>

              <p className="text-xs text-zinc-500">5K views</p>
            </div>
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default Recommended;
