<template>
    <ul v-if="phrasesItems.length > 0" class="phrasesList">
        <PhrasesItem v-show="phraseItem.category == categoryName"
            v-for="(phraseItem, index ) in phrasesItems" 
            :key="phraseItem.id"
            :index=index
            :singleItem="phraseItem"
            @edit-phrase="toggleEditPhrase"
            @update-polish-phrase="updatePolishPhrase"
            @update-english-phrase="updateEnglishPhrase"
            @delete-phrase="deletePhrase"
        />
    </ul>
    <p v-else class="text-center mt-5">No results</p>
</template>

<script setup>
    import PhrasesItem from '../components/PhrasesItem.vue'

    const props = defineProps({
        phrasesItems: {
            type: Object,
            required:true,
        },
        categoryName: {
            type:String,
            required:true,
        }
    })

    const emit = defineEmits(['deletePhraseFromList']);

    const toggleEditPhrase = (index) => {
        props.phrasesItems[index].isEditing = !props.phrasesItems[index].isEditing
    }

    const updatePolishPhrase = (newValue, index) => {
        props.phrasesItems[index].polish = newValue;
    }

    const updateEnglishPhrase = (newValue, index) => {
        props.phrasesItems[index].english = newValue;
    }

    const deletePhrase = (phraseId) => {
        emit('deletePhraseFromList', phraseId);
    }

</script>

<style lang="scss" scoped>
    .phrasesList {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 3rem;
        display: grid;
        margin-top: 3rem;
        margin-bottom: 5rem;

        @media only screen and (max-width: 400px) {
            & {
                grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
            }
        }
    }
</style>