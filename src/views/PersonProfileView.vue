<template>
    <div class="container bg-body h-100">
        <div v-if="person">
            <p>{{ person }}</p>
            <div>
                <img :src="person?.photo" :alt="'Photo of ' + person?.name" />
            </div>
            <div>
                <p>
                    <b>Nome: </b>
                    <br />{{ person?.name }}
                </p>
                <p>
                    <b>Email: </b>
                    <br />{{ person?.email }}
                </p>
            </div>

            <div>
                <button type="button" @click="openFormEdit">
                    Editar
                </button>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { personService } from "@/core/service/person.service";
import { Person } from "@/core/domain/Person";

const router = useRouter();
const person = ref<Person | undefined>();

onMounted(() => {
    const idRouter = router.currentRoute.value.params.id.toString();
    personService.get(idRouter).then(res => {
        if (res) {
            person.value = res;
        }
    });
});

function openFormEdit() {
  if (person.value) {
    router.push(`/person-edit/${person.value.id}`);
  }
}
</script>

<style scoped></style>
