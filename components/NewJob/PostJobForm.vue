<template>
  <section class="flex post-job-form flex-col items-center font-manrope">
    <h2 class="font-bold text-left w-full mb-12">Post A Job</h2>
    <base-card class="w-full wrapper">
      <form action="post" class="w-full flex-col flex items-start">
        <!-- Choose a category  -->
        <div
          class="dropdown text-grey-primary mb-12 w-full text-base flex flex-col items-start font-normal input-wrapper"
        >
          <label class="mb-4" for="categories"
            >Choose a category and subcategory</label
          >
          <select
            id="categories"
            name="categories"
            class="block text-lg text-dark-primary appearance-none w-full py-3 leading-tight focus:outline-none focus:bg-white"
          >
            <option value="" disabled selected>Please Select</option>
            <option>ipsum</option>
            <option>dolor</option>
          </select>
        </div>
        <!-- Describe the Job  -->
        <div class="input-wrapper w-full flex-col flex items-start">
          <h3 class="mb-5">Describe the Job</h3>
          <!-- Name your Job  -->
          <base-input
            v-model="formOne"
            class="w-full"
            label="Name your job posting"
          />
          <!-- Describe the work  -->
          <textarea-base
            v-model="formTwo"
            class="mt-12"
            label="Describe the work to be done"
          />
          <!-- Attach File  -->
          <div class="input-wrapper w-full flex items-center">
            <base-button
              class="attatch-file-btn bg-no-repeat relative"
              rounded
              color="danger"
              disabled="disabled"
            >
              <img
                src="/images/png/link-2.png"
                class="inline-block mr-2"
                alt="link icon"
              />
              Attach File
            </base-button>
            <span class="text-base text-grey-light-2"
              >(The file can be up to 5Mb in size.)</span
            >
          </div>
          <!--What type of project...  -->
          <div class="input-wrapper flex w-full flex-col items-start">
            <h4 class="mt-16">What type of project do you have?</h4>
            <div class="input-label-wrapper">
              <!-- One time project  -->
              <label for="one-time-project">
                <div class="custom-radio">
                  <input
                    id="one-time-project"
                    type="radio"
                    name="project-type"
                  />
                  <!-- Green dot  -->
                  <div class="dot"></div>
                </div>
                One time project
              </label>
              <!-- Ongoing Project -->
              <label for="ongoing-project">
                <div class="custom-radio">
                  <input
                    id="ongoing-project"
                    type="radio"
                    name="project-type"
                  />
                  <!-- Green dot  -->
                  <div class="dot"></div>
                </div>
                Ongoing Project
              </label>
              <!-- I am not sure -->
              <label for="not-sure">
                <div class="custom-radio">
                  <input id="not-sure" type="radio" name="project-type" />
                  <!-- Green dot  -->
                  <div class="dot"></div>
                </div>
                I am not sure
              </label>
            </div>
          </div>
          <!-- How many freelancers do...  -->
          <div class="input-wrapper flex w-full flex-col items-start">
            <h4 class="mt-16">
              How many freelancers do you need to hire for this job?
            </h4>
            <div class="input-label-wrapper">
              <!-- I want to hire and freelancer  -->
              <label class="mr-150" for="hire-and-freelancer">
                <div class="custom-radio">
                  <input
                    id="hire-and-freelancer"
                    type="radio"
                    name="freelancers-count"
                  />
                  <!-- Green dot  -->
                  <div class="dot"></div>
                </div>
                I want to hire and freelancer
              </label>
              <!-- I need to hire more than one freelancer -->
              <label for="more-than-one">
                <div class="custom-radio">
                  <input
                    id="more-than-one"
                    type="radio"
                    name="freelancers-count"
                  />
                  <!-- Green dot  -->
                  <div class="dot"></div>
                </div>
                I need to hire more than one freelancer
              </label>
            </div>
            <!-- Enter skills needed  -->
            <base-input
              v-model="formThree"
              class="w-full mt-16"
              label="Enter skills needed (optional)"
            />
          </div>
        </div>
        <!-- Rate and Availability  -->
        <div class="w-full input-wrapper w-full flex-col flex items-start">
          <h3 class="mt-20">Rate and Availability</h3>
          <h4 class="mt-10">How would you like pay?</h4>
          <payments class="component" />
          <h4>Desired experience Level</h4>
          <desired-level class="component" />
          <h4>How long do you expect this job to last?</h4>
          <job-duration class="component mt-6" />
          <h4>What time commitment is required for this job?</h4>
          <required-time class="component" />
        </div>
        <!-- Freelancer Preferences  -->
        <div class="input-wrapper w-full flex flex-col items-start">
          <h3 class="mb-8">Freelancer Preferences</h3>
          <h4 class="--bordered w-full">
            Do you want freelancers to find and apply to your job?
          </h4>
          <div class="input-label-wrapper flex-col">
            <!-- Anyone can find apply to this job  -->
            <label for="anyone-apply">
              <div class="custom-radio">
                <input
                  id="anyone-apply"
                  type="radio"
                  name="freelancer-preferences"
                />
                <!-- Green dot  -->
                <div class="dot"></div>
              </div>
              Anyone can find apply to this job.
            </label>
            <!-- Only upwork users can find this job -->
            <label for="upwork-users">
              <div class="custom-radio">
                <input
                  id="upwork-users"
                  type="radio"
                  name="freelancer-preferences"
                />
                <!-- Green dot  -->
                <div class="dot"></div>
              </div>
              Only upwork users can find this job.
            </label>
            <!-- Only Freelancers i have invited can find this job -->
            <label for="freelancers-invited">
              <div class="custom-radio">
                <input
                  id="freelancers-invited"
                  type="radio"
                  name="freelancer-preferences"
                />
                <!-- Green dot  -->
                <div class="dot"></div>
              </div>
              Only Freelancers i have invited can find this job.
            </label>
          </div>
          <!-- Preferred Qualifications  -->
          <div class="flex flex-col items-start w-full">
            <h4 class="mt-8">Preferred Qualifications</h4>
            <p class="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              fugiat quod! Labore, maxime ex vitae commodi neque doloremque
              doloribus, repellendus optio sint vel, eius repellat incidunt eum
              beatae! Quos, officiis.
            </p>
            <!-- Add Qualification Button  -->
            <base-button
              class="btn-light"
              disabled="disabled"
              rounded
              color="light-danger"
              >Add Qualification</base-button
            >
          </div>
          <!-- Screening Questions  -->
          <div class="flex-col flex items-start w-full">
            <h4>Screening Questions</h4>
            <p class="mb-16">
              Add a few questions you’d like your candidates to answer when
              applying to your job.
            </p>
            <!-- Textarea  -->
            <textarea-base class="mt-0" />
            <!-- Add Another Question Button  -->
            <base-button
              class="btn-light large-btn"
              disabled="disabled"
              rounded
              color="light-danger"
              >Add Another Question</base-button
            >
          </div>
          <!-- Cover Letter  -->
          <div class="flex-col flex items-start w-full">
            <h4>Cover Letter</h4>
            <p class="mb-8">
              If you don’t add any screening questions, we’ll require a cover
              letter to allow freelancers to introduce themselves.
            </p>
            <!-- Textarea  -->
            <textarea-base class="textarea-wrapper" />
          </div>
          <!-- Note  -->
          <p class="note">
            <span class="text-green-primary underline font-bold">Note:</span>
            Your job description will be saved for now and posted only after you
            verify your email addres.
          </p>
        </div>
        <!-- Submit  -->
        <base-button class="mt-12" type="submit" color="danger" rounded
          >Post a Job</base-button
        >
      </form>
    </base-card>
  </section>
