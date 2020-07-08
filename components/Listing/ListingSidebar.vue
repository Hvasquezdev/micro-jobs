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
    </base-dropdown>

    <base-dropdown v-model="showDropdown2" label="Delivery Time">
      <template v-for="item in 3">
        <label
          :key="item + uniqueId()"
          :for="uniqueId()"
          class="flex items-center justify-start"
        >
          <input :id="uniqueId()" type="radio" name="delivery_time" />
          <span class="font-manrope pl-2">
            Up to 24 hours
          </span>
        </label>
      </template>
    </base-dropdown>

    <base-dropdown v-model="showDropdown3" label="Refine Search">
      <template v-for="item in 5">
        <a
          :key="item + uniqueId()"
          href="#"
          class="flex items-center justify-between w-full"
        >
          All in Video & Animation
          <strong>(54)</strong>
        </a>
      </template>
    </base-dropdown>

    <base-dropdown v-model="showDropdown4" label="File Format">
      <template v-for="item in 3">
        <label
          :key="item + uniqueId()"
          :for="uniqueId()"
          class="flex items-center justify-start"
        >
          <input :id="uniqueId()" type="radio" name="file_format" />
          <span class="font-manrope pl-2">
            Up to 24 hours
          </span>
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
</style>
