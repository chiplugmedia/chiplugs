import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CinematicSection } from "@/components/cinematic-section";
import { FlyerGallery } from "@/components/flyer-gallery";
import { portableTextToPlainText } from "@/lib/utils";
import { Briefcase, ExternalLink, Calendar, Code2 } from "lucide-react";
import { getAuthorData, getWorkExperience, getProjects } from "@/lib/data";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

export default async function Page() {
  const [author, work, projects] = await Promise.all([
    getAuthorData(),
    getWorkExperience(),
    getProjects(),
  ]);

  if (!author) return null;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl sm:max-w-5xl space-y-8">
          <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-12 items-center sm:items-start justify-between">
            {/* Left content */}
            <div className="flex flex-col flex-1 space-y-4 text-center sm:text-left">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
                yOffset={8}
                text={`Hi, I'm ${author.name ?? ""}`}
              />

              <BlurFadeText
                className="text-sm sm:text-base font-semibold text-gray-400 tracking-wide"
                delay={BLUR_FADE_DELAY}
                text="CEO, Chi Plug Media"
              />

              <BlurFadeText
                className="max-w-full sm:max-w-[600px] text-sm sm:text-base md:text-lg text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={portableTextToPlainText(author.description!)}
              />

              {/* Buttons */}
              <BlurFade
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4"
                delay={BLUR_FADE_DELAY}
              >
                <Link
                  href="#contact"
                  className="bg-black text-white py-3 px-6 rounded-lg text-sm sm:text-base hover:bg-[#fb7507] transition-all sm:hover:px-7 md:hover:px-8 dark:bg-[#fb7507] dark:hover:bg-[#e56700]"
                >
                  Hire Me!
                </Link>

                <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#e1f9dc] text-[#178d00] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 bg-[#178d00] rounded-full animate-pulse" />
                  <span className="hidden md:inline">
                    Available for new projects
                  </span>
                  <span className="md:hidden">Available</span>
                </div>
              </BlurFade>
            </div>

            {/* Avatar */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="w-36 h-36 sm:w-44 sm:h-44 border rounded-full overflow-hidden">
                <AvatarImage
                  alt={author.name ?? ""}
                  src={author.avatar?.asset?.url ?? ""}
                  className="object-cover w-full h-full"
                />
                <AvatarFallback>{author.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <PortableText value={author.summary ?? []} />
          </div>
        </BlurFade>
      </section>

      <section id="work" className="max-w-6xl mx-auto px-4 py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Briefcase className="size-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Work Experience
              </h2>
              <p className="text-sm text-muted-foreground">
                My professional journey & commercial roles
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="relative pl-6 border-l border-border/60 space-y-8 ml-3">
          {work.map((item: any, id: number) => {
            const isPresent =
              !item.endDate || item.endDate.toLowerCase() === "present";
            const descriptionText = item.description
              ? portableTextToPlainText(item.description)
              : "";

            return (
              <BlurFade key={item._id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <div className="relative group">
                  <div
                    className={`absolute -left-[31px] top-1.5 size-3.5 rounded-full border-2 transition-all duration-300 ${
                      isPresent
                        ? "bg-primary border-primary ring-4 ring-primary/20"
                        : "bg-background border-muted-foreground/40 group-hover:border-primary group-hover:bg-primary"
                    }`}
                  />

                  <div className="p-6 rounded-2xl border border-border/50 bg-background/50 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:bg-background/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        {item.logo?.asset?.url && (
                          <div className="size-12 rounded-xl overflow-hidden border border-border/40 bg-muted/30 p-1.5 shrink-0 flex items-center justify-center">
                            <img
                              src={item.logo.asset.url}
                              alt={item.company ?? "Company logo"}
                              className="size-full object-contain rounded-lg"
                            />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            {item.url && (
                              <Link
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink className="size-3.5" />
                              </Link>
                            )}
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground self-start sm:self-auto bg-muted/40 px-3 py-1.5 rounded-full border border-border/30">
                        <Calendar className="size-3.5" />
                        <span>
                          {item.startDate} — {item.endDate ?? "Present"}
                        </span>
                        {isPresent && (
                          <span className="inline-flex items-center gap-1.5 pl-1 text-emerald-500 font-medium">
                            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Active
                          </span>
                        )}
                      </div>
                    </div>

                    {descriptionText && (
                      <p className="text-sm text-muted-foreground/90 leading-relaxed whitespace-pre-line mb-4">
                        {descriptionText}
                      </p>
                    )}

                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                        {item.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary/60 text-secondary-foreground border border-border/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>

          <div className="flex flex-wrap gap-2">
            {author.skills?.map((skill: string, id: number) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <CinematicSection />

      <section
        id="projects"
        className="relative overflow-hidden py-20 bg-gradient-to-b from-background via-background/90 to-background"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-yellow-400/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 space-y-14">
          <div className="flex flex-col items-center text-center space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-amber-500 shadow-sm">
              <Code2 className="size-3.5" /> Projects
            </span>

            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Featured Work & Creations
            </h2>

            <p className="max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed">
              I build fast, scalable, and beautiful digital products — from
              sleek landing pages to complex web applications. Here are some
              projects I’m proud of.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[850px] mx-auto">
            {projects?.map((project: any) => (
              <ProjectCard
                key={project._id}
                id={project._id}
                slug={project.slug?.current}
                title={project.title ?? ""}
                description={project.description ?? []}
                tags={project.technologies ?? []}
                image={project.image?.asset?.url ?? ""}
                video={project.video ?? ""}
                links={project.links ?? []}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="designs"
        className="py-20 bg-gradient-to-b from-background to-background/90"
      >
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="text-center space-y-4">
              <span className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-600">
                Projects
              </span>
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Graphic Design Flyers
              </h2>
              <p className="max-w-2xl text-center mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
                A collection of high-quality flyer designs crafted for brands,
                events, and marketing campaigns.
              </p>
            </div>
          </BlurFade>
          <FlyerGallery />
        </div>
      </section>

      <section id="contact" className="relative py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="relative border border-border rounded-3xl shadow-lg p-10 md:p-14 text-center space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-1.5 text-xs font-bold tracking-widest uppercase shadow-md">
                Contact Us
              </span>

              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Let’s Build Something Amazing
              </h2>

              <p className="mx-auto max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed">
                Got an idea, project, or opportunity? I’m always open to
                meaningful conversations. Reach out anytime — I’d love to hear
                from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href={`mailto:${author.social?.email ?? ""}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#fb7507] to-[#fb7507] text-black font-bold px-6 py-3 shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
                >
                  <i className="fas fa-envelope text-sm" />
                  Email Me
                </a>

                <a
                  href="https://wa.me/message/ULBHK5KZZCQID1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/60 backdrop-blur px-6 py-3 font-semibold text-foreground hover:bg-foreground hover:text-background transition"
                >
                  <i className="fab fa-whatsapp text-sm" />
                  WhatsApp
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <footer className="pb-12 sm:pb-6 text-center text-xs text-muted-foreground">
        <p>Copyright © 2026 Chi Plug Media.</p>
      </footer>
    </main>
  );
}
