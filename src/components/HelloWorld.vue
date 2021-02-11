<template>
    <div>{{ $store.state.count }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class HelloWorld extends Vue {}
</script>

<style lang="scss" scoped></style>
