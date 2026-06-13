import Video from "./Video";
import { useVideos } from "../hooks/useVideos";
import Link from "next/link";
const VideoContent = () => {
  const { videos } = useVideos();

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <Link href={`/videos/${video.id}`} key={video.id}>
            <Video
              id={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              creator={video.creator}
              description={video.description}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default VideoContent;
