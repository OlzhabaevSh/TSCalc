define(["require", "exports", "./../common/noteservice"], function (require, exports, noteService) {
    "use strict";
    exports.componentName = "notes";
    var Mode;
    (function (Mode) {
        Mode[Mode["list"] = 0] = "list";
        Mode[Mode["create"] = 1] = "create";
        Mode[Mode["detail"] = 2] = "detail";
    })(Mode || (Mode = {}));
    var NotesComponentController = (function () {
        function NotesComponentController(srvc) {
            this.srvc = srvc;
            this.noteSelected = null;
            this.mode = Mode.list;
            this.notes = new Array();
        }
        NotesComponentController.prototype.$onInit = function () {
            this.notes = this.srvc.getNotes();
        };
        NotesComponentController.prototype.select = function (note) {
            if (this.noteSelected == null) {
                this.noteSelected = note;
                this.mode = Mode.detail;
            }
            else {
                if (this.noteSelected.id == note.id) {
                    this.noteSelected = null;
                    this.mode = Mode.list;
                }
                else {
                    this.noteSelected = note;
                    this.mode = Mode.detail;
                }
            }
        };
        NotesComponentController.prototype.create = function () {
            this.bufNote = {
                id: 0,
                title: '',
                date: new Date()
            };
            this.mode = Mode.create;
        };
        NotesComponentController.prototype.submit = function () {
            this.srvc.createNote(this.bufNote);
            this.notes = this.srvc.getNotes();
            this.mode = Mode.list;
        };
        NotesComponentController.prototype.cancel = function () {
            this.bufNote = {
                id: 0,
                title: '',
                date: new Date()
            };
            this.mode = Mode.list;
        };
        return NotesComponentController;
    }());
    NotesComponentController.$inject = [noteService.Name];
    exports.component = {
        controller: NotesComponentController,
        templateUrl: '/app/notes/notesTemplate.html'
    };
});
//# sourceMappingURL=notesComponent.js.map