<template>
  <section class="timeline-section">
    <h2 class="section-title">革命历程</h2>
    <div class="timeline">
      <div 
        v-for="(event, index) in events" 
        :key="event.id"
        class="timeline-item"
        :class="{ 'reverse': index % 2 === 1 }"
      >
        <div class="timeline-marker">
          <span class="year">{{ event.year }}</span>
        </div>
        <div class="timeline-content">
          <h3 class="event-title">{{ event.title }}</h3>
          <p class="event-description">{{ event.description }}</p>
          <p class="event-significance">{{ event.significance }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { revolutionaryEvents } from '@/assets/data/revolutionary-data';

const events = ref(revolutionaryEvents);
</script>

<style scoped>
.timeline-section {
  padding: 4rem 2rem;
  background: #fef2f2;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #dc2626;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: #dc2626;
}

.timeline {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #dc2626;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item.reverse {
  flex-direction: row-reverse;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background: #dc2626;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  z-index: 2;
  border: 4px solid white;
  box-shadow: 0 0 0 4px #dc2626;
}

.timeline-content {
  background: white;
  padding: 2rem 4rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  width: 45%;
  position: relative;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: auto;
  margin-right: 60px;
}

.timeline-item.reverse .timeline-content {
  margin-left: 60px;
  margin-right: auto;
}

.event-title {
  color: #dc2626;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.event-description {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #374151;
}

.event-significance {
  font-style: italic;
  color: #059669;
  font-weight: 500;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }
  
  .timeline-marker {
    left: 30px;
    transform: none;
  }
  
  .timeline-content {
    width: calc(100% - 80px);
    margin-left: 80px !important;
    margin-right: 0 !important;
  }
  
  .timeline-item.reverse {
    flex-direction: row;
  }
}
</style>