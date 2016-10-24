import * as noteService from "./../common/noteservice";

export let Name: string = "actions";

enum Mode {
    list,
    create,
    detail
}

class ActionComponentController implements ng.IComponentController {

    actions: Array<noteCore.IPage>;
    selectedAction: noteCore.IPage;
    bufAction: noteCore.IPage;

    noteid: number;

    mode: Mode = Mode.list;

    constructor(private srvc: noteCore.INoteService) {
        this.actions = new Array();
    }

    $onChanges(obj: any): void {
        let id: number = obj.noteid.currentValue;
        this.actions = this.srvc.getPages(id);
        this.mode = Mode.list;
    }

    select(action: noteCore.IPage): void {
        
        if (this.selectedAction == null) {
            this.selectedAction = action;
            this.mode = Mode.detail;
        } else {
            if (this.selectedAction.id == action.id) {
                this.selectedAction = null;
                this.mode = Mode.list;
            } else {
                this.selectedAction = action;
                this.mode = Mode.detail;
            }
        }

    }

    create(): void {
        this.bufAction = {
            id: 0,
            noteId: this.noteid,
            text: '',
            title: 'new title'
        };
        this.mode = Mode.create;
    }

    submit(): void {
        this.srvc.createPage(this.bufAction);
        this.actions = this.srvc.getPages(this.noteid);
        this.mode = Mode.list;
    }

    cancel(): void {
        this.bufAction = {
            id: 0,
            noteId: this.noteid,
            text: '',
            title: 'new title'
        };
        this.mode = Mode.list;
    }


}
ActionComponentController.$inject = [noteService.Name];

export let component: ng.IComponentOptions = {
    bindings: {
        noteid: '<'
    },
    controller: ActionComponentController,
    templateUrl: '/app/notes/actionsTemplate.html'
};