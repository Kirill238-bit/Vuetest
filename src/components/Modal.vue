<template>
<div class="modal" v-if="show===true" @click="hideModal">
    <div @click.stop class="modal_content">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default{
    props:{
        show:{
            type:Boolean,
            default:false,
        }
    },
    methods:{
        hideModal(){
            this.$emit('update:show', false)
        }
    }
}
</script>

<style>
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .modal_content{
            padding:20px;
            max-width: 500px;
            background-color: white;
            border-radius: 4px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
</style>