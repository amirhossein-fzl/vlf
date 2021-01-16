<template>
    <div class="inp">
        <label :for="id" v-text="label"></label>
        <input :type="type" v-if="!textarea" :class="['input', {'invalid-value': isInvalid}]" :id="id" :placeholder="placeholder" :value="modelValue" @input="handleModel">
        <textarea :id="id" v-else :class="{'invalid-value': isInvalid}" :rows="tarops.rows" :value="modelValue" @input="handleModel"></textarea>
    </div>
</template>

<script>
    export default {
        name: "Inp",
        emits: ['update:modelValue'],
        data() {
            return {
                isInvalid: false
            };
        },
        methods: {
            validate() {},
            handleModel(e) {
                this.$emit('update:modelValue', e.target.value);
            },
        },
        props: {
            type: {
                default: "text"
            },
            erroeMessage: {
                type: String,
            },
            placeholder: {
                type: String,
                default: undefined
            },
            id: {
                required: true,
                type: String
            },
            label: {
                required: true,
                type: String
            },
            textarea: {
                default: false
            },
            tarops: {
                required: false,
                type: Object
            },
            regex: {
                type: RegExp,
                required: false
            },
            modelValue: {
                type: String,
                default: undefined
            },
        }
    };
</script>