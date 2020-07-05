<template>
  <section class="companies flex flex-col items-center justify-center">
    <h2 class="font-manrope text-dark-secondary capitalize">
      As <strong class="font-extrabold">Seen On</strong>
    </h2>

    <div class="company-list flex items-center justify-between">
      <img
        v-for="(company, key) in companies"
        :key="key"
        :src="company.url"
        :alt="company.name"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Companies',

  data() {
    return {
      companies: [
        {
          name: 'Chesire Country',
          url: '/images/png/chesire.png',
        },
        {
          name: 'Alona Tropicana',
          url: '/images/png/alona-tropicana.png',
        },
        {
          name: 'Circle',
          url: '/images/png/circle-company.png',
        },
        {
          name: 'Divami',
          url: '/images/png/divami-company.png',
        },
      ],
    };
  },
};
</script>

<style>
.companies {
  padding-bottom: 90px;
}
.companies h2 {
  font-size: 45px;
  margin-bottom: 45px;
}
.companies .company-list {
  column-gap: 130px;
  max-width: 1140px;
}
</style>
