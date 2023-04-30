import { Avatar, Menu, MenuButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";

interface ProfileMenuProps {
  src?: string;
  name: string;
  nim: string;
  children: React.ReactNode;
}

export default function ProfileMenu({
  src,
  name,
  nim,
  children,
}: ProfileMenuProps) {
  return (
    <Menu>
      <MenuButton>
        <div className="flex items-center gap-2">
          {src ? (
            <Avatar src={src} name={name} size="md" />
          ) : (
            <Avatar name={name} size="md" />
          )}
          <div className="flex-col items-start hidden md:flex">
            <span className="text-sm font-bold text-slate-900">{name}</span>
            <span className="text-xs text-slate-500">{nim}</span>
          </div>
          <ChevronDownIcon />
        </div>
      </MenuButton>
      {children}
    </Menu>
  );
}
