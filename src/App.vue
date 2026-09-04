<template>
  <div
    class="min-h-screen bg-n-8 text-n-2 flex flex-col font-sans selection:bg-color-1 selection:text-n-1"
  >
    <!-- Navigation Bar -->
    <header class="sticky top-0 z-50 bg-transparent border-b border-stroke-1">
      <nav
        class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
      >
        <router-link to="/" class="flex items-center space-x-2 group">
          <img src="/logo.jfif" alt="Logo" class="w-12 h-12 object-contain" />
        </router-link>

        <div
          class="hidden md:flex items-center space-x-8 text-sm font-medium ml-auto"
        >
          <router-link to="/" class="hover:text-color-1 transition-colors"
            >Home</router-link
          >
          <a href="#about" class="hover:text-color-1 transition-colors"
            >About</a
          >
          <a href="#skills" class="hover:text-color-1 transition-colors"
            >Skills</a
          >
          <a href="#projects" class="hover:text-color-1 transition-colors"
            >Projects</a
          >
          <a href="#contact" class="hover:text-color-1 transition-colors"
            >Contact</a
          >
        </div>

        <div class="ml-6">
          <a
            href="#contact"
            class="relative inline-flex items-center justify-center px-7 py-3 font-code text-xs font-bold uppercase tracking-wider text-n-1 bg-gradient-to-r from-color-1 via-color-5 to-color-6 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:opacity-90 transition-all"
          >
            Secure Connect
          </a>
        </div>
      </nav>
    </header>

    <!-- Main Page Content -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer
      class="border-t border-stroke-1 py-8 bg-n-7/50 text-center text-sm text-n-4"
    >
      <p>&copy; {{ new Date().getFullYear() }} • Veronica Ramirez</p>
    </footer>
  </div>
</template>

<script setup>
// Navigation logic can go here if needed (e.g., mobile menu toggle)
</script>
