class CalculatorLogService implements Calc.ICalculatorLogService {

    private _logs: Array<Calc.IOperation>;

    constructor() {
        this._logs = new Array();
    }

    getHistory(): Array<Calc.IOperation> {
        return this._logs;
    }

    getItem(id: number): Calc.IOperation {
        let res = this._logs.filter((item, i) => {
            return item.id == id;
        });

        if (res.length > 0) {
            return res[0];
        }

        return null;
    }

    addItem(logOperation: Calc.IOperation): void {
        let id = this._logs.length;
        logOperation.id = id;
        this._logs.push(logOperation);
    }

}