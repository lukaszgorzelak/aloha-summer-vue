<template>
    <div class="phrasesList_wrapper" :class="singleItem.category">
        <div class="phrasesList_wrapper-input">
            <div v-if="singleItem.isEditing">
                <div>
                    <input 
                        type="text" 
                        :value="singleItem.polish"
                        @input="$emit('update-polish-phrase', $event.target.value, index)"
                    >
                    <p class="error" v-if="!singleItem.polish">This field is required.</p>
                </div>
                <div>
                    <input 
                        type="text" 
                        :value="singleItem.english"
                        @input="$emit('update-english-phrase', $event.target.value, index)"
                        class="mt-3"
                    >
                    <p class="error" v-if="!singleItem.english">This field is required.</p>
                </div>
            </div>
            <div v-else>
                <li class="phrasesList_item pb-3">{{ singleItem.polish }}</li>
                <li class="phrasesList_item--english">{{ singleItem.english }}</li>
            </div>
        </div>
        <div class="phrasesList_wrapper-actions">
            <div class="phrasesList_actions">
                <Icon v-if="singleItem.isEditing && singleItem.polish && singleItem.isEditing && singleItem.english"
                    icon="ph:check-circle" 
                    class="icon" 
                    style="color: #38bc48" 
                    width="25"
                    @click="$emit('edit-phrase', index)"
                />
                <Icon v-if="!singleItem.isEditing"
                    icon="ph:pencil-fill" 
                    class="icon" 
                    style="color: #e7d321" 
                    width="25"
                    @click="$emit('edit-phrase', index)"
                />
                <Icon 
                    icon="ph:trash" 
                    class="icon" 
                    style="color: #f95e5e" 
                    width="25"
                    @click="$emit('delete-phrase', singleItem.id)"
                />
            </div>
            <div class="flex justify-end">
                <img :src="`./src/assets/${singleItem.category}.png`">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Icon } from '@iconify/vue';

    const props = defineProps({
        index: {
            type: Number,
            required:true,
        },
        singleItem: {
            type: Object,
            required:true,
        },
    })

    defineEmits(["edit-phrase", "update-polish-phrase", "update-english-phrase", "delete-phrase"]);

</script>

<style lang="scss" scoped>
    .phrasesList_wrapper {
        background-color: white;
        border-radius: 0.625rem;
        padding: 3rem;
        min-height: 17rem;
        align-items: center;
        box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .phrasesList_item {
            font-weight: 600;
            color: hsl(234, 12%, 34%);
            font-size: 1.4rem;
        }

        .phrasesList_item--english {
            color: hsl(229, 6%, 66%);
            font-size: 1rem;
        }

        &:hover {
            .phrasesList_actions {
                transition: 150ms ease-in-out;
                opacity: 1;
            }
        }
    }

    .phrasesList_wrapper-actions {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 1rem;

        .phrasesList_actions {
            display: flex;
            align-items: center;
            opacity: 0;
            cursor: pointer;
        }
    }
    .phrasesList_wrapper-input {
        width: 100%;
        input {
            padding: 6px 12px;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            background-color: #fff;
            background-clip: padding-box;
            border: 2px solid #ced4da;
            appearance: none;
            border-radius: 4px;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            width: 100%;
            &:focus{
                color: #212529;
                background-color: #fff;
                border-color: #86b7fe;
                outline: none;
            }
        }

        .error {
            margin-top: 0.5rem;
            color: red;
        }
    }

    img {
        width: 10rem;
    }
</style>