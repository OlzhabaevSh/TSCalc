// создание модуля
let mdl = angular.module('app', []);

/**
 * Класс контроллер. Логика представления. По сути калькулятор
 * будет иметь простую логику. он будет брать операнды и делать с ними
 * какую нибудь операцию.
 */
class CalcController {

    // первый операнд
    operandOne: number;
    // второй операнд
    operandTwo: number;
    // результат операции
    result: number;

    // здесь будет имя операции
    operation: string;

    // в этой коллекции мы будем отображать логи
    logs: Array<Calc.IOperation>;

    // просто поле для показа или скрытия логов
    isShow: boolean = false;

    /**
     * Конструктор. По факту, вызывать его мы не будем явно. Это сделает контейнер ангуляра
     * @param calcService сервис для операции
     * @param calcLogService сервис для логирования
     */
    constructor(private calcService: Calc.ICalculator, private calcLogService: Calc.ICalculatorLogService) {
        // инициализируем массив
        this.logs = new Array();
    }

    /**
     * Функция по вычислению. 
     * @param operation в качестве аргумента получаем номер операции
     */
    public calculate(operation: Calc.OperationEnum): void {

        // записываем строковое название операции. Чтобы отобразилось во view
        this.operation = Calc.OperationEnum[operation];

        // при помощи сервиса вычисляем. передаем операнды и операцию.
        let res = this.calcService.calculate(operation, this.operandOne, this.operandTwo);
        
        // регестрируем в сервисе логов новую запись.
        this.calcLogService.addItem({
            operandFirst: this.operandOne,
            operandSecond: this.operandTwo,
            operation: operation,
            result: res
        });

        // отображаем результат
        this.result = res;
    }

    /**
     * по сути - скачать логи и отобразить их.
     */
    public getLogs(): void {
        // записываем логи, полученные из сервиса.
        this.logs = this.calcLogService.getHistory();
    }

    /**
     * очистить список логов
     */
    public clearHistory(): void {
        // очищаем массив с логами во View
        this.logs = new Array();
    }

    /**
     * выбираем элемент из логов
     * @param item объект из коллекции логов логов
     */
    public selectLogItem(item: Calc.IOperation): void {
        // получаем объект из сервиса логов
        let res = this.calcLogService.getItem(item.id);
        // заполняем поля на форме
        this.operandOne = res.operandFirst;
        this.operandTwo = res.operandSecond;
        this.result = res.result;
        this.operation = Calc.OperationEnum[res.operation];
    }

    /**
     * вкл/откл показ логов
     */
    public logShow(): void {
        this.isShow = !this.isShow;
    }

    /**
     * конвертер из номера операции в ее строковое представление
     * @param operation номер операции
     */
    public convertToString(operation: Calc.OperationEnum): string {
        // конвертируем и возвращаем
        return Calc.OperationEnum[operation];
    }

}
// инжектируем сервисы из контейнера
CalcController.$inject = ['calculatorService', 'calculatorLogService'];

// регестрируем сервисы и контроллер
mdl.service('calculatorService', CalculatorService);
mdl.service('calculatorLogService', CalculatorLogService);
mdl.controller('calcController', CalcController);

// запускаем ангуляр
angular.bootstrap(document, ['app']);
