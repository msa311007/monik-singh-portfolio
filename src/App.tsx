import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Sparkles,
  Cpu,
  Layers,
  Award,
  Terminal,
  Compass,
  Mic,
  Code2,
  GitBranch,
  Shield,
  FileText,
  Mail,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Database,
  Eye,
  Radio,
  Share2,
  Users,
  Compass as CompassIcon,
  Atom,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Send,
  Zap,
  Globe,
  Sliders,
  Maximize2,
} from 'lucide-react';

const PROJECTS = [
  {
    id: 'emosonic',
    name: 'EMOSONIC',
    subtitle: 'Adaptive Emotion-Driven Audio & Tech System',
    badge: 'PATENTED',
    badgeColor: 'border-cyan-400/40 text-cyan-300 bg-cyan-950/40',
    team: 'Sonic Geeks',
    role: 'Co-Developer',
    category: 'RESEARCH',
    filterCategory: 'RESEARCH',
    tags: [
      'Patented Technology',
      'Audio Systems',
      'Hardware/Software',
      'Live Prototype',
    ],
    summary:
      'Co-developed from initial conceptual ideation to engineering validation and live implementation, subsequently earning an official patent.',
    problem:
      'Traditional responsive sound systems lack nuanced biometric or environmental emotional adaptation, missing real-time synchronization between sensory inputs and responsive outputs.',
    approach:
      'Engineered an end-to-end processing pipeline transforming real-time emotional and sensory cues into synchronized acoustic states.',
    myContribution:
      'Co-developed the core pipeline from initial ideation, architecture planning, and iterative hardware/software integration to live prototype deployment and patent documentation.',
    outcome:
      'Successfully reached live operating status and was officially granted patent status. Validated across multi-scenario demonstrations.',
    workflow: [
      'Idea Conception',
      'Literature & Acoustic Research',
      'System Development',
      'Hardware/Software Integration',
      'Live Field Testing',
      'Patent Grant',
    ],
    keyConcepts: [
      'Acoustic Synthesis',
      'Emotion-State Mapping',
      'Real-Time Hardware Interfacing',
      'Patented Architecture',
    ],
  },
  {
    id: 'tars',
    name: 'TARS',
    subtitle: 'Terrain Analysis & Rescue System for Subterranean Safety',
    badge: 'SIH 2026 NOMINEE',
    badgeColor: 'border-emerald-400/40 text-emerald-300 bg-emerald-950/40',
    team: 'Tech Titans',
    role: 'Co-Developer / System Architect',
    category: 'SYSTEMS',
    filterCategory: 'SYSTEMS',
    tags: [
      'LiDAR SLAM',
      'UWB Tracking',
      'Autonomous Rover',
      'Multi-Sensor Nodes',
      'SIH 2026 Nominee',
    ],
    summary:
      'Comprehensive underground mine hazard analysis and autonomous rescue system integrating scout rovers, sensor nodes, and worker tracking.',
    problem:
      'Subterranean mines suffer from zero-visibility corridors, toxic gas build-up, cave-in structural vulnerabilities, and loss of real-time personnel location during catastrophic collapses.',
    approach:
      'Architected a multi-tiered safety network combining autonomous scout rovers, fixed telemetry nodes, Ultra-Wideband (UWB) sub-meter worker beacons, and central hazard processing.',
    myContribution:
      'Formulated the system architecture, sensor fusion telemetry research, documentation, and prototype planning. Prepared the technical blueprint for SIH 2026.',
    outcome:
      'Nominated at the Smart India Hackathon (SIH) 2026 Idea Submission stage. Blueprint structured for real-world mine telemetry deployment.',
    workflow: [
      'Normal Monitoring (Continuous Sensor Node Audits)',
      'Anomaly Detection (Threshold Spike in Gas/Vibration)',
      'Anomaly Verification (Autonomous Rover Dispatched via SLAM)',
      'Emergency Declaration (Automated Alarm + UWB Pinpointing)',
      'Rescue Response (Dynamic Escape Route Mapping)',
    ],
    keyConcepts: [
      'LiDAR SLAM Navigation',
      'Ultra-Wideband (UWB) Localization',
      'Hazard Gas Telemetry',
      'Fail-Safe Mesh Networking',
    ],
  },
  {
    id: 'nanoverse',
    name: 'NANOVERSE',
    subtitle: 'AI-Based Nanotech Drug Delivery Simulator',
    badge: 'RESEARCH & ML',
    badgeColor: 'border-violet-400/40 text-violet-300 bg-violet-950/40',
    team: 'Independent Research',
    role: 'Lead Researcher & Developer',
    category: 'AI / ML',
    filterCategory: 'AI / ML',
    tags: [
      'Python',
      'Random Forest',
      'NumPy',
      'Physics Simulation',
      'R² = 0.94',
    ],
    summary:
      'A physics-driven computational framework evaluating the non-linear relationship between nanoparticle dimensions and targeted drug delivery efficiency.',
    problem:
      'Physical laboratory experimentation with targeted nano-carriers is financially prohibitive and time-intensive; algorithmic pre-screening saves crucial exploratory cycles.',
    approach:
      'Generated physics-modeled synthetic datasets reflecting nanoparticle kinematics, surface charge, and cellular uptake kinetics, followed by Random Forest regression modeling.',
    myContribution:
      'Designed the physics-based mathematical data generation pipeline using Python, executed feature engineering with Pandas/NumPy, and trained regression models achieving R² = 0.94 on simulated data.',
    outcome:
      'Achieved high predictive accuracy (R² = 0.94) within the simulation boundary. (Important: Based strictly on simulated physics data; not tested in clinical/human trials).',
    workflow: [
      'Kinematic & Biophysical Parameter Definition',
      'Synthetic Physics Dataset Generation (NumPy/Pandas)',
      'Feature Engineering & Normalization',
      'Random Forest Regressor Optimization',
      'Evaluation & Predictive Efficiency Heatmaps',
    ],
    keyConcepts: [
      'Surface-to-Volume Ratio Physics',
      'Random Forest Regression',
      'Multivariate Data Synthesis',
      'Computational Bio-Nanotechnology',
    ],
  },
  {
    id: 'neurofuel',
    name: 'NEUROFUEL',
    subtitle: 'Digital Nutrition & Mental Diet Cognitive Tracker',
    badge: 'AI / ML WEB APP',
    badgeColor: 'border-blue-400/40 text-blue-300 bg-blue-950/40',
    team: 'Creator & Developer',
    role: 'Full Stack & NLP Engineer',
    category: 'AI / ML',
    filterCategory: 'AI / ML',
    tags: ['Python', 'Flask', 'NLP', 'Matplotlib', 'Behavioral Informatics'],
    summary:
      'Algorithmic analyzer quantifying cognitive content consumption into an actionable Mental Diet Score and Addiction Index.',
    problem:
      'Modern digital content algorithms encourage hyper-stimulative, passive media consumption without users realizing its cumulative psychological toxicity.',
    approach:
      'Constructed an NLP-driven classification engine that tags text/content feeds across Educational, Entertainment, Addictive, and Toxic categories to output balanced consumption scores.',
    myContribution:
      'Developed the NLP text categorization heuristics, backend Flask endpoints, data visualization routines, and cognitive index calculation formulas.',
    outcome:
      'Working interactive web prototype capable of parsing content feeds and generating instant cognitive nutritional breakdowns.',
    workflow: [
      'Digital Consumption Log Ingestion',
      'NLP Pre-Processing & Tokenization',
      'Multi-Class Content Classification',
      'Mental Diet Score & Addiction Risk Synthesis',
      'Dynamic Graphical Dashboard Render',
    ],
    keyConcepts: [
      'Natural Language Processing',
      'Content Categorization',
      'Addiction Scoring Heuristics',
      'Cognitive Ergonomics',
    ],
  },
  {
    id: 'prescrypto',
    name: 'PRESCRYPTO',
    subtitle: 'AI-Powered Healthcare Literacy & Prescription Decoder',
    badge: 'FULL STACK APP',
    badgeColor: 'border-teal-400/40 text-teal-300 bg-teal-950/40',
    team: 'Full Stack Build',
    role: 'Full Stack Developer',
    category: 'SOFTWARE',
    filterCategory: 'SOFTWARE',
    tags: ['React.js', 'Node.js', 'Express.js', 'Prisma', 'Tailwind CSS'],
    summary:
      'Simplifies arcane clinical prescriptions, laboratory metrics, and medical terminology into lucid, patient-friendly insights.',
    problem:
      'Illegible doctor prescriptions and complex diagnostic lab reports create severe healthcare illiteracy, anxiety, and dangerous medication scheduling errors.',
    approach:
      'Architected a modular web platform featuring prescription parsing, diagnostic report breakdown, medical misinformation flagging, and multi-lingual accessibility.',
    myContribution:
      'Built the front-end user experience with React and Tailwind, constructed REST endpoints via Node/Express, managed database schemas through Prisma, and integrated parser modules.',
    outcome:
      'Functional healthcare literacy prototype built to clarify diagnostic jargon for ordinary citizens (Strictly an educational literacy platform, not clinical diagnosis).',
    workflow: [
      'Document / Text Input Ingestion',
      'Term Extraction & Lexical Simplification',
      'Contextual Safety & Usage Notes Matching',
      'Accessible Multi-lingual Visual Interface Rendering',
    ],
    keyConcepts: [
      'Medical Lexicon Parsing',
      'Accessible Health UX',
      'ORM Database Schemas',
      'Misinformation Heuristics',
    ],
  },
  {
    id: 'quickbite',
    name: 'QUICKBITE',
    subtitle: 'Time-Limited Dynamic QR Verification Canteen Infrastructure',
    badge: 'DESIGN THINKING & UX',
    badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-950/40',
    team: 'Design & Systems Project',
    role: 'UX Researcher & System Designer',
    category: 'DESIGN THINKING',
    filterCategory: 'DESIGN THINKING',
    tags: [
      'Design Thinking',
      'User Interviews',
      'QR Protocols',
      'Empathy Field Studies',
    ],
    summary:
      'Human-centered digital verification system designed to eliminate cafeteria billing fraud, duplicate tokens, and massive queue congestion.',
    problem:
      'Institutional canteens suffer from fake/re-used printed slips, calculation mistakes during rush hours, and friction between kitchen staff and students.',
    approach:
      'Applied end-to-end Design Thinking principles: field observations during peak rush hours, stakeholder empathy interviews, and a time-expiring cryptographic QR verification architecture.',
    myContribution:
      'Conducted field empathy studies, synthesized journey maps, formulated the dynamic QR validation logic, and designed high-fidelity system interaction wireframes.',
    outcome:
      'High-satisfaction system blueprint with proven reduction in theoretical transaction verification latency from 45s to under 3s.',
    workflow: [
      'Empathy Field Research & Kitchen Shadowing',
      'Problem Definition & Fraud Vector Identification',
      'System Architecture & Time-Decay QR Protocol',
      'Interactive User Journey Prototyping',
      'Staff Usability Validation',
    ],
    keyConcepts: [
      'Design Thinking',
      'Empathy Mapping',
      'Dynamic QR Verification',
      'Queue Latency Reduction',
    ],
  },
  {
    id: 'scope-x',
    name: 'SCOPE-X',
    subtitle: 'Smart Computational Optical Precision Enhancement',
    badge: 'FEASIBILITY R&D',
    badgeColor: 'border-rose-400/40 text-rose-300 bg-rose-950/40',
    team: 'R&D Concept',
    role: 'Computational Researcher',
    category: 'RESEARCH',
    filterCategory: 'RESEARCH',
    tags: [
      'Optical Computation',
      'Feasibility Study',
      'Comparative Analysis',
      'Theoretical Modeling',
    ],
    summary:
      'A high-level computational research investigation into mathematical trajectory enhancement and optical precision algorithmic modeling.',
    problem:
      'Computational optical sensors face environmental distortion, atmospheric refraction, and rapid targeting latency in variable lighting.',
    approach:
      'Conducted extensive literature research, computational feasibility modeling, algorithmic compensation review, and rigorous technical documentation.',
    myContribution:
      'Authored comprehensive feasibility reports, executed mathematical comparative analyses, and established testing protocols for future optical simulation.',
    outcome:
      'Completed theoretical feasibility study and R&D documentation package (Purely computational research and conceptual stage; no physical device or weapon built).',
    workflow: [
      'Theoretical Optical Problem Formulation',
      'Algorithmic Distortion Compensation Research',
      'Competitive Technology Feasibility Benchmarking',
      'Technical Specification & QA Protocol Documentation',
    ],
    keyConcepts: [
      'Algorithmic Optics',
      'Feasibility Benchmarking',
      'Technical Specification',
      'Environmental Correction',
    ],
  },
];

