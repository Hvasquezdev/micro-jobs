<template>
  <base-card
    class="listing-sidebar flex flex-col items-center justify-start relative bg-white"
  >
    <base-dropdown v-model="showDropdown" label="Refine Search">
      <template v-for="item in 3">
        <a
          :key="item + uniqueId()"
          href="#"
          class="flex items-center justify-between w-full"
        >
          All in Video & Animation
          <strong>(54)</strong>
        </a>
      </template>
      <a href="#" class="w-full text-green-primary font-bold underline"
        >View more</a
      >
    </base-dropdown>

    <base-dropdown v-model="showDropdown2" label="Delivery Time">
      <template v-for="item in 3" class="w-full">
        <label
          :key="item + uniqueId()"
          :for="uniqueId()"
          class="flex items-center font-manrope"
        >
          <div class="custom-radio">
            <input :id="uniqueId()" type="radio" name="delivery_time" />
            <!-- Green dot  -->
            <div class="dot"></div>
          </div>
          Up to 24 hours
        </label>
      </template>
    </base-dropdown>

    <base-dropdown v-model="showDropdown3" label="Online Users">
      <template v-for="item in 1">
        <label
          :key="item + uniqueId()"
          :for="uniqueId()"
          class="flex items-center font-manrope w-full justify-between"
        >
          <div class="custom-radio">
            <input :id="uniqueId()" type="radio" name="file_format" />
            <!-- Green dot  -->
            <div class="dot"></div>
          </div>
          Show only online user <strong> (43)</strong>
        </label>
      </template>
    </base-dropdown>

    <base-dropdown v-model="showDropdown4" label="Animation Type">
      <template v-for="item in 3">
        <label
          :key="item + uniqueId()"
          :for="uniqueId()"
          class="flex items-center font-manrope justify-start"
        >
          <div class="custom-radio">
            <input :id="uniqueId()" type="radio" name="animation-type" />
            <!-- Green dot  -->
            <div class="dot"></div>
          </div>
          2D Animation
        </label>
      </template>
    </base-dropdown>

    <base-dropdown v-model="showDropdown5" label="File Format">
      <template v-for="item in 3">
        <label
          :key="item + uniqueId()"
          :for="uniqueId()"
          class="flex items-center font-manrope justify-start"
        >
          <div class="custom-radio">
            <input :id="uniqueId()" type="radio" name="file-format" />
            <!-- Green dot  -->
            <div class="dot"></div>
          </div>
          MP4
        </label>
      </template>
      <a href="#" class="w-full text-green-primary font-bold underline"
        >View more</a
      >
    </base-dropdown>

    <base-dropdown v-model="showDropdown6" label="Seller Level">
      <template v-for="item in 3">
        <label
          :key="item + uniqueId()"
          :for="uniqueId()"
          class="flex items-center font-manrope justify-start"
        >
          <div class="custom-radio">
            <input :id="uniqueId()" type="radio" name="seller-level" />
            <!-- Green dot  -->
            <div class="dot"></div>
          </div>
          Level 1
        </label>
      </template>
    </base-dropdown>

    <base-dropdown v-model="showDropdown7" label="Package Include">
      <template v-for="item in 3">
        <label
          :key="item + uniqueId()"
          :for="uniqueId()"
          class="flex items-center font-manrope justify-start"
        >
          <div class="custom-radio">
            <input :id="uniqueId()" type="radio" name="package-include" />
            <!-- Green dot  -->
            <div class="dot"></div>
          </div>
          Lorem ipsum
        </label>
      </template>
    </base-dropdown>
  </base-card>
</template>

<script>
import BaseCard from '@/components/Listing/ListingSidebar';
import BaseDropdown from '@/components/BaseComponents/BaseDropdown';

export default {
  name: 'ListingSidebar',

  components: {
    BaseCard,
    BaseDropdown,
  },

  data() {
    return {
      showDropdown: true,
      showDropdown2: true,
      showDropdown3: true,
      showDropdown4: true,
      showDropdown5: true,
      showDropdown6: true,
      showDropdown7: true,
    };
  },

  methods: {
    uniqueId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
  },
};
</script>

<style>
.listing-sidebar {
  max-width: 260px;
  padding: 25px 20px;
}
.listing-sidebar .custom-radio {
  height: 15px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99999px;
  border: 1px solid theme('colors.green.primary');
  position: relative;
  margin-right: 12px;
}
.listing-sidebar input[type='radio'] {
  opacity: 0;
}
.listing-sidebar .custom-radio .dot {
  height: 7px;
  width: 7px;
  border-radius: 99999px;
  background-color: theme('colors.green.primary');
  position: absolute;
  visibility: hidden;
}
.listing-sidebar input[type='radio']:checked + .dot {
  visibility: visible;
}

.listing-sidebar label:nth-child(2) {
  color: theme('colors.green.primary'); /*Only for visual testing */
  font-weight: 600; /*semibold*/
}
</style>
