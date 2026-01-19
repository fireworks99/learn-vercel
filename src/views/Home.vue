<template>
  <div class="home-page">
    <HeroSection />
    <RevolutionaryTimeline />
    <CommunistValues />
    <ProletarianStories />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import RevolutionaryTimeline from '@/components/RevolutionaryTimeline.vue'
import CommunistValues from '@/components/CommunistValues.vue'
import ProletarianStories from '@/components/ProletarianStories.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}
</style>