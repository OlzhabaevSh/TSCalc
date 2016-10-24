define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.Name = "noteService";
    var NoteService = (function () {
        function NoteService() {
            this.notes = new Array();
            this.pages = new Array();
            this.actions = new Array();
            this.regist();
        }
        NoteService.prototype.getNotes = function () {
            return this.notes;
        };
        NoteService.prototype.createNote = function (note) {
            note.id = this.notes.length;
            this.notes.push(note);
        };
        NoteService.prototype.getNote = function (id) {
            return this.notes[id];
        };
        NoteService.prototype.getPages = function (noteId) {
            return this.pages.filter(function (item, index) { return item.noteId == noteId; });
        };
        NoteService.prototype.getPage = function (pageId) {
            return this.pages[pageId];
        };
        NoteService.prototype.createPage = function (page) {
            page.id = this.pages.length;
            page.actions = new Array();
            this.pages.push(page);
        };
        NoteService.prototype.updatePage = function (id, page) {
            this.pages[id] = page;
        };
        NoteService.prototype.getActions = function () {
            return this.actions;
        };
        NoteService.prototype.regist = function () {
            this.registActions();
            this.registNotes();
            this.registPages();
        };
        NoteService.prototype.registActions = function () {
            this.actions.push({ id: 0, title: 'Прогулка' });
            this.actions.push({ id: 1, title: 'Уборка' });
            this.actions.push({ id: 2, title: 'Сон' });
            this.actions.push({ id: 3, title: 'Уроки' });
            this.actions.push({ id: 4, title: 'Общение' });
        };
        NoteService.prototype.registNotes = function () {
            this.notes.push({ id: 0, date: new Date(), title: 'Work' });
            this.notes.push({ id: 1, date: new Date(), title: 'Poetry' });
        };
        NoteService.prototype.registPages = function () {
            this.pages.push({ id: 0, title: 'Widges', text: 'need do...', noteId: 0, actions: new Array() });
            this.pages.push({ id: 1, title: 'ARM', text: 'more than 3 days', noteId: 0, actions: new Array() });
            this.pages.push({ id: 2, title: 'location service', text: 'need ask...', noteId: 0, actions: new Array() });
            this.pages.push({ id: 3, title: 'Гроза', text: 'Люблю грозу в начале мая...', noteId: 1, actions: new Array() });
            this.pages.push({ id: 4, title: 'Шекспир', text: 'Быть или не быть...', noteId: 1, actions: new Array() });
        };
        return NoteService;
    }());
    exports.NoteService = NoteService;
});
//# sourceMappingURL=noteService.js.map