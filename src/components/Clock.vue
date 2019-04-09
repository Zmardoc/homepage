<template>
  <div>{{ time | dateFormat('h:mm:ss')}}</div>
</template>
<script>

export default {
  name: 'Clock',
  methods:{
    moveClock(){
        this.time = new Date();
    }
  },
  data(){
    return{
        time: new Date(),
        timeInterval: setInterval(this.moveClock, 1000),
    }
  },
  destroyed(){
    window.clearInterval(this.timeInterval);
  }
}
</script>
