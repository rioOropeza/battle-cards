<template>
  <div class=" container-fluid">
    <div class="row justify-content-center flex-direction-row">
      <Opponent></Opponent>
    </div>
    <div class="row">
      <Player></Player>
    </div>
    <button @click="attack">attack</button>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Player from "@/components/Player.vue"
  import Opponent from "@/components/Opponent.vue"

  export default {
    name: 'game',
    components: {
      Player,
      Opponent
    },
    computed: {
      cards() {
        return {
          playerCard: this.$store.state.playerCard.id,
          opponentCard: this.$store.state.opponentCard.id
        }
      }
    },
    methods: {
      attack() {
        this.$store.dispatch("attack", { game: this.$route.params.gameId, cards: this.cards })
      },
      computed: {
        game() {
          return this.$store.state.game
        }
      },
      mounted() {
        debugger
        this.$store.dispatch("getGame", this.$route.params.gameId)
      }
    }
  }

</script>