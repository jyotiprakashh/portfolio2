import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarPhotoProps {
  imageLink: string;
}

const AvatarPhoto: React.FC<AvatarPhotoProps> = ({ imageLink }) => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <Avatar>
          <AvatarImage src={imageLink} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </p>
    </div>
  );
};

export default AvatarPhoto;
