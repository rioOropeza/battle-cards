<template>
  <div class="col-3">
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
        console.log(this.$store.state.opponentCard)
        if (!this.$store.state.opponentCard || this.$store.state.opponentCard.dead) {
          this.$store.dispatch("opponentCard", card)
        } else {
          console.log('already have one')
        }
      }
    }
    ,
    computed: {
      opponent() {
        return this.$store.state.game.opponent
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>