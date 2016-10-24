define(["require", "exports", "./../common/noteservice"], function (require, exports, noteService) {
    "use strict";
    exports.Name = "actionDetail";
    var ActionDetailComponentController = (function () {
        function ActionDetailComponentController($scope, srv) {
            this.$scope = $scope;
            this.srv = srv;
        }
        ActionDetailComponentController.prototype.$onInit = function () {
            var _this = this;
            this.$scope.$on('action-selected', function (event, act) {
                _this.page.actions.push(act);
            });
        };
        ActionDetailComponentController.prototype.$onChanges = function (obj) {
            this.page = this.srv.getPage(obj.actionid.currentValue);
        };
        ActionDetailComponentController.prototype.submit = function () {
            this.srv.updatePage(this.page.id, this.page);
        };
        ActionDetailComponentController.prototype.remove = function (index) {
            this.page.actions.splice(index, 1);
        };
        return ActionDetailComponentController;
    }());
    ActionDetailComponentController.$inject = ['$scope', noteService.Name];
    exports.component = {
        bindings: {
            actionid: "<"
        },
        controller: ActionDetailComponentController,
        templateUrl: '/app/notes/actionDetailTemplate.html'
    };
});
//# sourceMappingURL=actionDetailComponent.js.map