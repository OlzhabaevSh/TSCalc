let mdl = angular.module('app', []);

class CalcController {

    operandOne: number;
    operandTwo: number;
    result: number;

    operation: string;

    logs: Array<Calc.IOperation>;

    isShow: boolean = false;

    constructor(private calcService: CalculatorService, private calcLogService: CalculatorLogService) {
        this.logs = new Array();
    }

    public init(): void {

    }

    public calculate(operation: Calc.OperationEnum): void {

        this.operation = Calc.OperationEnum[operation];

        let res = this.calcService.calculate(this.operandOne, this.operandTwo, operation);

        this.calcLogService.addItem({
            operandFirst: this.operandOne,
            operandSecond: this.operandTwo,
            operation: operation,
            result: res
        });

        this.result = res;
    }

    public getLogs(): void {
        this.logs = this.calcLogService.getHistory();
        console.log('ss', this.logs);
    }

    public clearHistory(): void {
        this.logs = new Array();
    }

    public selectLogItem(item: Calc.IOperation): void {
        let res = this.calcLogService.getItem(item.id);
        this.operandOne = res.operandFirst;
        this.operandTwo = res.operandSecond;
        this.result = res.result;
        this.operation = Calc.OperationEnum[res.operation];
    }

    public logShow(): void {
        this.isShow = !this.isShow;
    }

    public convertToString(operation: Calc.OperationEnum): string {
        return Calc.OperationEnum[operation];
    }

}
CalcController.$inject = ['calculatorService', 'calculatorLogService'];

mdl.service('calculatorService', CalculatorService);
mdl.service('calculatorLogService', CalculatorLogService);
mdl.controller('calcController', CalcController);

angular.bootstrap(document, ['app']);