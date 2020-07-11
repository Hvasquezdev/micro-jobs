<template>
  <div class="profile-page flex flex-col items-center justify-center">
    <div class="top-content flex flex-col items-start justify-center">
      <bread-crumb :items="routes" />

      <base-button>
        <base-icon class="flex items-center" name="arrow-left-large" />
        Back to Search Result
      </base-button>
    </div>
    <div class="main-content ml-auto mr-auto flex items-start justify-between">
      <div class="left-content flex flex-col">
        <user-profile />
        <gig-reviews />
        <portfolio />
        <certifications />
        <tests />
        <employment-history />
        <education />
        <other-experiences />
      </div>
      <div class="right-content w-full">
        <profile-sidebar />
      </div>
    </div>
    <div class="profile-footer">
      <other-gigs />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb';
import UserProfile from '@/components/ProfileListing/UserProfile';
import Portfolio from '@/components/ProfileListing/Portafolio';
import ProfileSidebar from '@/components/ProfileListing/ProfileSidebar';
import OtherExperiences from '@/components/ProfileListing/OtherExperiences';
import Education from '@/components/ProfileListing/Education';
import Tests from '@/components/ProfileListing/Tests';
import EmploymentHistory from '@/components/ProfileListing/EmploymentHistory';
import Certifications from '@/components/ProfileListing/Certifications';
import GigReviews from '@/components/GigReviews';
import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseIcon from '@/components/BaseComponents/BaseIcon';
import OtherGigs from '@/components/OtherGigs';

export default {
  name: 'ProfilePage',

  components: {
    BreadCrumb,
    UserProfile,
    Portfolio,
    ProfileSidebar,
    OtherExperiences,
    Education,
    Tests,
    EmploymentHistory,
    Certifications,
    GigReviews,
    BaseButton,
    BaseIcon,
    OtherGigs,
  },

  data() {
    return {
      routes: [
        {
          text: 'Home',
          url: '/',
        },
        {
          text: 'Listing',
          url: '/services/listing',
        },
        {
          text: 'Profile Listing',
          url: '/listing/profile',
        },
      ],
    };
  },
};
</script>

<style>
.profile-page {
  background: white;
}
.profile-page .main-content {
  max-width: 1140px;
  width: 90%;
}
.profile-page .main-content .left-content {
  margin-right: 30px;
}
.profile-page .main-content .right-content {
  max-width: 360px;
}
.profile-page .main-content .gig-reviews {
  margin-bottom: 35px;
}
.profile-page .main-content .certifications {
  margin-bottom: 45px;
}
.profile-page .top-content {
  width: 90%;
  max-width: 1140px;
}
.profile-page .top-content .breadcrumb {
  margin-top: 30px;
  margin-bottom: 50px;
}
.profile-page .top-content .breadcrumb ul {
  justify-content: flex-start;
}
.profile-page .top-content .base-button {
  padding: 0;
  color: theme('colors.grey.light-2');
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
}
.profile-page .top-content .base-button .svg-icon {
  margin-right: 15px;
  font-size: 26px;
}
.profile-page .profile-footer {
  width: 90%;
  max-width: 1140px;
  margin-bottom: 80px;
}
.profile-page .profile-footer .other-gigs {
  padding-top: 80px;
  border-top: 1px solid theme('colors.grey.light-3');
}
</style>
