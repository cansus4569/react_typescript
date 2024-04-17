## 타입스크립트를 사용할 떄 주의할 점

- 나는 애플리케이션 로직을 작성하고 있나?
- 아니면 타입에 의한 타입을 위한 타입 코드를 작성하고 있나?

## 타입 단언으로 생기는 구멍들

- 타입 단언은 타입스크립트 컴파일러를 속이는 행위
- 현실적으로 안쓰긴 어렵다
- 런타임 오류에 주의할 것

```ts
// example 1
function fetchProduct() {
  //...
}
const product = fetchProduct() as Product;
product.getId(); // 에러 날 확률 높음

// example 2
interface Developer {
  name: string;
  coding: () => void;
}
const capt = {
  name: '캡틴',
} as Developer;
capt.coding(); // 에러 발생
```

## 타입스크립트 학습 방법

- 공식 사이트 문서를 활용하자
