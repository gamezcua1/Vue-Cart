<template>
   <tr>
    <th scope="row"><img :src="item.item.photoURL" width="50px"/></th>
    <td>{{ item.item.name }}</td>
    <td>{{ item.item.quantity }}</td>
    <td>{{ item.item.cost }}</td>
  </tr>
</template>

<script>
export default {
  props:{
    item: Object
  }
}
</script>

<style>

</style>
