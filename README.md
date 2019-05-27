vue js tutorial#10


- 지난 튜토리얼에 우리는 href와 같은 HTML element에 특정한 속성(attribute)을 bind하는 v-bind를 사용한 data-binding에 대해 배웠다.
- 이렇게 bind하면 vue instance를 통해서 그러한 속성값들을 컨트롤 할 수 있다.
- 이번시간 이와 완전하게 같은 방식을 class에 적용해보겠다. class도 단순한 HTML attribute이기 때문이다.


dynamic css

- div 태그를 하나 만들고 속성 하나를 bind하는 것처럼 정의해보자.
- v-bind를 사용하기 때문에 v-bind:clas=""에서 ""에는 객체(object)가 들어와야 한다. 즉, {}로 묶어주어야 한다는 것이다.
- 그러나 이것은 template syntax와는 아무런 관계가 없다. 이건 단순히 object를 위한 괄호이다.
- 그리고 이 괄호 안에서 우리는 여러 키와 값의 쌍을 갖게 된다.
- class="{}"와 같은 형태가 되기 때문에 키 값은 클래스 이름이 되고, 값은 boolean으로 true혹은 false의 값을 가진다.
- 만약 이 값이 true이면, 이 element는 그 클래스를 가질 것이고, false이면, 그렇지 않을 것이다.
```
<h2>Example1<h2>
<div v-bind:class="{red: true}"></div>
```
- 위와 같이 작성하면 
