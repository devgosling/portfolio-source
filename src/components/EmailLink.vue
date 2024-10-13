<template>
    <div class="email-link">
        <a href="mailto:devgosling@googlemail.com">devgosling@googlemail.com</a>
    </div>
</template>
<script>
</script>
<style lang="scss">
.email-link {
    position: fixed;
    font-size: 1rem;
    right: calc(0vw - 3rem);
    bottom: 0;
    rotate: 90deg;
    transform: translateX(-80%);
    transition: 0.15s;
}

.email-link a {
    padding: 0.5rem;
    color: var(--primarytextcolor);
}

.email-link:hover {
    transform: translateX(calc(-80% - 2rem));    
}

.email-link::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(calc(100% + 0.5rem));

    width: 10rem;
    height: 1px;
    background-color: rgb(55, 218, 255);
}

@media screen and (max-width: 1200px) {
  /*Tablets*/
  .email-link {
    display: none;
  }
}
</style>