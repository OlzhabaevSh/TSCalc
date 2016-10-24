define(["require", "exports", "./notesComponent", "./actionsComponent", "./actionDetailComponent"], function (require, exports, notesComponent, actionsComponent, actionDetailComponent) {
    "use strict";
    exports.moduleName = "notesModule";
    var mdl = angular.module(exports.moduleName, []);
    mdl.component(notesComponent.componentName, notesComponent.component);
    mdl.component(actionsComponent.Name, actionsComponent.component);
    mdl.component(actionDetailComponent.Name, actionDetailComponent.component);
});
//# sourceMappingURL=notesModule.js.map