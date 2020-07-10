<template>
  <section
    class="flex faq-content-wrapper flex-col items-center font-manrope relative"
  >
    <div class="dot-overlay"></div>
    <h1 class="font-manrope text-dark-secondary capitalize">
      Frequently <strong class="font-extrabold">Asked Questions</strong>
    </h1>
    <base-quest label="What projects can I do here on Micro-Jobs?">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        asperiores deleniti at quae! Amet labore commodi iste ullam nobis eum
        quibusdam omnis id illum fugit, aliquam asperiores assumenda veritatis
        error!
      </p>
    </base-quest>
    <base-quest label="How do I find the right freelancer?">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione
        molestiae possimus aliquid temporibus repudiandae asperiores quod illum
        praesentium voluptas saepe doloribus eligendi veniam, aspernatur est
        deserunt id cupiditate voluptatem.
      </p>
    </base-quest>
    <base-quest label="How safe I am working here?">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione
        molestiae possimus aliquid temporibus repudiandae asperiores quod illum
        praesentium voluptas saepe doloribus eligendi veniam, aspernatur est
        deserunt id cupiditate voluptatem.
      </p>
    </base-quest>
    <base-quest label="What if I’m not happy with the results?">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione
        molestiae possimus aliquid temporibus repudiandae asperiores quod illum
        praesentium voluptas saepe doloribus eligendi veniam, aspernatur est
        deserunt id cupiditate voluptatem.
      </p>
    </base-quest>
    <base-quest label="How can I ensure that my IP is safe?">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione
        molestiae possimus aliquid temporibus repudiandae asperiores quod illum
        praesentium voluptas saepe doloribus eligendi veniam, aspernatur est
        deserunt id cupiditate voluptatem.
      </p>
    </base-quest>
    <base-quest
      label="Who owns the legal rights to work product developed by a freelancer engaged on Micro-Jobs?"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione
        molestiae possimus aliquid temporibus repudiandae asperiores quod illum
        praesentium voluptas saepe doloribus eligendi veniam, aspernatur est
        deserunt id cupiditate voluptatem.
      </p>
    </base-quest>
  </section>
</template>

<script>
import BaseQuest from '@/components/BaseComponents/BaseQuest';

export default {
  name: 'FaqContent',
  components: {
    BaseQuest,
  },
};
</script>

<style>
.faq-content-wrapper {
  background-color: #f8f8f8;
  padding: 92px 0 76px;
}
.faq-content-wrapper h1 {
  font-size: 45px;
  margin-bottom: 70px;
}
.faq-content-wrapper .dot-overlay {
  background-image: radial-gradient(#c6e1dc 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  left: 0;
  top: -100px;
  width: 150px;
  height: 210px;
}
</style>
