/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Path
 * model that will insure that a correct path has been passed
 */

export class Path {
  protected title: string;
  protected path: string;
  protected icon: string; //should be the webfont class alias i.e fa-clock

  constructor(title: string, path: string, icon?: string) {
    this.title = title;
    this.path = path;
    this.icon = icon;
  }
  // Setters
  setTitle(title: string): void {
    this.title = title;
  }

  setPath(path: string): void {
    this.path = path;
  }

  setIcon(icon: string): void {
    this.icon = icon;
  }
  // Getters
  getTitle(): string {
    return this.title;
  }

  getPath(): string {
    return this.path;
  }

  getIcon(): string {
    return this.icon;
  }
}
