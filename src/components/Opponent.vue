<template>
  <div class="col">
    <div class="card" style="width: 18rem;" v-for="card in opponent.hand">
      {{card.name}}
      <img class="card-img-top" :src="card.img" height="100px" width="100px" @click="activeOpponentCard(card)">
      <div class="card-body">
        <h5 class="card-title">{{card.name}}</h5>
        <p class="card-text">Attack: {{card.attack}} Defense: {{card.defense}} Health: {{card.health}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Opponent',
    data() {
      return {

      }
    },
    methods: {
      activeOpponentCard(card) {
        this.$store.dispatch("opponentCard", card)
        console.log(this.$store.state.opponentCard)
      }
    }
    ,
    computed: {
      opponent() {
        return this.$store.state.game.opponent
      },
      opponentDeadCards() {
        return this.$store.state.game.opponent.deadCards
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>