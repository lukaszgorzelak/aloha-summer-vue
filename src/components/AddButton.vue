<template>
    <div class="flex justify-end">
        <span class="addPhrase" 
            :class="classBtn"
            @click="addPhraseModal = true"
        >
            Add Phrase
        </span>
    </div>

    <MDBModal
        id="addPhraseModal"
        tabindex="-1"
        labelledby="addPhraseModalTitle"
        v-model="addPhraseModal"
        size="lg"
        >
        <MDBModalHeader>
            <MDBModalTitle id="addPhraseModalTitle"> 
                <p>Add Phrase</p>
            </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <form>
                <MDBRow tag="form" class="g-3 needs-validation" novalidate @submit.prevent="checkForm">
                    <MDBCol>
                        <MDBInput
                        type="text"
                        label="Polish"
                        id="form3Polish"
                        v-model="inputPolish"
                        invalidFeedback="Please provide this field."
                        validFeedback="Looks good!"
                        required
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                        type="text"
                        label="English"
                        id="form3English"
                        v-model="inputEnglish"
                        invalidFeedback="Please provide this field."
                        validFeedback="Looks good!"
                        required
                        />
                    </MDBCol>
                    <MDBCol col="12">
                    <MDBBtn class="float-end ml-3" color="primary" type="submit" @click="handleCreatePhrase"> Save changes </MDBBtn>
                    <MDBBtn class="float-end" color="secondary" @click="addPhraseModal = false"> Close </MDBBtn>
                </MDBCol>
            </MDBRow>
            </form>

        </MDBModalBody>
    </MDBModal>
</template>

<script setup>

    import { MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBBtn, MDBRow, MDBCol, MDBInput } from 'mdb-vue-ui-kit';
    import { ref, defineEmits } from 'vue';

    const props = defineProps({
        classBtn: {
            type: String,
            required:true,
        },
    })

    const addPhraseModal = ref(false);
    const inputPolish = ref("");
    const inputEnglish = ref("");

    const emit = defineEmits(["create-phrase"]);

    const handleCreatePhrase = () => {
        if(inputPolish.value !== "" && inputEnglish.value !== "" ) {
            emit("create-phrase", { polish: inputPolish.value, english: inputEnglish.value });
            inputPolish.value = "";
            inputEnglish.value = "";
            addPhraseModal.value = false;
        }
    }

    const checkForm = e => {
        e.target.classList.add("was-validated");
    };

</script>

<style lang="scss" scoped>
    .addPhrase {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        width: 10rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 500;
    }

    #addPhraseModalTitle {
        text-align: center;
        width: 100%;
        font-weight: 500;
    }
   
   .btn-primary {
        background-color: #3b71ca;
   }
   .btn-secondary {
        background-color: #e3ebf7;
   }
   .btn-secondary:hover {
        background-color: #d8dfeb;
   }
</style>