const TIMELINE_EVENTS = [
  {
    era: 'AGE 12',
    year: 'Genesis',
    title: 'First Digital Website Built',
    desc: 'Wrote first lines of code and created a standalone website at age twelve, sparking a lifelong obsession with software, interfaces, and computing.',
    tag: 'Early Spark',
  },
  {
    era: 'SCHOOL YEARS',
    year: 'Foundations',
    title: '6x Consecutive Merit Scholar & ATAL Lab',
    desc: 'Awarded Scholar Badge and English Proficiency Badge. Led digital initiatives at the ATAL Tinkering Lab, mastering graphic design, video editing, and technical prototypes.',
    tag: 'Academic Excellence',
  },
  {
    era: 'GRADE 10',
    year: 'Innovation',
    title: 'Nano Shirt & Solar Shirt Inventions',
    desc: 'Conceptualized and presented functional smart fabric solutions incorporating nano-protective concepts and integrated solar energy capture for the Annual School IT Fest.',
    tag: 'Applied Science',
  },
  {
    era: 'GRADE 11',
    year: 'Leadership',
    title: 'Epistemia: 1st Prize & Project Head',
    desc: 'Served as Project Head coordinating 100+ active participants across 35+ technical projects. Managed quality reviews, cross-team operations, and won 1st Prize.',
    tag: 'Major Milestone',
  },
  {
    era: 'COLLEGE (2025–2029)',
    year: 'Engineering',
    title: 'B.Tech CSE (Artificial Intelligence & Machine Learning)',
    desc: 'Hyderabad Institute of Technology & Management (HITAM). Architecting advanced AI/ML systems, hardware-software integration, and research initiatives.',
    tag: 'Specialization',
  },
  {
    era: 'PRESENT & BEYOND',
    year: 'Current Direction',
    title: 'Patented Innovator & AI/ML Systems Engineer',
    desc: 'Patented co-developer of Emosonic, SIH 2026 Idea Submission Nominee for TARS, creator of NanoVerse, NeuroFuel, and Prescrypto. Merging AI, research, and technical leadership.',
    tag: 'Frontier Tech',
  },
];

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'C', 'JavaScript', 'HTML5', 'CSS3 / Modern CSS'],
  },
  {
    title: 'Artificial Intelligence & ML',
    icon: Cpu,
    skills: [
      'Machine Learning',
      'Natural Language Processing (NLP)',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Prompt Engineering',
      'AI Prototyping',
    ],
  },
  {
    title: 'Web & Systems Architecture',
    icon: Globe,
    skills: [
      'Flask',
      'React.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'Prisma ORM',
      'RESTful APIs',
    ],
  },
  {
    title: 'Developer Tools & Media',
    icon: Terminal,
    skills: [
      'Git & GitHub',
      'VS Code',
      'Canva',
      'Video Editing Suites',
      'Technical Documentation',
    ],
  },
  {
    title: 'Core Methodologies',
    icon: CompassIcon,
    skills: [
      'AI/ML Prototyping',
      'Computational Research',
      'Design Thinking & Empathy Studies',
      'System Architecture',
      'Data Analysis',
    ],
  },
  {
    title: 'Leadership & Professional',
    icon: Users,
    skills: [
      'Technical Leadership',
      'Cross-Functional Team Coordination',
      'Public Speaking & Emceeing',
      'Hackathon Operations',
      'Strategic Decision Making',
    ],
  },
];

