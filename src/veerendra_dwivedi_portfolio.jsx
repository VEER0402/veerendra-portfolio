import React from "react";

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
                title: "access-and-health-automation",
                desc: "Automated User Access Auditing & Instance Health Monitoring Pipeline.",
                tech: ["Shell", "GitHub API", "CI"],
                link: "https://github.com/VEER0402/NodeHealth-Of-System"
              },
              
              {
                title: "Linux Automation Projects",
                desc: "Utility scripts (organize.sh), monitoring helpers and directory automation for daily tasks.",
                tech: ["Bash", "Cron", "Systemd"],
                link: "https://github.com/VEER0402/Shell-Scripts/blob/main/shell-scripts/organize.sh"
              },
              {
                title: "Ecommerce",
                desc: "A polished UI project from my early career demonstrating structured forms, popups and CRUD flows.",
                tech: ["Angular", "TypeScript", "HTML/CSS"],
                link: "https://github.com/VEER0402/ecommerce"
              },
              {
                title: "Networking Concepts Repository",
                desc: "A curated set of notes, scripts and examples explaining key networking concepts for engineers.",
                tech: ["Docs", "Shell"],
                link: "https://github.com/VEER0402/Networking"
              },
       {
                title: "CertiFications",
                desc: "My Certifications.",
                tech: ["GenAI", "MySQL"],
                link: "https://github.com/VEER0402/Certifications"
              },
              {
                title: "Node App AWS Deployment",
                desc: "Created IAM role , EC2 Instances and deployed it on AWS.",
                tech: ["Node","NPM","EC2"],
                link: "https://github.com/VEER0402/aws-session"
              },
		 {
                title: "Github-actions-ci-docker",
                desc: " Demonstrates a production-style Continuous Integration (CI) pipeline implemented using GitHub Actions. The pipeline enforces quality gates using unit tests and ensures that only verified code progresses through the workflow.",
                tech: ["Node.js","NPM","EC2","Express",""Jest & Supertest (unit testing),"GitHub Actions (CI)"],
                link: "https://github.com/VEER0402/github-actions-ci-docker"
              },
		 {
                title: "Github-Actions-Project",
                desc: "Jenkins is self-hosted, meaning it requires its own server to run, while GitHub Actions is hosted by GitHub and runs directly in your GitHub repository.",
                tech: ["Node","NPM","EC2","Express"],
                link: "https://github.com/VEER0402/Github-Actions-Project"
              },
		 {
                title: "Jenkins CI Pipeline with Docker-based Build Agent",
                desc: "This project demonstrates a Jenkins CI pipeline where application builds are executed inside Docker containers. The pipeline is designed to keep the Jenkins server lightweight while ensuring consistent and reproducible build environments.",
                tech: ["Node","NPM","Dicker","Jenkinsx"],
                link: "https://github.com/VEER0402/jenkins-ci-java-with-docker"
              },
		 {
                title: "Jenkins CI Pipeline for Java Application (Without Containerization)",
                desc: "This project demonstrates a traditional Jenkins Continuous Integration (CI) pipeline for a Java application.
Jenkins pulls source code from GitHub and performs a Maven build directly on the Jenkins server without using containerization.",
                tech: ["NPM","EC2","GitHub","Java17","Apache Maven","Ubuntu Linux (EC2)"],
                link: "https://github.com/VEER0402/jenkins-ci-java-without-docker"
              },
		 {
                title: "Terraform_projects",
                desc: "In this repo there will be multiple terraform projects.",
                tech: ["Terraform","NPM","EC2"],
                link: "https://github.com/VEER0402/Jenkins-projects"
              },
		 {
                title: "IAC--Concepts",
                desc: "Infrastructure as Code (IaC) using Terraform — concepts, best practices, and production-oriented DevOps notes.",
                tech: [],
                link: "https://github.com/VEER0402/IAC--Concepts"
              },
		 {
                title: "Ansible-examples",
                desc: "This repository contains Ansible configuration management.
All playbooks here are written and tested on real AWS EC2 instances using a proper control node → managed nodes architecture.",
                tech: ["Cloud Provider: AWS EC2","Ansible Control Node: Dedicated EC2 instance","Git + GitHub (SSH-based access)"],
                link: "https://github.com/VEER0402/ansible-examples"
              },
		 {
                title: "Contact-Manager-frontend",
                desc: "About This is the java+MySQL+Angular based Project for Contact management , Like Add Contact, Modify Contact , Delete Contact Etc.",
                tech: ["Java (JDK)","Spring Boot ","MySQL","Angular"],
                link: "https://github.com/VEER0402/Contact-Manager-frontend"
              },
		 {
                title: "Contact-Manager-backend",
                desc: "A complete Contact Management System built from scratch using Spring Boot (Backend) and Angular (Frontend). This project was developed to deeply understand real-world application architecture, backend–frontend integration, and CRUD workflows used in enterprise projects.",
                tech: ["Java (JDK)","Spring Boot ","MySQL","Angular"],
                link: "https://github.com/VEER0402/Contact-Manager-backend"
              },
		       {
                title: "Future DevOps Projects",
                desc: "Placeholders for upcoming work: infra-as-code examples, advanced CI patterns, SRE experiments.",
                tech: ["TBD"],
                link: "#"
              }
            ].map((p) => (
              <article key={p.title} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <p className="mt-2 text-gray-300">{p.desc}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 border border-gray-700 rounded-full text-gray-300">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-3">
                    <a href={p.link} className="text-sm text-blue-300 underline">GitHub </a>
                    {/* <button href={p.link} className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500">GitHub</button> */}
                  </div>
                </div>
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
