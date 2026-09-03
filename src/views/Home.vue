<script>
export default {
  name: 'Home',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      isSubmitting: false,
      formResponse: {
        success: false,
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.formResponse.message = '';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: '7037ee28-6d94-490a-bf5b-64bb33a76002',
            name: this.formData.name,
            email: this.formData.email,
            message: this.formData.message,
            subject: `Cybersecurity Portfolio Contact: ${this.formData.name}`,
          }),
        });

        const result = await response.json();

        if (result.success) {
          this.formResponse = {
            success: true,
            message: 'Transmission successful. Secure connection established.',
          };
          this.formData.name = '';
          this.formData.email = '';
          this.formData.message = '';
        } else {
          throw new Error(result.message || 'Transmission failed.');
        }
      } catch (error) {
        this.formResponse = {
          success: false,
          message: 'Transmission error. Please try emailing directly.',
        };
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
<template>
  <div class="space-y-24 pb-20">
    <section class="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-color-1/10 via-n-8 to-n-8 pointer-events-none"
      ></div>

      <div
        class="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div class="space-y-6">
          <div
            class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-n-6 border border-stroke-1 text-color-1 text-xs font-mono"
          >
            <span class="w-2 h-2 rounded-full bg-color-1 animate-pulse"></span>
            <span>CYBERSECURITY PRACTITIONER // READY FOR DEPLOYMENT</span>
          </div>

          <h1
            class="text-4xl md:text-6xl font-extrabold tracking-tight text-n-1"
          >
            Securing Infrastructure &
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5"
              >Networks</span
            >
          </h1>

          <p class="text-n-3 text-lg leading-relaxed">
            Combining two decades of professional experience with advanced
            cybersecurity training, network architecture, and hands-on system
            hardening. Building resilient defenses and secure operational
            environments from the ground up.
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              class="relative inline-flex items-center justify-center px-7 py-3 font-code text-xs font-bold uppercase tracking-wider text-n-1 bg-gradient-to-r from-color-1 via-color-5 to-color-6 rounded-xl shadow-[0_0_20px_rgba(172,106,255,0.4)] hover:opacity-90 transition-all"
            >
              View Projects
            </a>

            <a
              href="#contact"
              class="relative inline-flex items-center justify-center px-7 py-3 font-code text-xs font-bold uppercase tracking-wider text-n-1 bg-gradient-to-r from-color-1 via-color-5 to-color-6 rounded-xl shadow-[0_0_20px_rgba(172,106,255,0.4)] hover:opacity-90 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <!-- Terminal / Visual Graphic Box -->
        <div
          class="bg-n-6 border border-stroke-1 rounded-xl p-6 shadow-2xl font-mono text-sm relative group"
        >
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-color-1 to-color-5 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"
          ></div>
          <div
            class="relative bg-n-8 p-4 rounded-lg border border-stroke-1 space-y-3"
          >
            <div
              class="flex items-center justify-between pb-3 border-b border-stroke-1"
            >
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span class="text-xs text-n-4">bash - session</span>
            </div>
            <p class="text-color-1">
              $ nmap -A -T4 target-infrastructure.local
            </p>
            <p class="text-n-3">Starting Nmap scan... Host is up.</p>
            <p class="text-n-3">
              All firewall ports audited. Zero vulnerabilities detected.
            </p>
            <p class="text-color-5 animate-pulse">_</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="max-w-7xl mx-auto px-6">
      <div
        class="bg-n-6 border border-stroke-1 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden"
      >
        <div
          class="absolute -bottom-10 -left-10 w-48 h-48 bg-color-5/5 rounded-full blur-3xl pointer-events-none"
        ></div>

        <!-- Image Column -->
        <div class="md:col-span-4 flex justify-center">
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-color-1 to-color-5 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500"
            ></div>

            <div
              class="relative w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border border-stroke-1 bg-n-8"
            >
              <img
                src="../assets/port.jpg"
                alt="Profile photo"
                class="w-full h-full object-cover contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <!-- Text Column -->
        <div class="md:col-span-8 space-y-4">
          <div
            class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-n-8 border border-stroke-1 text-color-5 text-xs font-mono"
          >
            <span>// OPERATOR PROFILE</span>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-n-1">
            Dedicated to System Hardening & Security
          </h2>

          <div class="space-y-4 text-n-3 text-sm md:text-base leading-relaxed">
            <p>
              I’m a systems‑driven professional transitioning into cybersecurity
              after more than twenty years supporting technical operations,
              regulatory compliance, and cross‑functional problem‑solving. My
              background in web development, system administration, and
              troubleshooting shaped my ability to analyze issues quickly and
              build practical, scalable solutions.
            </p>
            <p>
              Cybersecurity is where my curiosity and experience converge. I’m
              actively developing skills in network security, virtualization,
              threat analysis, and defensive tooling through hands‑on labs and
              home‑lab experimentation. I enjoy breaking down complex problems,
              identifying vulnerabilities, and strengthening systems through
              structured, thoughtful remediation.
            </p>
            I bring accountability, adaptability, and a calm, analytical
            approach to every challenge. My goal is to contribute to secure
            infrastructures, resilient processes, and teams that value clarity,
            collaboration, and continuous improvement.
            <p></p>

            <div
              class="pt-2 flex flex-wrap gap-4 font-mono text-xs text-color-1"
            >
              <span>[+] Threat Analysis</span>
              <span>[+] Vulnerability Assessment</span>
              <span>[+] Network Security</span>
              <span>[+] Infrascture Hardening</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="max-w-7xl mx-auto px-6">
      <div class="text-center space-y-4 mb-12">
        <h2 class="text-3xl font-bold tracking-tight text-n-1">
          Technical Arsenal
        </h2>
        <p class="text-n-3 max-w-xl mx-auto">
          Core proficiencies spanning security operations, network defense, and
          hands-on systems work.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Skill Card 1 -->
        <div
          class="bg-n-6 border border-stroke-1 p-6 rounded-xl hover:border-color-1 transition-all group flex flex-col items-center text-center"
        >
          <div
            class="w-12 h-12 rounded-lg bg-color-1/10 text-color-1 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform"
          >
            🛡️
          </div>
          <h3 class="font-bold text-lg mb-2 text-n-1">
            Cybersecurity & Threat Operations
          </h3>
          <p class="text-sm text-n-3">
            Threat assessment, SIEM monitoring (Splunk), incident response
            fundamentals, IAM access control, log analysis, risk mitigation, and
            vulnerability auditing.
          </p>
        </div>

        <!-- Skill Card 2 -->
        <div
          class="bg-n-6 border border-stroke-1 p-6 rounded-xl hover:border-color-1 transition-all group flex flex-col items-center text-center"
        >
          <div
            class="w-12 h-12 rounded-lg bg-color-5/10 text-color-5 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform"
          >
            🌐
          </div>
          <h3 class="font-bold text-lg mb-2 text-n-1">
            Network Architecture & Security
          </h3>
          <p class="text-sm text-n-3">
            TCP/IP fundamentals, network security principles, secure subnet
            isolation, routing policies, VPN configuration (WireGuard), and
            Linux administration.
          </p>
        </div>

        <!-- Skill Card 3 -->
        <div
          class="bg-n-6 border border-stroke-1 p-6 rounded-xl hover:border-color-1 transition-all group flex flex-col items-center text-center"
        >
          <div
            class="w-12 h-12 rounded-lg bg-color-1/10 text-color-1 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform"
          >
            🐳
          </div>
          <h3 class="font-bold text-lg mb-2 text-n-1">
            Virtualization & Systems
          </h3>
          <p class="text-sm text-n-3">
            Virtualization (Hyper-V), containerized environments (Docker),
            CLI-based system administration, and Git/GitHub workflow for secure
            configuration management.
          </p>
        </div>

        <!-- Skill Card 4 -->
        <div
          class="bg-n-6 border border-stroke-1 p-6 rounded-xl hover:border-color-1 transition-all group flex flex-col items-center text-center"
        >
          <div
            class="w-12 h-12 rounded-lg bg-color-5/10 text-color-5 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform"
          >
            ⚡
          </div>
          <h3 class="font-bold text-lg mb-2 text-n-1">
            Development & Security Tools
          </h3>
          <p class="text-sm text-n-3">
            Python scripting for automation, CLI-driven tooling, Git/GitHub for
            secure configuration management, and workflow optimization across
            Linux environments.
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="max-w-7xl mx-auto px-6">
      <div class="text-center space-y-4 mb-12">
        <h2 class="text-3xl font-bold tracking-tight text-n-1">
          Featured Projects
        </h2>
        <p class="text-n-3 max-w-xl mx-auto">
          Practical applications built with security, robustness, and scale in
          mind.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Project 1 -->
        <div
          class="bg-n-6 border border-stroke-1 rounded-xl overflow-hidden hover:border-color-1 transition-all flex flex-col justify-between"
        >
          <div class="p-6 space-y-4">
            <div class="flex justify-between items-center">
              <span
                class="text-xs font-mono px-3 py-1 bg-color-1/10 text-color-1 rounded-full"
                >Secure Infrastructure</span
              >
              <span class="text-xs text-n-4 font-mono">Docker / WireGuard</span>
            </div>
            <h3 class="text-xl font-bold text-n-1">
              Encrypted Remote Access & Home Lab
            </h3>
            <p class="text-n-3 text-sm">
              Configured a secure self-hosted environment featuring WireGuard
              VPN tunnels, isolated VLAN routing, and containerized management
              stacks.
            </p>
          </div>
          <div
            class="px-6 py-4 bg-n-8/50 border-t border-stroke-1 flex justify-between items-center"
          >
            <span class="text-xs text-n-4 font-mono"
              >Status: Deployed & Active</span
            >
            <a
              href="#"
              class="text-sm text-color-1 font-semibold hover:underline"
              >Explore Architecture &rarr;</a
            >
          </div>
        </div>

        <!-- Project 2 -->
        <div
          class="bg-n-6 border border-stroke-1 rounded-xl overflow-hidden hover:border-color-1 transition-all flex flex-col justify-between"
        >
          <div class="p-6 space-y-4">
            <div class="flex justify-between items-center">
              <span
                class="text-xs font-mono px-3 py-1 bg-color-5/10 text-color-5 rounded-full"
                >Full-Stack App</span
              >
              <span class="text-xs text-n-4 font-mono">FastAPI / Vue.js</span>
            </div>
            <h3 class="text-xl font-bold text-n-1">
              Task & Workflow Planner Platform
            </h3>
            <p class="text-n-3 text-sm">
              Engineered a customized web application equipped with a
              high-performance Python backend API, structured database queries,
              and dynamic front-end views.
            </p>
          </div>
          <div
            class="px-6 py-4 bg-n-8/50 border-t border-stroke-1 flex justify-between items-center"
          >
            <span class="text-xs text-n-4 font-mono"
              >Status: Production Ready</span
            >
            <a
              href="#"
              class="text-sm text-color-5 font-semibold hover:underline"
              >View Source &rarr;</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="max-w-3xl mx-auto px-6">
      <div
        class="bg-n-6 border border-stroke-1 rounded-2xl p-8 md:p-12 space-y-6 relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-color-1/5 rounded-full blur-3xl pointer-events-none"
        ></div>

        <div class="text-center space-y-2">
          <h2 class="text-2xl md:text-3xl font-bold text-n-1">
            Initiate Secure Contact
          </h2>
          <p class="text-n-3 text-sm">
            Open for cybersecurity opportunities, consulting, and collaborative
            technical projects.
          </p>
        </div>

        <!-- Form with submit handler -->
        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              v-model="formData.name"
              required
              placeholder="Your Name"
              class="w-full bg-n-8 border border-stroke-1 rounded-lg px-4 py-3 text-sm text-n-2 focus:outline-none focus:border-color-1 transition-colors"
            />
            <input
              type="email"
              name="email"
              v-model="formData.email"
              required
              placeholder="Your Email"
              class="w-full bg-n-8 border border-stroke-1 rounded-lg px-4 py-3 text-sm text-n-2 focus:outline-none focus:border-color-1 transition-colors"
            />
          </div>
          <textarea
            rows="4"
            name="message"
            v-model="formData.message"
            required
            placeholder="Your Message..."
            class="w-full bg-n-8 border border-stroke-1 rounded-lg px-4 py-3 text-sm text-n-2 focus:outline-none focus:border-color-1 transition-colors"
          ></textarea>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="relative flex w-full items-center justify-center px-7 py-3 font-code text-xs font-bold uppercase tracking-wider text-n-1 bg-gradient-to-r from-color-1 via-color-5 to-color-6 rounded-xl shadow-[0_0_20px_rgba(172,106,255,0.4)] hover:opacity-90 transition-all disabled:opacity-50"
          >
            <span v-if="isSubmitting">Transmitting...</span>
            <span v-else>Transmit Message</span>
          </button>

          <!-- Success / Error Feedback -->
          <div
            v-if="formResponse.message"
            :class="formResponse.success ? 'text-green-400' : 'text-red-400'"
            class="text-sm text-center pt-2"
          >
            {{ formResponse.message }}
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
