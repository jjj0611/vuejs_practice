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
- 위와 같이 작성하면 div 태그는 red라는 클래스를 갖게된다. 물론 false 값을 주면 red 클래스를 가지지 않는다.
- {red: true, blue: true}와 같이 여러개의 pair(짝)을 줄 수 있다.
- div 태그는 red와 blue라는 두가지 클래스를 갖게 된다.


how to make it dynamic

- 그런데 위와 같은 태그는 dynamic하지 않다. 일종의 하드코딩이다.
- 이렇게 하는 것은 v-bind를 없애고, 그냥 값을 주는 것과 다름 없다.
- 이를 확인하기 위해 red와 blue를 제거하고, vue js 데이터에 의존하여 true나 false가 되는 available 클래스를 추가해보자.
```
<div v-bind:class="{available: available}"></div>
```
- available이라는 data를 vue instance에 추가해보자.
```
data: {
  available: false,
  nearby: false
}
```
- data 안에 available이 false이면, div 태그는 available 클래스를 가지지 않을 것이다.


style.css

- 위의 클래스의 변화를 눈으로 확인할 수 있게 css를 추가해보자.
```
span {
  background: red;
  display: inline-block;
  padding: 10px;
  color: #fff;
  margin: 10px 0;
}

.available span {
  background: green;
}

.nearby span:after {
  content: "nearby";
  margin-left: 10px;
}
```
- span태그는 기본적으로 배경 색이 red이고, available 클래스를 가진 태그 안에 있는 span 태그는 배경 색이 green이다.
- nearby 클래스 안에 있는 span태그는 뒤에 "nearby"라는 내용이 붙게 된다.
- 이렇게 하고 div 태그에 v-on:click 이벤트로 available의 상태를 바꿔주자.
```
<div v-on:click="available = !available" v-bind:class="{available: available}">
  <span>Jang</span>
</div>
```
- 이 event로 우리는 dynamic하게 클래스를 넣어주고, 유저와의 상호작용에 따라 다르게 스타일 할 수 있다.


one more thing

- 조금 더 복잡한 것을 해보자. object를 직접 쓰는 것이 아니라 vue instance에서 전체 object를 그대로 전달해주자.
- 만약 우리가 다섯개 정도의 다른 클래스들을 가져야 한다고 생각만해봐도 그걸 직접 입력하는 것이 얼마나 비효율적인지 알 수 있다.
- computed properties에 object를 정의해보자. compClasses라는 이름으로 작성해보자.
- computed classes를 의미하며, object를 반환하도록 하자. 이 object에는 2개의 키, 값 쌍을 가지고 있다.(available, nearby)
```
computed: {
  compClasses: function() {
    return {
      available: this.available,
      nearby: this.nearby
    }
  }
}
```
- 이것은 이제 data의 상태에 따라 available이나 nearby를 반환할 것이다.
- HTML의 태그를 바꿔보자.
```
<div v-bind:class="compClasses">
  <span>Jang</span>
</div>
```
- 이 compClasses는 computed property이기 어떤 값이 바뀌면, update된 값을 가진 object를 반환할 것이다.
- 2개의 버튼을 만들어서 data의 상태 값을 바꿔주도록 해보자.
```
<button v-on:click="nearby = !nearby">Toggle nearby</button>
<button v-on:click="available = !available">Toggle available</button>
```
- 두 버튼 중 어떠한 버튼을 눌러서 상태 값을 바뀌든 그대로 div 태그에 반영되는 것을 볼 수 있다.
