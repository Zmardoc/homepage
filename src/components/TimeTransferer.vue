<template>
  <form @submit="calculate">
    <span class="md-title">Převod minut</span>
    <md-list>
      <md-list-item>
        <md-field>
            <label>Minuty</label>
            <md-input v-model="minutes" type="number" @focus="focused='minutes'"></md-input>
        </md-field>
      </md-list-item>
      <md-list-item>
        <md-field>
          <label>Desetiny</label>
          <md-input v-model="tenths" @focus="focused='tenths'"></md-input>
        </md-field>
      </md-list-item>
    </md-list>
    <md-button type="submit" class="md-primary" >Vypočti</md-button>
  </form>
</template>

<script>

export default {
  name: 'TimeTransferer',
  data: () => ({
    timeValue: null, 
    tenths: '0',
    minutes: 0,
    focused: 'minutes',
  }),
  methods:{
    calculate(e){
      e.preventDefault();  
      if(this.focused === 'minutes') {
        this.tenths = (this.minutes / 60).toFixed(2);
      }
      else {
        this.tenths = this.tenths.replace(',','.');
        this.minutes = (this.tenths * 60).toFixed(0);
      }
    },
  },
}
</script>

<style scoped>
  form{
    clear:both;
  }
  .md-primary {
    float: right;
  }
  .md-title{
    margin:15px;
  }
</style>