const ACHIEVEMENTS_DATA = [
  {
    category: 'Intellectual Property',
    title: 'PATENT GRANTED',
    subtitle: 'EMOSONIC Adaptive System',
    description:
      'Co-developed from inception, rigorous testing, and live prototype deployment to an officially granted patent with Sonic Geeks.',
    highlight: 'Patented Technology',
    accent: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30',
  },
  {
    category: 'National Competitions',
    title: 'SIH 2026 NOMINEE',
    subtitle: 'Smart India Hackathon (Idea Submission)',
    description:
      'Nominated at the SIH 2026 Idea Submission stage for TARS (Terrain Analysis & Rescue System) with Team Tech Titans.',
    highlight: 'Mine Safety Innovation',
    accent: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30',
  },
  {
    category: 'Technical Leadership',
    title: '1ST PRIZE & PROJECT HEAD',
    subtitle: 'Epistemia — Grade 11',
    description:
      'Led technical symposium operations supervising 100+ participants and managing 35+ project reviews simultaneously while securing top honors.',
    highlight: '100+ Participants Managed',
    accent: 'from-violet-500/20 to-purple-500/10 border-violet-500/30',
  },
  {
    category: 'Scholastic Honors',
    title: '6 CONSECUTIVE YEARS',
    subtitle: 'Merit Scholar & Scholar Badge',
    description:
      'Unbroken tenure of top-tier academic performance, complemented by the prestigious English Proficiency Badge.',
    highlight: 'Academic Excellence',
    accent: 'from-amber-500/20 to-orange-500/10 border-amber-500/30',
  },
  {
    category: 'Early Innovation',
    title: 'NANO & SOLAR SHIRTS',
    subtitle: 'School IT Fest Showcases',
    description:
      'Pioneered functional prototypes combining nanotechnology barrier concepts and photovoltaic fabric cells.',
    highlight: 'Grade 10 Breakthrough',
    accent: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30',
  },
  {
    category: 'Creative Accolades',
    title: 'FRENCH MEDIA COMMENDATION',
    subtitle: 'Alliance Française Attendee Praise',
    description:
      'Produced nuanced bilingual subtitled media acclaimed by an Alliance Française attendee; engineered Indian Ad History visual timeline on rapid turnaround.',
    highlight: 'Cross-Cultural Media',
    accent: 'from-pink-500/20 to-rose-500/10 border-pink-500/30',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Introduction to Artificial Intelligence',
    year: '2026',
    org: 'Industry Program',
  },
  { title: 'Python for Beginners', year: '2026', org: 'Verified Coursework' },
  {
    title: 'CyberSmart Certification',
    year: '2021',
    org: 'Cyber Education Program',
  },
  {
    title: 'AI Workshops & Prototyping',
    year: 'Active',
    org: 'Outskill Interactive Labs',
  },
];

