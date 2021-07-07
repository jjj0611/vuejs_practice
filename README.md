vue js tutorial#5

events

- click, mousemove, doubleclick 등의 이벤트는 어떻게 처리할까?
```
data: {
  age: 25
}
```
- 위에 있는 age 데이터를 DOM에 뿌려주면서 1씩 더해주고 빼주는 버튼을 만들어보자.
```
<p> My age is {{ age }} </p>
<button> add a Year </button>
<button> subtract a Year </button>
```

v-on
- 위 버튼이 어떻게 이벤트를 리슨하게 할 수 있을까? v-on을 사용하면 된다.
- v-on 뒤에 :(콜론)을 붙인 뒤 리슨하고자 하는 이벤트를 적으면 된다.
- 그리고 그 이벤트가 발생했을 때 실행 될 action을 =뒤에 ""안에 지정해주면 된다.
```
<button v-on:click="age++">add a Year </button>
<button v-on:click="age--">subtract a Year </button>
```
- 그게 무엇이든 "" 안에 들어오는 action이 실행된다. 또한, vue instance에 있는 어떤 메서드든 넣어줄 수 있다.
- vue instance에 add와 subtract 메서드를 추가한다.
```
methods: {
  add: function() {
    this.age++;
  },
  subtract: function() {
    this.age--;
  }
}
```
- v-on:click에 실행될 액션을 메서드로 넣어보자.
```
<button v-on:click="add">add a Year</button>
<button v-on:click="subtract">subtract a Year</button>
```
- add와 subtract는 메서드임에도 add(), subtract()처럼 ()를 붙이지 않아도 된다.


parameter

- 단, 파라미터를 전달해 줄 때는 ()를 붙여야한다.
- 만약 더블 클릭하면 나이가 10씩 증가하는 버튼을 만들려고 할 때, 해당하는 메서드를 새로 만드는 것도 좋지만, 파라미터를 받아도 된다.
```
<button v-on:click="add(1)">add a Year</button>
<button v-on:click="subtract(1)">subtract a Year</button>
<button v-on:dblclick="add(10)">add ten Year</button>
<button v-on:dblclick="subtract(10)">subtract ten Year</button>
```
- dblclick은 double click이다.
- 이렇게 하면 메서드 선언부에서도 parameter를 받아주어야 한다.
```
methods: {
  add: function(inc) {
    this.age += inc;
  },
  subtract: function(dec) {
    this.age -= dec;
  }
}
```
- 이렇게 하면 우리가 원하는대로 동작하게 된다.


mouse movement

- mouse event 중 mouse movement에 대해서 알아보자.
- 먼저 해당 이벤트를 알아보기 위해 태그를 하나 추가한다.
```
<div id="canvas">{{x}}, {{y}}<div>
#canvas {
	width: 600px;
	padding: 200px 20px;
	text-align: center;
	border: 1px solid #333;
}
```
- 이 캔버스 안에서 마우스의 위치를 추적하는 방법을 알아보자.
- 먼저 vue instacnce에 x, y에 대한 데이터를 추가한다.
```
data : {
  x: 0,
  y: 0
}
```
- div태그에 x와 y 의 위치를 새롭게 해줄 이벤트인 mousemove를 넣어주자.
- 그리고 mousemove가 발생할 때마다 updateXY라는 메서드가 실행되도록 해보자.
```
<div id="canvas" v-on:mousemove="updateXY"> {{x}}, {{y}} </div>
```
- 이제 해당 메서드를 만들어보자.
- 그런데 우리는 updateXY라는 메서드가 이벤트에 대한 정보를 얻도록 해야한다.
```
methods: {
  updateXY: function(event) {
    console.log(event);
  }
}
```
- 이렇게 html에서 event객체를 넣어주지 않더라도, v-on으로 받는 어떤 이벤트 객체든 해당 메서드에 바로 event라는 이름으로 넣어줄 수 있다.
- 저 상태로 콘솔에서 event에 대한 데이터를 확인해보면 마우스의 위치가 offsetX와 offsetY라는 이름의 속성 값인 것을 알 수 있다.
- 그럼 updateXY의 구현을 x와 y의 데이터를 각각 event.offsetX, event.offsetY로 넣어줄 수 있다.
```
updateXY: function(event) {
  this.x = event.offsetX;
  this.y = event.offsetY;
}
```
- 이렇게 하면 우리가 원하는대로 동작하게 된다.


onemore tip

- 모든 이벤트에 대해서 v-on을 붙이는 것이 까다롭고 귀찮다.
- 따라서 v-on:click은 @click으로 간단하게 쓸 수 있다.
