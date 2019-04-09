<template>
  <div class="weather">
    <WeatherBlock 
    v-bind:key="w.label" 
    v-for="w in weathers"
    v-bind:weather="w" 
    />
    <md-progress-bar md-mode="indeterminate" v-if="loading"></md-progress-bar>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherBlock from './WeatherBlock';
import { isNull } from 'util';

export default {
  name: 'Weather',
  components: {
    WeatherBlock,
  },
  data: () => ({
    weathers: [],    
    rawWeatherData: null,
    loading: true,
  }),
  methods: {
    update(){
      this.downloadWeather();
    },
    calculateWeather(){
      if(!isNull(this.rawWeatherData)){
        this.weathers = [];        
        this.weathers.push(this.getWeatherForTommorrow());
        this.weathers.push(this.getWeatherForTonight());
        this.weathers.push(this.getWeatherForToday());
      }
    },
    getWeatherForToday(){
      let dateFrom = new Date();
      let dateTo = new Date();
      dateTo.setHours(18);
      dateTo.setMinutes(0);
      dateTo.setSeconds(0);
      return this.createAvgWeather(dateFrom, dateTo, 'Dnes');
    },
    getWeatherForTonight(){
      let dateFrom = new Date();
      let dateTo = new Date();
      dateTo.setDate(dateTo.getDate() + 1);
      dateTo.setHours(6);
      dateTo.setMinutes(0);
      dateTo.setSeconds(0);
      dateFrom.setHours(18);
      dateFrom.setMinutes(0);
      dateFrom.setSeconds(0);
      return this.createAvgWeather(dateFrom, dateTo, 'V noci');
    },
    getWeatherForTommorrow(){
      let dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() + 1);
      let dateTo = new Date(dateFrom);
      dateFrom.setHours(6);
      dateFrom.setMinutes(0);
      dateFrom.setSeconds(0);
      dateTo.setHours(18);
      dateTo.setMinutes(0);
      dateTo.setSeconds(0);
      return this.createAvgWeather(dateFrom, dateTo, 'Zítra');
    },
    createAvgWeather(dateFrom, dateTo, label){    
      let computedList = this.rawWeatherData.filter(function (currentWeather){
        return (currentWeather.dt >= Math.floor(dateFrom.getTime() / 1000) && currentWeather.dt <= Math.floor(dateTo.getTime() / 1000));
      });
      let totalTemp = 0, totalRain = 0, totalSnow = 0, totalWind = 0;
      for(var index in computedList){
        totalTemp += computedList[index].main.temp;
        if(!isNaN(computedList[index].rain) && !isNaN(computedList[index].rain["3h"])){
            totalRain += computedList[index].rain["3h"];
        }
        if(!isNaN(computedList[index].snow) && !isNaN(computedList[index].snow["3h"])){
            totalSnow += computedList[index].snow["3h"];
        }
        totalWind += computedList[index].wind.speed;
      }
      var weather = {temp: 0, rain: 0, snow: 0, wind: 0, label: label};
      weather.temp = Math.round(totalTemp / computedList.length * 10) / 10; //prumerna teplota za interval
      weather.rain = Math.round(totalRain * 10) / 10;
      weather.snow = Math.round(totalSnow * 10) / 10;
      weather.wind = Math.round(totalWind / computedList.length * 10) / 10;
      return weather;
    },
    downloadWeather(){
      const weatherAppId = '58b8a20ca8951780c1129fa41dd37b11';
      let url = `http://api.openweathermap.org/data/2.5/forecast?q=Prague,cz&APPID=${weatherAppId}&units=metric`;
      axios.get(url)
      .then(res => {
        this.loading = false;
        this.rawWeatherData = res.data.list;
        this.calculateWeather();
      })
      .catch(err => this.loading = false); 
    }
  },
  created(){
    this.downloadWeather();
  },
}
</script>

<style scoped>
.weather{
  /*height:60px;
  line-height:60px;*/
  padding: 0px 15px;
}
</style>
