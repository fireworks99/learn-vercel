<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">传承红色基因</h1>
      <h2 class="hero-title">弘扬革命精神</h2>
      <p class="hero-description">
        缅怀革命先烈，学习红色文化<br>
        坚定理想信念，践行初心使命
      </p>
      <div class="hero-buttons">
        <button @click="learnMore" class="btn-primary">了解更多</button>
        <button @click="joinUs" class="btn-secondary">加入我们</button>
      </div>
    </div>
    <div class="hero-image">
      <div class="red-flag">
        <img src="@/assets/images/flag.png" alt="">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const learnMore = () => {
  window.location.href = "http://dangshi.people.cn/";
};

const joinUs = () => {
  window.location.href = "http://dangshi.people.cn/";
};
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
  color: white;
  padding: 2rem;
}

.hero-content {
  flex: 1;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.95;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #dc2626;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #dc2626;
}

.hero-image {
  margin-top: 2rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.red-flag {
  font-size: 15rem;
}

@keyframes wave {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .red-flag {
    font-size: 8rem;
  }
}
</style>