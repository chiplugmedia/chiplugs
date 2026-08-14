import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { getAuthorData } from "@/lib/data";
import {
  GithubIcon,
  HomeIcon,
  MailIcon,
  XIcon,
  FileTextIcon,
} from "lucide-react";
import Link from "next/link";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default async function Navbar() {
  const author = await getAuthorData();

  const navItems = [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: `mailto:${author?.social?.email || ""}`,
      icon: MailIcon,
      label: "Contact",
    },
  ];

  const socialItems = [
    {
      name: "X",
      icon: XIcon,
      url: author?.social?.twitter || "https://x.com/chiplug001",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      url: "https://www.tiktok.com/@chiplug001",
    },
    {
      name: "GitHub",
      icon: GithubIcon,
      url: author?.social?.github || "#",
    },
    {
      name: "Resume",
      icon: FileTextIcon,
      url: "#",
    },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />

      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {/* Navigation */}
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      }),
                      "size-12",
                    )}
                  >
                    <Icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          );
        })}

        <Separator orientation="vertical" className="h-full" />

        {/* Social Links */}
        {socialItems.map((social) => {
          const Icon = social.icon;

          return (
            <DockIcon key={social.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      }),
                      "size-12",
                    )}
                  >
                    <Icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          );
        })}

        <Separator orientation="vertical" className="h-full py-2" />

        {/* Theme Toggle */}
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}

