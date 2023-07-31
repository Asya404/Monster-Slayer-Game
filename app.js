function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomNum(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomNum(18, 5);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
