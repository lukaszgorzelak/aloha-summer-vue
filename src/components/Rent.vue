<template>
    <Heading>
        <slot>Rent Phrases</slot>
    </Heading>
    <AddButton :classBtn="'btn--rent'" @create-phrase="createNewPhrase"/>
    <Phrases :categoryName="'rent'" :newPolish="newPolish" :newEnglish="newEnglish"/>
</template>

<script setup>
    import Heading from '../components/Heading.vue'
    import Phrases from '../components/Phrases.vue'
    import AddButton from '../components/AddButton.vue'
    import { ref } from 'vue';

    let newPolish = ref("")
    let newEnglish = ref("")

    const createNewPhrase = (newPhrase) => {
        newPolish.value = newPhrase.polish;
        newEnglish.value = newPhrase.english;
    }
</script>

<style lang="scss" scoped>
  
</style>