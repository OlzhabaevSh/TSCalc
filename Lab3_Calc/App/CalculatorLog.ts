/**
 * Сервис по логировани.
 */
class CalculatorLogService implements Calc.ICalculatorLogService {

    // кэш логов
    private _logs: Array<Calc.IOperation>;

    constructor() {
        this._logs = new Array();
    }

    /**
     * получить логи
     */
    getHistory(): Array<Calc.IOperation> {
        return this._logs;
    }

    /**
     * получить конкретный элемент
     * @param id номер элемента
     */
    getItem(id: number): Calc.IOperation {
        let res = this._logs.filter((item, i) => {
            return item.id == id;
        });

        if (res.length > 0) {
            return res[0];
        }

        return null;
    }

    /**
     * создать новую запись
     * @param logOperation лог
     */
    addItem(logOperation: Calc.IOperation): void {
        let id = this._logs.length;
        logOperation.id = id;
        this._logs.push(logOperation);
    }

}