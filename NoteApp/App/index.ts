import * as notesModule from "./Notes/notesModule";
import * as actionsModule from "./actions/actionsModule";
import * as commonModule from "./common/commonModule";

let mdlName: string = 'noteapp';



let mdl = angular.module(mdlName, [
    notesModule.moduleName,
    actionsModule.moduleName,
    commonModule.moduleName
]);


angular.bootstrap(document, [mdlName]);