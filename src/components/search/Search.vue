<template>
    <form id="searchForm">
        <div>
            <span>State</span>
            <select 
            v-if="this.componentData[0].view.state"
            name="stateValue"
            v-model="stateValue"
            @change="test1"
            >
            <option
            v-for="(stateData, index) in this.componentData[1].state"
            :key="index"
            :value="stateData.value"
            >
            {{stateData.title}}
            </option>
            </select>
            <span>Choice</span>
            <select
            v-if="this.componentData[0].view.choice"
            name="choiceValue"
            v-model="choiceValue"
            @change="test1"
            >
            <option
            v-for="(stateData, index) in this.componentData[1].choice"
            :key="index"
            :value="stateData.value"
            >
            {{stateData.title}}
            </option>
            </select>
            <input 
            placeholder="Search Value"
            name="searchValue"
            v-model="searchValue"
            @change="test1"
            />
            <button 
            type="button"
            @click="searchEvent"
            >
            검색
            </button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        componentData: {
            type: Array
        }
    },
    data() {
        return {
            stateValue: 't1',
            choiceValue: 't4',
            searchValue: ''
        }
    },
    methods: {
        test() {
            console.log(this.componentData[0].view.state);
            console.log(this.componentData[1]);
            console.log(this.stateValue);
            console.log(this.choiceValue);
            console.log(this.searchValue);
        },
        test1() {
            console.log(this.stateValue);
            console.log(this.choiceValue);
            console.log(this.searchValue);
        },
        searchEvent() {
            console.log(this);
            console.log(this.$el);
            console.log(this.$el.length);
        }
    },
    computed: {},
    created() {
        this.test();
  }
}
</script>
