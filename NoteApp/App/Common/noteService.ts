export let Name: string = "noteService";

export class NoteService implements noteCore.INoteService {


    private notes: Array<noteCore.INote>;
    private pages: Array<noteCore.IPage>;
    private actions: Array<noteCore.IAction>;

    constructor() {
        this.notes = new Array();
        this.pages = new Array();
        this.actions = new Array();

        this.regist();
    }

    getNotes(): Array<noteCore.INote> {
        return this.notes;
    }

    createNote(note: noteCore.INote): void {
        note.id = this.notes.length;
        this.notes.push(note);
    }

    getNote(id: number): noteCore.INote {
        return this.notes[id];
    }

    getPages(noteId: number): Array<noteCore.IPage> {
        return this.pages.filter((item, index) => { return item.noteId == noteId });
    }

    getPage(pageId: number): noteCore.IPage {
        return this.pages[pageId];
    }

    createPage(page: noteCore.IPage): void {
        page.id = this.pages.length;
        page.actions = new Array();
        this.pages.push(page);
    }

    updatePage(id: number, page: noteCore.IPage): void {
        this.pages[id] = page;
    }

    getActions(): Array<noteCore.IAction> {
        return this.actions;
    }

    private regist(): void {
        this.registActions();
        this.registNotes();
        this.registPages();
    }

    private registActions(): void {
        this.actions.push({ id: 0, title: 'Прогулка' });
        this.actions.push({ id: 1, title: 'Уборка' });
        this.actions.push({ id: 2, title: 'Сон' });
        this.actions.push({ id: 3, title: 'Уроки' });
        this.actions.push({ id: 4, title: 'Общение' });
    }

    private registNotes(): void {
        this.notes.push({ id: 0, date: new Date(), title: 'Work' });
        this.notes.push({ id: 1, date: new Date(), title: 'Poetry' });
    }

    private registPages(): void {
        this.pages.push({ id: 0, title: 'Widges', text: 'need do...', noteId: 0, actions: new Array() });
        this.pages.push({ id: 1, title: 'ARM', text: 'more than 3 days', noteId: 0, actions: new Array() });
        this.pages.push({ id: 2, title: 'location service', text: 'need ask...', noteId: 0, actions: new Array() });

        this.pages.push({ id: 3, title: 'Гроза', text: 'Люблю грозу в начале мая...', noteId: 1, actions: new Array() });
        this.pages.push({ id: 4, title: 'Шекспир', text: 'Быть или не быть...', noteId: 1, actions: new Array() });
    }

}
