import * as noteService from "./../common/noteservice";

export let Name: string = "actionDetail";

class ActionDetailComponentController implements ng.IComponentController {

    actionid: number;
    page: noteCore.IPage;

    constructor(private $scope: ng.IScope, private srv: noteCore.INoteService) {

    }

    $onInit(): void {
        this.$scope.$on('action-selected', (event, act: noteCore.IAction) => {
            this.page.actions.push(act);
        });
        
    }

    $onChanges(obj: any): void {
        this.page = this.srv.getPage(obj.actionid.currentValue);
    }

    submit(): void {
        this.srv.updatePage(this.page.id, this.page);
    }

    remove(index: number): void {
        this.page.actions.splice(index, 1);
    }

}
ActionDetailComponentController.$inject = ['$scope', noteService.Name];

export let component: ng.IComponentOptions = {
    bindings: {
        actionid: "<"
    },
    controller: ActionDetailComponentController,
    templateUrl: '/app/notes/actionDetailTemplate.html'
};