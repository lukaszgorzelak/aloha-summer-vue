<script setup>
    import { ref, watch } from "vue";
    import { uid } from "uid";
    import PhrasesList from "../components/PhrasesList.vue"
    import { useToast } from 'vue-toastification'

    const props = defineProps({
        categoryName: {
            type: String,
            required:true,
        },
        newPolish: {
            type: String,
            required:true,
            default:'test',
        },
        newEnglish: {
            type: String,
            required:true,
            default:'test',
        },
    })

    const toast = useToast();
    const emit = defineEmits(['createnew-phrase']);

    const phrases = ref([
        { 
            id:uid(),
            polish:"Czy chciałbyś miejsce przy przejściu czy przy oknie?",
            english:"Would you like an aisle or a window seat?",
            isEditing: false,
            category: "airport"
        },
        { 
            id:uid(),
            polish:"Poproszę kartę pokładową.",
            english:"Can I have your boarding pass, please?",
            isEditing: false,
            category: "airport"
        },
        { 
            id:uid(),
            polish:"To jest zbyt ciężkie na bagaż podręczny.",
            english:"This is too heavy for the hand luggage.",
            isEditing: false,
            category: "airport"
        },
        { 
            id:uid(),
            polish:"Samolot do Warszawy jest opóźniony o 45 minut.",
            english:"The flight to Warsaw is delayed by 45 minutes.",
            isEditing: false,
            category: "airport"
        },
        { 
            id:uid(),
            polish:"Gdzie jest bramka numer 15?",
            english:"Where is the gate number 15?",
            isEditing: false,
            category: "airport"
        },
        { 
            id:uid(),
            polish:"Możesz mi pokazać na mapie?",
            english:"Can you show me on the map?",
            isEditing: false,
            category: "road"
        },
        { 
            id:uid(),
            polish:"Czy może mi Pani/Pan powiedzieć jak dotrzeć do …",
            english:"Can you tell me how to get to … ",
            isEditing: false,
            category: "road"
        },
        { 
            id:uid(),
            polish:"Ile czasu zajmie dotarcie w to miejsce?",
            english:"How much time does it take to get there?",
            isEditing: false,
            category: "road"
        },
        { 
            id:uid(),
            polish:"Czy to jest daleko stąd?",
            english:"Is it far from here?",
            isEditing: false,
            category: "road"
        },
        { 
            id:uid(),
            polish:"Którędy na dworzec kolejowy?",
            english:"Which way to the train station?",
            isEditing: false,
            category: "road"
        },
        { 
            id:uid(),
            polish:"Która jest godzina?",
            english:"What time is it?",
            isEditing: false,
            category: "time"
        },
        { 
            id:uid(),
            polish:"Mój zegarek chyba się spieszy.",
            english:"It seems like my watch gains time.",
            isEditing: false,
            category: "time"
        },
        { 
            id:uid(),
            polish:"Lepiej późno niż wcale",
            english:"Better late than never",
            isEditing: false,
            category: "time"
        },
        { 
            id:uid(),
            polish:"Zwykle wstaję o 7 rano.",
            english:"I usually wake up at 7:00 a.m.",
            isEditing: false,
            category: "time"
        },
        { 
            id:uid(),
            polish:"Odłożyć coś na czarną godzinę",
            english:"To save something for a rainy day.",
            isEditing: false,
            category: "time"
        },
        { 
            id:uid(),
            polish:"Ile wynosi czynsz?",
            english:"How much is the rent?",
            isEditing: false,
            category: "rent"
        },
        { 
            id:uid(),
            polish:"Szukam mieszkania w Warszawie.",
            english:"I’m looking for an apartment in Warsaw.",
            isEditing: false,
            category: "rent"
        },
        { 
            id:uid(),
            polish:"Jakie są dodatkowe opłaty?",
            english:"What are the additional costs?",
            isEditing: false,
            category: "rent"
        },
        { 
            id:uid(),
            polish:"Gdzie mogę wypożyczyć samochód?",
            english:"Where can I rent a car?",
            isEditing: false,
            category: "rent"
        },
        { 
            id:uid(),
            polish:"Gdzie chciałby pan odebrać samochód?",
            english:"Where would you like to pick up your car from?",
            isEditing: false,
            category: "rent"
        },
        { 
            id:uid(),
            polish:"Jakie bilety są dostępne?",
            english:"What tickets do you have available?",
            isEditing: false,
            category: "ticket"
        },
        { 
            id:uid(),
            polish:"Poproszę dwa bilety.",
            english:"I would like two tickets, please",
            isEditing: false,
            category: "ticket"
        },
        { 
            id:uid(),
            polish:"Ile kosztują bilety?",
            english:"How much are the tickets?",
            isEditing: false,
            category: "ticket"
        },
        { 
            id:uid(),
            polish:"Czy jest zniżka dla …?",
            english:"Is there a discount for …?",
            isEditing: false,
            category: "ticket"
        },
        { 
            id:uid(),
            polish:"Gdzie chciałby pan siedzieć?",
            english:"Where would you like to sit?",
            isEditing: false,
            category: "ticket"
        },

    ]);

    const setPhraseListToLocalStorage = () => {
        localStorage.setItem("phraseList", JSON.stringify(phrases.value));
    };
    
    const createNewPhraseToList = () => {
        phrases.value.push({
            id: uid(),
            polish: props.newPolish,
            english: props.newEnglish,
            isEditing: null,
            category: props.categoryName
        });

        toast.success('Phrase added');
    };

    watch(
    () => [props.newPolish, props.newEnglish],
    () => {
        createNewPhraseToList();
    },
    { deep: true }
);

    const checkCategory = (newCategoryName) => {
        phrases.value = JSON.parse(localStorage.getItem("phraseList")).filter(
            (phrase) => phrase.category === newCategoryName
        );
    };

    const deletePhraseFromList = (phraseId) => {
        phrases.value = phrases.value.filter((phrase) => phrase.id !== phraseId);
    };

    watch(
        () => props.categoryName,
        (newCategoryName) => {
            checkCategory(newCategoryName);
        },
        { deep: true }
        
    );

    watch(
        phrases,
        () => {
            setPhraseListToLocalStorage();
        },
        { deep: true }
    );

    const fetchTodoList = () => {
        const savedPhraseList = JSON.parse(localStorage.getItem("phraseList"));
        if (savedPhraseList) {
            phrases.value = savedPhraseList;
        }
    };

    fetchTodoList();

</script>
<template>
    <PhrasesList 
        :phrasesItems="phrases"
        :categoryName="props.categoryName"
        @deletePhraseFromList="deletePhraseFromList"
    />
</template>

<style lang="scss" scoped>

</style>