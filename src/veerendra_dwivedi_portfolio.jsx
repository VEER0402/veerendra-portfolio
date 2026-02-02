import React from "react";
import { motion } from "framer-motion";

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
{/* Hero */}
<section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
      Hi, I’m <span className="text-blue-400">Veerendra</span>
    </h2>

    <p className="mt-3 text-xl text-blue-300 font-medium">
      DevOps Engineer
    </p>

    <p className="mt-6 text-lg text-gray-300 max-w-xl">
      I design and operate production-grade cloud infrastructure and CI/CD systems.
DevOps Engineer with hands-on experience in AWS, Kubernetes, Terraform, and Jenkins — focused on reliability, automation, and scalable deployments.
    </p>

    <div className="mt-8 flex items-center space-x-4">
      <a
        href="#projects"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-medium transition"
      >
        View Projects
      </a>

      <a
        href=""
        className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-700 hover:border-blue-500 transition"
      >
        Resume
      </a>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="order-first md:order-last flex justify-center"
  >
    <div className="w-full max-w-sm rounded-2xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 shadow-lg">
      <div className="w-64 h-64 mx-auto rounded-lg overflow-hidden">
        <img
          src="/veerendra.jpg"
          alt="Veerendra Dwivedi"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="mt-6 text-gray-300 text-center">
        Disciplined. Calm. Reliable.
      </p>
    </div>
  </motion.div>
</section>


      {/* About */}
      <section id="about" className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">About Me</h3>
          <p className="mt-4 text-gray-300 leading-relaxed">I am a DevOps Engineer with hands-on experience in AWS cloud infrastructure, CI/CD automation, containerized deployments, and Kubernetes-based application delivery.

I started my career in frontend engineering, which helped me understand application architecture deeply. I later transitioned into DevOps, where I now focus on building reliable deployment pipelines, managing cloud resources, and improving system stability through automation and observability.

