define(["require", "exports", "./../common/noteservice"], function (require, exports, noteService) {
    "use strict";
    exports.Name = "actions";
    var Mode;
    (function (Mode) {
        Mode[Mode["list"] = 0] = "list";
        Mode[Mode["create"] = 1] = "create";
        Mode[Mode["detail"] = 2] = "detail";
    })(Mode || (Mode = {}));
    var ActionComponentController = (function () {
        function ActionComponentController(srvc) {
            this.srvc = srvc;
            this.mode = Mode.list;
            this.actions = new Array();
        }
        ActionComponentController.prototype.$onChanges = function (obj) {
            var id = obj.noteid.currentValue;
            this.actions = this.srvc.getPages(id);
            this.mode = Mode.list;
        };
        ActionComponentController.prototype.select = function (action) {
            if (this.selectedAction == null) {
                this.selectedAction = action;
                this.mode = Mode.detail;
            }
            else {
                if (this.selectedAction.id == action.id) {
                    this.selectedAction = null;
                    this.mode = Mode.list;
                }
                else {
                    this.selectedAction = action;
                    this.mode = Mode.detail;
                }
            }
        };
        ActionComponentController.prototype.create = function () {
            this.bufAction = {
                id: 0,
                noteId: this.noteid,
                text: '',
                title: 'new title'
            };
            this.mode = Mode.create;
        };
        ActionComponentController.prototype.submit = function () {
            this.srvc.createPage(this.bufAction);
            this.actions = this.srvc.getPages(this.noteid);
            this.mode = Mode.list;
        };
        ActionComponentController.prototype.cancel = function () {
            this.bufAction = {
                id: 0,
                noteId: this.noteid,
                text: '',
                title: 'new title'
            };
            this.mode = Mode.list;
        };
        return ActionComponentController;
    }());
    ActionComponentController.$inject = [noteService.Name];
    exports.component = {
        bindings: {
            noteid: '<'
        },
        controller: ActionComponentController,
        templateUrl: '/app/notes/actionsTemplate.html'
    };
});
//# sourceMappingURL=actionsComponent.js.map