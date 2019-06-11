<template>
  <div>
    <md-button class="md-icon-button" title="timestamp" @click="copyTimestamp">
      <md-icon>schedule</md-icon>
    </md-button>
    <GlobalServices ref="globalServices" />
    <md-snackbar :md-position="'center'" :md-duration="duration" :md-active.sync="showDialog" md-persistent>
      <span>Timestamp zkopírován: {{timestampLong}}</span>
      <md-button class="md-primary" @click="showDialog = false">Zavřít</md-button>
    </md-snackbar>
  </div>
</template>
<script>
import GlobalServices from '../services/GlobalServices'

export default {
  name: 'Timestamp',
  components: {
    GlobalServices,
  },
  data: () => ({
    showDialog: false,
    duration: 2000,
    timestampLong: null,
  }),
  methods:{
    copyTimestamp(){
      this.timestampLong = new Date().valueOf().toString().slice(0, -3);
      this.$refs.globalServices.copyStringToClipboard(this.timestampLong);
      this.showDialog = true;
    },
  },
}
</script>
<style>
</style>
