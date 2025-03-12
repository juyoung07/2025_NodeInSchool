function printString (a) {
    console.log('printString : ' + a);
}
printString('a');

// 매개 변수가 하나인 경우 소괄호를 없애도 됨
// 함수 body가 한 줄이거나 return문 하나일 때, 중괄호를 없애도 됨
anonymousFunction = a => console.log('anonymousFunction ' + a);
anonymousFunction('swag');