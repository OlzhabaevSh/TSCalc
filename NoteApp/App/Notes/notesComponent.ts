import * as noteService from "./../common/noteservice";

export let componentName: string = "notes";

enum Mode {
    list,
    create,
    detail
}

class NotesComponentController implements ng.IComponentController {

    notes: Array<noteCore.INote>;
    noteSelected: noteCore.INote = null;
    mode: Mode = Mode.list;

    bufNote: noteCore.INote;

    constructor(private srvc: noteCore.INoteService) {
        this.notes = new Array();
    }

    $onInit(): void {
        this.notes = this.srvc.getNotes();
    }

    select(note: noteCore.INote) {

        if (this.noteSelected == null) {
            this.noteSelected = note;
            this.mode = Mode.detail;
        } else {
            if (this.noteSelected.id == note.id) {
                this.noteSelected = null;
                this.mode = Mode.list;
            } else {
                this.noteSelected = note;
                this.mode = Mode.detail;
            }
        }
        
    }

    create(): void {
        this.bufNote = {
            id: 0,
            title: '',
            date: new Date()
        };
        this.mode = Mode.create;
    }

    submit(): void {
        this.srvc.createNote(this.bufNote);
        this.notes = this.srvc.getNotes();
        this.mode = Mode.list;
    }

    cancel(): void {
        this.bufNote = {
            id: 0,
            title: '',
            date: new Date()
        };
        this.mode = Mode.list;
    }

}
NotesComponentController.$inject = [noteService.Name];

export let component: ng.IComponentOptions = {
    controller: NotesComponentController,
    templateUrl: '/app/notes/notesTemplate.html'
};