</template>

<script>
import JobDuration from '@/components/NewJob/JobDuration';
import RequiredTime from '@/components/NewJob/RequiredTime';
import Payments from '@/components/NewJob/Payments';
import DesiredLevel from '@/components/NewJob/DesiredLevel';
import BaseCard from '@/components/BaseComponents/BaseCard';
import TextareaBase from '@/components/BaseComponents/TextareaBase';
import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseInput from '@/components/BaseComponents/BaseInput';

export default {
  name: 'PostJobForm',
  components: {
    BaseCard,
    BaseInput,
    TextareaBase,
    BaseButton,
    Payments,
    RequiredTime,
    JobDuration,
    DesiredLevel,
  },

  data() {
    return {
      sampleForm: '',
      sampleForm2: '',
      sampleForm3: '',
    };
  },

  computed: {
    formOne: {
      set(val) {
        this.sampleForm = val;
      },
      get() {
        return this.sampleForm;
      },
    },
    formTwo: {
      set(val) {
        this.sampleForm2 = val;
      },
      get() {
        return this.sampleForm2;
      },
    },
    formThree: {
      set(val) {
        this.sampleForm3 = val;
      },
      get() {
        return this.sampleForm3;
      },
    },
  },
};
</script>

<style>
.post-job-form h2 {
  font-size: 30px;
}
.post-job-form {
  width: 100%;
  max-width: 1140px;
  margin: 100px auto;
}
.post-job-form .input-wrapper > h3 {
  font-size: 25px;
  font-weight: 700; /*bold*/
  color: theme('colors.green.primary');
}
.post-job-form .input-wrapper > h4,
.post-job-form .input-wrapper > div h4 {
  font-size: 18px;
  font-weight: 700; /*bold*/
  color: theme('colors.dark.secondary');
  margin-bottom: 32px;
}
.post-job-form .input-wrapper h4.text-white {
  color: #ffffff;
}
.post-job-form .input-wrapper > div h4 {
  margin-bottom: 18px;
}
.post-job-form h4.--bordered {
  border-bottom: 1px solid theme('colors.grey.light-3');
  padding-bottom: 18px;
  margin-bottom: 28px;
}
.post-job-form p {
  font-size: 16px;
  color: theme('colors.grey.primary');
  font-weight: 400; /*regular*/
}
.post-job-form .note {
  font-size: 15px;
  color: theme('colors.grey.light-2');
}
.post-job-form .wrapper {
  padding: 46px;
}
.post-job-form .base-button {
  height: 62px;
}
.post-job-form .attatch-file-btn {
  width: 208px;
  margin-right: 32px;
}
.post-job-form .btn-light {
  width: 238px;
  margin-bottom: 64px;
}
.post-job-form .large-btn {
  width: 278px;
}
.post-job-form button[type='submit'] {
  width: 178px;
}
.post-job-form select {
  background-image: url('/images/png/dropdown-arrow.png'); /*list down icon*/
  background-repeat: no-repeat;
  background-position: 100% center;
  border-bottom: 1px solid theme('colors.grey.light-3');
}
.post-job-form .input-label-wrapper {
  display: flex;
  align-items: center;
}
.post-job-form .input-label-wrapper.flex-col {
  flex-direction: column;
  align-items: flex-start;
}
.post-job-form .input-label-wrapper.flex-col label {
  margin: 0 0 23px 0;
}
.post-job-form .input-label-wrapper label:not(:last-child) {
  margin-right: 226px;
}
.post-job-form .input-label-wrapper label.mr-150 {
  margin-right: 145px;
}

.post-job-form label {
  display: flex;
  align-items: center;
  width: auto;
  font-size: 16px;
  color: theme('colors.grey.light-2');
}

.post-job-form .custom-radio {
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99999px;
  border: 2px solid theme('colors.green.primary');
  position: relative;
  margin-right: 18px;
}
.post-job-form input[type='radio'] {
  visibility: hidden;
}
.post-job-form .custom-radio .dot {
  height: 12px;
  width: 12px;
  border-radius: 99999px;
  background-color: theme('colors.green.primary');
  position: absolute;
  visibility: hidden;
}
.post-job-form input[type='radio']:checked + .dot {
  visibility: visible;
}
.post-job-form .component {
  margin-bottom: 60px;
}
.post-job-form .textarea-wrapper textarea {
  margin-bottom: 0;
}
</style>
