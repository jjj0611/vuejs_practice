vue js tutorial#9

지난시간 우리는 메서드를 만들고 HTML에서 호출하는 방법에 대해 살펴봤다.
우리가 만든 것은 문자열을 반환하고, 그것을 DOM에 렌더링해주는 메서드였다.
그러나 이러한 작업을 하는 더 효율적이고 더 빠른 대안적인 방법이 있다.
computed property이다.
이번 시간 예제를 통해서 computed property와 method의 차이점에 대해 알아보자.


<b>Computed properties</b>


method 생성하기

- 버튼 태그 2개와 p 태그 2개를 만들어보자.
```
<button v-on:click-"a++"> Add to A </button>
<button v-on:click-"b++"> Add to B </button>
<p> A - {{ a }}</p>
<p> B - {{ b }}</p>
```
- vue instance에는 age, a, b 세가지의 데이터를 만들고, age는 20의 값을 기본으로 갖게 하자.
```
data: {
  age: 20,
  a: 0,
  b: 0,
}
```
- 또 다른 p 태그 두개를 만들어 age에 a와 b를 더한 값을 출력하는 태그를 추가해보자.
```
<p> Age + A = {{ addToA() }} </p>
<p> Age + B = {{ addToB() }} </p>
```
- 그리고 이에 맞는 addToA와 addToB 메서드를 추가하자
```
methods: {
  addToA: function() {
    return this.a + this.age;
  },
  addToB: function() {
    return this.b + this.age;
  }
}
```
