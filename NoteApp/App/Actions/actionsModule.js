define(["require", "exports", "./actionsComponent"], function (require, exports, actionComponents) {
    "use strict";
    exports.moduleName = "actionsModule";
    var mdl = angular.module(exports.moduleName, []);
    mdl.component(actionComponents.Name, actionComponents.component);
});
//# sourceMappingURL=actionsModule.js.map