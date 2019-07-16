<template>
    <table
    class="v-table-ftable"
    cellspacing="0"
    cellpadding="0"
    border="0"
    >
        <thead>
            <th>
                <td
                v-for="(head, index) in headList"
                :key="index"
                >
                {{head.column}}
                </td>
            </th>
        </thead>
        <tbody>
            <tr
            v-for="(body, index) in bodyList"
            :key="index"
            >
                <td>{{body.no}}</td>
                <td>{{body.state}}</td>
                <td>{{body.title}}</td>
                <td>{{body.writer}}</td>
                <td>{{body.date}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: [

    ],
    data() {
        return {
            headList: [
                { column: 'No' },
                { column: 'State' },
                { column: 'Title' },
                { column: 'Writer' },
                { column: 'Date' }
            ],
            bodyList: [
                { no: 1, state: '사용', title: 'Vue Router Lib', writer: 'Kim Tae Woong', date: '2019-07-12'},
                { no: 1, state: '사용', title: 'Vue Router Lib', writer: 'Kim Tae Woong', date: '2019-07-12'},
                { no: 1, state: '사용', title: 'Vue Router Lib', writer: 'Kim Tae Woong', date: '2019-07-12'},
                { no: 1, state: '사용', title: 'Vue Router Lib', writer: 'Kim Tae Woong', date: '2019-07-12'},
                { no: 1, state: '사용', title: 'Vue Router Lib', writer: 'Kim Tae Woong', date: '2019-07-12'},
                { no: 1, state: '사용', title: 'Vue Router Lib', writer: 'Kim Tae Woong', date: '2019-07-12'},
                { no: 1, state: '사용', title: 'Vue Router Lib', writer: 'Kim Tae Woong', date: '2019-07-12'},
                { no: 1, state: '사용', title: 'Vue Router Lib', writer: 'Kim Tae Woong', date: '2019-07-12'},
                { no: 1, state: '사용', title: 'Vue Router Lib', writer: 'Kim Tae Woong', date: '2019-07-12'}
            ]
        }
    },
    methods: {}
}
</script>

