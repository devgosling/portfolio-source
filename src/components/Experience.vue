<template>
    <div class="experience">
        <span class="title primarytext fadein d2000ms" id="erfahrung">ERFAHRUNG</span>
        <div class="experience-container">
            <a :class="['experience-element', index == 0 ? 'fadein d2100ms' : index == 1 ? 'fadein d2200ms' : 'fadeinonscroll d100ms']" data-state="neutral" v-for="(experience, index) in experiences" :key="experience.index" :href="experience.link" target="_blank">
                <span class="period">{{ experience.period }}</span>
                <div class="experience-content">
                    <span class="experience-title">{{ experience.title }} · {{ experience.company }} <i class="fa-solid fa-arrow-up-right experience-title-arrow"></i></span>
                    <div class="experience-positions">
                        <span v-for="position in experience.positions">{{ position }}</span>
                    </div>
                    <p class="experience-description secondarytext">{{ experience.description }}</p>
                    <div class="experience-tags">
                        <Tag :class="'experience-tag fadeinonscroll d' + ((tindex + 1) * 100 + 100) + 'ms'" v-for="(tag, tindex) in experience.tags" :value="tag" rounded severity="primary" />
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
import Tag from 'primevue/tag';

export default {

    components: {
        Tag
    },

    data() {
        return {
            experiences: [
                {
                    index: 0,
                    title: "Serverentwicklung",
                    company: "Apexure Roleplay",
                    period: "APRIL — OKT 2024",
                    description: "Leistungsstarkes Front- und Backend erstellt und gewartet sowie mit VueJS 2 das Game User Interface erstellt. Dashboard für Spieladministratoren erstellt für die Überprüfung von Spieldaten und zur Durchsuchung von Spielprotokolle. Authentifizierungssystem mit E-Mail Verifizierung durch einen SMTP-Server erstellt.",
                    tags: ["C#", "JavaScript", "VueJS", "HTML & CSS", "SCSS", "Node.js"],
                    positions: ["Projektmanagement", "Entwicklungsleitung"],
                    link: "https://gta5apexure.de"
                },
                {
                    index: 0,
                    title: "Spielentwicklung",
                    company: "SCP: Site Roleplay",
                    period: "MAI 2023 — JAN 2024",
                    description: "UI/UX Designer und Programmierer für ein Roblox Rollenspiel um das fiktive Thema „Secure. Contain. Protect.“ indem Anomalien in einer unterirdischen Einrichtung gesichert, gehalten und beschützt werden.",
                    tags: ["Lua", "JavaScript", "Node.js", "Express"],
                    positions: ["UI/UX Designer", "Programmer"],
                    link: "https://www.roblox.com/games/3226555017/SCP-Site-Roleplay"
                },
                {
                    index: 0,
                    title: "Game Development",
                    company: "LifeBoat Network",
                    period: "JUL 2022 — FEB 2023",
                    description: "Wiedereintritt in das LifeBoat Network Serverteam als Plugin Developer und Administrator für Spielsysteme. Entwicklung eines Application Programming Interface verbunden mit Minecraft-Befehlen um die Arbeit für Spielmoderatoren zu vereinfachen.",
                    tags: ["Java", "Nukkit", "Node.js", "Express"],
                    positions: ["Plugin Developer", "Administrator"],
                    link: "https://www.lbsg.net"
                },
                {
                    index: 0,
                    title: "Game Development",
                    company: "ish (YouTuber)",
                    period: "AUG 2021 — MAI 2022",
                    description: "Minecraft-Pluginentwicklung für Spielexperimente mit tausenden Teilnehmern für einen englischen YouTube Kanal mit derzeitigen 500.000 Abonnenten. Minecraft-Server mit Shard-Kompatibilität um mehr als 1.000 Spieler gleichzeitig auf einer Minecraft-Welt handhaben zu können.",
                    tags: ["Java", "Sharding", "Bungeecord"],
                    positions: ["Game Developer"],
                    link: "https://www.youtube.com/@ish"
                },
                {
                    index: 0,
                    title: "Plugin Development",
                    company: "LifeBoat Network",
                    period: "FEB 2020 — MÄR 2021",
                    description: "Minecraft-Pluginentwicklung für den Minecraft-Spielserver LifeBoat Network für verschiedene Minispiele in einem Servernetzwerk mit synchronisierten Datenbankeinträge.",
                    tags: ["Java", "Nukkit"],
                    positions: ["Junior Plugin Developer"],
                    link: "https://www.lbsg.net"
                },
            ]
        }
    },

    methods: {
        isInFadeIn(element) {
            return element.classList.contains("fadein") || element.classList.contains("fadeinonscroll")
        }
    },

    mounted() {

        const experienceElements = document.querySelectorAll(".experience-element")

        experienceElements.forEach((experienceElement) => {
            experienceElement.addEventListener("mouseenter", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(experienceElement)) return;
                experienceElements.forEach(b => {
                    if (this.isInFadeIn(b)) return;
                    b.setAttribute("data-state", "not-hovered")
                })
                experienceElement.setAttribute("data-state", "neutral")
            })
        })

        experienceElements.forEach((experienceElement) => {
            experienceElement.addEventListener("mouseleave", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(experienceElement)) return;
                experienceElements.forEach(b => b.setAttribute("data-state", "neutral"))
            })
        })
    }

}
</script>
<style lang="scss">
.experience {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
} 

.experience-container {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
}

.experience .title {
    font-size: 1rem;
    letter-spacing: 0.13rem;
    font-weight: 700;
    padding: 1rem;

}

.experience-element {
    display: grid;
    grid-template-columns: 27% 73%;

    padding: 1rem;

    border-radius: 0.5rem;

    transition: 0.2s;

    cursor: pointer;
}

.experience-element[data-state=not-hovered] {
    opacity: 0.5;
}

.experience-element:hover {
    background-color: rgba(30, 41, 59, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
}

.experience-element:hover * .experience-title {
    color: rgb(123, 255, 255);
}

.experience-element:hover * .experience-title-arrow {
    transform: translate(30%, -30%);
}

.experience-element .period {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgb(98, 108, 121);

    padding-top: 0.3rem;
    padding-right: 0.3rem;
}

.experience-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--primarytextcolor);

    transition: 0.2s;
}

.experience-positions {
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    color: rgb(98, 108, 121);
}

.experience-title-arrow {
    font-size: 0.8rem;

    transition: 0.2s;
}

.experience-description {
    font-size: 0.9rem;
    line-height: 1.5;

    margin-top: 0.7rem;
}

.experience-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
}


.experience-tag .p-tag-label {
    font-weight: 500;
    padding: 0.1rem;
}

@media screen and (max-width: 1200px) {
  /*Tablets*/
  .experience-element:hover {
    background-color: inherit;
    box-shadow: inherit;
  }
  
  .experience-element:hover * .experience-title {
    color: inherit;
  }
  
  .experience-element:hover * .experience-title-arrow {
    transform: inherit;
  }
}


@media screen and (max-width: 600px) {
  /*Phones*/
  .experience {
    padding-top: 3rem;
  }

  .experience-element {
    display: flex;
    flex-direction: column;
  }

  .period {
    padding-bottom: 0.2rem;
  }

  .experience-description {
    font-size: 0.85rem;
  }
}
</style>