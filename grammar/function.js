function printString (a) {
    console.log('printString : ' + a);
}
printString('a');

// 매개 변수가 하나인 경우 소괄호를 없얌
anonymousFunction = a => {
    console.log('anonymousFunction ' + a);
}
anonymousFunction('swag');