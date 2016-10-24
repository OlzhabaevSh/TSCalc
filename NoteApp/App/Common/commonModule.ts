import * as noteService from "./noteService";

export let moduleName: string = "commonModule";

let mdl = angular.module(moduleName, []);


mdl.service(noteService.Name, noteService.NoteService);