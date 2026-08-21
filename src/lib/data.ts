// Data access layer for portfolio data
import {
  AUTHOR,
  WORK_EXPERIENCE,
  EDUCATION,
  PROJECTS,
  type Author,
  type WorkExperience,
  type Education,
  type Project,
} from "@/constants/portfolio";

export async function getAuthorData(): Promise<Author | null> {
  return AUTHOR;
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  return WORK_EXPERIENCE;
}

export async function getEducation(): Promise<Education[]> {
  return EDUCATION;
}

export async function getProjects(): Promise<Project[]> {
  return PROJECTS;
}
export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();

  // Finds project by matching slug or _id
  return projects.find(
    (project: any) => project.slug?.current === slug || project._id === slug,
  );
}
