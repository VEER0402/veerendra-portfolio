import React from "react";
const projectStyles = {
  ci: "border-blue-500/40 hover:border-green-400",
  infra: "border-purple-500/40 hover:border-purple-400",
  automation: "border-orange-500/40 hover:border-orange-400",
  aws: "border-cyan-500/40 hover:border-cyan-400",
  frontend: "border-gray-600",
  future: "border-dashed border-gray-600"
};

export default function VeerendraPortfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white antialiased">
      {/* Container */}
      <header className="max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">VW</div>
            <div>
              <h1 className="text-lg font-semibold">Veerendra Dwivedi</h1>
              <p className="text-xs text-gray-300">DevOps Engineer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#resume" className="hover:text-white">Resume</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Veerendra Dwivedi</h2>
          <p className="mt-2 text-blue-300 font-medium">DevOps Engineer</p>
          <p className="mt-6 text-lg text-gray-300">I build resilient infrastructure and automation with disciplined execution — consistent, dependable, and engineered for scale.</p>

          <div className="mt-6 flex items-center space-x-4">
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-medium">Hire / Contact</a>
            <a
  href="https://drive.google.com/uc?export=download&id=1xd2PCUQ8uHHLpkkdUqd7RIOIIoh8-vYN"
  className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-700 text-gray-200 hover:border-blue-500"
>
  Download Resume
