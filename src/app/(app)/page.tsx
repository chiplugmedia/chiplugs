import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CinematicSection } from "@/components/cinematic-section";
import { FlyerGallery } from "@/components/flyer-gallery";
import { portableTextToPlainText } from "@/lib/utils";
import {
  getAuthorData,
  getEducation,
  getProjects,
  getWorkExperience,
} from "@/lib/data";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

export default async function Page() {
  const [author, work, education, projects] = await Promise.all([
    getAuthorData(),
    getWorkExperience(),
    getEducation(),
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
            <span className="hidden md:inline">Available for new projects</span>
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

      
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <PortableText value={author.summary ?? []} />
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {work.map((item, id) => (
            <BlurFade key={item._id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={item._id}
                logoUrl={item.logo?.asset?.url ?? ""}
                altText={item.company ?? ""}
                title={item.company ?? ""}
                subtitle={item.title ?? ""}
                href={item.url ?? ""}
                period={`${item.startDate} - ${item.endDate ?? "Present"}`}
                description={portableTextToPlainText(item.description!)}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {education.map((item, id) => (
            <BlurFade key={item._id} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={item._id}
                href={item.url ?? ""}
                logoUrl={item.logo?.asset?.url ?? ""}
                altText={item.school ?? ""}
                title={item.school ?? ""}
                subtitle={item.degree ?? ""}
                period={`${item.startDate} - ${item.endDate}`}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {author.skills?.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
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
  {/* Glow background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
  </div>

  <div className="max-w-6xl mx-auto px-4 space-y-14">
    <BlurFade delay={BLUR_FADE_DELAY * 11}>
      <div className="flex flex-col items-center text-center space-y-5">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[#fb7507] shadow-sm">
          <i className="fas fa-code text-[11px]" />
          Projects
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Featured Work & Creations
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed">
          I build fast, scalable, and beautiful digital products — from sleek
          landing pages to complex web applications. Here are some projects I’m
          proud of.
        </p>
      </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {projects.map((project, id) => (
              <BlurFade
                key={project._id}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  key={project._id}
                  title={project.title ?? ""}
                  description={project.description ?? []}
                  tags={project.technologies ?? []}
                  image={project.image?.asset?.url ?? ""}
                  video={project.video ?? ""}
                  links={project.links ?? []}
                  href={project.links?.[0]?.url ?? ""}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="designs" className="py-20 bg-gradient-to-b from-background to-background/90">
  <div className="max-w-7xl mx-auto px-4 space-y-12">
    {/* Header */}
    <BlurFade delay={BLUR_FADE_DELAY * 16}>
    <div className="text-center space-y-4">
      <span className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-600">
        Projects
      </span>
      <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
        Graphic Design Flyers
      </h2>
     <p className="max-w-2xl text-center mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
  A collection of high-quality flyer designs crafted for brands, events,
  and marketing campaigns.
</p>
    </div>
</BlurFade>
    <FlyerGallery />
  </div>
</section>

      <section id="contact" className="relative py-20 overflow-hidden">
  {/* Glow background */}
  <div className="" />

  <div className="max-w-5xl mx-auto px-4 md:px-6">
    <BlurFade delay={BLUR_FADE_DELAY * 16}>
      <div className="relative border border-border rounded-3xl shadow-l p-10 md:p-14 text-center space-y-6">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-1.5 text-xs font-bold tracking-widest uppercase shadow-md">
          Contact Us
        </span>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Let’s Build Something Amazing
        </h2>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed">
          Got an idea, project, or opportunity? I’m always open to meaningful
          conversations. Reach out anytime — I’d love to hear from you.
        </p>

        {/* Buttons */}
       <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
  <Link
    href={`mailto:${author.social?.email ?? ""}`}
    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#fb7507] to-[#fb7507] text-black font-bold px-6 py-3 shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
  >
    <i className="fas fa-envelope text-sm" />
    Email Me
  </Link>

  <Link
    href="https://wa.me/message/ULBHK5KZZCQID1"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/60 backdrop-blur px-6 py-3 font-semibold text-foreground hover:bg-foreground hover:text-background transition"
  >
    <i className="fab fa-whatsapp text-sm" />
    WhatsApp
  </Link>
</div>



      </div>
    </BlurFade>
  </div>
</section>

      <footer className="pb-12 sm:pb-6 text-center text-xs text-muted-foreground">
        <p>
          Copyright © 2026 Chi Plug Media.
        </p>
      </footer>
    </main>
  );
}
