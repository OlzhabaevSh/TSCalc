namespace Calc {

    export enum OperationEnum {
        Sum,
        Minus, 
        Mult,
        Devine
    }

    export interface IOperation {
        id?: number;
        operandFirst: number;
        operandSecond?: number;
        operation: OperationEnum;
        result: number;
    }

    export interface ICalculator {
        calculate(operandOne: number, operandTwo: number, operation: OperationEnum): number;
    }

    export interface ICalculatorLogService {
        getHistory(): Array<IOperation>;
        getItem(id: number): IOperation;
        addItem(logOperation: IOperation): void;
    }

}