<template>
    <div class="languages">
        <span class="title primarytext" id="programminglanguages">PROGRAMMIERSPRACHEN</span>
        <div class="languages-container">
            <div class="languages-container-language" v-for="language in programmingLanguages">
                <div>
                    <img :src="language[0]" :data-name="language[0].replace('/', '').replace('.png', '')" draggable="false">
                </div>
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
                ["/JavaScript.png"],
                ["/Java.png"],
                ["/CPP.png"],
                ["/CS.png"],
                ["/Python.png"],
                ["/SQL.png"],
                ["/HTML.png"],
                ["/CSS.png"],
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
    grid-template-columns: 25% 25% 25% 25%;

    border-radius: 0.5rem;

    transition: 0.15s;
}

.languages-container:hover {
    background-color: rgba(30, 41, 59, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);

}

.languages-container-language {
    aspect-ratio: 1;
    width: 100%;

    padding: 0.3rem;

    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.languages-container-language div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(186, 202, 223, 0.313);

    --filter: brightness(.4) grayscale(1);

    opacity: 0.7;

    transition: 0.15s;
    border-radius: 0.5rem;
}

.languages-container-language div:hover {
    filter: brightness(1) grayscale(0);
    opacity: 1;
}

.languages-container-language div img {
    stroke-width: 0px;
    object-fit: scale-down;    
}

.languages-container-language div img[data-name=JavaScript] {
    height: 65%;
    border-radius: 0.3rem;
}

.languages-container-language div img[data-name=Java] {
    max-height: 80%;
}

.languages-container-language div img[data-name=CPP] {
    max-width: 70%;
}

.languages-container-language div img[data-name=CS] {
    max-width: 65%;
}

.languages-container-language div img[data-name=Python] {
    max-width: 65%;
}

.languages-container-language div img[data-name=SQL] {
    max-height: 65%;
}

.languages-container-language div img[data-name=HTML] {
    max-height: 65%;
}

.languages-container-language div img[data-name=CSS] {
    max-height: 65%;
}
</style>