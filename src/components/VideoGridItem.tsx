type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  thumbnailUrl: string;
  videoUrl: string;
};

export function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  thumbnailurl,
  videoUrl,
}: VideoGridItemProps) {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <a href={`/watch?v=${id}`} className="relative aspect-video">
          <img
            src={thumbnailurl}
            className="block w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-1 right-1 bg-secondary-dark text-sm px-.5 rounded">
            {duration}
          </div>
        </a>
      </div>
    </>
  );
}
