//import * as note from "./../common/noteservice";
import * as note from "./../common/noteservice";

export let Name: string = "actionsComponent";

class ActionsComponent implements ng.IComponentController {

    private actions: Array<noteCore.IAction>;

    constructor(private $scope: ng.IScope, private srvc: noteCore.INoteService) {
        this.actions = new Array();
    }

    $onInit(): void {
        this.actions = this.srvc.getActions();
    }

    click(action: noteCore.IAction): void {
        this.$scope.$emit('action-selected', action);
    }

}
ActionsComponent.$inject = ['$scope', note.Name];

export let component: ng.IComponentOptions = {
    controller: ActionsComponent,
    templateUrl: '/app/actions/actionsTemplate.html'
};