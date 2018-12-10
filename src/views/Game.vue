<template>
  <div class="container-fluid">
    <div class="row">
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
      game() {
        return this.$store.state.game
      },
      playerCard() {
        return this.$store.state.playerCard
      },
      opponentCard() {
        return this.$store.state.opponentCard

      }
    },
    methods: {
      attack() {
        let payload = {
          gameId: this.game.id,
          playerCardId: this.playerCard.id,
          opponentCardId: this.opponentCard.id
        }
        this.$store.dispatch("attack", payload)
      }
    },
    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch("getGame", this.$route.params.gameId)
    }
  }


</script>