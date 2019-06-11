<template>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>Import zdrojů</md-dialog-title>  
    <input type="file" @change="uploadFile" accept=".json,application/json"/>
    <md-dialog-actions>
        <md-button @click="showDialog=false" class="md-primary" >Storno</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
import { isNull } from 'util';

export default {
  name: 'InputFile',
  data: () => ({
    showDialog: false,
  }),
  methods: {
    uploadFile(e){
      e.preventDefault(); 
      var reader = new FileReader();
      reader.readAsText(e.target.files[0]);
      var ref = this;
      reader.onload = function () {
        let fileContent = reader.result;
        let newSource = JSON.parse(fileContent)
        let allSources = ref.joinArrays(newSource);
        ref.$emit("importFile",allSources);
      }      
    },
    joinArrays(newSources){
      let oldSources = JSON.parse(localStorage.getItem('sources')); 
      let allSources = this.arrayUnique(newSources.concat(oldSources));
      return allSources;
    },
    arrayUnique(array) {
      var a = array.concat();
      for(var i = 0; i < a.length; ++i) {
        for(var j = i + 1; j < a.length; ++j) {
          if(!isNull(a[i]) && !isNull(a[j]) && a[i].link === a[j].link)
          
            a.splice(j--, 1);
        }
      }
      return a;
    },
    verifyFile(){

    },
    showFile(show) {
      this.showDialog = show;
    },
  },
}
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
    min-width: 500px;
  }
  input{
    margin: 25px;
  }
</style>