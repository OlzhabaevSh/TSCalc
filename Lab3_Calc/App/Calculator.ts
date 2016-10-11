/**
 * Калькулятор сервис
 */
class CalculatorService implements Calc.ICalculator {

    /**
     * Функция вычисления
     * @param operation операция (enum)
     * @param operandOne операнд 1
     * @param operandTwo операнд 2 (можно не передавать, если операции квадрата и квадратного корня)
     */
    calculate(operation: Calc.OperationEnum, operandOne: number, operandTwo?: number): number {

        var res: number = 0;

        if (operation == Calc.OperationEnum.Sum) {
            res = operandOne + operandTwo;
        } else if (operation == Calc.OperationEnum.Minus) {
            res = operandOne - operandTwo;
        } else if (operation == Calc.OperationEnum.Mult) {
            res = operandOne * operandTwo;
        } else if (operation == Calc.OperationEnum.Devine) {
            res = operandOne / operandTwo;
        } else {
            console.error('Нет операции с номером: ', operation);
        }
        
        return res;
    }
}