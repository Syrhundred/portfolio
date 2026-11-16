import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Tabs } from "@/components/Tabs";
import { projects } from "@/data/projects";
import { getI18n } from "@/i18n/dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getI18n();
  return { title: dict.meta.projects };
}

export default async function ProjectsPage() {
  const { locale, dict } = await getI18n();

  return (
    <PageShell>
      <ProfileHeader />
      <Tabs active="projects" />
      <ProjectsGrid
        projects={projects}
        locale={locale}
        t={dict.projectsPage}
      />
    </PageShell>
  );
}
