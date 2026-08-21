"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, ArrowRight, Link as LinkIcon } from "lucide-react";

export interface ProjectLink {
  title: string;
  url: string;
  icon?: string;
}

export interface ProjectCardProps {
  id: string;
  title: string;
  description: any;
  tags: string[];
  image: string;
  video?: string;
  links?: ProjectLink[];
  slug?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  tags,
  image,
  links,
  slug,
}: ProjectCardProps) {
  const router = useRouter();
  const previewUrl = `/projects/${slug || id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background/50 dark:bg-zinc-900/40 backdrop-blur-md transition-colors hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5"
    >
      {/* Clickable Image Container */}
      <div
        onClick={() => router.push(previewUrl)}
        className="relative h-48 w-full cursor-pointer overflow-hidden bg-muted/40"
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            No Image Available
          </div>
        )}

        {/* Hover Overlay with Preview CTA */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-black shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Eye className="size-4" /> View Preview
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h3
              onClick={() => router.push(previewUrl)}
              className="cursor-pointer font-bold text-lg tracking-tight text-foreground transition-colors group-hover:text-amber-500"
            >
              {title}
            </h3>
          </div>

          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {typeof description === "string"
              ? description
              : Array.isArray(description)
                ? description.join(" ")
                : ""}
          </p>
        </div>

        {/* Tags & External Links */}
        <div className="mt-6 space-y-4">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/40 bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-border/30">
            <Link
              href={previewUrl}
              className="inline-flex items-center gap-1 text-xs font-medium text-amber-500 hover:underline"
            >
              Details & Preview <ArrowRight className="size-3" />
            </Link>

            <div className="flex items-center gap-2">
              {links?.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <LinkIcon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
