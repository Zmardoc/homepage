<template>
  <div class="content">
    <LinkBox 
    v-bind:key="source.link" 
    v-for="source in sortedVisits" 
    v-bind:source="source" 
    v-on:removeSource="$emit('removeSource', source)"
    v-on:openPage="$emit('openPage', source)"        
    v-on:editSource="$emit('editSource', source)"  
    v-bind:locked="locked"      
    />
  </div>
</template>

<script>
import LinkBox from '../LinkBox'

export default { 
  name: 'Links',
  components: {
    LinkBox,
  },
  props: ['sources','locked'],
  computed: {
    sortedVisits(){
      return this.sources !== null && this.sources.length > 0 ? this.sources.slice().sort((a, b) => b.visited - a.visited) : null;
    }
  },
}
</script>
<style scoped>
.content{
  padding:8px;
  display: flex;
  flex-wrap: wrap;
}
</style>
