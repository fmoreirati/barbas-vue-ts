<template>
    <div class="profile-card">
        {{ person }}
        <div class="profile-header">

            <div class="profile-photo-background">
                <img :src="person?.photo" alt="photo" class="profile-photo"/>
            </div>

        </div>


        <div class="profile-details">
            <div  class="detail-item">
            
                    <b class="detail-label">Nome: </b>
                    <br />{{ person?.name }}
                
            </div>

            <div class="detail-item">
                <p>
                    <b class="detail-label">Email: </b>
                    <br />{{ person?.email }}
                </p>
            </div>
        </div>

        <div class="button-container">
            <button class="button-edit"
                type="button"
                @click="$router.push(`/person-edit/${person.id}`)"
            >
                Editar
            </button>
        </div>
    </div>
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
.profile-card{
    width: 600px;
    margin:2rem ;
    background-color:gray ;
    padding:2rem ;
    border: 1px solid yellow;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; 
    
}
.profile-header{
 text-align: center;
 margin-bottom:  2rem;
}

.profile-photo-background{
width: 200px;
height: 200px;
overflow: hidden;
margin: 0 auto;
background: aliceblue ;
border: 3px solid yellow;
border-radius: 15px;

}
.profile-photo{
width: 100%;
height: 100%;
object-fit: cover;
    
}
.profile-details{
    width: 100%;
    background: whitesmoke;
     padding: 1rem;
     border-radius: 15px;
     margin-bottom: 1rem;
}
.detail-item{

    padding: 1rem;
    margin-bottom: 1rem;
    background-color: darkgray;
    border-radius: 15px;
}

.detail-label{
    width: 100px;
    

}
.button-edit{
    margin: 0 auto;
    padding: 1rem;
    display: flex;justify-items: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 15px;
    transition: all 0.3s ease;
}
.button-edit:hover{
    transform:translateY(-2px) ;
     background: yellow


}

</style>