function NeuralConstellation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, radius: 150 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Primary nodes representing pillars
    const corePillars = [
      { name: 'AI / ML', color: '#00f2fe' },
      { name: 'RESEARCH', color: '#a855f7' },
      { name: 'DATA', color: '#38bdf8' },
      { name: 'SOFTWARE', color: '#4facfe' },
      { name: 'HARDWARE', color: '#34d399' },
      { name: 'HUMANS', color: '#f43f5e' },
    ];

    const particleCount = Math.min(Math.floor((width * height) / 14000), 55);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const isCore = i < corePillars.length;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: isCore ? 4.5 : Math.random() * 2 + 1.2,
        isCore,
        pillar: isCore ? corePillars[i] : null,
        baseColor: isCore ? corePillars[i].color : 'rgba(148, 163, 184, 0.45)',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        // Interaction with mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.03;
          p.vx -= dx * force;
          p.vy -= dy * force;
        }

        // Apply speed limits
        p.vx = Math.max(-1.4, Math.min(1.4, p.vx));
        p.vy = Math.max(-1.4, Math.min(1.4, p.vy));

        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.baseColor;
        ctx.shadowBlur = p.isCore ? 12 : 4;
        ctx.shadowColor = p.isCore ? p.pillar.color : '#38bdf8';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label core pillar nodes
        if (p.isCore) {
          ctx.font = '10px Inter, sans-serif';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.fillText(p.pillar.name, p.x + 8, p.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.85 }}
    />
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter projects smoothly
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return PROJECTS;
    return PROJECTS.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.email || !contactForm.name) return;

    // Construct standardized mailto action
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${contactForm.name}`
    );
    const body = encodeURIComponent(
      `Hello Monik,\n\nMy name is ${contactForm.name} (${contactForm.email}).\n\n${contactForm.message}\n\nBest regards,\n${contactForm.name}`
    );
    window.location.href = `mailto:moniksingh3110@gmail.com?subject=${subject}&body=${body}`;
    setContactSuccess(true);
    setTimeout(() => setContactSuccess(false), 6000);
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Background Grid & Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-violet-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090d]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-mono tracking-widest text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
              MONIK
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f2fe]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">
              01 // ABOUT
            </a>
            <a
              href="#journey"
              className="hover:text-cyan-300 transition-colors"
            >
              02 // JOURNEY
            </a>
            <a href="#work" className="hover:text-cyan-300 transition-colors">
              03 // WORK
            </a>
            <a
              href="#achievements"
              className="hover:text-cyan-300 transition-colors"
            >
              04 // AWARDS
            </a>
            <a
              href="#leadership"
              className="hover:text-cyan-300 transition-colors"
            >
              05 // LEADERSHIP
            </a>
            <a
              href="#onstage"
              className="hover:text-cyan-300 transition-colors"
            >
              06 // ON STAGE
            </a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">
              07 // SKILLS
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-300 transition-colors"
            >
              08 // CONTACT
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="mailto:moniksingh3110@gmail.com"
              className="text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full border border-cyan-500/40 text-cyan-300 bg-cyan-950/20 hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.15)] flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0d14]/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-xl">
            <div className="flex flex-col space-y-3 font-mono text-xs tracking-wider">
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#about"
                className="text-slate-300 hover:text-cyan-400 py-1"
              >
                ABOUT
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#journey"
                className="text-slate-300 hover:text-cyan-400 py-1"
              >
                JOURNEY
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#work"
                className="text-slate-300 hover:text-cyan-400 py-1"
              >
                FEATURED WORK
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#achievements"
                className="text-slate-300 hover:text-cyan-400 py-1"
              >
                ACHIEVEMENTS
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#leadership"
                className="text-slate-300 hover:text-cyan-400 py-1"
              >
                LEADERSHIP
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#onstage"
                className="text-slate-300 hover:text-cyan-400 py-1"
              >
                ON STAGE (EMCEE)
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#skills"
                className="text-slate-300 hover:text-cyan-400 py-1"
              >
                SKILLS
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#contact"
                className="text-slate-300 hover:text-cyan-400 py-1"
              >
                CONTACT
              </a>
              <a
                href="mailto:moniksingh3110@gmail.com"
                className="mt-2 text-center text-xs font-mono uppercase tracking-wider px-4 py-2.5 rounded-lg border border-cyan-500/40 text-cyan-300 bg-cyan-950/30"
              >
                moniksingh3110@gmail.com
              </a>
            </div>
          </div>
        )}
      </header>

      {}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
      >
        {/* Interactive Neural Constellation Visual */}
        <NeuralConstellation />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
              B.Tech CSE (AI & ML) • Hyderabad, India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase">
            <span className="block bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              MONIK
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              SINGH ARORA
            </span>
          </h1>

          {/* Identity Subtitle */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono tracking-wider text-slate-300 mb-8 max-w-2xl">
            <span className="px-2.5 py-1 rounded border border-white/10 bg-white/[0.02]">
              AI/ML ENGINEER
            </span>
            <span className="text-cyan-500">•</span>
            <span className="px-2.5 py-1 rounded border border-white/10 bg-white/[0.02]">
              BUILDER
            </span>
            <span className="text-cyan-500">•</span>
            <span className="px-2.5 py-1 rounded border border-white/10 bg-white/[0.02]">
              RESEARCHER
            </span>
            <span className="text-cyan-500">•</span>
            <span className="px-2.5 py-1 rounded border border-white/10 bg-white/[0.02]">
              CREATIVE TECHNOLOGIST
            </span>
          </div>

          {/* Animated Statement */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light max-w-2xl mb-10 leading-relaxed">
            "Building intelligent systems where AI, engineering, research, and
            human-centered innovation meet."
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#work"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              <span>Explore My Work</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:moniksingh3110@gmail.com"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/20 bg-white/[0.04] text-white font-medium text-sm hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Clickable Email Display */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors">
            <span className="text-slate-600">DIRECT:</span>
            <a
              href="mailto:moniksingh3110@gmail.com"
              className="underline underline-offset-4 decoration-cyan-500/40"
            >
              moniksingh3110@gmail.com
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
              Scroll to Explore
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="about"
        className="py-24 relative z-10 border-t border-white/5 bg-[#08090d]/60"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-xs tracking-widest">
              01 // IDENTITY
            </span>
            <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-12">
            Engineering Systems, Intersecting Research & Human Purpose.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story narrative */}
            <div className="lg:col-span-7 space-y-6 text-slate-300 font-light leading-relaxed text-base sm:text-lg">
              <p>
                I am a B.Tech Computer Science Engineering student specializing
                in{' '}
                <strong className="text-white font-medium">
                  Artificial Intelligence & Machine Learning
                </strong>{' '}
                at the{' '}
                <strong className="text-cyan-300 font-medium">
                  Hyderabad Institute of Technology & Management (HITAM)
                </strong>
                , class of 2025–2029.
              </p>
              <p>
                My work is driven by a simple principle:{' '}
                <span className="text-white font-medium">
                  I don't just study modern computational frameworks; I engineer
                  functional systems with them.
                </span>{' '}
                My research and development endeavors bridge algorithmic model
                creation with hardware integration, structured documentation,
                and real-world utility.
              </p>
              <p>
                From patenting emotion-responsive acoustic architecture with{' '}
                <span className="text-cyan-300">Emosonic</span>, to engineering
                hazard telemetry and worker tracking protocols for subterranean
                mine safety with <span className="text-emerald-300">TARS</span>,
                my technical footprint spans:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Artificial Intelligence & ML',
                  'Healthcare Technologies',
                  'Nanotech Simulations',
                  'Underground Mine Safety',
                  'Digital QR Systems',
                  'Computational Research',
                  'Human-Centered UX Design',
                  'Technical Communication',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics / Fast Facts */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono mb-1">
                  PATENTED
                </div>
                <div className="text-xs uppercase font-mono text-slate-400 tracking-wider">
                  Innovation Granted
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Co-developer of Emosonic audio system.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mb-1">
                  SIH 2026
                </div>
                <div className="text-xs uppercase font-mono text-slate-400 tracking-wider">
                  Idea Nominee
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  TARS Underground Mine Safety project.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-violet-400 font-mono mb-1">
                  100+
                </div>
                <div className="text-xs uppercase font-mono text-slate-400 tracking-wider">
                  Participants Led
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Project Head for Epistemia symposium.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono mb-1">
                  6 YRS
                </div>
                <div className="text-xs uppercase font-mono text-slate-400 tracking-wider">
                  Merit Scholar
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Consecutive honors & Scholar Badge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="journey"
        className="py-24 relative z-10 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-xs tracking-widest">
              02 // TRAJECTORY
            </span>
            <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            The Journey of an Emerging Builder
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-16">
            From coding my first web interface at age twelve to leading large
            symposiums, patenting technology, and architecting autonomous hazard
            safety frameworks.
          </p>

          {/* Interactive Timeline Spine */}
          <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Year tag for larger screens */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 font-mono text-xs text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span className="font-bold text-white block">
                    {event.era}
                  </span>
                  <span className="text-[10px] text-cyan-400/80">
                    {event.year}
                  </span>
                </div>

                {/* Node icon */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-[#07080b] bg-slate-600 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(0,242,254,0.3)]" />

                {/* Mobile Era Label */}
                <div className="sm:hidden font-mono text-xs text-cyan-400 font-bold mb-1">
                  {event.era} — {event.year}
                </div>

                {/* Content Box */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm group-hover:border-cyan-500/30 group-hover:bg-white/[0.04] transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {event.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-white/10 text-slate-300 bg-white/[0.02]">
                      {event.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section
        id="work"
        className="py-24 relative z-10 border-t border-white/5 bg-[#08090d]/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-cyan-400 text-xs tracking-widest">
                  03 // FEATURED WORK
                </span>
                <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
                Engineered Innovations & Research
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                Explore each project in detail. Built upon research,
                hardware-software integration, and mathematical rigor.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                'ALL',
                'AI / ML',
                'SOFTWARE',
                'RESEARCH',
                'SYSTEMS',
                'DESIGN THINKING',
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                    activeFilter === cat
                      ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 shadow-[0_0_12px_rgba(0,242,254,0.2)]'
                      : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Large Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Team */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${project.badgeColor} font-bold`}
                    >
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.team}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/80 mb-4">
                    {project.subtitle}
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Modal Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-cyan-500 hover:text-black hover:border-cyan-400 text-xs font-mono uppercase tracking-wider text-slate-200 transition-all flex items-center justify-center gap-2 group-hover:border-cyan-400/30"
                >
                  <span>Explore Project</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0e14] border border-cyan-500/30 rounded-2xl overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 sm:p-10 text-slate-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span
                className={`text-xs font-mono px-3 py-1 rounded-full border ${selectedProject.badgeColor} font-bold`}
              >
                {selectedProject.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                TEAM: {selectedProject.team}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-cyan-400">
                ROLE: {selectedProject.role}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
              {selectedProject.name}
            </h2>
            <p className="text-sm font-mono text-slate-400 mb-8">
              {selectedProject.subtitle}
            </p>

            {/* Deep Breakdown Sections */}
            <div className="space-y-8 text-sm leading-relaxed border-t border-white/10 pt-6">
              {/* Problem & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h4 className="text-xs font-mono text-rose-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    The Problem
                  </h4>
                  <p className="text-slate-300 font-light">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Engineering Approach
                  </h4>
                  <p className="text-slate-300 font-light">
                    {selectedProject.approach}
                  </p>
                </div>
              </div>

              {/* My Direct Contribution */}
              <div>
                <h4 className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  My Direct Contribution & Role
                </h4>
                <p className="text-slate-300 font-light bg-white/[0.02] p-4 rounded-xl border border-white/10">
                  {selectedProject.myContribution}
                </p>
              </div>

              {/* Operational Workflow Steps */}
              {selectedProject.workflow && (
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                    System Execution Architecture / Workflow
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {selectedProject.workflow.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg border border-white/10 bg-black/40 text-xs font-mono text-slate-300"
                      >
                        <span className="text-cyan-400 font-bold">
                          {idx + 1}.
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcome & Official Status */}
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                  Outcome & Documented Status
                </h4>
                <p className="text-slate-200 text-xs font-light">
                  {selectedProject.outcome}
                </p>
              </div>

              {/* Key Scientific / Technical Concepts */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                  Core Technologies & Concepts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.keyConcepts.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Close */}
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white text-slate-200 hover:text-black font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Close Explorer
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      <section
        id="achievements"
        className="py-24 relative z-10 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-xs tracking-widest">
              04 // RECOGNITION
            </span>
            <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Documented Milestones & Honors
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mb-12">
            A track record of technical patents, national hackathon nominations,
            symposium leadership, and creative honors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS_DATA.map((ach, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border bg-gradient-to-br ${ach.accent} backdrop-blur-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                    <span>{ach.category}</span>
                    <span className="text-cyan-300 font-bold">
                      {ach.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-1">
                    {ach.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-300 mb-4">
                    {ach.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section
        id="leadership"
        className="py-24 relative z-10 border-t border-white/5 bg-[#08090d]/60"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-xs tracking-widest">
              05 // LEADERSHIP & IMPACT
            </span>
            <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-12">
            Leading Teams, Projects & Tech Communities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Leadership Highlight: Epistemia */}
            <div className="lg:col-span-7 p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <Award className="w-4 h-4" />
                  <span>TECHNICAL SYMPOSIUM HEAD</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Project Head — Epistemia (Grade 11)
                </h3>
                <p className="text-sm text-slate-300 font-light mb-6 leading-relaxed">
                  Steered the core technical showcase from preliminary concept
                  evaluations to multi-stage live execution. Led logistics,
                  inter-team communications, and academic quality assurance.
                </p>

                {/* Big Visual Metric Badges */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 text-center">
                    <div className="text-4xl font-mono font-black text-cyan-400">
                      100+
                    </div>
                    <div className="text-[11px] font-mono uppercase text-slate-400 mt-1">
                      Participants Coordinated
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-violet-500/20 bg-violet-950/20 text-center">
                    <div className="text-4xl font-mono font-black text-violet-400">
                      35+
                    </div>
                    <div className="text-[11px] font-mono uppercase text-slate-400 mt-1">
                      Projects Reviewed & Managed
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      Conducted iterative code, hardware, and safety checks
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      Orchestrated stage schedules and panel judge presentations
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Standardized project documentation across teams</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hackathon Volunteering & Community Engagements */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Hackathon Volunteer */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                  Event Volunteer
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Hack Your Path 7.0
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Supported hackathon logistics, on-ground troubleshooting for
                  developer participants, and schedule alignment during
                  high-intensity build sprints.
                </p>
              </div>

              {/* Community & Creative Participations */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex-1">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                  Technical & Creative Participations
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'GDG Tech Events',
                    'Hackathons & Coding',
                    'Speak 3D Initiative',
                    'Toastmasters Open House',
                    'Arts & Craft Showcases',
                    'Fashify Creative Tech',
                  ].map((comm, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                  Active engagement across open-source communities, technical
                  forums, and design workshops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="onstage"
        className="py-24 relative z-10 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-xs tracking-widest">
              06 // ORATORY & COMM
            </span>
            <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            ON STAGE
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mb-12">
            Public speaking, stage presence, technical storytelling, and crowd
            engagement. Connecting deep engineering with people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: BLISS - ELYSIAN HITAM */}
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-transparent flex flex-col justify-between">
              <div>
                <div className="p-3 w-fit rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 mb-4">
                  <Mic className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-cyan-400 mb-1">
                  COLLEGE STAGE HOST
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  BLISS — ELYSIAN
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-3">
                  HITAM Campus Stage
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Served as official stage Emcee commanding large auditorium
                  audiences, managing live stage cues, transitions, and lively
                  spontaneous discourse.
                </p>
              </div>
            </div>

            {/* Feature 2: Epistemia Keynotes */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 text-white mb-4">
                  <Share2 className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  TECHNICAL DEMOS
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Epistemia Symposium
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-3">
                  Class 11 Milestone
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Delivered project explanations and continuous technical
                  walk-throughs to rolling groups of visiting evaluators,
                  parents, and peer teams.
                </p>
              </div>
            </div>

            {/* Feature 3: Early Stage Tenure */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 text-white mb-4">
                  <Radio className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  ASSEMBLY & ANNUAL DAY
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  School Annual Day & Assembly
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-3">
                  Grades 7 & 8
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Hosted formal school Annual Day celebrations on stage (Grade
                  7) and anchored comprehensive live online School Assemblies
                  (Grade 8).
                </p>
              </div>
            </div>
          </div>

          {/* Pillars of Stage Presence */}
          <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/[0.02] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs">
            <div className="p-3">
              <span className="text-cyan-400 block text-sm font-bold mb-1">
                AUDIENCE
              </span>
              <span className="text-slate-400">Real-Time Engagement</span>
            </div>
            <div className="p-3">
              <span className="text-cyan-400 block text-sm font-bold mb-1">
                SPONTANEITY
              </span>
              <span className="text-slate-400">Impromptu Transitions</span>
            </div>
            <div className="p-3">
              <span className="text-cyan-400 block text-sm font-bold mb-1">
                ARTICULATION
              </span>
              <span className="text-slate-400">Clear Technical Demos</span>
            </div>
            <div className="p-3">
              <span className="text-cyan-400 block text-sm font-bold mb-1">
                RHYTHM
              </span>
              <span className="text-slate-400">Event Pacing & Energy</span>
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="creative"
        className="py-24 relative z-10 border-t border-white/5 bg-[#08090d]/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-xs tracking-widest">
              07 // CREATIVE DIRECTION
            </span>
            <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Visual Design & Media Production
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mb-12">
            Engineering backed by graphic identity, motion storytelling, video
            production, and cross-cultural media.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Creative Card 1 */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                  DOCUMENTARY SHORT
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Indian Advertisements Timeline
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Conceived, scripted, and edited an archival timeline
                  documentary on the evolution of Indian television advertising
                  produced under tight turnarounds for a major school assembly.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Rapid Research & Video Montage
              </div>
            </div>

            {/* Creative Card 2 */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-pink-400 uppercase tracking-widest block mb-2">
                  BILINGUAL MEDIA
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  French-Subtitled Media Content
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Produced nuanced cultural video edits with French subtitles,
                  earning verbal appreciation from an Alliance Française
                  attendee for syntactic accuracy and aesthetic rhythm.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Subtitling & Visual Synchronization
              </div>
            </div>

            {/* Creative Card 3 */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-2">
                  CINEMATIC PRODUCTION
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Family 50th Commemorative Film
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Directed and edited an intimate documentary short film for my
                  father’s 50th birthday celebration, blending archival
                  photographs, live interviews, and ambient audio design.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Narrative Arc & Audio Post-Production
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="skills"
        className="py-24 relative z-10 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-xs tracking-widest">
              08 // ARSENAL
            </span>
            <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Technical & Engineering Competencies
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mb-12">
            No arbitrary percentage bars. A categoric breakdown of tools,
            frameworks, languages, and strategic abilities actively employed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.03] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <section className="py-24 relative z-10 border-t border-white/5 bg-[#08090d]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Beyond Code: 4 Pillars */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-cyan-400 text-xs tracking-widest">
                09 // ETHOS
              </span>
              <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Beyond Code: The Four Pillars
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mb-12">
              More than a developer — balancing technical engineering with
              holistic execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  pillar: 'BUILD',
                  color: 'text-cyan-400',
                  desc: 'Converting ideas into concrete software, hardware prototypes, and real-time interactive systems.',
                },
                {
                  pillar: 'RESEARCH',
                  color: 'text-violet-400',
                  desc: 'Formulating scientific simulations, empirical testing, physics-driven models, and patentable innovations.',
                },
                {
                  pillar: 'LEAD',
                  color: 'text-emerald-400',
                  desc: 'Orchestrating teams across symposiums, synchronizing 100+ contributors, and supporting hackathon developers.',
                },
                {
                  pillar: 'CREATE',
                  color: 'text-pink-400',
                  desc: 'Stage emceeing, film production, bilingual media, and human-centered design thinking.',
                },
              ].map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                >
                  <div
                    className={`text-3xl font-black font-mono ${p.color} mb-3`}
                  >
                    {p.pillar}
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Subsection */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-cyan-400 text-xs tracking-widest">
                10 // CERTIFICATIONS
              </span>
              <div className="h-px bg-cyan-500/20 flex-1 max-w-[100px]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Verified Technical Credentials
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-2">
                    <span>{cert.org}</span>
                    <span className="text-slate-400">{cert.year}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    {cert.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="contact"
        className="py-24 relative z-10 border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span>Initiate Connection</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              LET'S BUILD SOMETHING THAT MATTERS.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
              Have an idea, project, research opportunity, collaboration, or
              technical challenge? Let's connect.
            </p>
          </div>

          {/* Primary Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="mailto:moniksingh3110@gmail.com"
              className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME DIRECTLY</span>
            </a>

            <a
              href="[ADD GITHUB URL]"
              onClick={(e) => {
                if (
                  e.currentTarget.getAttribute('href') === '[ADD GITHUB URL]'
                ) {
                  e.preventDefault();
                  alert ? null : console.log('Placeholder');
                }
              }}
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-slate-300 font-mono text-xs uppercase tracking-wider hover:border-white/30 transition-all flex items-center gap-2"
              title="Add your official GitHub profile link here"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>GITHUB</span>
            </a>

            <a
              href="[ADD LINKEDIN URL]"
              onClick={(e) => {
                if (
                  e.currentTarget.getAttribute('href') === '[ADD LINKEDIN URL]'
                ) {
                  e.preventDefault();
                  alert ? null : console.log('Placeholder');
                }
              }}
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-slate-300 font-mono text-xs uppercase tracking-wider hover:border-white/30 transition-all flex items-center gap-2"
              title="Add your official LinkedIn profile link here"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>LINKEDIN</span>
            </a>
          </div>

          {/* Functional Contact Form */}
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    placeholder="e.g. Dr. Alex Vance"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    placeholder="e.g. alex@institution.org"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                  Message / Collaboration Proposal
                </label>
                <textarea
                  rows="4"
                  required
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  placeholder="Share details regarding research opportunities, AI prototyping, or engineering discussions..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono text-xs"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Mail Client</span>
                </button>

                <div className="text-xs font-mono text-slate-400">
                  Direct Target:{' '}
                  <a
                    href="mailto:moniksingh3110@gmail.com"
                    className="text-cyan-300 underline"
                  >
                    moniksingh3110@gmail.com
                  </a>
                </div>
              </div>

              {contactSuccess && (
                <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs font-mono text-center">
                  Drafting communication in your default email client with Monik
                  Singh Arora.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {}
      <footer className="py-12 border-t border-white/10 bg-[#050608] relative z-10 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="font-mono text-lg font-bold text-white tracking-widest flex items-center justify-center md:justify-start gap-2">
              <span>MONIK SINGH ARORA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1">
              AI/ML • SOFTWARE • RESEARCH • INNOVATION
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-xs font-mono">
            <a
              href="mailto:moniksingh3110@gmail.com"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              moniksingh3110@gmail.com
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-400">© 2026 Monik Singh Arora</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
