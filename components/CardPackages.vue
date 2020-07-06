<template>
  <base-card class="package-card flex flex-col items-center justify-center">
    <ul class="card-tabs text-center font-manrope grid w-full font-bold">
      <li class="cursor-pointer">Standard</li>
      <li class="cursor-pointer is-active">Advanced</li>
      <li class="cursor-pointer">Premium</li>
    </ul>

    <div class="tab-content w-full">
      <div
        class="tab-title w-full font-manrope flex items-center justify-between"
      >
        <h3 class="font-bold text-dark-secondary">
          Advanced
        </h3>
        <strong class="text-green-primary">$18.00</strong>
      </div>

      <div
        class="tab-description w-full flex flex-col items-start justify-center text-base"
      >
        <div
          class="description-head text-base w-full flex flex-col items-start justify-center text-left text-dark-secondary"
        >
          <h4>
            Unlimited Revisions
          </h4>
          <h4>
            10 Days Delivery Revisions
          </h4>
        </div>

        <span class="font-semibold text-green-primary important-feature">
          Premium - Custom Characters
        </span>
        <p class="text-grey-primary">
          Up to 90 second video. 225 word script. VO. With the unlimited
          revisions. HD. Commercial rights
        </p>
        <ul class="custom-list-style text-grey-primary text-base">
          <li>Voice-Over Sync</li>
          <li>Voice-Over Recording</li>
          <li>90-Second Running Time</li>
          <li>Full HD (1080p)</li>
          <li>Background Music</li>
        </ul>
      </div>

      <div class="card-action flex items-center justify-between w-full">
        <base-button
          class="flat-btn underline font-bold text-base"
          color="white"
          rounded
        >
          Compare Package
        </base-button>
        <base-button class="font-extrabold text-base" color="danger" rounded>
          Choose This
        </base-button>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'CardProfile',

  components: {
    BaseCard,
    BaseButton,
  },
};
</script>

<style>
.package-card {
  max-width: 360px;
  padding: 0;
}
.package-card .card-tabs {
  grid-template-columns: repeat(3, 1fr);
}
.package-card .card-tabs li {
  padding: 23px 20px;
  color: theme('colors.grey.primary');
  border-bottom: 1px solid #dfe3e3;
  transition: all 0.3s;
}
.package-card .card-tabs li.is-active {
  color: theme('colors.red.primary');
  border-bottom: 2px solid theme('colors.red.primary');
}
.package-card .separator {
  height: 1px;
  background-color: #e9eaea;
  margin-top: 32px;
  margin-bottom: 35px;
}
.package-card .tab-content .tab-title {
  padding: 30px 25px 25px 25px;
  font-size: 20px;
  border-bottom: 1px solid #dfe3e3;
}
.package-card .tab-content .tab-description {
  padding: 30px 25px 50px 25px;
}
.package-card .tab-content .tab-description .description-head h4 {
  margin-bottom: 15px;
}
.package-card .tab-content .tab-description .description-head {
  margin-bottom: 15px;
}
.package-card .tab-content .tab-description .important-feature {
  margin-bottom: 20px;
}
.package-card .tab-content .tab-description p {
  margin-bottom: 40px;
}
.package-card .tab-content .tab-description .custom-list-style li {
  position: relative;
  font-weight: 400; /*regular*/
}
.package-card
  .tab-content
  .tab-description
  .custom-list-style
  li:not(:last-child) {
  margin-bottom: 15px;
}
.package-card .tab-content .tab-description .custom-list-style li::before {
  content: url('/images/svg/check-filled.svg');
  margin-right: 12px;
  position: relative;
  top: 2px;
}
.package-card .card-action {
  padding: 25px;
}
.package-card .flat-btn {
  padding: 13px 0px;
}
.package-card .base-button--danger {
  box-shadow: 4px 0 21px rgba(237, 133, 144, 0.26);
  padding-left: 20px;
  padding-right: 20px;
}
</style>