</a>
          </div>

          <div className="mt-8 text-sm text-gray-400 space-y-2">
            <p><strong>Location:</strong>Noida</p>
            <p><strong>Current Role:</strong> DevOps Engineer</p>
            
          </div>
        </div>

        <div className="order-first md:order-last flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 shadow-lg">

            {/* Added image - place a file named /veerendra.jpg in your public folder */}
            <div className="w-64 h-64 mx-auto rounded-lg bg-gray-700 flex items-center justify-center overflow-hidden">
              <img src="/veerendra.jpg" alt="Veerendra Dwivedi" className="w-full h-full object-cover" />
            </div>

            <div className="mt-6 text-gray-300">
              <h3 className="font-semibold">Tagline</h3>
              <p className="mt-2">Disciplined. Consistent. Masterful — engineering reliable systems with calm precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">About Me</h3>
          <p className="mt-4 text-gray-300 leading-relaxed">I am a DevOps Engineer with a solid foundation in cloud, automation, Linux systems, CI/CD, scripting, and modern infrastructure practices. I started my career in 2021 as a UI Developer (TypeScript, HTML, CSS), which gave me strong fundamentals in system thinking, clean engineering and production-quality delivery. I transitioned into DevOps to drive end-to-end automation, infrastructure reliability and seamless developer workflows. My day-to-day work centers on building robust automation, managing cloud infrastructure, integrating Git workflows, and improving deployment and monitoring systems.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold">What I do</h4>
              <ul className="mt-3 text-gray-300 space-y-2 list-disc list-inside">
                <li>Design and implement infrastructure-as-code (Terraform, CloudFormation) for repeatable environments</li>
                <li>Build and maintain Kubernetes clusters (EKS/GKE/AKS), including Helm charts and operator workflows</li>
                <li>Design CI/CD pipelines (GitHub Actions, Jenkins, GitLab CI) for reliable, fast deployments</li>
                <li>Container orchestration and image lifecycle management (Docker, registries, image scanning)</li>
                <li>Observability & monitoring — Prometheus, Grafana and alerting</li>
                <li>Secrets & configuration management (Vault, SOPS) and secure deployment practices</li>
                <li>Automation with Ansible, shell scripting and GitHub API integrations for developer productivity</li>
                <li>Incident response, runbooks and reliability improvements (SRE practices)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold">Who I am</h4>
              <ul className="mt-3 text-gray-300 space-y-2 list-disc list-inside">
                <li>Disciplined and consistent — my 6-day fitness routine builds the same focus and reliability I bring to engineering.</li>
                <li>Calm under pressure — I stay composed in production incidents, prioritize clearly, and execute without panic.</li>
                <li>Driven by mastery and long-term growth — I prefer depth, fundamentals, and scalable solutions over shortcuts.</li>
		<li>High ownership mindset — I take responsibility end-to-end, from debugging to deployment to documentation.</li>
		<li>Structured thinker — I break complex problems into clean, predictable workflows and automate them.</li>
		<li>Resilient and dependable — setbacks don’t stop me; I rebuild, improve, and come back stronger every time.</li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Skills</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold">DevOps & Cloud</h4>
              <ul className="mt-3 text-gray-300 space-y-1">
                <li>AWS — EC2, S3, IAM, VPC, EKS</li>
                <li>Infrastructure as Code — Terraform, CloudFormation</li>
                <li>Kubernetes — cluster ops, Helm, service mesh basics</li>
                <li>CI/CD — GitHub Actions, Jenkins, GitLab CI</li>
                <li>Container tooling — Docker, container registries, image scanning</li>
                <li>Configuration & Secrets — Ansible, Vault, SOPS</li>
                <li>Observability — Prometheus, Grafana, ELK/EFK, tracing</li>
                <li>AWS CLI & automation tooling</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold">Linux & Scripting</h4>
              <ul className="mt-3 text-gray-300 space-y-1">
                <li>Linux administration and kernel/process basics</li>
                <li>Shell scripting & automation (organize.sh, cron jobs, systemd)</li>
                <li>Process management, log collection and rotation</li>
                <li>Small automation projects to improve developer workflows</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold">Programming & Tools</h4>
              <ul className="mt-3 text-gray-300 space-y-1">
                <li>Git & GitHub — workflows, actions, API integrations</li>
                <li>TypeScript (foundational) and Node basics</li>
                <li>REST APIs, JSON & YAML for infra configs</li>
                <li>Foundational UI — HTML, CSS, responsive UI (career start)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-800 p-5 rounded-lg">
            <h4 className="font-semibold">Personal Skills</h4>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-300">
              <div>Ownership mindset</div>
              <div>Calm problem-solving</div>
              <div>Strong discipline</div>
              <div>Team collaboration</div>
              <div>Long-term thinking</div>
              <div>Responsibility-driven</div>
              <div>High reliability</div>
              <div>Focused execution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Selected Projects</h3>
          <p className="mt-2 text-gray-400">Practical, hands-on projects demonstrating automation, tooling and infrastructure skills.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card */}
            {[
              {
    title: "Access & Health Automation",
    category: "automation",
    impact:
      "Reduced manual access audits and health checks by automating user access validation and EC2 health monitoring, minimizing human error in routine operations.",
    tech: ["Shell", "GitHub API", "CI"],
    link: "https://github.com/VEER0402/NodeHealth-Of-System"
  },
  {
    title: "Linux Automation Projects",
    category: "automation",
    impact:
      "Automated repetitive Linux housekeeping tasks using shell scripts, reducing manual effort and improving operational consistency.",
    tech: ["Bash", "Cron", "Systemd"],
    link: "https://github.com/VEER0402/Shell-Scripts"
  },
  {
    title: "GitHub Actions CI with Docker",
    category: "ci",
    impact:
      "Implemented a CI pipeline with test gating and Dockerized builds that blocks faulty code early, improving build reliability before deployment.",
    tech: ["GitHub Actions", "Docker", "Jest", "Node.js"],
    link: "https://github.com/VEER0402/github-actions-ci-docker"
  },
  {
    title: "GitHub Actions CI Comparison",
    category: "ci",
    impact:
      "Compared Jenkins and GitHub Actions pipelines to understand hosted vs self-managed CI tradeoffs, helping choose the right CI strategy per use case.",
    tech: ["GitHub Actions", "Jenkins", "CI/CD"],
    link: "https://github.com/VEER0402/Github-Actions-Project"
  },
  {
    title: "Jenkins CI with Docker Agent",
    category: "ci",
    impact:
      "Isolated Jenkins builds using Docker agents, ensuring consistent build environments and reducing dependency conflicts on the Jenkins server.",
    tech: ["Jenkins", "Docker", "Java"],
    link: "https://github.com/VEER0402/jenkins-ci-java-with-docker"
  },
  {
    title: "Jenkins CI without Docker",
    category: "ci",
    impact:
      "Built a traditional Jenkins CI pipeline to understand server-based build execution and its limitations compared to containerized pipelines.",
    tech: ["Jenkins", "Maven", "Java 17"],
    link: "https://github.com/VEER0402/jenkins-ci-java-without-docker"
  },
  {
    title: "Terraform Infrastructure Projects",
    category: "infra",
    impact:
      "Converted manual AWS provisioning into Terraform-based workflows, enabling repeatable infrastructure creation and faster environment recovery.",
    tech: ["Terraform", "AWS", "IaC"],
    link: "https://github.com/VEER0402/terraform_projects"
  },
  {
    title: "IaC Concepts & Notes",
    category: "infra",
    impact:
      "Documented Infrastructure-as-Code best practices to improve long-term maintainability and reduce configuration drift.",
    tech: ["Terraform", "IaC"],
    link: "https://github.com/VEER0402/IAC--Concepts"
  },
  {
    title: "Ansible Configuration Management",
    category: "infra",
    impact:
      "Automated configuration management across EC2 instances using Ansible, reducing manual setup time and ensuring consistent system state.",
    tech: ["Ansible", "AWS EC2"],
    link: "https://github.com/VEER0402/ansible-examples"
  },
  {
    title: "Node App Deployment on AWS",
    category: "aws",
    impact:
      "Deployed a Node.js application on AWS EC2 with IAM-based access control, improving deployment security and environment isolation.",
    tech: ["AWS EC2", "IAM", "Node.js"],
    link: "https://github.com/VEER0402/aws-session"
  },
  {
    title: "Contact Manager Backend",
    category: "frontend",
    impact:
      "Built REST APIs for a contact management system, strengthening backend fundamentals and API-driven system design.",
    tech: ["Spring Boot", "MySQL"],
    link: "https://github.com/VEER0402/Contact-Manager-backend"
  },
  {
    title: "Contact Manager Frontend",
    category: "frontend",
    impact:
      "Developed an Angular-based UI consuming REST APIs.",
    tech: ["Angular", "TypeScript"],
    link: "https://github.com/VEER0402/Contact-Manager-frontend"
  },
  {
    title: "Future DevOps Projects",
    category: "future",
    impact:
      "Planned work covering Kubernetes, monitoring, and SRE practices to deepen production-grade DevOps expertise.",
    tech: ["Kubernetes", "Observability"],
    link: "#"
  }   ].map((p) => (
        <article
  key={p.title}
  className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border transition-all duration-300 ${projectStyles[p.category]}`}
>
  <h4 className="font-semibold text-lg">{p.title}</h4>

  <p className="mt-2 text-gray-300 text-sm">{p.impact}</p>

  <div className="mt-3 flex flex-wrap gap-2">
    {p.tech.map((t) => (
      <span
        key={t}
        className="text-xs px-2 py-1 rounded-full border border-gray-700 text-gray-300"
      >
        {t}
      </span>
    ))}
  </div>

  <a
    href={p.link}
    target="_blank"
    className="inline-block mt-4 text-sm text-blue-300 underline"
  >
    GitHub →
  </a>
</article>

            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Experience</h3>

          <div className="mt-6 space-y-6">
            <div className="bg-gray-800 p-5 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">DevOps Engineer — 2023–Present</h4>
                  <p className="text-sm text-gray-400 mt-1">Infrastructure automation, CI/CD, shell scripting, GitHub integrations, Kubernetes & observability.</p>
                </div>
                <div className="text-sm text-gray-400">Present</div>
              </div>

              <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
                <li>Infrastructure automation and Terraform-powered IaC for AWS (EKS, VPCs, IAM)</li>
                <li>Design and maintain Kubernetes clusters, Helm charts and deployment strategies</li>
                <li>CI/CD pipelines with GitHub Actions and Jenkins for automated delivery</li>
                <li>Container lifecycle management, image scanning and registries</li>
                <li>Observability and monitoring with Prometheus, Grafana and ELK/EFK stacks</li>
                <li>Secrets management and secure deployment practices (Vault, SOPS)</li>
                <li>Shell scripting and GitHub API integrations to automate developer workflows</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">UI Developer — TCS (2021–2022)</h4>
                  <p className="text-sm text-gray-400 mt-1">Built UI modules using TypeScript, HTML and CSS; collaborated with backend teams for production-ready components.</p>
                </div>
                <div className="text-sm text-gray-400">2021–2022</div>
              </div>

              <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
                <li>Delivered production UI components and integrated with backend services</li>
                <li>Learned code structure, clean engineering and disciplined delivery</li>
                <li>Gained strong fundamentals that later fed into DevOps practice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Resume</h3>
            

            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
              <li>DevOps experience: automation, CI/CD, Kubernetes, Terraform</li>
              <li>Technical skills: Shell, GitHub Actions, Docker, Prometheus, Grafana</li>
              <li>Education & Certifications</li>
              <li>Projects & Achievements: GitHub API automation, IaC setups, Linux utilities</li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500">Download Resume</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-gray-700">Contact</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Contact</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold">Get in touch</h4>
             <ul className="mt-3 text-gray-300 space-y-2">
  <li>
    <strong>Email:</strong>
    <a
      href="mailto:veerendrad1999@gmail.com"
      className="text-blue-300 ml-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      veerendrad1999@gmail.com
    </a>
  </li>

  <li>
    <strong>GitHub:</strong>
    <a
      href="https://github.com/VEER0402"
      className="text-blue-300 ml-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      github.com/VEER0402
    </a>
  </li>

  <li>
    <strong>LinkedIn:</strong>
    <a
      href="https://linkedin.com/in/veerendra-dwivedi/"
      className="text-blue-300 ml-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      linkedin.com/in/veerendra-dwivedi/
    </a>
  </li>

  <li>
    <strong>Phone:</strong>
    <a
      href="tel:+919140136718"
      className="text-blue-300 ml-1"
    >
      +91 9140136718
    </a>
  </li>
</ul>



              <div className="mt-6">
                <a href="https://github.com/VEER0402" className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500">Open GitHub</a>
              </div>
            </div>

            <form className="bg-gray-800 p-6 rounded-lg" onSubmit={(e) => e.preventDefault()}>
              <h4 className="font-semibold">Message</h4>
              <div className="mt-3 space-y-3">
                <input placeholder="Your name" className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-sm" />
                <input placeholder="Your email" className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-sm" />
                <textarea placeholder="Your message" rows={5} className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-sm" />
                <button type="submit" className="w-full px-4 py-3 rounded bg-blue-600 hover:bg-blue-500">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Personal Vision / Beyond Engineering */}
      <section id="vision" className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Beyond Engineering</h3>
          <div className="mt-4 text-gray-300 leading-relaxed">
            <p>I keep a disciplined 6-day fitness routine that reinforces consistency and mental toughness — qualities I bring to my engineering work.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Veerendra Dwivedi — DevOps Engineer</div>
          <div>Built for clarity, reliability and long-term growth.</div>
        </div>
      </footer>
    </div>
  );
}
