<template>
  <div id="app" class="mainContainer">
    <Header title="Rozcestník" 
    v-on:show-nav="showNav" 
    v-bind:locked="locked" 
    v-on:locking="locked = !locked"
    v-on:import="showImportDialog = true"
    v-on:importDefault="importDefault"
    v-on:export="exportFile"
    v-on:clear="clearSources"
    />
    <div class="body">
      <ServiceBar ref="serviceBar" v-on:save="refreshSource"/>
      <Links 
      v-bind:sources="sources" 
      v-on:removeSource="removeSource"
      v-on:openPage="openPage"
      v-on:editSource="editSource"
      v-bind:locked="locked"
      />
      <EditSource ref="editSource"
      v-on:save="refreshSource"
      />
      <InputFile 
      v-bind:showDialog="showImportDialog" 
      v-on:importFile="importComplete"
      />
    </div>
    <Footer version="1.0" ref="footer"/>
    <GlobalServices ref="globalServices" />
  </div>
</template>

<script>  
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ServiceBar from './components/layout/ServiceBar'
import Links from './components/layout/Links'
import EditSource from './components/modals/EditSource'
import InputFile from './components/modals/InputFile'
import GlobalServices from './services/GlobalServices'
import axios from 'axios';
import json from './assets/sources.json'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    ServiceBar,
    Links,
    EditSource,
    InputFile,
    GlobalServices,
  },
  methods:{
    showNav(){  
      this.$refs.serviceBar.showNav(true);
    },
    refreshSource(){
      this.sources = JSON.parse(localStorage.getItem('sources')); 
    },
    removeSource(source){
      this.sources = this.sources.filter(s => s.link !== source.link);
      this.saveSources();
    },
    editSource(source){
      this.$refs.editSource.setSource(source);
      this.saveSources();
    },
    saveSources() {
      const parsed = JSON.stringify(this.sources);
      localStorage.setItem('sources', parsed);
    },
    openPage(source){
      this.sources.find(s => s.link === source.link).visited++;
      this.saveSources();
    },
    updateTimerComponents(){
      this.$refs.footer.updateTimerComponents();
    },
    exportFile(){
      const sources = localStorage.getItem('sources');
      const blob = new Blob([sources], {type: 'text/plain'});
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = "sources.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },
    importComplete(){
      this.showImportDialog = false;
      this.refreshSource();
    },
    clearSources(){
      const parsed = JSON.stringify([]);
      localStorage.setItem('sources', parsed);
      this.refreshSource();
    },
    importDefault(){
      this.sources = this.$refs.globalServices.joinSources(this.json);
      this.saveSources();
    },
  },
  data: () => ({
    showNavigation: false,    
    sources: JSON.parse(localStorage.getItem('sources')),
    timeInterval: null,
    locked: true,
    showImportDialog: false,
    json: json,
  }),
  mounted(){
    this.timeInterval = setInterval(this.updateTimerComponents, 1000 * 60 * 60);
  },
  destroyed(){
    window.clearInterval(this.timeInterval);
  }
}
</script>

<style>
body {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  padding: 0px;
  height: 100%;
  font-family: "Segoe UI Light","Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif;
}

.md-list.md-theme-default .md-selected .md-list-item-content{
  color:white !important;
}
.mainContainer{
  min-height: 100%;
  position: relative;
}
.body{
  padding-bottom: 60px;
}
.souhrn{
  
}
</style>
