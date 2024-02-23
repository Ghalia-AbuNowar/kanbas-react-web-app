
import PathParameters from "../routing/PathParameters";
import BooleanVariable from "./Variables/BooleanVariables";
import VariableTypes from "./Variables/VariableTypes";
import VariablesAndConstants from "./Variables/VariablesAndConstants";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionDestructing from "./functions/FunctionDestructing";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import Destructing from "./json/Destructing";
import House from "./json/House";
import Spreading from "./json/spreading";
import TemplateLiterals from "./string/TemplateLiterals";

function JavaScript() {
    console.log('Hello World!');

    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariable />
            <IfElse />
            <TernaryOperator />
            <ES5Functions />
            <ArrowFunctions />
            <ImpliedReturn />
            <FunctionParenthesisAndParameters />
            <WorkingWithArrays />
            <TemplateLiterals />
            <House />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <PathParameters />

        </div>
    );
}
export default JavaScript

