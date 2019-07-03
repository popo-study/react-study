<template>
    <button
    type="button"
    @click="$emit('btn-click', resData)"
    >
        <i>{{buttonName}}</i>
    </button>
</template>

<script>
export default {
    props: {
        buttonName: {
        type: String,
        default: ''
        }
    },
    data: function() {
        return {
            resData: '내가 컴포넌트 버튼이다.'
        }
    },
    computed: {}
}
</script>