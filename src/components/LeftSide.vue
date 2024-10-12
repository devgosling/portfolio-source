<template>
    <div class="leftside">
      <div class="upper">
        <span class="name primarytext">Steven Kukla</span>
        <span class="job primarytext">Hobby Fullstack Developer</span>
        <span class="catchline secondarytext">Ich erstelle pixel-perfekte, ansprechende, und zugängliche digitale Erlebnisse.</span>
      </div>
      <div class="navigation">
        <span class="navpoint" @click="navigateTo(0)" :data-active="navIndex == 0">ÜBER MICH</span>
        <span class="navpoint" @click="navigateTo(1)" :data-active="navIndex == 1">ERFAHRUNG</span>
        <span class="navpoint" @click="navigateTo(2)" :data-active="navIndex == 2">PROJEKTE</span>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      navIndex: 0,
    }
  },

  methods: {
    navigateTo(index) {
      this.navIndex = index;
    }
  }
}
</script>
<style lang="scss">
.leftside {
  padding-top: 5rem;
  width: 100%;
}

.leftside .upper {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .name {
    font-weight: 700;
    font-size: 3.3rem;
  }

  .job {
    font-weight: 500;
    font-size: 1.2rem;
  }

  .catchline {
    padding-top: 1rem;
    line-height: 1.5;

    width: 70%;
  }
}

.navigation {
  display: inline-flex;
  flex-direction: column;

  margin-top: 5rem;
  font-size: 0.82rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
}

.navigation .navpoint {
  position: relative;

  transform: translateX(3rem);
  padding: 0.7rem 0;
  padding-right: 1rem;
  padding-left: 3rem;

  margin-left: -3rem;

  color: rgb(98, 108, 121);
  transition: 0.15s;

  cursor: pointer;
}

.navigation .navpoint::before {
  content: "";
  display: block;
  height: 1px;
  width: 2rem;

  position: absolute;
  top: 50%;
  transform: translateX(-3rem);
  background-color: rgb(98, 108, 121);

  transition: 0.15s;
}

.navigation .navpoint[data-active="true"],
.navigation .navpoint:hover {
  transform: translateX(5rem);
  color: var(--primarytextcolor);

  padding-left: 5rem;
  margin-left: -5rem;
}

.navigation .navpoint[data-active="true"]::before,
.navigation .navpoint:hover:before {
  width: 4rem;
  transform: translateX(-5rem);
  background-color: var(--primarytextcolor);
}

</style>