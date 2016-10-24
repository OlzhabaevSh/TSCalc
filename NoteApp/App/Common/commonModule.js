define(["require", "exports", "./noteService"], function (require, exports, noteService) {
    "use strict";
    exports.moduleName = "commonModule";
    var mdl = angular.module(exports.moduleName, []);
    mdl.service(noteService.Name, noteService.NoteService);
});
//# sourceMappingURL=commonModule.js.map