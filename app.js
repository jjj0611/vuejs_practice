new Vue({
  el: '#vue-app',
  data: {
    name: 'Shaun',
    job: 'Ninza'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
