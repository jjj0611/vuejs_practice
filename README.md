vue js tutorial#9

지난시간 우리는 메서드를 만들고 HTML에서 호출하는 방법에 대해 살펴봤다.
우리가 만든 것은 문자열을 반환하고, 그것을 DOM에 렌더링해주는 메서드였다.
그러나 이러한 작업을 하는 더 효율적이고 더 빠른 대안적인 방법이 있다.
computed property이다.
이번 시간 예제를 통해서 computed property와 method의 차이점에 대해 알아보자.


<b><font size="10">Computed properties</font></b>


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
- 이렇게 메서드를 만들면 a 또는 b가 변할 때마다 vue는 addToA와 addToB를 모두 참고하게 된다.
- 그리고 값이 변할 때마다 두개의 메서드가 모두 실행될 것이다.(우리가 a 혹은 b 하나만 변화시키는 것은 중요하지 않다.)
- 하지만 하나의 값이 바뀐다고 할 때 바뀌지 않은 값에 대한 메서드가 실행될 필요가 없다.
- 이것을 확인하기 위해서는 각 메서드에 console.log()를 찍어보면 된다.


computed property

- 조금 더 효율적이게 만들어 줄 수 있는 방법은 computed properties를 사용하는 것이다.
- 이것은 methods와 매우 유사하지만, 이것은 해당 하는 value가 update될 때에만 update된다.
- addToA computed proeprty는 우리가 a를 바꿀 때에만 실행 될 것이고,
- addToB computed proeprty는 우리가 b를 바꿀 때에만 실행 될 것이다.
```
computed: {
  addToA: function() {
    return this.a + this.age;
  },
  addToB: function() {
    return this.b + this.age;
  }
}
```
- 이렇게 하고 methods에 있는 것을 지워주고 html을 실행시켜보면 "addToA is not a function"이라는 에러가 발생한다.
- 우리가 p 태그에서 이것을 마치 메서드처럼 "addToA()"와 같은 형식으로 호출하기 때문이다.
- computed property를 찾을 때는 괄호를 제거하여 "addToA"와 같은 형식으로 사용하며 ㄴ된다.
- 대부분의 경우 computed property를 사용하는 것이 method를 사용하는 것보다 효율적이다.
- 무엇이 update되었는지에 따라서 어떤 메서드를 실행해야 할지를 vue js가 모르기 때문이다.
- computed property는 필요한 때에 계산이 실행될 수 있도록 일종의 변수를 감시(watch)하고 있다.
