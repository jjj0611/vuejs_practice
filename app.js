new Vue({
  el: '#vue-app',
  data: {
    name: 'Shaun',
    job: 'Ninza',
    website: 'http://www.github.com/jjj0611',
    websiteTag: '<a href="http://www.github.com/jjj0611">jaeju.jang\'s git</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
