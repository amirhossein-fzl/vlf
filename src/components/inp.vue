<template>
    <div class="inp">
        <label :for="id" v-text="label"></label>
        <div :class="['input-box', {'focused': focus}]">
            <i :class="[icon, 'ml-1']" v-if="iconAlign === 'right'"></i>
            <input :type="type" v-if="!textarea" :class="['input', {'invalid-value': isInvalid}]" :required="required" :id="id" :placeholder="placeholder" :value="modelValue" @input="handleModel" @focus="focus = true" @blur="focus = !focus">
            <textarea :id="id" v-else :class="{'invalid-value': isInvalid}" :required="required" :rows="tarops.rows" :value="modelValue" @input="handleModel"></textarea>
            <i :class="[icon, 'mr-1']" v-if="iconAlign === 'left'"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Inp",
        emits: ['update:modelValue'],
        data() {
            return {
                isInvalid: false,
                focus: false,
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
            required: {
                default: false,
                type: Boolean
            },
            icon: {
                type: String
            },
            iconAlign: {
                type: String,
                default: "right"
            }
        }
    };
</script>