import { getProjectBySlug, getProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: any) => ({
    slug: project.slug?.current || project._id,
  }));
}

export default async function ProjectPreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Updated to Promise for Next.js 15
}) {
  const { slug } = await params; // Await params here
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const techList: string[] = project.technologies || [];

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      {/* Back Navigation */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" /> Back to Projects
      </Link>

      {/* Header Info */}
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          {project.title}
        </h1>
      </header>

      {/* Preview Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-xl">
        {project.image?.asset?.url ? (
          <Image
            src={project.image.asset.url}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-muted-foreground">
            No Preview Available
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold">Overview</h2>
          <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            {Array.isArray(project.description) ? (
              <PortableText value={project.description} />
            ) : (
              <p>{project.description}</p>
            )}
          </div>
        </div>

        <aside className="space-y-6 rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-md h-fit">
          <h3 className="font-bold text-lg">Project Details</h3>

          {/* Technologies Stack */}
          <div className="space-y-3 pt-2 border-t border-border/40">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Cpu className="size-4 text-amber-500" />
              <span>Technologies</span>
            </div>

            {techList.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {techList.map((tech: string) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 text-xs font-medium bg-secondary/80 hover:bg-secondary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">
                No technologies listed.
              </p>
            )}
          </div>

          {/* Project Links */}
          {project.links && project.links.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-border/40">
              <div className="space-y-2 text-sm">
                {project.links.map((link: any, idx: number) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                  >
                    <span>{link.title || "Visit Site"}</span>
                    <ExternalLink className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
