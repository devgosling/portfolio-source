<template>
    <div class="languages">
        <span class="title primarytext fadeinonscroll d100ms" id="programminglanguages">PROGRAMMIERSPRACHEN</span>
        <div class="languages-container">
            <div :class="'languages-container-language fadeinonscroll d' + ((index + 1) * 100) + 'ms'" v-for="(language, index) in programmingLanguages" data-state="neutral">
                <a :href="language[1]" target="_blank">
                    <img :src="'/portfolio' + language[0]" :data-name="language[0].replace('/', '').replace('.png', '')" draggable="false">
                </a>
            </div>
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
            programmingLanguages: [
                ["/JavaScript.png", 'https://de.wikipedia.org/wiki/JavaScript'],
                ["/Java.png", 'https://www.java.com/de/'],
                ["/CPP.png", 'https://cplusplus.com'],
                ["/CS.png", 'https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps'],
                ["/Python.png", 'https://www.python.org'],
                ["/SQL.png", 'https://de.wikipedia.org/wiki/SQL'],
                ["/HTML.png", 'https://de.wikipedia.org/wiki/Hypertext_Markup_Language'],
                ["/CSS.png", 'https://de.wikipedia.org/wiki/Cascading_Style_Sheets'],
                ["/LUA.png", 'https://www.lua.org'],
            ]
        }
    },

    methods: {
        isInFadeIn(element) {
            return element.classList.contains("fadein") || element.classList.contains("fadeinonscroll")
        }
    },

    mounted() {
        const languageElements = document.querySelectorAll(".languages-container-language")

        languageElements.forEach((languageElement) => {
            languageElement.addEventListener("mouseenter", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(languageElement)) return;
                languageElements.forEach(b => {
                    if (this.isInFadeIn(b)) return;
                    b.setAttribute("data-state", "not-hovered")
                })
                languageElement.setAttribute("data-state", "neutral")
            })
        })

        languageElements.forEach((languageElement) => {
            languageElement.addEventListener("mouseleave", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(languageElement)) return;
                languageElements.forEach(b => b.setAttribute("data-state", "neutral"))
            })
        })
    }

}
</script>
<style lang="scss">
.languages {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
} 

.languages .title {
    font-size: 1rem;
    letter-spacing: 0.13rem;
    font-weight: 700;
    padding: 1rem;
}

.languages-container {
    padding: 1rem;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;

    border-radius: 0.5rem;

    transition: 0.15s;

}

.languages-container:hover {
    /*background-color: rgba(30, 41, 59, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);`*/

}

.languages-container-language {
    aspect-ratio: 1;
    width: 100%;

    padding-right: 0.4rem;
    padding-bottom: 0.4rem;

    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.15s;
}

.languages-container-language[data-state=not-hovered] {
    opacity: 0.5;
}

.languages-container-language a {
    width: 100%;
    height: 100%;

    display: flex block;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: rgba(113, 123, 136, 0.19);

    opacity: 0.6;

    transition: 0.15s;
    border-radius: 0.5rem;
    border: 2px rgba(255, 255, 255, 0.2) solid;
}

.languages-container-language a:hover {
    filter: brightness(1) grayscale(0);
    opacity: 1;
    border: 2px rgba(255, 255, 255, 0.4) solid;
}

.languages-container-language a img {
    stroke-width: 0px;
    object-fit: scale-down;    
}

.languages-container-language a img[data-name=JavaScript] {
    height: 65%;
    border-radius: 0.3rem;
}

.languages-container-language a img[data-name=Java] {
    max-height: 80%;
}

.languages-container-language a img[data-name=CPP] {
    max-width: 70%;
}

.languages-container-language a img[data-name=CS] {
    max-width: 65%;
}

.languages-container-language a img[data-name=Python] {
    max-width: 65%;
}

.languages-container-language a img[data-name=SQL] {
    max-height: 65%;
}

.languages-container-language a img[data-name=HTML] {
    max-height: 65%;
}

.languages-container-language a img[data-name=CSS] {
    max-height: 65%;
}

.languages-container-language a img[data-name=LUA] {
    max-height: 65%;
}
</style>