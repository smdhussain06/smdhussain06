export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  iconType: string;
  isSlider: boolean;
  folderPath: string;
  tags: string[];
  link: string;
  github: string;
  buttonText: string;
  buttonType: string;
  fileExtension?: string;
}
