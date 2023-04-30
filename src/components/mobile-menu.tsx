import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
} from "@chakra-ui/react";
import { PanelLeftOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  to: string;
  title: string;
  children: React.ReactNode;
}

export default function MobileMenu({
  onOpen,
  onClose,
  isOpen,
  to,
  title,
  children,
}: MobileMenuProps) {
  return (
    <div className="block lg:hidden">
      <IconButton
        icon={<PanelLeftOpen />}
        variant="ghost"
        aria-label="Toggle Menu"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Link to={to}>
              <h1 className="font-semibold leading-7 text-slate-900">
                {title}
              </h1>
            </Link>
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
