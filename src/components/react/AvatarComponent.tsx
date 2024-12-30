import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import salvadorImage from '@/assets/salvadorjesus.jpg';

export default function AvatarComponent() {
  return (
    <Avatar className="size-16">
      <AvatarImage
        src={salvadorImage.src}
        alt="Salvador Jesus - Portfolio"
      />
      <AvatarFallback>SJ</AvatarFallback>
    </Avatar>
  );
}
