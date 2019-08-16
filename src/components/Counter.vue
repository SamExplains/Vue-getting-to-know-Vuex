<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex';
    export default {
        methods: {
            //Using mutations example
            // ...mapMutations([
            //    'increment',
            //    'decrement'
            // ]),
            ...mapActions([
               'increment',
               'decrement'
            ]),
        }
    }

    //Using asynchronous actions
</script>