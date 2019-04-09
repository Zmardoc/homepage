<template>
  <div class='weatherBlock'>
    <table>
      <tr>
        <td>Teplota:</td>
        <td>{{weather.temp}} °C</td>
      </tr>
      <tr>
        <td>Srážky:</td>
        <td>{{weather.rain + weather.snow}} mm</td>
      </tr>
      <tr>
        <td>Vítr:</td>
        <td>{{weather.wind}} m/s</td>
      </tr>
    </table>
    <div>{{weather.label}}:</div>
  </div>
</template>

<script>
export default {
  name: 'WeatherBlock',
  props:['weather'],
}
</script>

<style scoped>
.weatherBlock table{
  float: right;
  height: 100%;
}
.weatherBlock {
  float:right;    
  font-size: 12px !important;
  border-left: 1px solid #00000070;
  padding: 0px 15px;
  height: initial;
  line-height: initial;
  height: 60px;
}
.weatherBlock div{
  float:right;
  font-size: 16px;
  padding-right: 15px;
  font-weight: bold;
  line-height: 25px;
}
.weatherBlock table tr td{
  font-size: 10px !important;
}
</style>
