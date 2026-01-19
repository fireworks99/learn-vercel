<template>
  <section class="values-section">
    <h2 class="section-title">共产主义价值观</h2>
    <div class="values-grid">
      <div 
        v-for="value in values" 
        :key="value.id"
        class="value-card"
        @mouseenter="hoverCard = value.id"
        @mouseleave="hoverCard = null"
      >
        <div class="value-icon">{{ value.icon }}</div>
        <h3 class="value-title">{{ value.title }}</h3>
        <p class="value-description">{{ value.description }}</p>
        <div class="value-principle">
          <strong>核心要义：</strong>{{ value.principle }}
        </div>
        <div class="card-overlay" :class="{ active: hoverCard === value.id }">
          <span>深入学习</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { communistValues } from '@/assets/data/revolutionary-data';

const values = ref(communistValues);
const hoverCard = ref<number | null>(null);
</script>

<style scoped>
.values-section {
  padding: 4rem 2rem;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #dc2626;
  margin-bottom: 3rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.value-card {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.2);
  border-color: #dc2626;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-title {
  color: #dc2626;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.value-description {
  line-height: 1.6;
  color: #374151;
  margin-bottom: 1rem;
}

.value-principle {
  font-size: 0.9rem;
  color: #059669;
  font-style: italic;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(220, 38, 38, 0.9);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-overlay.active {
  opacity: 1;
}

.card-overlay span {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>