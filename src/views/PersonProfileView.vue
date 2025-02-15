<template>
  <section class="profile-edit">

    <div class="profile-user">
      <h1>
        Perfil do usuário
      </h1>
      <div>
        <img :src="person?.photo" alt="" />
      </div>
      <div class="profile-text">
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
        <button class="btn" type="button" @click="$router.push(`/person-edit/${person.id}`)">
          Editar
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import router from "@/router";
import { personService } from "@/core/service/person.service";
import { Person } from "@/core/domain/Person";

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
  router.push(`/person-edit/${person.value.id}`)
}
</script>

<style scoped>
@import "@/assets/css/profile.css";
</style>
