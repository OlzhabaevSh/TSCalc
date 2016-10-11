class CalculatorService implements Calc.ICalculator {

    calculate(operandOne: number, operandTwo: number, operation: Calc.OperationEnum): number {

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