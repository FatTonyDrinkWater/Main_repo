class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click");
  }
}

class ProjectList {
  projects = [];

  constructor(type, switchHandlerFunction) {
    this.type = type;
    this.switchHandler = this.switchHandlerFunction;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjItems);
    for (const item of prjItems) {
      this.projects.push(new ProjectItem(item.id));
    }
    console.log(this.projects);
  }

  addProject() {}

  switchProject(projectId) {
    const projindex = this.projects.findIndex((p) => p.id === projectId);
    this.projects.splice(projindex, 1);
    this.switchHandler(this.projects.find((p) => p.id));
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
  }
}

App.init();
