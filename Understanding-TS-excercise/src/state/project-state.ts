import { Project, ProjectStatus } from '../models/project.js'  

  
  // Project state management
  type Listner<T> = (items: T[]) => void;

  class State<T> {
    protected listners: Listner<T>[] = [];

    addListner(lisrnerFn: Listner<T>) {
      this.listners.push(lisrnerFn);
    }
  }

  export class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(title: string, description: string, manday: number) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        manday,
        ProjectStatus.Active
      );
      this.projects.push(newProject);
      this.updateListners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find((prj) => prj.id === projectId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListners();
      }
    }

    private updateListners() {
      for (const listnerFn of this.listners) {
        listnerFn(this.projects.slice());
      }
    }
  }

  console.log("実行中・・・");

  export const projectState = ProjectState.getInstance();
