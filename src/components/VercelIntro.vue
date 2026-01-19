<template>
  <div class="vercel-intro">
    <!-- 标题区 -->
    <header class="header">
      <h1>Vercel</h1>
      <p class="subtitle">
        面向现代前端的云部署与托管平台
      </p>
    </header>

    <!-- 核心介绍 -->
    <section class="section">
      <h2>它是什么？</h2>
      <p>
        <strong>Vercel</strong> 是一个专注于前端应用的云平台，
        提供从 <em>代码提交</em> 到 <em>自动构建</em>、
        <em>自动部署</em>、<em>全球加速</em> 的一站式体验。
      </p>
      <p>
        你只需要把项目放在 GitHub 上，Vercel 就能帮你完成上线。
      </p>
    </section>

    <!-- 特性列表 -->
    <section class="section">
      <h2>核心特性</h2>
      <ul class="features">
        <li>
          <strong>Git 驱动部署</strong>
          <span>每次 push 或 PR 都会自动触发构建和部署</span>
        </li>
        <li>
          <strong>Preview Deployment</strong>
          <span>每个 PR 都有独立的预览地址</span>
        </li>
        <li>
          <strong>Serverless Functions</strong>
          <span>轻量 API，无需维护服务器</span>
        </li>
        <li>
          <strong>全球 CDN</strong>
          <span>静态资源就近访问，低延迟</span>
        </li>
        <li>
          <strong>框架友好</strong>
          <span>原生支持 Vue / React / Svelte / Next.js</span>
        </li>
      </ul>
    </section>

    <!-- 对比说明 -->
    <section class="section">
      <h2>和 GitHub Pages 的区别</h2>
      <table class="compare">
        <thead>
          <tr>
            <th>能力</th>
            <th>Vercel</th>
            <th>GitHub Pages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>自动部署</td>
            <td>✅ 内置</td>
            <td>⚠️ 需 Actions</td>
          </tr>
          <tr>
            <td>PR 预览</td>
            <td>✅ 支持</td>
            <td>❌ 不支持</td>
          </tr>
          <tr>
            <td>Serverless API</td>
            <td>✅ 支持</td>
            <td>❌ 不支持</td>
          </tr>
          <tr>
            <td>SSR</td>
            <td>✅ 支持</td>
            <td>❌ 不支持</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用场景 -->
    <section class="section">
      <h2>适合的使用场景</h2>
      <div class="scenes">
        <span>前端 Demo</span>
        <span>数据可视化</span>
        <span>Dashboard</span>
        <span>文档站</span>
        <span>开源项目演示</span>
      </div>
    </section>

    <!-- 结论 -->
    <footer class="footer">
      <p>
        <strong>总结：</strong>
        如果你的项目以「前端展示」为主，
        希望<strong>快速上线、低运维成本</strong>，
        那么 Vercel 是一个非常合适的选择。
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 纯展示组件，无逻辑
</script>

<style scoped>
.vercel-intro {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial;
  color: #1f2937;
}

.header {
  margin-bottom: 32px;
}

.header h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 8px;
}

.subtitle {
  color: #6b7280;
  font-size: 16px;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  font-size: 22px;
  margin-bottom: 16px;
}

.section p {
  line-height: 1.7;
  margin-bottom: 8px;
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
}

.features strong {
  display: inline-block;
  width: 160px;
}

.features span {
  color: #4b5563;
}

.compare {
  width: 100%;
  border-collapse: collapse;
}

.compare th,
.compare td {
  border: 1px solid #e5e7eb;
  padding: 10px 12px;
  text-align: center;
}

.compare th {
  background: #f9fafb;
}

.scenes {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.scenes span {
  background: #f3f4f6;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
}

.footer {
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
  color: #374151;
}
</style>
