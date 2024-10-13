<template>
    <div class="tools">
        <span class="title primarytext fadeinonscroll d100ms" id="tools">TOOLS & PLATTFORMEN</span>
        <div class="tools-container">
            <div :class="'tools-container-tool fadeinonscroll d' + ((index + 1) * 100) + 'ms'" v-for="(tool, index) in tools" data-state="neutral">
                <div>
                    <img :src="'/portfolio' + tool[0]" :data-name="tool[0].replace('/', '').replace('.png', '')" draggable="false">
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
            tools: [
                ["/Git.png"],
                ["/GitHub.png"],
                ["/Heroku.png"],
                ["/Firebase.png"],
                ["/Supabase.png"],
                ["/Webpack.png"],
                ["/Roblox.png"],
                ["/Glitch.png"],
                ["/Replit.png"],
            ]
        }
    },

    mounted() {
        const toolElements = document.querySelectorAll(".tools-container-tool")

        toolElements.forEach((toolElement) => {
            toolElement.addEventListener("mouseenter", () => {
                toolElements.forEach(b => b.setAttribute("data-state", "not-hovered"))
                toolElement.setAttribute("data-state", "neutral")
            })
        })

        toolElements.forEach((toolElement) => {
            toolElement.addEventListener("mouseleave", () => {
                toolElements.forEach(b => b.setAttribute("data-state", "neutral"))
            })
        })
    }

}
</script>
<style lang="scss">
.tools {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
} 

.tools .title {
    font-size: 1rem;
    letter-spacing: 0.13rem;
    font-weight: 700;
    padding: 1rem;
}

.tools-container {
    padding: 1rem;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;

    border-radius: 0.5rem;

    transition: 0.15s;

}

.tools-container:hover {
    /*background-color: rgba(30, 41, 59, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);`*/

}

.tools-container-tool {
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

.tools-container-tool[data-state=not-hovered] {
    opacity: 0.5;
}

.tools-container-tool div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(113, 123, 136, 0.19);

    opacity: 0.6;

    transition: 0.15s;
    border-radius: 0.5rem;
    border: 2px rgba(255, 255, 255, 0.2) solid;
}

.tools-container-tool div:hover {
    filter: brightness(1) grayscale(0);
    opacity: 1;
    border: 2px rgba(255, 255, 255, 0.4) solid;
}

.tools-container-tool div img {
    stroke-width: 0px;
    object-fit: scale-down;    
}

.tools-container-tool div img[data-name=Git] {
    width: 65%;
}

.tools-container-tool div img[data-name=GitHub] {
    width: 65%;
}

.tools-container-tool div img[data-name=Heroku] {
    width: 85%;
    filter: brightness(2.5);
}

.tools-container-tool div img[data-name=Firebase] {
    width: 65%;
}

.tools-container-tool div img[data-name=Roblox] {
    width: 65%;
}

.tools-container-tool div img[data-name=Supabase] {
    width: 65%;
}

.tools-container-tool div img[data-name=Webpack] {
    width: 65%;
}

.tools-container-tool div img[data-name=Glitch] {
    width: 75%;
}

.tools-container-tool div img[data-name=Replit] {
    width: 70%;
}
</style>