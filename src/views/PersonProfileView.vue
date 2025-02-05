<template>
    <div></div>
</template>

<script lang="ts">
import { personService } from '@/core/service/person.service';
import router from '@/router';
import { onMounted,ref } from 'vue';
import { Person } from '@/core/domain/Person';


const person = ref<Person | undefined>();

const id = router.currentRoute.value.params.id;
onMounted(() => {
    const idRouter = router.currentRoute.value.params.id.toString();
    console.log(">>>",idRouter);
    personService.get(idRouter).then(res => {
        if(res.exists()){
            person.value = {...res.data} as Person;
        }
    });
});

</script>

<style scoped></style>
