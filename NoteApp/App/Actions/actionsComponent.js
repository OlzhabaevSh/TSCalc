define(["require", "exports", "./../common/noteservice"], function (require, exports, note) {
    "use strict";
    exports.Name = "actionsComponent";
    var ActionsComponent = (function () {
        function ActionsComponent($scope, srvc) {
            this.$scope = $scope;
            this.srvc = srvc;
            this.actions = new Array();
        }
        ActionsComponent.prototype.$onInit = function () {
            this.actions = this.srvc.getActions();
        };
        ActionsComponent.prototype.click = function (action) {
            this.$scope.$emit('action-selected', action);
        };
        return ActionsComponent;
    }());
    ActionsComponent.$inject = ['$scope', note.Name];
    exports.component = {
        controller: ActionsComponent,
        templateUrl: '/app/actions/actionsTemplate.html'
    };
});
//# sourceMappingURL=actionsComponent.js.map