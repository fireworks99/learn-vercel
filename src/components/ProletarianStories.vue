<template>
  <section class="stories-section">
    <h2 class="section-title">无产阶级英雄故事</h2>
    <div class="stories-container">
      <div 
        v-for="story in stories" 
        :key="story.id"
        class="story-card"
      >
        <div class="story-header">
          <h3 class="hero-name">{{ story.name }}</h3>
          <span class="hero-period">{{ story.period }}</span>
        </div>
        <div class="story-content">
          <p class="story-text">{{ story.story }}</p>
          <div class="contribution">
            <strong>历史贡献：</strong>{{ story.contribution }}
          </div>
          <div class="spirit-tag">
            {{ story.spirit }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { proletarianStories } from '@/assets/data/revolutionary-data';

const stories = ref(proletarianStories);
</script>

<style scoped>
.stories-section {
  padding: 4rem 2rem;
  background: #fef2f2;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #dc2626;
  margin-bottom: 3rem;
}

.stories-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.story-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #dc2626;
  transition: all 0.3s ease;
}

.story-card:hover {
  transform: translateX(5px);
  box-shadow: 0 8px 25px rgba(220, 38, 38, 0.15);
}

.story-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.hero-name {
  color: #dc2626;
  font-size: 1.8rem;
  margin: 0;
}

.hero-period {
  background: #dc2626;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.story-content {
  line-height: 1.7;
}

.story-text {
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.contribution {
  color: #059669;
  margin-bottom: 1rem;
  font-weight: 500;
}

.spirit-tag {
  background: linear-gradient(135deg, #dc2626, #991b1b);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  display: inline-block;
  font-weight: bold;
  font-size: 0.95rem;
}
</style>