My work revolves around infrastructure as code, Docker & Kubernetes workloads, Git-based workflows, and production support, with a strong focus on ownership and continuous improvement.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold">What I do</h4>
              <ul className="mt-3 text-gray-300 space-y-2 list-disc list-inside">
                <li>Design and manage AWS cloud infrastructure using Terraform (EC2, IAM, RDS, EKS, S3).</li>
                <li>Build and maintain CI/CD pipelines using Jenkins (Groovy) and GitHub Actions.</li>
                <li>Containerize applications using Docker multi-stage builds and manage image lifecycle.</li>
                <li>Deploy and manage applications on Kubernetes (EKS) using Deployments, Services, ConfigMaps, and Ingress.</li>
                <li>Implement Infrastructure as Code and automate provisioning for repeatable environments.</li>
                <li>Monitor applications and infrastructure using CloudWatch, Prometheus & Grafana.</li>
                <li>Manage secrets and configuration securely using Kubernetes Secrets and environment-based configs.</li>
                <li>Support production systems, troubleshoot incidents, and improve system reliability.</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold">Who I am</h4>
              <ul className="mt-3 text-gray-300 space-y-2 list-disc list-inside">
                <li>Strong ownership mindset — handle deployments, incidents, and infra reliability end-to-end.</li>
                <li>Calm under pressure — experienced in resolving production issues during live traffic.</li>
                <li>Process-driven — follow structured CI/CD, version control, and change management practices.</li>
		            <li>Automation-focused — always look to reduce manual effort and improve deployment speed.</li>
		            <li>Reliability oriented — focus on uptime, monitoring, and proactive alerting.</li>
		            <li>Strong team collaborator — work closely with developers to streamline delivery workflows.</li>

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
                <li>Cloud: AWS (EC2, IAM, S3, RDS, EKS, CloudWatch)</li>
                <li>CI/CD: Jenkins (Groovy Pipelines), GitHub Actions</li>
                <li>Containers: Docker (Multi-stage builds, Image optimization)</li>
                <li>Orchestration: Kubernetes (Deployments, Services, Ingress, ConfigMaps, Secrets)</li>
                <li>IaC: Terraform</li>
                <li>Configuration & Secrets — Ansible</li>
                <li>Scripting: Bash, Shell</li>
                <li>Version Control: Git, GitHub, SVN</li>
                <li>Monitoring: Prometheus, Grafana, CloudWatch</li>
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
    title: "githubactions_selfhosted_runner",
    category: "CI",
    impact:
      "Deployed app using selfhosted_runner.",
    tech: ["GitHub Actions", "selfhosted_runner"],
    link: "https://github.com/VEER0402/githubactions_selfhosted_runner"
  },
 {
    title: "Docker",
    category: "CD",
    impact:
      "reduces image layers (potentially smaller/faster builds.",
    tech: ["Docker"],
    link: "https://github.com/VEER0402/Docker"
  },
 {
    title: "Docker Compose",
    category: "CD",
    impact:
      "Compose unifies your multi-container app into one config that boots everything together.",
    tech: ["Docker"],
    link: "https://github.com/VEER0402/Docker-compose"
  },
 {
    title: "MERN-Docker-compose",
    category: "CD",
    impact:
      "Prepares the project for production-like setups (CI/CD, scaling, volume persistence, etc.)",
    tech: ["Docker"],
    link: "https://github.com/VEER0402/mern-docker-compose"
  },
  {
    title: "Future DevOps Projects",
    category: "future",
    impact:
      "Planned work covering Kubernetes, monitoring, and SRE practices to deepen production-grade DevOps expertise.",
    tech: ["Kubernetes", "Observability"],
    link: "#"
  }   ].map((p) => (
        <motion.article
  key={p.title}
  whileHover={{ y: -6 }}
  transition={{ type: "spring", stiffness: 300 }}
  className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border ${projectStyles[p.category]} shadow-lg`}
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
</motion.article>

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
                  <h4 className="font-semibold">DevOps Engineer — 2022–Present</h4>
                  <p className="text-sm text-gray-400 mt-1">Infrastructure automation, CI/CD, shell scripting, GitHub integrations, Kubernetes & observability.</p>
                </div>
                <div className="text-sm text-gray-400">Present</div>
              </div>

              <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
        <li>Designed and maintained end-to-end CI/CD pipelines using Jenkins and GitHub Actions, automating code checkout,
build, Docker image creation, security scanning, pushing images to ECR, and environment-based Kubernetes deployments.</li>

<li> Optimized containerization using multi-stage Docker builds and distroless base images, reducing Docker image size
by ~70% and improving security and deployment speed.</li>

<li>Implemented and maintained self-hosted GitHub Actions and standardized Docker-based build workflows, enabling
consistent CI/CD execution across development, testing, and production environments.</li>

<li>Improved stability and reliability of deployment pipelines by enforcing environment consistency, automated
validations, and controlled release strategies.</li>

<li>Provisioned and managed infrastructure using Terraform and automated configuration tasks using Ansible,
supporting environment-specific infrastructure setups.</li>

<li>Deployed and managed containerized applications on Kubernetes using Deployments, Services, ConfigMaps, and
Ingress, implementing environment-based configurations and rolling updates for seamless releases.</li>

<li>Collaborated with client and cross-functional teams to translate business requirements into automated, stable
deployment and infrastructure solutions.</li>

<li> Actively supported production systems, troubleshooting application and infrastructure issues using logs, monitoring
dashboards, and system metrics to restore services within SLA timelines.</li>

<li>Earlier contributed to frontend application development using Angular and TypeScript, which helped in
understanding application deployment and runtime behavior.</li>

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
                <li>Worked as a full-time SDE Trainee, contributing to UI and application development.</li>

<li>Built and enhanced UI components using Angular, HTML, CSS, TypeScript, and Bootstrap.</li>

<li>Gained hands-on exposure to Java-based applications, Apache Tomcat, and enterprise development workflows.</li>

<li>Integrated frontend modules with backend services and performed API testing and validation.</li>

<li>Conducted unit testing and optimized frontend performance.</li>

<li>Collaborated with QA teams to reproduce issues and validate bug fixes.</li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      {/* <section id="resume" className="border-t border-gray-800">
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
      </section> */}

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
      href="mailto:work.veerendra1999@gmail.com"
      className="text-blue-300 ml-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      work.veerendra1999@gmail.com
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
    <strong>X:</strong>
    <a
      href="https://x.com/veerdwivedi0402"
      className="text-blue-300 ml-1"
    >
      x.com/veerdwivedi0402
    </a>
  </li>
 <li>
    <strong>Instagram:</strong>
    <a
      href="https://www.instagram.com/gymgineer_veer/"
      className="text-blue-300 ml-1"
    >
      instagram.com/gymgineer_veer
    </a>
  </li>
</ul>



              <div className="mt-6">
                <a href="https://github.com/" className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500">Open GitHub</a>
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
