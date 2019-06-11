<template>
  <md-field v-bind:class="color" >
    <label for="color">Barva</label>
    <md-select v-model="color" name="color" id="color" md-dense v-on:md-selected="selectColor">
      <md-option value="red" class="red">Red</md-option>
      <md-option value="pink" class="pink">Pink</md-option>
      <md-option value="purple" class="purple">Purple</md-option>
      <md-option value="deeppurple" class="deeppurple">Deep purple</md-option>
      <md-option class="indigo" value="indigo" >Indigo</md-option>
      <md-option value="blue" class="blue">Blue</md-option>
      <md-option value="lightblue" class="lightblue">Lightblue</md-option>
      <md-option value="cyan" class="cyan">Cyan</md-option>
      <md-option value="teal" class="teal">Teal</md-option>
      <md-option class="green" value="green" >Green</md-option>
      <md-option value="lightgreen" class="lightgreen">Light green</md-option>
      <md-option value="lime" class="lime">Lime</md-option>
      <md-option value="yellow" class="yellow">Yellow</md-option>
      <md-option value="amber" class="amber">Amber</md-option>
      <md-option value="orange" class="orange">Orange</md-option>
      <md-option value="deeporange" class="deeporange">Deep orange</md-option>
      <md-option value="brown" class="brown">Brown</md-option>
      <md-option value="black" class="black">Black</md-option>
    </md-select>
  </md-field>
</template>

<script>

export default {
  name: 'Colors',
  props: {
    editColor: {
      default: 'red',
      type: String,
    }
  },
  methods: {
    selectColor(){
        this.$emit('selectColor',this.color)
    }
  },
  created: function() {
    this.color = this.editColor;
  },
  watch: {
    editColor: function () {
      this.color = this.editColor;
    }
  },
  data: () => ({
    color: 'red',
  }),
}
</script>

<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine";
  @import "~vue-material/dist/base/theme";
  @import "~vue-material/dist/components/MdCard/theme";

    .rectangle{
        width: 100%;
        height:100%;
    }
    .black{
        background-color: md-get-palette-color(black, 500);
    }
    .red{
        background-color: md-get-palette-color(red, 500);
    }
    .green{
        background-color: md-get-palette-color(green, 500);
    }
    .purple{
        background-color: md-get-palette-color(purple, 500)
    }
    .orange{
        background-color: md-get-palette-color(orange, 500);
    }
    .indigo{
        background-color: md-get-palette-color(indigo, 500);
    }
    .deeppurple{
        background-color: md-get-palette-color(deeppurple, 500);
    }
    .blue{
        background-color: md-get-palette-color(blue, 500);
    }
    .lightblue{
        background-color: md-get-palette-color(lightblue, 500);
    }
    .cyan{
        background-color: md-get-palette-color(cyan, 500);
    }
    .teal{
        background-color: md-get-palette-color(teal, 500);
    }
    .lightgreen{
        background-color: md-get-palette-color(lightgreen, 500);
    }
    .orange{
        background-color: md-get-palette-color(orange, 500);
    }
    .lime{
        background-color: md-get-palette-color(lime, 500);
    }
    .yellow{
        background-color: md-get-palette-color(yellow, 500);
    }
    .amber{
        background-color: md-get-palette-color(amber, 500);
    }
    .deeporange{
        background-color: md-get-palette-color(deeporange, 500);
    }
    .brown{
        background-color: md-get-palette-color(brown, 500);
    }
    .pink{
        background-color: md-get-palette-color(pink, 500);
    }
</style>
