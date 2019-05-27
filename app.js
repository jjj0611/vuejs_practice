new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function() {
      this.health -= 10;
      this.ended = this.health == 0;
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {
  }
});
