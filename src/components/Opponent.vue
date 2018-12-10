<template>
  <div class="row justify-content-center">
    <div class="card" style="width: 18rem;" v-for="card in opponent.hand" @click="activeOpponentCard(card)">
      <div @click="active.cardId=card.id" :class="{'border-warning': card.id == active.cardId}">
        <img v-if="!card.visible" class="card-img-top cardback" src="@/assets/yugi.jpg" height="100px" width="100px">
        <img v-if="card.visible" class="card-img-top" :src="card.img" height="100px" width="100px">
        <div class="card-body">
          <h5 class="card-title" v-if="card.visible">{{card.name}}</h5>
          <p class="card-text" v-if="card.visible">Attack: {{card.attack}} Defense: {{card.defense}} Health:
            {{card.health}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Opponent',
    data() {
      return {
        active: {
          cardId: ''
        }

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
  .cardback {
    height: 200px;
    width: 175px;


  }
</style>