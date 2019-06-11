<template>
  <md-drawer :md-active.sync="showNavigation">
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">Nahrát nový zdroj</span>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button md-dense" @click="showNavigation = false">
            <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <SourceCreator 
    v-on:save="$emit('save')"
    v-on:hideNav="showNav(false)"
    v-bind:editSource="source"
    mode="create"
    />
    <TimeTransferer />
  </md-drawer>
</template>

<script>
import TimeTransferer from '../TimeTransferer'
import SourceCreator from '../SourceCreator'

export default {
  name: 'ServiceBar',
  components: {
    SourceCreator,
    TimeTransferer,
  },
  methods: {
    showNav: function(show) {
        this.showNavigation = show;
    },
  },
  data: () => ({
    showNavigation: false,
    source: {
      title: '',
      description: '',
      link: '',
      visited: 0,
      color: 'red',
    },
  })
}
</script>