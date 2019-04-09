<template>
  <footer>
    <Clock class="time"/>
    <TodayInfo class="right todayInfo" ref="todayInfo"/>
    <Weather class="right" ref="weather"/>    
  </footer>
</template>

<script>
import TodayInfo from '../TodayInfo';
import Clock from '../Clock';
import Weather from '../Weather';

export default {
  name: "Footer",
  components: {
    TodayInfo,
    Clock,
    Weather,
  },
  props: {
    version: String,
  },
  methods: {
    updateTimerComponents(){
      this.$refs.todayInfo.update();
      this.$refs.weather.update();
    },
  },
}
</script>

<style scoped>
  footer {
    position: absolute;
    height: 60px;
    line-height:60px;
    bottom: 0;
    width: 100%;
    padding:0px 15px;
    background-color: var(--md-theme-default-toolbarvariant, #212121);
  }
  .right{
    float:right;
  }
  .time{
    float:left;
  }
  .todayInfo{
    border-left: 1px solid #00000070;
    padding-left: 15px;
  }
</style>
