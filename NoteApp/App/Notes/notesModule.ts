import * as notesComponent from "./notesComponent";
import * as actionsComponent from "./actionsComponent";
import * as actionDetailComponent from "./actionDetailComponent";

export let moduleName: string = "notesModule";

let mdl = angular.module(moduleName, []);

mdl.component(notesComponent.componentName, notesComponent.component);
mdl.component(actionsComponent.Name, actionsComponent.component);
mdl.component(actionDetailComponent.Name, actionDetailComponent.component);