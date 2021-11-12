<template>

<Carousel :value="prods" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
	<template #header>
		<h2>Custom Header</h2>
	</template>
	<template #item="prods">
		<img class="image" src="./../assets/luffy.jpg" :alt="prods.data.id">
	</template>
	<template #footer>
		<h2>Custom Footer</h2>
	</template>
</Carousel>

</template>

<script>
export default {
  data: function() {
    return {
      prods: [
        {id: 0, img: 'luffy'},
        {id: 1, img: 'luffy'},
        {id: 2, img: 'luffy'},
        {id: 3, img: 'luffy'},
      ],
      responsiveOptions: [
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '600px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '480px',
				numVisible: 1,
				numScroll: 1
			}
		]
    }
  }
};
</script>

<style scoped>
.image {
  height: 260px;
}
</style>