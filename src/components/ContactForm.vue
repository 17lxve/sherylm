<template>
    <div class="container">
        <h2>Formulaire de prise de rendez-vous</h2>
        <form>
            <div class="form-element">
                <label>Nom</label>
                <input class="custom-input" type="text" v-model="name">
            </div>
            <div class="form-element">
                <label>Prénoms</label>
                <input class="custom-input" type="text" v-model="surname">
            </div>
            <div class="form-element">
                <label>Numéro de Téléphone</label>
                <input class="custom-input" type="text" v-model="phone">
            </div>
            <div class="form-element">
                <label>Jour du rendez-vous</label>
                <input class="custom-input" type="date" v-model="meetday">
            </div>
            <div class="form-element">
                <label>Heure du rendez-vous</label>
                <input class="custom-input" type="time" v-model="meet_time">
            </div>
            <div class="form-element">
                <button class="btn">Envoyer</button>
                <!-- <button>Envoyer</button> -->
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:      "",
                surname:   "",
                phone:     "",
                meetday:   "",
                meet_time: ""
            }
        },
        computed:{
            name_err(){
                // return this.$v.name.$dirty
                return Date.now()
            }
        }
    }
</script>

<style scoped>
/*Classes*/

.container{
    display: flex;
    flex-direction: column;
    gap: 1vh;
    align-items: center;
}
form{
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width:70%;
    color: black;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 0;
}
.form-element{
    display: flex;
    flex-direction: column;
    gap: 1vw;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* margin-left: -20% */
}.custom-input{
    width: 100%;
    padding: 1%;
    margin-bottom: 1%;
    text-align: center;
    border: lightgray 1px solid;
    border-radius: 1rem;
}.form-element label{
    display: block;
    text-align: center;
}.container h2{
    text-decoration:red underline;
    font-family: Outfit;
}.btn{
    /* background-color: burlywood; */
    background-color: brown;
    font-family: Inika;
    font-size: large;
    font-weight: 600;
    font-style: oblique;
    text-shadow: 1px 1px brown;
    /* text-shadow: -5px -3px whitesmoke; */
    color: black;
}
</style>