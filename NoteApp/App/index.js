define(["require", "exports", "./Notes/notesModule", "./actions/actionsModule", "./common/commonModule"], function (require, exports, notesModule, actionsModule, commonModule) {
    "use strict";
    var mdlName = 'noteapp';
    var mdl = angular.module(mdlName, [
        notesModule.moduleName,
        actionsModule.moduleName,
        commonModule.moduleName
    ]);
    angular.bootstrap(document, [mdlName]);
});
//# sourceMappingURL=index.js.map