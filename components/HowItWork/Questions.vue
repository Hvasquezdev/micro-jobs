<template>
  <section
    class="questions-wrapper font-manrope flex flex-wrap justify-between"
  >
    <!-- 1   -->
    <article class="question flex flex-col items-start">
      <span class="q-number">1</span>
      <h1 class="text-dark-primary font-bold">
        What kind of work are you guys <br />
        offering me?
      </h1>
      <p class="text-base text-grey-darken-2 my-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        reiciendis velit nesciunt accusantium voluptatem, doloribus eveniet
        labore incidunt saepe aut dolore numquam, animi veritatis consectetur
        nihil deserunt sunt magnam culpa.
      </p>
      <ul>
        <li>
          <span class="custom-list-disc"><!-- Custom Disc Style  --></span>
          <p>
            You'll receive competitive bids from talented freelancers within
            minutes
          </p>
        </li>
        <li>
          <span class="custom-list-disc"><!-- Custom Disc Style  --></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </li>
        <li>
          <span class="custom-list-disc"><!-- Custom Disc Style  --></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </article>
    <!-- 2  -->
    <article class="question flex flex-col items-start">
      <span class="q-number">2</span>
      <h1 class="text-dark-primary font-bold">
        How to find the one & right freelancer?
      </h1>
      <p class="text-base text-grey-darken-2 my-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        reiciendis velit nesciunt accusantium voluptatem:
      </p>
      <ul>
        <li>
          <span class="custom-list-disc"><!-- Custom Disc Style  --></span>
          <p>
            Skills, experience, and portafolios
          </p>
        </li>
        <li>
          <span class="custom-list-disc"><!-- Custom Disc Style  --></span>
          <p>
            Client feedback
          </p>
        </li>
        <li>
          <span class="custom-list-disc"><!-- Custom Disc Style  --></span>
          <p>Language and communication skill</p>
        </li>
      </ul>
      <p class="text-base text-grey-darken-2 my-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis
        nobis assumenda placeat, consequuntur molestiae libero culpa quod
        tempora omnis expedita delectus neque laudantium harum ab nisi? Dolore,
        eius et.
      </p>
    </article>
    <!-- 3  -->
    <article class="question flex flex-col items-start">
      <span class="q-number">3</span>
      <h1 class="text-dark-primary font-bold">
        We got to payments. Now what?
      </h1>
      <p class="text-base text-grey-darken-2 my-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        reiciendis velit nesciunt accusantium voluptatem, doloribus eveniet
        labore incidunt saepe aut dolore numquam, animi veritatis consectetur
        nihil deserunt sunt magnam culpa. Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
    </article>
    <!-- 4  -->
    <article class="question flex flex-col items-start">
      <span class="q-number">4</span>
      <h1 class="text-dark-primary font-bold">
        Am i fully protected?
      </h1>
      <p class="text-base text-grey-darken-2 my-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        reiciendis velit nesciunt accusantium voluptatem:
      </p>
      <ul>
        <li>
          <span class="custom-list-disc"><!-- Custom Disc Style  --></span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            culpa, modi sapiente ab earum velit ipsum saepe.
          </p>
        </li>
        <li>
          <span class="custom-list-disc"><!-- Custom Disc Style  --></span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            culpa, modi sapiente ab earum velit ipsum saepe.
          </p>
        </li>
        <li>
          <span class="custom-list-disc"><!-- Custom Disc Style  --></span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            culpa, modi sapiente ab earum velit ipsum saepe.
          </p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style>
.questions-wrapper {
  max-width: 1140px;
}
.questions-wrapper .question {
  margin-bottom: 90px;
  max-width: 492px;
  position: relative;
}
.questions-wrapper .question h1 {
  font-size: 25px;
}
.questions-wrapper .question > p {
  line-height: 1.8;
}
.questions-wrapper .question li {
  position: relative;
  display: flex;
  align-items: flex-start;
  color: theme('colors.grey.darken-2');
}
.questions-wrapper .question li:not(:last-child) {
  margin-bottom: 28px;
}
.questions-wrapper .question li .custom-list-disc {
  content: '';
  display: inline-block;
  background: url('/images/png/green-dot.png') 4px 4px no-repeat;
  min-width: 16.5px;
  min-height: 16.5px;
  border-radius: 99999px;
  border: 1px solid theme('colors.green.primary');
  margin-right: 12px;
  position: relative;
  top: 3px;
}
.questions-wrapper .question .q-number {
  position: absolute;
  display: inline-block;
  font-size: 130px;
  font-weight: 700; /*bold*/
  color: #edf5f4;
  top: -105px;
  left: -40px;
  z-index: -10;
}
</style>
