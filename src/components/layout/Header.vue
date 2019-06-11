<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click="$emit('show-nav')">
        <md-icon>menu</md-icon>
      </md-button>
      <h3 class="md-title" style="flex: 1">{{ title }}</h3>
      <md-button v-if="!locked" @click="$emit('clear')">
        <md-icon>delete</md-icon>
        Smazat vše
      </md-button>
      <md-button v-if="!locked"  @click="$emit('importDefault')">
        <md-icon>publish</md-icon>
        Import default
      </md-button>
      <md-button v-if="!locked"  @click="showImport"><!--showImportDialog = true -->
        <md-icon>publish</md-icon>
        Import
      </md-button>
      <md-button @click="$emit('export')">
        <md-icon class="download">publish</md-icon>
        Export
      </md-button>
      <md-button @click="$emit('locking')">
        <md-icon>{{locked ? 'lock' : 'lock_open'}}</md-icon>
        {{locked ? 'Locked' : 'Unlocked'}}
      </md-button>
    </md-toolbar>
    <InputFile 
      ref="inputFile"
      v-bind:showDialog="showImportDialog" 
      v-on:importFile="importComplete"
    />
  </div>
</template>

<script>
import InputFile from '../modals/InputFile'

export default { 
  name: 'Header',
  components: {    
    InputFile,
  },
  props: {
    title: String,
    locked: Boolean,
  },
  data: () => ({
    file: null,
    showImportDialog: false,
  }),
  methods:{
    importComplete(sources){
      this.showImportDialog = false;
      this.$emit("saveNewSources", sources);
    },
    showImport(){
      this.$refs.inputFile.showFile(true);
    }
  },
}
</script>
<style scoped>
  .download{
    transform: rotate(180deg);
  }
</style>
