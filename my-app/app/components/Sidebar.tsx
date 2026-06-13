import {
  Home,
  PlaySquare,
  Clock,
  History,
  ThumbsUp,
  Flame,
  Music,
  Gamepad2,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside
      className="
    hidden
    md:block
    sticky
    top-16
    w-64
    h-[calc(100vh-64px)]
    border-r
    border-zinc-800
  "
    >
      <nav className="p-4 flex flex-col gap-2">
        <SidebarItem icon={<Home size={20} />} label="Home" active />
        <SidebarItem icon={<PlaySquare size={20} />} label="Subscriptions" />
        <SidebarItem icon={<Clock size={20} />} label="Watch Later" />
        <SidebarItem icon={<History size={20} />} label="History" />
        <SidebarItem icon={<ThumbsUp size={20} />} label="Liked Videos" />

        <div className="my-4 border-t border-zinc-800" />

        <SidebarItem icon={<Flame size={20} />} label="Trending" />
        <SidebarItem icon={<Music size={20} />} label="Music" />
        <SidebarItem icon={<Gamepad2 size={20} />} label="Gaming" />
      </nav>
    </aside>
  );
};

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex items-center gap-4 rounded-xl px-4 py-3 transition
      ${active ? "bg-zinc-800" : "hover:bg-zinc-900"}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default Sidebar;
