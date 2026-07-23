import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// --- CUSTOM SVG ICONS FOR CYBER-OPS DASHBOARD ---
const TerminalIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
  </svg>
);

const NetworkIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
  </svg>
);

const GitCommitIcon = () => (
  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ShieldAlertIcon = () => (
  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const ProjectList = [
  {
    title: "Enterprise Cloud Architecture Automation (InfraForge)",
    category: "cloud",
    impact:
      "Deployed a highly available, multi-tier AWS infrastructure using modular Terraform, provisioning custom VPCs, multi-AZ private subnets, and an AWS EKS cluster to securely host enterprise containerized workloads.",
    tech: ["AWS", "EKS", "VPC", "Terraform", "S3", "DynamoDB", "Remote State"],
    link: "https://github.com/VEER0402/InfraForge"
  },
  {
    title: "AWS Production-Style Infrastructure with ASG, ALB & Bastion",
    category: "cloud",
    impact:
      "Designed and deployed a secure AWS architecture with private EC2 instances (Auto Scaling Group), Application Load Balancer, and Bastion Host access. Diagnosed load balancing issues caused by partial deployment and improved traffic routing reliability.",
    tech: ["AWS", "EC2", "VPC", "Auto Scaling", "Load Balancer", "Bastion Host"],
    link: "https://github.com/VEER0402/aws-vpc-auto-scaling-bastion-architecture"
  },
  {
    title: "Automated Access Validation & EC2 Health Monitoring",
    category: "automation",
    impact:
      "Automated user access validation and EC2 instance health checks using shell scripts and GitHub API, reducing manual audits and improving operational reliability.",
    tech: ["Shell Scripting", "GitHub API", "CI/CD", "AWS EC2"],
    link: "https://github.com/VEER0402/NodeHealth-Of-System"
  },
  {
    title: "Linux System Automation using Bash and Cron",
    category: "automation",
    impact:
      "Developed Bash automation scripts for routine Linux maintenance tasks including log cleanup, scheduled jobs, and system monitoring using cron and systemd timers.",
    tech: ["Bash", "Cron", "Systemd", "Linux Admin"],
    link: "https://github.com/VEER0402/Shell-Scripts"
  },
  {
    title: "Dockerized CI Pipeline using GitHub Actions",
    category: "ci",
    impact:
      "Implemented a CI pipeline using GitHub Actions that builds and tests applications inside Docker containers, ensuring consistent build environments and early test validation.",
    tech: ["GitHub Actions", "Docker", "Jest", "Node.js"],
    link: "https://github.com/VEER0402/github-actions-ci-docker"
  },
  {
    title: "CI Pipeline Comparison: Jenkins vs GitHub Actions",
    category: "ci",
    impact:
      "Evaluated hosted vs self-managed CI pipelines by implementing equivalent workflows in Jenkins and GitHub Actions, highlighting tradeoffs in scalability, maintenance, and build isolation.",
    tech: ["GitHub Actions", "Jenkins", "CI/CD", "DevOps Strategy"],
    link: "https://github.com/VEER0402/Github-Actions-Project"
  },
  {
    title: "Containerized CI/CD Pipeline using Jenkins + Docker",
    category: "ci",
    impact:
      "Designed a Jenkins pipeline using Docker agents to isolate build environments, eliminate dependency conflicts, and enable reproducible CI builds for Java applications.",
    tech: ["Jenkins", "Docker", "Java", "CI/CD Pipelines"],
    link: "https://github.com/VEER0402/jenkins-ci-java-with-docker"
  },
  {
    title: "Traditional Jenkins CI Pipeline (Server-Based Builds)",
    category: "ci",
    impact:
      "Implemented a traditional Jenkins pipeline executing builds directly on the Jenkins server to analyze limitations of non-containerized CI environments.",
    tech: ["Jenkins", "Maven", "Java 17", "CI/CD"],
    link: "https://github.com/VEER0402/jenkins-ci-java-without-docker"
  },
  {
    title: "AWS Infrastructure Provisioning using Terraform",
    category: "infra",
    impact:
      "Provisioned AWS infrastructure including EC2, IAM, and networking components using Terraform to enable repeatable environment creation and infrastructure version control.",
    tech: ["Terraform", "AWS", "IaC", "CloudOps"],
    link: "https://github.com/VEER0402/terraform_projects"
  },
  {
    title: "Infrastructure as Code Practices with Terraform",
    category: "infra",
    impact:
      "Documented Terraform best practices including state management, modular infrastructure design, and configuration drift prevention.",
    tech: ["Terraform", "IaC", "Best Practices"],
    link: "https://github.com/VEER0402/IAC--Concepts"
  },
  {
    title: "Server Configuration Automation using Ansible",
    category: "infra",
    impact:
      "Automated configuration management across multiple EC2 instances using Ansible playbooks to ensure consistent server setup and reduce manual provisioning effort.",
    tech: ["Ansible", "AWS EC2", "Automation"],
    link: "https://github.com/VEER0402/ansible-examples"
  },
  {
    title: "Node.js Application Deployment on AWS EC2",
    category: "aws",
    impact:
      "Deployed a containerized Node.js application on AWS EC2 with IAM-based access control, improving deployment security and environment isolation.",
    tech: ["AWS EC2", "IAM", "Node.js", "Deployment"],
    link: "https://github.com/VEER0402/aws-session"
  },
  {
    title: "REST API Backend for Contact Management System",
    category: "backend",
    impact:
      "Built RESTful APIs using Spring Boot and MySQL for managing contacts, implementing CRUD operations and API-driven application architecture.",
    tech: ["Spring Boot", "MySQL", "Java"],
    link: "https://github.com/VEER0402/Contact-Manager-backend"
  },
  {
    title: "Angular Frontend for Contact Management System",
    category: "frontend",
    impact:
      "Developed a responsive Angular frontend consuming REST APIs for a contact management platform, enabling full CRUD functionality through a modern UI.",
    tech: ["Angular", "TypeScript", "HTML/CSS"],
    link: "https://github.com/VEER0402/Contact-Manager-frontend"
  },
  {
    title: "Self-Hosted GitHub Actions Runner Setup",
    category: "ci",
    impact:
      "Configured and deployed a self-hosted GitHub Actions runner on Linux to execute CI jobs on custom infrastructure with greater control over build environments.",
    tech: ["GitHub Actions", "Self-hosted Runner", "Linux Admin"],
    link: "https://github.com/VEER0402/githubactions_selfhosted_runner"
  },
  {
    title: "Docker Image Optimization & Containerization",
    category: "cd",
    impact:
      "Containerized applications using Docker and optimized images with multi-stage builds to reduce image size and improve deployment efficiency.",
    tech: ["Docker", "Image Optimization", "Containers"],
    link: "https://github.com/VEER0402/Docker"
  },
  {
    title: "Multi-Container Application using Docker Compose",
    category: "cd",
    impact:
      "Orchestrated multi-container application environments using Docker Compose, enabling consistent local development and service dependency management.",
    tech: ["Docker", "Docker Compose", "Orchestration"],
    link: "https://github.com/VEER0402/Docker-compose"
  },
  {
    title: "MERN Stack Deployment using Docker Compose",
    category: "cd",
    impact:
      "Containerized a MERN stack application using Docker Compose to simulate production-style environments with isolated services and persistent volumes.",
    tech: ["Docker", "Docker Compose", "MERN Stack"],
    link: "https://github.com/VEER0402/mern-docker-compose"
  }
];

const IncidentLogs = [
  {
    id: "INC-3091",
    title: "Terraform CI/CD State Mismatch",
    severity: "CRITICAL",
    category: "Infrastructure",
    description: "While building Terraform-based AWS infrastructure with CI/CD, faced multiple state mismatches and pipeline failures related to lock consistency.",
    investigation: "Encountered Terraform state lock conflicts (DynamoDB) and state mismatches. Analyzed pipeline execution logs, identified manual changes in resources that bypassed IaC, causing configuration drift.",
    resolution: "Implemented remote state management (S3) with state locking (DynamoDB). Reconciled drift using `terraform state` and `terraform import` commands. Integrated Checkov scans into the pipeline to prevent security misconfigurations.",
    tools: ["Terraform", "AWS S3", "DynamoDB", "GitHub Actions", "Checkov"]
  },
  {
    id: "INC-2041",
    title: "AWS Load Balancing Traffic Failures",
    severity: "CRITICAL",
    category: "Networking",
    description: "Intermittent requests served failures for a Python app deployed behind an Application Load Balancer using Auto Scaling Group.",
    investigation: "Verified ALB targets. Discovered target group registered nodes that had incomplete configuration setups. Requests sent to these nodes timed out. In addition, private subnet nodes could not be accessed securely.",
    resolution: "Configured ALB target group health checks strictly. Implemented unified packer/ansible configurations across scaling nodes. Deployed a secure Bastion Host in a public subnet to allow debugging access to private subnet nodes.",
    tools: ["AWS ALB", "Auto Scaling Group", "EC2", "VPC", "Bastion Host", "SSH"]
  },
  {
    id: "INC-1088",
    title: "CI Pipeline Quality Gate Rejections",
    severity: "HIGH",
    category: "CI/CD Pipeline",
    description: "Development pipelines regularly failing at the security and verification phases, causing deployment logjams.",
    investigation: "Identified failing unit test suites and high vulnerability levels in node base packages flagged by automated scanners (Trivy and SonarQube).",
    resolution: "Optimized pipelines by creating multi-stage caching to speed up scans. Upgraded base images to modern distroless layers, resolving ~70% of base vulnerabilities, and updated failing unit test definitions.",
    tools: ["Jenkins", "SonarQube", "Trivy", "Docker", "Node.js"]
  },
  {
    id: "INC-0932",
    title: "Docker Container Runtime port conflicts",
    severity: "HIGH",
    category: "Containerization",
    description: "Local orchestration crashes and container failures during multi-container application startup.",
    investigation: "Docker Compose scripts failed due to environment variable differences between staging and dev, duplicate port bindings, and improper service start order (db failing to start before backend).",
    resolution: "Refactored Dockerfiles to standard multi-stage builds. Configured Docker Compose using `depends_on` with healthcheck conditions and mapped unique local ports. Cleaned up volume layouts to prevent caching dirty state.",
    tools: ["Docker", "Docker Compose", "Multi-stage builds", "Linux Tools"]
  },
  {
    id: "INC-0842",
    title: "Prometheus Monitoring Metric Alerts",
    severity: "MEDIUM",
    category: "Observability",
    description: "Abnormal memory and CPU saturation alerts triggered on AWS instances during periodic cron job runs.",
    investigation: "Investigated metrics using Prometheus and custom Grafana dashboards. Traced high memory leak back to an un-optimized log collection script running without rotation.",
    resolution: "Created standard logrotate configurations for Linux system services. Re-scheduled automated cron jobs using systemd timers to distribute load evenly and prevent concurrent execution spikes.",
    tools: ["Prometheus", "Grafana", "Linux Systemd", "Cron", "Bash"]
  }
];

const PipelineStages = [
  {
    id: "stage-1",
    name: "Git Push & Webhook",
    desc: "Developer commits code changes and pushes to GitHub repository, triggering the automation webhook.",
    cmd: "git push origin main",
    log: "commit e812ca4 [author: VEER0402]\nBranch: main -> refs/heads/main\nSending build notification payload to orchestration listener...\nWebhook endpoint verified: Status 200 OK\nRunner queued... Executing DevOps pipeline workflow."
  },
  {
    id: "stage-2",
    name: "Workspace & Checkout",
    desc: "Cleans up remnants of old builds and checkouts the latest commit cleanly on the runner environment.",
    cmd: "git clean -fdx && git checkout main",
    log: "[INFO] Cleaning workspace directory: /var/jenkins_home/workspace/core-pipeline\nRemoving target/ build/ node_modules/ ...\nWiped 4,812 untracked files. Workspace is clean.\nFetching remote metadata from origin...\nChecking out commit e812ca4288bcf... Done."
  },
  {
    id: "stage-3",
    name: "DevSecOps Scan",
    desc: "Executes Trivy filesystem scanning for raw secrets, and runs OWASP Dependency check to identify vulnerable modules.",
    cmd: "trivy fs . && dependency-check.sh --project 'core' --scan .",
    log: "[SEC] Initializing Trivy filesystem scanner...\nScanning source files for hardcoded API keys & credentials...\n0 plaintext secrets detected in Git repository. ✅\n[SEC] Executing OWASP Dependency Check...\nChecking vulnerability CVE databases: up-to-date.\nAnalyzing package dependency tree...\nVulnerability Count: 0 Critical, 0 High, 2 Medium. Scan passed."
  },
  {
    id: "stage-4",
    name: "SonarQube & Gates",
    desc: "Runs automated code quality analysis. Checks test coverage, code smells, duplication ratios, and waits for Quality Gate validation.",
    cmd: "mvn sonar:sonar -Dsonar.projectKey=core-app -Dsonar.qualitygate.wait=true",
    log: "[SQ] Executing SonarQube analysis runner...\nParsing code files...\nCalculating code duplication and complexity index...\nTest Coverage: 82.4% (Quality Gate threshold: > 80.0%)\nSonarQube server response: Quality Gate status: PASSED.\nValidation complete. CI execution allowed to proceed."
  },
  {
    id: "stage-5",
    name: "Docker Build & Scan",
    desc: "Builds a production-ready container image using multi-stage structures, then performs a Trivy vulnerability scan.",
    cmd: "docker build --target production -t core-app:latest . && trivy image core-app:latest",
    log: "[BUILD] Building container image using multi-stage Dockerfile...\nStep 1/12: FROM node:18-alpine AS builder... (cache hit)\nStep 7/12: FROM gcr.io/distroless/nodejs18-debian11 AS runner... OK\nCopying compiled binaries... Done.\nOptimized image built successfully. Size: 48.2 MB\n[SEC] Scanning built image with Trivy...\nTrivy scan results: 0 Critical, 0 High vulnerabilities. Approved."
  },
  {
    id: "stage-6",
    name: "Push to AWS ECR",
    desc: "Logs in to AWS ECR using IAM permissions and pushes the optimized Docker image to the repository registry.",
    cmd: "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com && docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/core-app:latest",
    log: "[ECR] Fetching authorization token...\nLogging in to AWS ECR registry: 123456789.dkr.ecr.us-east-1.amazonaws.com... Success.\nPushing image: core-app:latest...\nLayer 1/3: Pushed (cache hit)\nLayer 2/3: Pushed (cache hit)\nLayer 3/3: Pushed (3.2 MB)\nSuccessfully pushed image tag: latest. Digest: sha256:4a89cd..."
  },
  {
    id: "stage-7",
    name: "Deploy AWS EKS",
    desc: "Rolls out image onto AWS EKS cluster, running a zero-downtime rolling update deployment with active readiness checks.",
    cmd: "kubectl set image deployment/core-app-deploy core-app=123456789.dkr.ecr.us-east-1.amazonaws.com/core-app:latest -n production",
    log: "[EKS] Fetching kubeconfig parameters... Active EKS Context.\nInitiating rolling update for deployment/core-app-deploy...\nCreating new Pod replicas (v2)... Pods initializing.\nReadiness probes passing on new replicas... Healthy.\nTraffic routing transitioned to v2 container instances.\nTerminating legacy replicas (v1)... Done.\nZero-downtime rolling deployment complete. 3 pods active."
  }
];

export default function VeerendraPortfolio() {
  // Navigation & States
  const [activeTab, setActiveTab] = useState("all");
  const [activeIncident, setActiveIncident] = useState("INC-3091");
  const [activeStage, setActiveStage] = useState("stage-1");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "system", text: "LOGGING INTO DEVOPS NODE: dwivedi-core-01..." },
    { type: "system", text: "INITIALIZING ENCRYPTED TELEMETRY LINK... SUCCESS." },
    { type: "system", text: "LOADING PROFILE: Veerendra Dwivedi // DevOps Architect" },
    { type: "system", text: "SYSTEM STATUS: 100% OPERATIONAL | 3 EKS NODES ACTIVE" },
    { type: "system", text: "Type 'help' to view all available commands." }
  ]);
  const [metrics, setMetrics] = useState({
    cpu: 42,
    mem: 58,
    net: 142,
    uptime: "99.98%"
  });

  const terminalEndRef = useRef(null);

  // Auto-scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  // Simulate dynamic metric fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        cpu: Math.floor(Math.random() * 15) + 35, // 35-50%
        mem: Math.floor(Math.random() * 5) + 55,  // 55-60%
        net: Math.floor(Math.random() * 40) + 120 // 120-160 kb/s
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle Terminal CLI Inputs
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const command = terminalInput.trim().toLowerCase();
    const newHistory = [...terminalHistory, { type: "input", text: `dwivedi@devops-ops:~$ ${terminalInput}` }];

    switch (command) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Available commands:\n  about     - Brief self-intro\n  skills    - List core DevOps skillsets\n  projects  - Summarize top GitHub repos\n  contact   - Display social handles & email\n  metrics   - View live server health specs\n  clear     - Wipe output history"
        });
        break;
      case "about":
        newHistory.push({
          type: "output",
          text: "Veerendra Dwivedi — DevOps & Cloud Engineer.\nFocused on building automated CI/CD pipelines, containerized workloads, and Infrastructure-as-Code (IaC).\nExperienced in AWS, Kubernetes, Terraform, Ansible, and Docker systems."
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text: "Cloud: AWS (EC2, VPC, S3, IAM, EKS, ECR, Route53, CloudWatch, RDS, ELB, Lambda)\nIaC: Terraform, Ansible, CloudFormation\nCI/CD & Security: Jenkins, GitHub Actions, SonarQube, Trivy\nContainers: Docker, Kubernetes (EKS, Helm, HPA)\nMonitoring: Prometheus, Grafana, CloudWatch\nScripting: Python, Bash, YAML, JSON"
        });
        break;
      case "projects":
        newHistory.push({
          type: "output",
          text: "Top projects:\n  - InfraForge: Enterprise Cloud Architecture Automation with Terraform & EKS.\n  - NodeHealth: System access validation and monitoring pipeline."
        });
        break;
      case "contact":
        newHistory.push({
          type: "output",
          text: "Email: veerendrad1999@gmail.com\nGitHub: github.com/VEER0402\nLinkedIn: linkedin.com/in/veerendra-dwivedi/\nTwitter/X: x.com/veerdwivedi0402"
        });
        break;
      case "metrics":
        newHistory.push({
          type: "output",
          text: `CPU Load: ${metrics.cpu}%\nMemory Usage: ${metrics.mem}%\nNetwork Telemetry: ${metrics.net} kb/s\nUptime: ${metrics.uptime}\nEnvironment status: Active`
        });
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        newHistory.push({
          type: "output",
          text: `bash: command not found: ${command}. Type 'help' for options.`
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  // EmailJS logic
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        "service_vttwakm",
        "template_hq1xgqj",
        form,
        "an43mt0FVVJB94uu2"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Telemetry packet sent successfully! 🚀");
          form.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to deliver payload. Check connection logs. ❌");
        }
      );
  };

  // Filter projects helper
  const filteredProjects = ProjectList.filter(proj => {
    if (activeTab === "all") return true;
    if (activeTab === "ci-cd") return proj.category === "ci" || proj.category === "cd" || proj.category === "automation";
    if (activeTab === "aws-infra") return proj.category === "cloud" || proj.category === "infra" || proj.category === "aws";
    if (activeTab === "app-dev") return proj.category === "backend" || proj.category === "frontend";
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 cyber-grid relative antialiased overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-xl font-bold shadow-md shadow-blue-500/20 text-white font-mono">
              VD
            </div>
            <div>
              <h1 className="text-md font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Veerendra Dwivedi
              </h1>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider text-slate-400">
                  ENV: PRODUCTION-V2.1 // K8S: ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center space-x-1 font-mono text-xs text-slate-300">
            <a href="#pipeline" className="px-3 py-2 rounded-md hover:bg-slate-800/60 hover:text-blue-400 transition">
              PIPELINE
            </a>
            <a href="#metrics" className="px-3 py-2 rounded-md hover:bg-slate-800/60 hover:text-blue-400 transition">
              METRICS
            </a>
            <a href="#projects" className="px-3 py-2 rounded-md hover:bg-slate-800/60 hover:text-blue-400 transition">
              PROJECTS
            </a>
            <a href="#incidents" className="px-3 py-2 rounded-md hover:bg-slate-800/60 hover:text-blue-400 transition">
              INCIDENTS
            </a>
            <a href="#experience" className="px-3 py-2 rounded-md hover:bg-slate-800/60 hover:text-blue-400 transition">
              EXPERIENCE
            </a>
            <a href="#contact" className="ml-4 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 rounded border border-blue-500/40 hover:border-blue-400 transition">
              CONNECT
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-16">
        
        {/* HERO SECTION WITH PORTRAIT PHOTO & TERMINAL */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Portrait & Bio Panel */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Photo Widget */}
              <div className="flex items-center space-x-4 mb-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-md animate-pulse" />
                  <img
                    src="/veerendra.jpg"
                    alt="Veerendra Dwivedi"
                    className="relative w-24 h-24 rounded-full object-cover border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  />
                  <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                    <span>STATUS: OPERATIONAL</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1"> veerendra-dwivedi</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">ROLE: DevOps & Cloud Engineer</div>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Veerendra Dwivedi<br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  DevOps & Cloud Engineer
                </span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Experienced in designing robust CI/CD pipelines, provisioning AWS infrastructure through modular Terraform configurations, and managing containerized workloads on Kubernetes. Deploys DevSecOps quality gates, SRE observability, and cloud cost optimizations.
              </p>
            </motion.div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-3 text-center">
                <div className="text-xl font-extrabold text-blue-400">99.9%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">EKS Uptime</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-3 text-center">
                <div className="text-xl font-extrabold text-cyan-400">40%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">Deploy Speedup</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-3 text-center">
                <div className="text-xl font-extrabold text-purple-400">15%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">Cost Saved</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition duration-300"
              >
                Find All Projects
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1xd2PCUQ8uHHLpkkdUqd7RIOIIoh8-vYN"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-sm font-semibold rounded-xl transition duration-300"
              >
                Download Manifest (CV)
              </a>
            </div>
          </div>

          {/* Interactive Shell Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="w-full bg-slate-950 border border-slate-800 rounded-xl shadow-2xl overflow-hidden crt-effect scanline">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between bg-slate-900 px-4 py-2.5 border-b border-slate-800/60">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">dwivedi@devops-ops: ~</span>
                </div>
                <div className="flex items-center space-x-2 font-mono text-[10px] text-slate-500">
                  <span>SHELL: bash</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>

              {/* Terminal History */}
              <div className="p-4 h-64 overflow-y-auto font-mono text-xs space-y-2 text-emerald-400/90 leading-relaxed bg-[#050811]/90">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="whitespace-pre-wrap">
                    {item.type === "input" && (
                      <span className="text-slate-300">{item.text}</span>
                    )}
                    {item.type === "system" && (
                      <span className="text-blue-400">[SYSTEM] {item.text}</span>
                    )}
                    {item.type === "output" && (
                      <div className="pl-4 text-emerald-300 font-semibold">{item.text}</div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center bg-slate-900/60 border-t border-slate-850 px-4 py-2">
                <span className="text-slate-300 font-mono text-xs mr-2">dwivedi@devops-ops:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help' to command..."
                  className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-emerald-400 placeholder-emerald-800"
                />
                <button type="submit" className="text-slate-500 hover:text-emerald-400 p-1">
                  <TerminalIcon />
                </button>
              </form>
            </div>
          </motion.div>
        </section>

        {/* SECTION 1: INTERACTIVE PIPELINE SIMULATOR */}
        <section id="pipeline" className="border-t border-slate-900 pt-16">
          <div className="space-y-2 mb-8">
            <div className="inline-flex items-center px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 font-mono text-xs text-blue-400">
              [ PIPELINE CONTROLLER ]
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Interactive CI/CD Deployment Flow</h3>
            <p className="text-slate-400 text-sm max-w-2xl">
              Interact with the deployment stages below to audit active console logstreams, build configurations, and Kubernetes EKS rollout variables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Pipeline Stage Nodes */}
            <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 glass-panel">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative py-4">
                {/* Horizontal connection line for desktop */}
                <div className="hidden md:block absolute top-[2.5rem] left-[5%] right-[5%] h-0.5 bg-slate-800 z-0" />
                
                {PipelineStages.map((stage, idx) => {
                  const isActive = activeStage === stage.id;
                  return (
                    <div 
                      key={stage.id} 
                      onClick={() => setActiveStage(stage.id)}
                      className="flex flex-col items-center cursor-pointer z-10 w-full md:w-auto"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className={`w-11 h-11 rounded-lg flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                          isActive 
                            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 border-blue-400 border-2" 
                            : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-blue-500/50"
                        }`}
                      >
                        0{idx + 1}
                      </motion.div>
                      <span className={`mt-2 font-mono text-[9px] font-semibold tracking-wide text-center max-w-[80px] leading-tight ${
                        isActive ? "text-blue-400" : "text-slate-400"
                      }`}>
                        {stage.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Selected Stage Detail Pane */}
              <div className="mt-6 pt-6 border-t border-slate-800/60">
                {PipelineStages.map(stage => {
                  if (stage.id !== activeStage) return null;
                  return (
                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <h4 className="font-bold text-md text-blue-400">{stage.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{stage.desc}</p>
                      
                      <div className="mt-4 bg-slate-950/80 rounded-xl p-3 border border-slate-850">
                        <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Execute Script</div>
                        <div className="text-xs font-mono text-cyan-400 mt-1">$ {stage.cmd}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Security and Rollback specs */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 mt-6 font-mono text-[11px] text-slate-300">
                <div className="text-blue-400 font-bold mb-1.5 uppercase tracking-wider flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse" />
                  Security & Reliability Matrix
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-cyan-400 font-semibold">Secrets Management:</span> Handled via Jenkins Credentials store bindings, AWS IAM Roles for Service Accounts (IRSA) on EKS, ConfigMaps for environments, and AWS Secrets Manager integration for secure payload encryption.
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">Kubernetes Rollbacks:</span> Configured with automated rollback logic. In case a newly deployed container replica fails readiness or liveness probes, EKS stops the rollout, preserves current pods, and runs: <code className="text-orange-300">kubectl rollout undo deployment/core-app-deploy -n production</code>.
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live Console Logs */}
            <div className="lg:col-span-5">
              <div className="bg-[#050811] border border-slate-850 rounded-2xl p-5 font-mono text-[11px] h-[450px] flex flex-col justify-between overflow-hidden shadow-xl">
                <div>
                  <div className="flex items-center justify-between text-slate-500 border-b border-slate-850/60 pb-2 mb-3">
                    <span className="uppercase tracking-wider">CONSOLE LOGSTREAM</span>
                    <span className="flex items-center space-x-1 text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>STREAMING</span>
                    </span>
                  </div>
                  <div className="text-slate-400 space-y-2 whitespace-pre-wrap overflow-y-auto max-h-[350px]">
                    {PipelineStages.find(s => s.id === activeStage)?.log}
                  </div>
                </div>
                <div className="text-[9px] text-slate-600 border-t border-slate-850/40 pt-2 mt-2">
                  RUN ID: GHA-DEVOPS-RUN-802 // ENVIRONMENT: AWS-EKS-PROD
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SYSTEM OBSERVABILITY (SKILLS) */}
        <section id="metrics" className="border-t border-slate-900 pt-16">
          <div className="space-y-2 mb-8">
            {/* <div className="inline-flex items-center px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 font-mono text-xs text-cyan-400">
              [ SYSTEMS OBSERVABILITY ]
            </div> */}
            <h3 className="text-2xl font-bold tracking-tight">Technical Skills Telemetry</h3>
            <p className="text-slate-400 text-sm max-w-2xl">
              Visualizing system administration competencies and cloud orchestration tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* DevOps & Cloud Observability */}
            <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 glass-panel glow-border-blue flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-blue-400">TELEMETRY // CLOUD_OPS</span>
                  <CpuIcon />
                </div>
                <h4 className="font-bold text-md text-slate-200 mt-2">Cloud Platforms & IaC</h4>
                <p className="text-[11px] text-slate-400 mt-1">Multi-AZ AWS design topologies, Terraform modulations, configuration states.</p>
              </div>

              <div className="space-y-4">
                {[
                  { name: "AWS (EKS, VPC, IAM, RDS)", val: 92 },
                  { name: "Terraform (Modular, S3 Remote)", val: 90 },
                  { name: "Ansible Configuration", val: 80 },
                  { name: "CloudFormation", val: 75 }
                ].map((s) => (
                  <div key={s.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">{s.name}</span>
                      <span className="text-blue-400">{s.val}%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: `${s.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Containerization & Pipeline */}
            <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 glass-panel glow-border-emerald flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-emerald-400">TELEMETRY // BUILD_FLOW</span>
                  <NetworkIcon />
                </div>
                <h4 className="font-bold text-md text-slate-200 mt-2">CI/CD & Containers</h4>
                <p className="text-[11px] text-slate-400 mt-1">Zero downtime rolling updates, quality gates, and package image reductions.</p>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Kubernetes (EKS, Helm, HPA)", val: 88 },
                  { name: "Docker (Multi-Stage Build)", val: 95 },
                  { name: "Jenkins & GitHub Actions", val: 90 },
                  { name: "SonarQube & Trivy Scans", val: 90 }
                ].map((s) => (
                  <div key={s.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">{s.name}</span>
                      <span className="text-emerald-400">{s.val}%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${s.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Linux Administration & Systems */}
            <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 glass-panel glow-border-purple flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-purple-400">TELEMETRY // LINUX_KERN</span>
                  <GitCommitIcon />
                </div>
                <h4 className="font-bold text-md text-slate-200 mt-2">Systems & Observability</h4>
                <p className="text-[11px] text-slate-400 mt-1">Linux script automation, network routing, and monitoring stacks.</p>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Linux System Administration", val: 90 },
                  { name: "Prometheus & Grafana Stacks", val: 85 },
                  { name: "Python & Bash Scripting", val: 88 },
                  { name: "VPC Networking & DNS Diagnostics", val: 86 }
                ].map((s) => (
                  <div key={s.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">{s.name}</span>
                      <span className="text-purple-400">{s.val}%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: `${s.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Certifications Row */}
          <div className="mt-8 bg-slate-900/20 border border-slate-800/60 rounded-2xl p-6 glass-panel">
            <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Verified Professional Credentials</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  name: "AWS Certified Solutions Architect – Associate", 
                  issuer: "Amazon Web Services",
                  url: "https://www.credly.com/badges/9df183cc-05de-4654-943d-0be20b7cb375"
                },
                { 
                  name: "Microsoft Certified: Azure Fundamentals (AZ-900)", 
                  issuer: "Microsoft",
                  url: "https://learn.microsoft.com/en-us/users/veerendradwivedi-7889/credentials/b441472ec8039f"
                },
                { 
                  name: "Generative AI Leader Certified", 
                  issuer: "Google",
                  url: "https://www.credly.com/badges/075d4286-5319-496f-a466-db6f86ba019c/linked_in_profile"
                }
              ].map((cert, idx) => (
                <div key={idx} className="bg-slate-950/60 rounded-xl p-4 border border-slate-850 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-slate-200 font-bold text-xs leading-snug">{cert.name}</div>
                    <div className="text-[10px] font-mono text-slate-500 mt-1">ISSUED BY: {cert.issuer}</div>
                  </div>
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center justify-end"
                  >
                    VERIFY KEY <ExternalLinkIcon />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: SYSTEM RUNBOOKS (INCIDENTS) */}
        <section id="incidents" className="border-t border-slate-900 pt-16">
          <div className="space-y-2 mb-8">
            {/* <div className="inline-flex items-center px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 font-mono text-xs text-orange-400">
              [ INCIDENT REPORT REGISTER ]
            </div> */}
            <h3 className="text-2xl font-bold tracking-tight">Incident Logger & Runbook Resolvers</h3>
            <p className="text-slate-400 text-sm max-w-2xl">
              Historical logs of pipeline incidents diagnosed and resolved on staging and production systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Alert List */}
            <div className="lg:col-span-5 space-y-3">
              {IncidentLogs.map((inc) => {
                const isActive = activeIncident === inc.id;
                return (
                  <div
                    key={inc.id}
                    onClick={() => setActiveIncident(inc.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 text-left ${
                      isActive
                        ? "bg-slate-900/80 border-orange-500/50 shadow-md shadow-orange-500/5"
                        : "bg-slate-950 border-slate-850 hover:bg-slate-900/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-slate-400">{inc.id}</span>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold ${
                        inc.severity === "CRITICAL" ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                      }`}>
                        {inc.severity}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-200 mt-2">{inc.title}</h4>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono">{inc.category}</div>
                  </div>
                );
              })}
            </div>

            {/* Right Detailed Runbook Pane */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {IncidentLogs.map((inc) => {
                  if (inc.id !== activeIncident) return null;
                  return (
                    <motion.div
                      key={inc.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 glass-panel space-y-5"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <div className="text-xs font-mono text-orange-400">INCIDENT PROFILE // RESOLVED</div>
                          <h4 className="text-md font-bold text-slate-100 mt-1">{inc.title}</h4>
                        </div>
                        <ShieldAlertIcon />
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h5 className="text-xs font-mono text-slate-500 uppercase">Detection & Summary</h5>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed">{inc.description}</p>
                        </div>

                        <div>
                          <h5 className="text-xs font-mono text-slate-500 uppercase">Root Cause Analysis</h5>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-850 font-mono">{inc.investigation}</p>
                        </div>

                        <div>
                          <h5 className="text-xs font-mono text-slate-500 uppercase">Runbook Solution</h5>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed">{inc.resolution}</p>
                        </div>

                        <div>
                          <h5 className="text-xs font-mono text-slate-500 uppercase">Tools Deployed</h5>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {inc.tools.map((t) => (
                              <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* SECTION 4: PROJECTS BOARD */}
        <section id="projects" className="border-t border-slate-900 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              {/* <div className="inline-flex items-center px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 font-mono text-xs text-cyan-400">
                [ TELEMETRY DIRECTORY ]
              </div> */}
              <h3 className="text-2xl font-bold tracking-tight">DevOps Projects Directory</h3>
              <p className="text-slate-400 text-sm max-w-2xl">
                A filtered index of build systems, IaC projects, scripting modules, and application deployment configurations.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-slate-900/60 border border-slate-800 p-1 rounded-xl">
              {[
                { id: "all", label: "ALL" },
                { id: "aws-infra", label: "AWS & IaC" },
                { id: "ci-cd", label: "CI/CD & Containers" },
                { id: "app-dev", label: "APP DEVELOPMENT" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow shadow-blue-500/20"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/30 border border-slate-800 rounded-2xl p-5 glass-panel flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 relative group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                        p.category === "cloud" || p.category === "infra" || p.category === "aws"
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          : p.category === "ci" || p.category === "cd"
                          ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}>
                        {p.category}
                      </span>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-400 transition"
                      >
                        <ExternalLinkIcon />
                      </a>
                    </div>

                    <h4 className="font-bold text-[14px] group-hover:text-blue-400 transition-colors duration-250 leading-snug">
                      {p.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {p.impact}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/40">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-850 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION 5: PROFESSIONAL EXPERIENCE */}
        <section id="experience" className="border-t border-slate-900 pt-16">
          <div className="space-y-2 mb-10">
            {/* <div className="inline-flex items-center px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 font-mono text-xs text-purple-400">
              [ WORKSTATION RUNLOGS ]
            </div> */}
            <h3 className="text-2xl font-bold tracking-tight">Professional Experience</h3>
            <p className="text-slate-400 text-sm max-w-2xl">
              Chronological records of professional engineering engagements and system deliverables.
            </p>
          </div>

          <div className="relative pl-6 md:pl-10 border-l-2 border-slate-800/60 space-y-12">
            
            {/* Tata Consultancy Services - DevOps & Cloud Engineer */}
            <div className="relative">
              {/* Commit node marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              </div>

              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 glass-panel space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                  <div>
                    {/* <span className="font-mono text-xs text-blue-400">COMMIT: tc-devops-c8</span> */}
                    <h4 className="font-extrabold text-lg text-slate-100 mt-1">DevOps & Cloud Engineer</h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">Tata Consultancy Services</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-400">FEB 2022 — PRESENT</span>
                    {/* <div className="text-[10px] font-mono text-slate-500 mt-0.5">BRANCH: production-main</div> */}
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-slate-300 list-none pl-0 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-mono">▸</span>
                    <span>Designed and maintained robust <strong>CI/CD pipelines</strong> for 6 core enterprise applications using <strong>Jenkins</strong> and <strong>GitHub Actions</strong>, reducing average deployment time by approximately <strong>40%</strong> across development, staging, and production environments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-mono">▸</span>
                    <span>Integrated <strong>SonarQube</strong> and <strong>Trivy</strong> into pipeline stages for automated code quality and container vulnerability scanning, reducing critical vulnerabilities reaching production by approximately <strong>35%</strong> and providing developers with immediate, actionable feedback.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-mono">▸</span>
                    <span>Built and maintained modular <strong>Terraform</strong> configurations to provision AWS infrastructure (VPC, EC2, S3, EKS, IAM) as reusable, self-service blueprints, cutting new environment provisioning time from approximately 2 days to <strong>under 2 hours</strong> across teams.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-mono">▸</span>
                    <span>Containerized and migrated legacy enterprise web applications using <strong>Docker</strong>, deploying and managing them on <strong>AWS EKS</strong> across multiple namespaces with rolling updates and <strong>HPA</strong> based autoscaling, helping sustain <strong>99.9% uptime</strong> for core business applications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-mono">▸</span>
                    <span>Implemented <strong>Prometheus, Grafana, and AWS CloudWatch</strong> dashboards to monitor pod health, resource utilization, and infrastructure metrics across core application environments, reducing mean time to resolution (MTTR) for incidents by approximately <strong>30%</strong> through proactive alerting.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-mono">▸</span>
                    <span>Enforced infrastructure compliance by managing scheduled OS patching across a multi-server <strong>Linux</strong> environment and tightening <strong>IAM</strong> policies to enforce least-privilege access, strengthening overall security posture.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-mono">▸</span>
                    <span>Optimized AWS resource utilization through EC2 right-sizing and S3 lifecycle policy configuration, contributing to an estimated <strong>15% reduction</strong> in monthly cloud infrastructure costs.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* UI Developer Trainee Commit */}
            <div className="relative">
              {/* Commit node marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-700" />
              </div>

              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 glass-panel space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                  <div>
                    {/* <span className="font-mono text-xs text-slate-500">COMMIT: ui-developer-a4</span> */}
                    <h4 className="font-extrabold text-lg text-slate-300 mt-1">UI Developer // SDE Trainee</h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">Phonon.IO</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-400">2021 — 2022</span>
                    {/* <div className="text-[10px] font-mono text-slate-500 mt-0.5">BRANCH: legacy-ui-dev</div> */}
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-slate-400 list-none pl-0 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 font-mono">▸</span>
                    <span>Developed and enhanced responsive UI components using Angular, HTML5, CSS3, TypeScript, and Bootstrap, improving page render speeds.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 font-mono">▸</span>
                    <span>Integrated 10+ RESTful APIs for real-time dashboard data updates, reducing network fetch times for concurrent users.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 font-mono">▸</span>
                    <span>Performed API tests and validation checks using Postman, ensuring schema compliance and reliable system inputs.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 6: TELEMETRY DISPATCH (CONTACT) */}
        <section id="contact" className="border-t border-slate-900 pt-16">
          <div className="space-y-2 mb-10">
            {/* <div className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400">
              [ SECURE TELEMETRY DISPATCH ]
            </div> */}
            <h3 className="text-2xl font-bold tracking-tight">Contact</h3>
            {/* <p className="text-slate-400 text-sm max-w-2xl">
              Transmit a telemetry message payload directly to Veerendra. The mail listener daemon is online.
            </p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Contact links / Info Pane */}
            <div className="lg:col-span-5 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 glass-panel flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* <h4 className="font-bold text-md text-slate-200">Terminal Connection Settings</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connect via SSH, secure social ports, or send an automated transmission payload.
                </p> */}

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-850">
                    <span className="text-slate-500">EMAIL:</span>
                    <a href="mailto:work.veerendra1999@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      work.veerendra1999@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-850">
                    <span className="text-slate-500">GITHUB:</span>
                    <a href="https://github.com/VEER0402" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      github.com/VEER0402
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-850">
                    <span className="text-slate-500">LINKEDIN:</span>
                    <a href="https://linkedin.com/in/veerendra-dwivedi/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      linkedin/in/veerendra-dwivedi
                    </a>
                  </div>
                   <div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-850">
                    <span className="text-slate-500">Instagram:</span>
                    <a href="https://www.instagram.com/gymgineer_veer/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      instagram.com/gymgineer_veer/
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-850">
                    <span className="text-slate-500">X:</span>
                    <a href="https://x.com/veerdwivedi0402" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      x.com/veerdwivedi0402
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="pt-4 border-t border-slate-800/60 flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  PORT 443 OPEN FOR SSL COMMUNICATIONS
                </span>
              </div> */}
            </div>

            {/* Submit telemetry form */}
            <div className="lg:col-span-7">
              <form onSubmit={sendEmail} className="bg-slate-900/30 border border-slate-850 rounded-2xl p-6 glass-panel space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Please Enter your Full Name"
                        className="w-full p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-100 placeholder-slate-600 focus:border-blue-500 outline-none transition"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="e.g. work.veerendra1999@gmail.com"
                        className="w-full p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-100 placeholder-slate-600 focus:border-blue-500 outline-none transition"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Input message text payload..."
                      className="w-full p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-100 placeholder-slate-600 focus:border-blue-500 outline-none transition resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs font-mono tracking-widest rounded-lg shadow-md shadow-blue-500/10 transition uppercase mt-4"
                >
                  Send
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* BEYOND ENGINEERING (FITNESS INTEGRATION) */}
        <section id="vision" className="border-t border-slate-900 pt-16">
          <div className="bg-gradient-to-br from-slate-900/40 to-slate-950/20 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
            {/* Visual background details */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center space-x-1.5 text-emerald-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>CORE VALUE // DISCIPLINE</span>
                </div>
                <h4 className="text-xl font-bold tracking-tight text-slate-200">Beyond Systems: The Physical Compile</h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                  DevOps requires stamina and consistency. Outside of terminal commands, I maintain a disciplined 6-day fitness routine. Physical training directly supports the mental clarity, resilience, and endurance required to troubleshoot critical infrastructure and support complex live migrations.
                </p>
              </div>
              <div className="md:col-span-4 text-left md:text-right font-mono">
                <div className="text-3xl font-extrabold text-emerald-400">06/07</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Days Training / Week</div>
                <div className="text-xs text-slate-400 mt-2 italic">"Physical fitness feeds engineering focus."</div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 mt-20 bg-slate-950/60 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} VEERENDRA DWIVEDI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>uptime_status: 100% operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
