<template>
  <div>{{date}} - Svátek má {{nameDay}}</div>
</template>

<script>
import axios from 'axios';
import {dateFormat} from 'vue-filter-date-format';

export default {
  name: "TodayInfo",
  methods: {
    downloadNameDay(){
        let formated = dateFormat(new Date(),'DDMM');
        let url = `http://svatky.adresa.info/json?date=${formated}&lang=cs`;
        axios.get(url)
        .then(res => {
            this.nameDay = res.data[0].name;
        })
        .catch(err => console.log(err));
    },
    update(){
      this.date = new Date().toLocaleDateString();
      this.downloadNameDay();
    },
  },
  data(){
    return{
        date: new Date().toLocaleDateString(),
        nameDay: "LOADING",
    }
  },
  created(){
    this.downloadNameDay();
  }
}
</script>