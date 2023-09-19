import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorProvider/context";

export function useCalculatorContext() {
    const context = useContext(CalculatorContext);

    return context;
}