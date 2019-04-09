<template>
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
    <md-button v-if="!locked"  @click="$emit('import')">
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
</template>

<script>    
export default { 
  name: 'Header',
  props: {
    title: String,
    locked: Boolean,
  },
  data: () => ({
    file: null,
  }),
}
</script>
<style scoped>
  .download{
    transform: rotate(180deg);
  }
</style>
