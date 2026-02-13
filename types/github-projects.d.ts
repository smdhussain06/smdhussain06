declare module '@/data/github-projects.json' {
  export interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
    iconType: string;
    isSlider: boolean;
    tags: string[];
    link: string;
    github: string;
    buttonText: string;
    buttonType: string;
    folderPath?: string;
    fileExtension?: string;
    stars?: number;
    forks?: number;
    language?: string;
    updatedAt?: string;
  }

  const projects: Project[];
  export default projects;
}
