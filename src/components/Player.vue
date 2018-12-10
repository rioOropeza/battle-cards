<template>
  <div class="row">
    <div class="card" style="width: 18rem;" v-for="card in player.hand">
      {{card.name}}
      <img class="card-img-top" :src="card.img" height="100px" width="100px" @click="activePlayerCard(card)">
      <div class="card-body">
        <h5 class="card-title">{{card.name}}</h5>
        <p class="card-text">Attack: {{card.attack}} Defense: {{card.defense}} Health: {{card.health}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Player',
    computed: {
      player() {
        return this.$store.state.game.player
      },

    },
    methods: {
      activePlayerCard(card) {
        this.$store.dispatch("playerCard", card)
        console.log(this.$store.state.playerCard)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>