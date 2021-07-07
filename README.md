vue js tutorial#7

keyboard event

- 키보드 이벤트를 살펴 보기 위해 두개의 레이블과 두개의 input 태그를 만들어보자.
- input 태그에 keyup event를 listen하게 만들어서 해당 이벤트가 발생할 때마다 콘솔에 글을 찍어주도록 해보자.
```
<label>Name : </label>
<input type="text" v-on:keyup="logName">
<label>Age : </label>
<input type="text" v-on:keyup="logAge">
```
- vue instance에 logName과 logAge 메서드를 추가한다.
```
methods: {
  logName: function() {
    console.log("you entered your name");
  },
  logAge: function() {
    console.log("you entered your age");
  }
}
```
- 이렇게하면 한가지 문제가 생긴다.
- 사용자가 keyup을 할 때마다(키보드의 키가 올라올 때마다) 로그가 남는다는 것이다.


modifier

- 키보드에서 키를 뗄 때마다 해당 이벤트가 실행되는 것이 아니라 엔터키를 칠 때마다 실행되도록 해보자.
```
<input type="text" v-on:keyup.enter="logName">
```
- 이렇게 keyup에 바로 enter를 넣어주면 enter에 대한 keyup이 발생할 때만 해당 메서드가 실행된다.
```
<input type="text" v-on:keyup.alt.enter="logAge">
```
- 위와 같이 하면 alt를 누르고 enter를 누를 때에만 작동하게 된다.


keyboard event와 관련한 내용도 앞의 문서에 나와 있으므로 참고하면 된다.
