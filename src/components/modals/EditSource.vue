<template>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>Editace zdroje</md-dialog-title>
    <SourceCreator v-bind:editSource="source" v-on:save="save" mode="edit"/>
  </md-dialog>
</template>

<script>
import SourceCreator from '../SourceCreator'

export default {
  name: 'EditSource',
  methods: {
    setSource(source){
      this.source = JSON.parse(JSON.stringify(source));
      this.showDialog = true;
    },
    save(){
      this.showDialog = false;
      this.$emit('saveChanges');
    }
  },
  components: {
    SourceCreator
  },
  data: () => ({
    showDialog: false,
    source: {
      title: String,
      description: String,
      link: String,
      visited: Number,
      color: String,
    }
  })
}
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
    min-width: 500px;
  }
</style>