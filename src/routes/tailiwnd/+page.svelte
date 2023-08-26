<h1 class="text-teal-500">Tailwind is working</h1>
<h1 class="text-teal-500 red">Override works</h1>
<h1 class="myTeal">Inline reuse of existing classes works </h1>

<style lang="scss">
	.red {
		color: tomato;
	}

  .myTeal {
    @apply text-teal-500;
  }
</style>
