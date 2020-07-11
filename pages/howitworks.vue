<template>
  <div class="how-it-works-page flex flex-col items-center justify-center">
    <how-it-works-banner />
    <how-it-works-section />
    <how-it-works-reason />
    <how-it-works-newsletter class="w-full" />
    <how-it-works-questions class="w-full" />
    <how-it-works-faq class="w-full" />
    <how-it-works-join class="w-full" />
  </div>
</template>

<script>
import HowItWorksBanner from '@/components/HowItWork/HowItWorksBanner';
import HowItWorksSection from '@/components/Home/HowItWorksSection';
import HowItWorksReason from '@/components/Home/Reason';
import HowItWorksNewsletter from '@/components/Home/Newsletter';
import HowItWorksQuestions from '@/components/HowItWork/Questions';
import HowItWorksFaq from '@/components/HowItWork/FaqContent';
import HowItWorksJoin from '@/components/Home/JoinUs';

export default {
  name: 'HowItWorks',

  components: {
    HowItWorksBanner,
    HowItWorksSection,
    HowItWorksReason,
    HowItWorksNewsletter,
    HowItWorksQuestions,
    HowItWorksFaq,
    HowItWorksJoin,
  },
};
</script>

<style>
.how-it-works-page .how-it-works-banner {
  margin-bottom: 140px;
}
.how-it-works-page .how-it-works .dot-overlay {
  display: none;
}
.how-it-works-page .questions-wrapper {
  margin-top: 110px;
}
.how-it-works-page .faq-content-wrapper {
  margin-bottom: 65px;
}
</style>
