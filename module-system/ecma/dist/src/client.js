'use strict';

var _service = require('./service');

// SyntaxError: Unexpected token import

console.log((0, _service.add)(2, 3)); /*
                                        노드가 채택한 모듈 시스템 기술 코드
                                      */
// const {add, say} = require('./service');

/*
  ECMA 채택한 모듈 시스템 기술 코드
  ECMA는 자바스크립트 문법을 제정하는 표준기관입니다.
  ECMA는 문법을 정하기만 하지 컴파일러는 제공하지 않습니다.
  따라서, 노드 컴파일러가 ECMA의 모듈시스템을 받아들이지
  않고 자신만의 모듈시스템을 채택하여 표준문법임에도
  노드 컴파일러로 수행할 때 사용할 수 없는 상태입니다.
  
  앵귤러, 리액트 등에 최신 기술은 ECMA의 표준문법을
  사용하고자 함으로 개발자는 코드 작성은 표준문법으로 하고
  코드 수행을 하기전에 표준문법을 노드가 이해하는 문법으로
  변경하여 수행할 필요가 있습니다.
  
  트랜스파일링: 컴파일러가 이해하는 문법으로 변경하는 작업
*/

console.log((0, _service.say)('John'));