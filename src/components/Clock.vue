<template>
  <div class="row">
    <Timestamp class="timestamp"/>
    <div class="time">
      {{ time | dateFormat('h:mm:ss')}}
    </div>
  </div>
</template>
<script>
import Timestamp from './Timestamp'

export default {
  name: 'Clock',
  components: {
    Timestamp,
  },
  methods:{
    moveClock(){
      this.time = new Date();//valueOf
    },
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

<style scoped>
.timestamp{
  line-height: 42px;
  display: table-cell;
}
.time{
  display: table-cell;
}
.row{
  display: table;
}
</style>

