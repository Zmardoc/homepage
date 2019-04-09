<template>
  <md-card class="md-primary" v-bind:md-theme="source.color" md-with-hover>
    <div @click="goToPage">
      <md-ripple>
        <md-card-header>
        <div class="md-title">{{source.title}}</div>
        <div class="md-subhead">{{source.visited}} {{getVisitString()}}</div>
        </md-card-header>
        <md-card-content>{{source.description}}</md-card-content>
      </md-ripple>
      <md-card-actions v-if="!locked">
        <md-button @click="edit">Upravit</md-button>
        <md-button @click="remove">Smazat</md-button>
      </md-card-actions>
    </div>       
  </md-card>    
</template>

<script>
export default {
  name: "LinkBox",
  props:{
    source: {
      title: String,
      description: String,
      link: String,
      visited: Number,
      color: String,
    },
    locked: Boolean,
  },
  methods: {
    goToPage() {
      this.$emit('openPage');
      window.open(this.source.link, "_blank");
    },
    remove(e){
      e.stopPropagation();
      this.$emit('removeSource');
    },
    edit(e){
      e.stopPropagation();
      this.$emit('editSource');
    },
    getVisitString(){
      if(this.source.visited === 1){
          return "návštěva";
      }
      else if(this.source.visited > 1 && this.source.visited < 5){
          return "návštěvy";
      }
      return "návštěv";
    }
  },
}
</script>
<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("red", (
    primary: md-get-palette-color(red, 500)
  ));
  @include md-register-theme("green", (
    primary: md-get-palette-color(green, 500)
  ));
  @include md-register-theme("black", (
    primary: md-get-palette-color(black, 500)
  ));
  @include md-register-theme("purple", (
    primary: md-get-palette-color(purple, 500)
  ));
  @include md-register-theme("orange", (
    primary: md-get-palette-color(orange, 500)
  ));
  @include md-register-theme("deeppurple", (
    primary: md-get-palette-color(deeppurple, 500)
  ));
  @include md-register-theme("indigo", (
    primary: md-get-palette-color(indigo, 500)
  ));
  @include md-register-theme("blue", (
    primary: md-get-palette-color(blue, 500)
  ));
  @include md-register-theme("lightblue", (
    primary: md-get-palette-color(lightblue, 500)
  ));
  @include md-register-theme("cyan", (
    primary: md-get-palette-color(cyan, 500)
  ));
  @include md-register-theme("teal", (
    primary: md-get-palette-color(teal, 500)
  ));
  @include md-register-theme("lightgreen", (
    primary: md-get-palette-color(lightgreen, 500)
  ));
  @include md-register-theme("lime", (
    primary: md-get-palette-color(lime, 500)
  ));
  @include md-register-theme("lightgreen", (
    primary: md-get-palette-color(lightgreen, 500)
  ));
  @include md-register-theme("yellow", (
    primary: md-get-palette-color(yellow, 500)
  ));
  @include md-register-theme("amber", (
    primary: md-get-palette-color(amber, 500)
  ));
  @include md-register-theme("deeporange", (
    primary: md-get-palette-color(deeporange, 500)
  ));
  @include md-register-theme("brown", (
    primary: md-get-palette-color(brown, 500)
  ));
  @include md-register-theme("pink", (
    primary: md-get-palette-color(pink, 500)
  ));

  @import "~vue-material/dist/base/theme";
  @import "~vue-material/dist/components/MdCard/theme";
  .md-card {
    max-width: 320px;
    min-width: 200px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    flex-grow: 1;
  }
  .md-card-content {
    overflow: hidden;
    height: 68px;
}
</style>
