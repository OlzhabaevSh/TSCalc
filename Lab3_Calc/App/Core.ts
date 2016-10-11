/**
 * Пространство имён Calc. По сути CORE
 */
namespace Calc {

    /**
     * Перечисление операции
     */
    export enum OperationEnum {
        /**
         * Сложение
         */
        Sum,
        /**
         * Вычитание
         */
        Minus,
        /**
         * Умножение
         */
        Mult,
        /**
         * Деление
         */
        Devine
    }

    /**
     * Структура Операции. Операнды, операция и результат. 
     */
    export interface IOperation {
        id?: number;
        operandFirst: number;
        operandSecond?: number;
        operation: OperationEnum;
        result: number;
    }

    /**
     * Интерфейс калькулятор.
     */
    export interface ICalculator {
        /**
         * функция вычисления.
         * @param operation операция (enum)
         * @param operandOne первый операнд
         * @param operandTwo второй операнд
         */
        calculate(operation: OperationEnum, operandOne: number, operandTwo?: number): number;
    }

    /**
     * Интерфейс сервиса логов
     */
    export interface ICalculatorLogService {

        /**
         * получить логи
         */
        getHistory(): Array<IOperation>;

        /**
         * получить запись
         * @param id номер записи
         */
        getItem(id: number): IOperation;

        /**
         * создать новую запись
         * @param logOperation новая операция
         */
        addItem(logOperation: IOperation): void;
    }

}