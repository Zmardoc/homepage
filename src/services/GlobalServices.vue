<template>
  <div style="display:none;"></div>
</template>

<script>
import { isNull } from 'util';
export default {
  name: 'GlobalServices',
  methods:{

    saveSources(sources) {
      const parsed = JSON.stringify(sources);
      localStorage.setItem('sources', parsed);
    },
    joinSources(newSources){
      let oldSources = JSON.parse(localStorage.getItem('sources')); 
      let allSources = this.arrayUnique(newSources.concat(oldSources));
      return allSources;
    },
    arrayUnique(array) {
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
          if(!isNull(a[i]) && !isNull(a[j]) && a[i].link === a[j].link)
          
            a.splice(j--, 1);
        }
      }
      return a;
    },
  },
}
</script>
