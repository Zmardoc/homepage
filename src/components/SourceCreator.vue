<template>
  <form @submit="saveSource">
    <md-list>
      <md-list-item>
        <md-field :class="messageClass">
          <label>Link</label>
          <md-input v-model="source.link" v-bind:disabled="mode === 'edit'"></md-input>
          <span class="md-error">Tento link již existuje!</span>
        </md-field>
      </md-list-item>
      <md-list-item>
        <md-field>
            <label>Název</label>
            <md-input v-model="source.title"></md-input>
        </md-field>
      </md-list-item>
      <md-list-item>
        <md-field>
          <label>Popis</label>
          <md-input v-model="source.description" md-autogrow></md-input>
        </md-field>
      </md-list-item>
      <md-list-item>
        <Colors v-on:selectColor="selectColor" v-bind:editColor="source.color"/>
      </md-list-item>
    </md-list>
    <md-button type="submit" class="md-primary" >Uložit</md-button>
  </form>
</template>

<script>
import Colors from './Colors'
import { isNull } from 'util';

export default { 
  name: 'ServiceBar',
  props: {
    editSource: {
      title: String,
      description: String,
      link: String,
      visited: Number,
      color: {
        default: 'red',
        type: String
      },
    },
    mode: {
      deafult: 'create',
      type: String
    },
  },
  components: {
    Colors,
  },
  methods: {
    saveSource(e){
      e.preventDefault();      
      var sources = JSON.parse(localStorage.getItem('sources'));
      if(isNull(sources)){
        sources = [];
      }

      if(this.mode === 'create'){
        this.source.link = this.source.link.includes("http") ? this.source.link : `http://${this.source.link}`; 
      }
      else{
        sources = sources.filter(s => s.link !== this.source.link);
      }
      this.isValid = this.validate(sources);
      if(this.isValid) {     
        sources.push(this.source);  
        const parsed = JSON.stringify(sources);
        localStorage.setItem('sources', parsed);
        this.reset();
        this.$emit("save");
      }
    },
    validate(sources){
      if(!isNull(sources)) {
        if(sources.filter(source => source.link === this.source.link).length > 0) {
          return false;
        }
      }
      return true;
    },
    reset(){
      this.source.link = '';
      this.source.title = '';
      this.source.description = '';
      this.source.visited = 0;
      this.source.color = 'red';
      this.$emit('hideNav');
    },
    selectColor(color){
      this.source.color = color;
    },
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': !this.isValid
      }
    }
  },
  created: function(){
    this.source = this.editSource;
  },
  data: () => ({
    source: {
      title: '',
      description: '',
      link: '',
      visited: 0,
      color: 'red',
    },
    isValid: true,
  })
}
</script>

<style scoped>
  .md-primary {
    float: right;
  }
</style>
