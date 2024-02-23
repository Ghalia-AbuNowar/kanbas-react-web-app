const square = (a: number) => a * a;
const plusOne = (a: number) => a + 1;

function FunctionParenthesisAndParameters() {
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <>
            <h3>Parenthesis And Parameters</h3>
            twoSquared = {twoSquared}<br />
            square(2) = {twoSquared}<br />
            threePlusOne = {threePlusOne}<br />
            plusOne(3) = {threePlusOne}
        </>

    )
}
export default FunctionParenthesisAndParameters;