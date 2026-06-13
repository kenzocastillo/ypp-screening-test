import Image from "next/image";
import { VideoProp } from "../types/types";

const Video = ({ thumbnail, title, creator, description }: VideoProp) => {
  return (
    <article className="cursor-pointer">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={thumbnail}
          alt={description}
          width={320}
          height={180}
          className="w-full aspect-video object-cover transition hover:scale-105"
        />
      </div>

      <div className="mt-3 flex gap-3">
        <div className="h-10 w-10 rounded-full bg-zinc-700 shrink-0" />

        <div>
          <h3 className="font-semibold text-white line-clamp-2">{title}</h3>

          <p className="text-sm text-zinc-400 mt-1">{creator}</p>

          <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Video;
