<template>
  <div class="home">
    <img @click="startGame" alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
  // @ is an alias to /src
  import Opponent from '@/components/Opponent.vue'
  import Player from '@/components/Player.vue'

  export default {
    name: 'home',
    components: {
      Opponent,
      Player
    },
    methods: {

      startGame() {
        this.$store.dispatch('startGame')
      }
    }
  }
</script>