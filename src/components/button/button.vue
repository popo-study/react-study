<template>
    <button
    type="button"
    :class="className"
    @click="$emit('btn-click', resData)"
    >
        <i>{{buttonName}}</i>
    </button>
</template>

<script>
export default {
    props: {
        className: {
          type: String,
          default: 'normal-btn'  
        },
        buttonName: {
        type: String,
        default: ''
        }
    },
    data: function() {
        return {
            resData: 'private-btn'
        }
    },
    computed: {}
}
</script>

<style>
.normal-btn {
    background-color: red;
}
.private-btn {
    background-color: white;
}
</style>