<template>
  <div class="flex required-time items-center">
    <base-card
      v-for="(card, key) in headings"
      :key="key"
      class="card flex-col flex items-start"
    >
      <base-card class="icon">
        <base-icon name="required-time" />
      </base-card>
      <h4 class="c-heading">
        {{ card.heading }}
      </h4>
    </base-card>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseIcon from '@/components/BaseComponents/BaseIcon';
export default {
  name: 'RequiredTime',
  components: {
    BaseCard,
    BaseIcon,
  },
  data() {
    return {
      headings: [
        {
          heading: 'More than 30hr/week',
        },
        {
          heading: 'Less than 30hr/week',
        },
        {
          heading: "I don't know yet",
        },
      ],
    };
  },
};
</script>

<style>
.required-time .card {
  height: 207px;
  width: 263px;
  margin-right: 30px;
}
.required-time .icon {
  height: 61px;
  width: 69px;
  padding: 0;
  background-color: #ffffff;
  position: relative;
}
.required-time svg {
  width: 27px;
  height: 27px;
}
.required-time .icon::after {
  content: '+';
  font-size: 20px;
  font-weight: 700; /*bold*/
  color: #b9bfca;
  position: absolute;
  top: 3.5px;
  right: 20%;
}
.required-time .c-heading {
  font-size: 18px;
  margin-top: 36px;
  font-weight: 600; /*medium*/
}
</style>
