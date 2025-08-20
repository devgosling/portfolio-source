<template>
    <div class="rightside" id="aboutme">
      <p class="about-p fadein d1500ms">Im Jahr 2019 wurde ich durch einen guten Freund aufmerksam von der Entwicklung von Discord Bots und stolperte in die programmierung mit NodeJS. Heutzutage habe ich bereits die Privilegien genießen können Software und alles drumerum für einen <a href="https://www.youtube.com/@ish" target="_blank">englischsprachigen YouTuber</a>, einem <a href="https://www.lbsg.net" target="_blank">Minecraft Bedrock Edition Server</a>, und einem <a href="https://gta5apexure.de" target="_blank">RAGE Mulitplayer Projekt</a> zu entwickeln. Zudem habe ich in dieser Zeit an vielen eigenen <a href="">Projekten</a> gearbeitet.</p>
      <p class="about-p fadein d1700ms">Heutzutage liegt mein Fokus darauf, alles Mögliche zu automatisieren, um die Benutzung einer Software zu vereinfachen. Der Teil der mir am Programmieren am meisten Spaß macht, ist der Teil an dem sich Programmierung und Design treffen — Sachen, die gut aussehen, aber zugleich gut unter der Haube programmiert worden sind. In meiner Freizeit experimentiere ich gerne mit verschiedensten Dingen, um mein Wissen zu erweitern.</p>
      <p class="about-p fadein d1900ms">Wenn ich nicht am PC, bin ich meistens am Airsoft spielen in Koblenz, treffe mich mit Freunden, oder drehe TikTok Videos.</p>

      <Experience />
      <Projects />
      <Education />
      <ProgrammingLanguages />
      <Libraries /> 
      <Tools /> 

      <p class="credits-p fadeinonscroll d500ms">Einfach designt in <a href="https://www.figma.com" target="_blank">Figma</a> und programmiert in <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a>. Erstellt mit <a href="https://vuejs.org" target="_blank">Vue.js</a> und <a href="https://primevue.org" target="_blank">Primevue</a>, deployed mit <a href="https://vite.dev" target="_blank">Vite</a>. Text ist auf die <a href="https://rsms.me/inter/" target="_blank">Inter</a> Schriftart gesetzt.</p>
    </div>
</template>
<script>
import Experience from "@/components/Experience.vue"
import Projects from "./Projects.vue";
import ProgrammingLanguages from "./ProgrammingLanguages.vue";
import Libraries from "./Libraries.vue";
import Tools from "./Tools.vue";
import Education from "./Education.vue";

export default {
  components: {
    Experience,
    Projects,
    ProgrammingLanguages,
    Libraries,
    Tools,
    Education
  }
}
</script>
<style lang="scss">
.rightside {
  padding-top: 5rem;
}

.rightside .about-p {
  color: var(--secondarytextcolor);
  line-height: 1.65;
  font-size: 1rem;

  padding-left: 1rem;
  padding-right: 1rem;
}

.rightside .credits-p {
  color: var(--secondarytextcolor);
  line-height: 1.65;
  font-size: 0.9rem;

  width: 90%;

  margin-top: 10vh;
  margin-bottom: 7rem;
  padding-left: 1rem;
  padding-right: 1rem;
}


@media screen and (max-width: 1200px) {
  /*Tablets*/
  .rightside {
    padding-top: 1rem;
  }
}

@media screen and (max-width: 600px) {
  /*Phones*/
  .rightside {
    padding-top: 1rem;
  }

  .rightside .about-p {
    font-size: 0.9rem;
  }

  .rightside .credits-p {
    width: 100%;
    font-size: 0.8rem;
  }
}
</style>