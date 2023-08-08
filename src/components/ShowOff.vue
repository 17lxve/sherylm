<script>
import LightShow from './LightShow.vue';
export default {
    components : {
    LightShow
}
}
</script>
<template>
    <div>
    <LightShow :link="'todo.jpg'" :name="'John'"/>
    <LightShow :link="'todo.jpg'" :name="'Elvis'"/>
    <LightShow :link="'todo.jpg'" :name="'Presley'"/>
    <LightShow :link="'todo.jpg'" :name="'Kadher'"/>
    </div>
    <button>Voir nos collections</button>
</template>