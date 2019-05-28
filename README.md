vue js tutorial#11

conditional

- 조건에 대해서 배워보자.
- 이번 장에서는 우리가 원하는 어떠한 조건에 의해 특정한 내용이 보여지거나 보여지지 않는 것을 해볼 것이다.
- v-if라는 directive(지시어)를 사용하면 된다. 또한 v-show라는 명령도 존재한다.


v-if

- 버튼 두 개를 먼저 만들어보자. 하나는 error데이터를 토글(toggle)할 수 있는 버튼, 다른 하나는 success데이터를 토글할 수 있는 버튼이다.
```
<button v-on:click="error = !error">Toggle Error</button>
<button v-on:click="success = !success">Toggle Success</button>
```
- vue instance에 error와 success 데이터를 추가해보자.
```
data: {
  error: false,
  success: false
}
```
- 현재는 error와 success가 어떠한 데이터에도 연결되어 있지 않기 때문에 해당 버튼을 아무리 클릭해도 눈에 보이는 어떤 일이 일어나지 않는다.
- 이제 v-if 명령어를 사용해보자. 이것을 사용하는 방법은 v-if="조건식(true or false 반환)"의 형태로 주면 된다.
```
<p v-if="true"></p>
```
- 즉 이렇게 주면, if의 값은 true이기 대문에 p 태그가 DOM에 등장할 것이다. false라면 등장하지 않게 된다.
- 그럼 이것을 이용해서 error와 success에 대한 메시지 담고 있는 태그를 만들어보자.
```
<p v-if="error"> There has been an error </p>
<p v-if="success> Whooooo, success :) </p>
```
- error나 success가 true라면 위의 태그는 DOM에 보여질 것이고, false라면 완전하게 제거될 것이다.
- 그런데 조금 이상한 것이 error와 success모두 true 일 경우 두 메시지 모두 보여주는 것이 조금 이상하다.
- 이럴 경우 우리가 할 수 있는 것은 v-if 대신 v-else-if를 사용하는 것이다.
```
<p v-else-if="success"> Whooooo, success :) </p>
```
- 위와 같이 사용하면 먼저 v-if에 해당 하는 값을 체크하고, 이것이 false인 경우에는 v-else-if를 체크하게 된다.
- 즉, v-if="error"가 참이면 success의 값은 참이든 거짓이든 상관 없이 화면에 보여지지 않게 된다.


v-show

- v-show를 사용하여 두개의 태그를 더 만들어보자.
```
<p v-show="error"> There has been an error </p>
<p v-show="success> Whooooo, success :) </p>
```
- 이것도 v-if와 유사한 기능을 하는데, show뒤 조건문에 true가 들어가면 해당 하는 값을 보여주고, false이면 없애준다.
- v-if와 v-show의 차이점은 개발자 도구에서 확인할 수 있다.
- v-show는 단지 display의 상태값만을 변화시켜 준다.
- v-if는 false인 경우 아예 값이 존재하지 않지만 v-show를 사용하면 display style의 값이 none인 태그가 DOM에 남아 있게 된다. 
