<template>
    <div class="projects">
        <span class="title primarytext" id="projects">PROJEKTE</span>
        <div class="project-container">
            <a class="project-element" data-state="neutral" v-for="project in projects" :key="project.index" :href="project.link" target="_blank">
                <img class="project-img" :src="project.image" alt="" draggable="false">
                <div class="project-content">
                    <span class="project-title">{{ project.title }} <i v-if="project.link" class="fa-solid fa-arrow-up-right project-title-arrow"></i></span>
                    <p class="project-description secondarytext">{{ project.description }}</p>
                    <div v-if="project.extra" class="primarytext" style="display: flex; gap: 0.3rem; align-items: center; margin-bottom: 0.4rem; font-size: 0.85rem"><i :class="project.extra.icon" style="font-size: 0.7rem;"></i>{{ project.extra.text }}</div>
                    <div class="project-tags">
                        <Tag class="project-tag"  v-for="tag in project.tags" :value="tag" rounded severity="primary" />
                    </div>
                </div>
            </a>
        </div>
        <span class="subtitle primarytext">Und noch vieles mehr...</span>
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
            projects: [
                {
                    index: 0,
                    title: "Admin Control Panel für Spielserver",
                    image: "/ACP.png",
                    description: "Admin Control Panel für Spieladministratoren mit Firebase und eigener Express API. Benutzer- und Rollenverwaltungssystem mit Berechtigungen durch MySQL Datenbank.",
                    tags: ["JavaScript", "VueJS", "PrimeVue", "Node.js", "Firebase", "APIs", "Express", "MySQL"],
                    link: ""
                },
                {
                    index: 0,
                    title: "Website für Spielserver",
                    image: "/APEXURE_WEBSITE.png",
                    description: "Einfache Website für Grand Theft Auto 5 Rollenspiel Spielserver mit FAQ System und erklärung wie man dem Server beitritt sowie Disclaimer für rechtliche Sicherheit.",
                    tags: ["JavaScript", "VueJS", "CSS/SCSS", "Node.js"],
                    link: "https://gta5apexure.de",
                    extra: {
                        icon: "fa-solid fa-user",
                        text: "25.000+ Gesamte Aufrufe"
                    },
                },
                {
                    index: 0,
                    title: "Bußgeldrechner für Spielserver",
                    image: "/BUSSGELDRECHNER.png",
                    description: "Bussgeldrechner um sich für einen Grand Theft Auto 5 Rollenspiel Spielserver Bußgelder nach Auswahl berechnen zu lassen.",
                    extra: {
                        icon: "fa-solid fa-user",
                        text: "2.000+ Monatliche Benutzer"
                    },
                    tags: ["JavaScript", "Html", "CSS", "GTag"],
                    link: "https://devgosling.github.io/bussgeldrechner/"
                },
                {
                    index: 0,
                    title: "WELT Nachrichten Discord Bot",
                    image: "/WELT.png",
                    extra: {
                        icon: "fa-brands fa-discord",
                        text: "Auf 250+ Discord Servern"
                    },
                    description: "Verifizierter Discord Bot, welcher den RRS-Feed von den Kategorien die ein Benutzer eingestellt hat ausließt und sobald eine neue Nachricht in dieser Kategorie erscheint automatisch in einen vom Benutzer angegeben Discord Textkanal sendet.",
                    tags: ["JavaScript", "RRS Reader", "Node.js", "Discord.js"],
                    link: ""
                },
                {
                    index: 0,
                    title: "Nookazon Werbeblocker",
                    image: "/NOOKAZON.png",
                    description: "Simpler Werbeblocker um einen bestimmten Werbetyp den andere Werbeblocker nicht erkennen zu blockieren und zu entfernen.",
                    tags: ["JavaScript", "Chromium"],
                    link: ""
                },
            ]
        }
    },

    mounted() {
        const projectElements = document.querySelectorAll(".project-element")

        projectElements.forEach((projectElement) => {
            projectElement.addEventListener("mouseenter", () => {
                projectElements.forEach(b => b.setAttribute("data-state", "not-hovered"))
                projectElement.setAttribute("data-state", "neutral")
            })
        })

        projectElements.forEach((projectElement) => {
            projectElement.addEventListener("mouseleave", () => {
                projectElements.forEach(b => b.setAttribute("data-state", "neutral"))
            })
        })
    }

}
</script>
<style lang="scss">
.projects {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
} 

.project-container {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
}

.projects .title {
    font-size: 1rem;
    letter-spacing: 0.13rem;
    font-weight: 700;
    padding: 1rem;

}

.projects .subtitle {
    font-size: .95rem;
    font-weight: 600;
    padding: 1rem;

}

.project-element {
    display: grid;
    grid-template-columns: 27% 73%;

    padding: 1rem;

    border-radius: 0.5rem;

    transition: 0.2s;

    cursor: pointer;
}

.project-element[data-state=not-hovered] {
    opacity: 0.5;
}

.project-img {
    width: 90%;
    aspect-ratio: 16 / 9;
    border-radius: 0.4rem;
    border: 0.15rem solid rgba(226, 232, 240, 0.1);
    object-fit: cover;

    transition: 0.15s;
}

.project-element:hover .project-img {
    border-color: rgba(226, 232, 240, 0.3);
}

.project-element:hover {
    background-color: rgba(30, 41, 59, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
}

.project-element:hover * .project-title {
    color: rgb(123, 255, 255);
}

.project-element:hover * .project-title-arrow {
    transform: translate(30%, -30%);
}

.project-element .period {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgb(98, 108, 121);

    padding-top: 0.3rem;
}

.project-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--primarytextcolor);

    transition: 0.2s;
}

.project-positions {
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    color: rgb(98, 108, 121);
}

.project-title-arrow {
    font-size: 0.8rem;

    transition: 0.2s;
}

.project-description {
    font-size: 0.9rem;
    line-height: 1.5;

    margin-top: 0.7rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
}


.project-tag .p-tag-label {
    font-weight: 500;
    padding: 0.1rem;
}
</style>