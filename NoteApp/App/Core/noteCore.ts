namespace noteCore {

    export interface IAction {
        id: number;
        title: string;
    }

    export interface IPage {
        id: number;
        title: string;
        text?: string;
        noteId: number;
        actions?: Array<IAction>;
    }

    export interface INote {
        id: number;
        title: string;
        date: Date;
    }

    export interface INoteService {
        getNotes(): Array<INote>;

        createNote(note: INote): void;

        getNote(id: number): INote;

        getPages(noteId: number): Array<IPage>;

        getPage(pageId: number): IPage;

        createPage(page: IPage): void;

        updatePage(id: number, page: IPage): void;

        getActions(): Array<IAction>;
    }

}