<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <span class="red-star">
            ★
          </span>
          红色文化传承网
        </div>
        <!-- 移除导航链接，因为现在使用单页应用 -->
      </nav>
    </header>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} 红色文化传承网. 传承红色基因，弘扬革命精神</p>
        <p>不忘初心，牢记使命，为实现中华民族伟大复兴而努力奋斗！</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 不需要额外的脚本逻辑
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #dc2626;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.red-star {
  color: #fbbf24;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 5px #fbbf24; }
  to { text-shadow: 0 0 20px #fbbf24, 0 0 30px #fbbf24; }
}

.main-content {
  flex: 1;
}

.footer {
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}

.footer-content p {
  margin-bottom: 0.5rem;
}

.footer-content p:last-child {
  opacity: 0.8;
  font-size: 0.9rem;
}
</style>