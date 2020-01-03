<template>
  <div>
	  <LangSelect />
	  <Questions />
  </div>
</template>

<script>
import Questions from '../components/Questions';
import LangSelect from '../components/LangSelect';

export default {
  name: 'home',
  components: {
	  Questions,
	  LangSelect
  }
}
</script>
