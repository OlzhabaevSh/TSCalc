import * as actionComponents from "./actionsComponent";

export let moduleName: string = "actionsModule";



let mdl = angular.module(moduleName, []);

mdl.component(actionComponents.Name, actionComponents.component);