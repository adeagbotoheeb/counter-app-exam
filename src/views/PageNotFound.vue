<template>
    <div>
        <h1> Page Not Found</h1>
        <button @click = "goBackHome">Back to Home</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
    export default {
        name: 'PageNotFound',
        setup() {
            const router = useRouter();
            function goBackHome() {
                router.push('/');
            };

            return {
                goBackHome,
            };
        },

    }
</script>

<style>

</style>