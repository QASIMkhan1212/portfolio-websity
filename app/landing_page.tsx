"use client";
import React, { useState } from 'react';
import { Menu, X, Sparkle, Star, Download, Mail,Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, BrainCircuit, Bot, MessageSquare, Cloud, GitBranch, ExternalLink, Award, GraduationCap } from 'lucide-react'; 

// --- 1. NAVBAR COMPONENT ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {name: "Home", href: "#home" },
    {name : "Experties", href : "#skills"},
    {name: "Portfolio", href: "#portfolio" },
    // { name: "About me", href: "#about" },
    { name: "Contact", href: "#contact" } 
  ];

  const Logo = () => {
    // Logo placeholder implementation
    const logoPlaceholderPath = "/images/logo.png";
    
    return (
      <div className="flex items-center cursor-pointer">
        {/* Replaced 'M.QASIM' text with a logo image placeholder */}
        <img
          src={logoPlaceholderPath}
          alt="M.Qasim Logo"
          className="w-40 h-40 rounded-full object-cover mr-0"
          onError={(e) => { e.target.src = '/images/logo.png'; }}
        />
        {/* <span className="text-xl font-bold text-gray-800">M.QASIM</span> */}
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section (Far Left) */}
          <Logo />

          {/* Desktop Navigation Links (Center) */}
          <div className="hidden lg:flex lg:space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium transition duration-150"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Download CV Button (Far Right) - Path uses pdf extension */}
          <div className="hidden lg:block">
            <a href="/documents/Qasim_CV.pdf" download="Qasim_CV.pdf">
              <button
                className="px-6 py-2 flex items-center space-x-2 bg-blue-800 text-white rounded-lg font-medium 
                           hover:bg-blue-500 transition duration-300 shadow-md transform hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)} 
              className="text-gray-700 hover:bg-gray-50 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
          {/* Mobile Download CV Button - Path uses PNG extension */}
          <a href="/documents/Qasim_CV.pdf" download="Qasim_CV.pdf" className="block pt-2">
            <button
              className="w-full px-4 py-2 flex items-center justify-center space-x-2 bg-blue-600 text-white rounded-lg font-medium 
                          hover:bg-black transition duration-300 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

// --- 2. HERO COMPONENT ---
const Hero = () => {
  const imagePlaceholderPath = "/images/my-img.jpg";
  
  return (
    <section id="home" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Text and Button */}
          <div className="flex flex-col space-y-6">
            <p className="text-4xl font-stretch-extra-expanded font-medium text-gray-700">Hey, I am M.QASIM </p>
            
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-800">
              Gen AI and
              <span className="text-indigo-600 ml-3"> Agentic AI Engineer</span> 
              <br />
            </h1>

            <p className="text-lg text-gray-600 max-w-lg pt-4">
              i am an undergraduate student with a passion for technology and innovation and a keen interest in the field of artificial intelligence. i have made projects on gen ai and agentic ai.
            </p>
            
            {/* Call to Action Button */}
            <div className="pt-4">
              <a href="#about"> {/* Added anchor tag with href to #about */}
                <button
                  className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg 
                           hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                >
                  About Me
                </button>
              </a>
            </div>

            {/* Subtle floating purple star (matches the image decoration) */}
            <Star className="w-5 h-5 text-indigo-400 absolute left-4 bottom-20 animate-pulse hidden md:block" />
          </div>

          {/* RIGHT COLUMN: Image Placeholder with Styling */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Blob/Container (Light Blue) */}
            <div className="bg-blue-50 p-6 sm:p-10 rounded-[3rem] shadow-xl relative">
              
              {/* Image Container for controlling layout and overflow */}
              <div className="w-full max-w-sm lg:max-w-md h-[400px] lg:h-[500px] rounded-3xl overflow-hidden relative">
                
                {/* Standard HTML <img> element used with the provided path */}
                <img
                  src={imagePlaceholderPath} 
                  alt="Professional portfolio image placeholder"
                  className="w-full h-full object-cover"
                  style={{ width: '200%', height: '100%' }} 
                  onError={(e) => { e.target.src = 'https://placehold.co/400x500/A0CCE3/FFFFFF?text=M.QASIM'; }}
                />
              </div>

              {/* Decorative Sparkles (Matches the image decorations) */}
              <Sparkle className="w-6 h-6 text-cyan-400 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-12" />
              <Sparkle className="w-5 h-5 text-indigo-400 absolute top-1/4 left-0 -translate-x-1/2" />
              <Sparkle className="w-7 h-7 text-teal-400 absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 -rotate-45" />
            </div>
            
            {/* Subtle floating purple star (matches the image decoration) */}
            <Star className="w-5 h-5 text-indigo-400 absolute right-4 top-10 animate-pulse hidden md:block" />
          </div>

        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
    // Skills tailored for a Gen AI and Agentic AI Engineer
    const skills = [
        {
            title: "Generative AI (LLMs)",
            description: "Expertise in fine-tuning, prompt engineering, and deploying Large Language Models for custom applications.",
            icon: BrainCircuit,
            color: "text-green-500",
            primary: true, // Used for the purple border styling
        },
        {
            title: "Autonomous Agent Systems",
            description: "Designing and building sophisticated Agentic workflows using tools like LangGraph/CrewAI for complex tasks.",
            icon: Bot,
            color: "text-blue-500",
            primary: false,
        },
        {
            title: "RAG & Knowledge Retrieval",
            description: "Implementing Retrieval-Augmented Generation (RAG) pipelines for grounded, up-to-date, and accurate responses.",
            icon: MessageSquare,
            color: "text-teal-500",
            primary: false,
        },
        {
            title: "Cloud & Deployment (Python)",
            description: "Proficiency in Python development (FastAPI/Flask) and deploying AI services on major cloud platforms (GCP/AWS).",
            icon: Cloud,
            color: "text-orange-500",
            primary: false,
        },
    ];

    type SkillCardProps = {
        title: string;
        description: string;
        Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        color: string;
        primary?: boolean;
    };

    const SkillCard: React.FC<SkillCardProps> = ({ title, description, Icon, color, primary = false }) => (
        <div
            className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 h-full
            ${primary ? 'border-b-4 border-indigo-600' : 'border border-gray-100 hover:border-indigo-200'}
            `}
        >
            <div className={`p-3 inline-flex rounded-lg mb-4 ${primary ? 'bg-indigo-50' : 'bg-gray-100'}`}>
                {/* Icon uses a specific color class */}
                <Icon className={`w-6 h-6 ${color}`} /> 
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 text-base">
                {description}
            </p>
        </div>
    );

    return (
        <section id="skills" className="bg-gray-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header (My Skills / My Expertise) */}
                <div className="text-center mb-12 lg:mb-16">
                    <p className="text-sm uppercase tracking-widest font-semibold text-gray-700">
                        My Skills
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">
                        My Expertise
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            description={skill.description}
                            Icon={skill.icon}
                            color={skill.color}
                            primary={skill.primary}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AchievementsSection = () => {
    // Certificate placeholders are set here
    const certificates = [
        {
            title: "Python Crash Course ",
            issuer: "Google",
            date: "May 2024",
            imageUrl: "/images/python certificate.jpg",
            link: "https://coursera.org/verify/0oYLUEVH2YHj"
        },
        {
            title: "Prompt Engineering",
            issuer: "VENDERBELT UNIVERSITY",
            date: "April 2024",
            imageUrl: "/images/prompt engineering.jpg",
            link: "#certificate-2"
        },
        {
            title: "Ai for Everyone",
            issuer: "Deep Learning.Ai",
            date: "February 2024",
            imageUrl: "/images/Ai for Everyone.jpg",
            link: "#certificate-3"
        },
    ];

    type CertificateCardProps = {
        title: string;
        issuer: string;
        date: string;
        imageUrl: string;
        link: string;
    };

    const CertificateCard: React.FC<CertificateCardProps> = ({ title, issuer, date, imageUrl, link }) => (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl"
        >
            {/* Image Placeholder */}
            <div className="h-40 overflow-hidden relative">
                <img
                    src={imageUrl}
                    alt={`${title} certificate from ${issuer}`}
                    className="w-full h-full object-cover transition duration-500 group-hover:opacity-80"
                    onError={(e) => { e.target.src = imageUrl; }} // Use the placeholder as fallback
                />
                <div className="absolute inset-0 bg-white-100 opacity-0 group-hover:opacity-10 transition duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-900 transition duration-200">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    <span>Issued by {issuer}</span>
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-600">Date:</span> {date}
                </p>
            </div>
        </a>
    );

    return (
        <section id="achievements" className="bg-white py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <p className="text-sm uppercase tracking-widest font-semibold text-gray-700">
                        My Journey
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2 flex justify-center items-center space-x-3">
                        <Award className="w-10 h-10 text-indigo-600" />
                        <span>Certifications \& Achievements</span>
                    </h2>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <CertificateCard
                            key={index}
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            imageUrl={cert.imageUrl}
                            link={cert.link}
                        />
                    ))}
                </div>

                {/* Call to Action/Note */}
                <div className="mt-16 text-center text-lg text-gray-600">
                    <p>
                        These certifications validate my commitment to continuous learning in Generative AI and practical data science.
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        (Click on a card to see the verification link - links are currently placeholders)
                    </p>
                </div>
            </div>
        </section>
    );
};



const PortfolioSection = () => {
    // Project data tailored for AI/Engineering
    const projects = [
        {
            title: "Gen AI Content Creator Agent",
            description: "A multi-agent system designed to autonomously research trending topics and generate high-quality blog posts and social media content.",
            linkText: "View on GitHub",
            linkUrl: "https://github.com/QASIMkhan1212/",
            imageAlt: "Screenshot of an AI agent dashboard",
            // Placeholder image that simulates a clean UI/dashboard
            imageUrl: "/images/genai content creator agent.png", 
        },
        {
            title: "RAG-Powered Chatbot (Gemini)",
            description: "A Retrieval-Augmented Generation chatbot built with LLaMA 3, utilizing Pinecone and LangChain for querying vast knowledge bases with low latency.",
            linkText: "View Live Demo",
            linkUrl: "https://demo.mqasim.ai/rag-chatbot",
            imageAlt: "Screenshot of a secure settings panel",
            // Placeholder image simulating a technical settings panel
            imageUrl: "/images/rag powered chatbot.jpg",
        },
        {
            title: "Ai Automation with n8n and Python",
            description: "Developed intelligent automation pipelines with n8n and Python, enabling smart decision-making and real-time task execution across systems.",
            linkText: "View on Github",
            linkUrl: "https://github.com/QASIMkhan1212/",
            imageAlt: "Screenshot of a laptop displaying a complex application",
            // Placeholder image simulating a complex application on a device
            imageUrl: "/images/ai automation.webp",

        },
    ];

    type ProjectCardProps = {
        title: string;
        description: string;
        linkText: string;
        linkUrl: string;
        imageUrl: string;
        imageAlt: string;
    };

    const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, linkText, linkUrl, imageUrl, imageAlt }) => (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">
            
            {/* Image/Mockup Area (Top) */}
            <div className="bg-gray-100 overflow-hidden relative p-4" style={{ height: '240px' }}>
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-full object-cover rounded-lg transform transition duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/F0F4FF/4338CA?text=Project+Mockup'; }}
                />
            </div>
            
            {/* Text Content Area (Bottom) */}
            <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                    {title}
                </h3>
                <p className="text-gray-600 text-base">
                    {description}
                </p>

                {/* Link to Dribbble/GitHub/Live Demo */}
                <a 
                    href={linkUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition duration-150 group"
                >
                    <span className="text-sm font-semibold">{linkText}</span>
                    <ExternalLink className="w-4 h-4 ml-1 transform transition duration-300 group-hover:translate-x-0.5" />
                </a>
            </div>
        </div>
    );


    return (
        <section id="portfolio" className="bg-white py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Row (Recent Projects, My Portfolio, Visit My Dribbble Button) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 lg:mb-16">
                    <div>
                        <p className="text-sm uppercase tracking-widest font-semibold text-gray-700">
                            Recent Projects
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">
                            My Portfolio
                        </h2>
                    </div>

                    {/* Button matching the Figma design (Pink/Violet) */}
                    <a href="https://github.com/QASIMkhan1212" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0">
                        <button
                            className="px-6 py-3 flex items-center space-x-2 bg-pink-600 text-white rounded-lg font-medium 
                                       hover:bg-pink-700 transition duration-300 shadow-xl transform hover:scale-105"
                        >
                            <GitBranch className="w-5 h-5" /> {/* Using GitBranch to represent project tracking/source */}
                            <span>Visit My GitHub</span>
                        </button>
                    </a>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            linkText={project.linkText}
                            linkUrl={project.linkUrl}
                            imageUrl={project.imageUrl}
                            imageAlt={project.imageAlt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- 3. ABOUT ME COMPONENT (Completely Static - Adjusted Image Size) ---
const AboutMe = () => {
  const imagePath = "/images/my-img.jpg"; 

  return (
    <section id="about" className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Image - STATIC, 400px width, 100px height - NO STYLING */}
          <div className="relative flex justify-center lg:justify-start">
            
            {/* Image Container with fixed size: w-[400px] h-[100px] */}
            <div className="w-[350px] h-[400px] overflow-hidden bg-gray-200">
                <img
                    src={imagePath} 
                    alt="M.Qasim professional portrait placeholder"
                    // Ensures the image covers the 400x100 container
                    className="w-full h-full object-cover" 
                    onError={(e) => { e.target.src = 'https://placehold.co/400x100/5E5497/FFFFFF?text=ABOUT+IMAGE'; }}
                />
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content - NO ANIMATIONS */}
          <div className="space-y-6 lg:space-y-8">
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              About Me
            </h2>
            
            {/* Paragraph 1 */}
            <p className="text-lg text-gray-600">
              Hello, I'm M. Qasim. I'm an undergraduate student driven by a deep passion for technology and cutting-edge innovation. My primary focus is on the rapidly evolving field of **Artificial Intelligence**, particularly **Generative AI** and **Agentic AI systems**.
            </p>
            
            {/* Paragraph 2 */}
            <p className="text-lg text-gray-600">
              I specialize in building intelligent applications that leverage large language models and autonomous agents. My goal is to transform complex problems into elegant, automated solutions. I am actively seeking opportunities to contribute to dynamic AI projects and push the boundaries of what these systems can achieve.
            </p>
            
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 4. CONTACT COMPONENT ---
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    terms: false,
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    topic: string;
    message: string;
    terms: boolean;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.terms) {
      setStatusMessage('Error: You must accept the terms.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Submitting...');
    
    // =====================================================================
    // CORE EXPLANATION: Where the data goes
    // =====================================================================
    /* --- THIS IS A CLIENT-SIDE MOCK SUBMISSION ---

      In a real Next.js or full-stack application, you would replace this 
      'await new Promise...' section with a call to a serverless function 
      (like a Next.js API route) or a third-party service (like Formspree 
      or a custom API endpoint).

      Example of a real API call (in a full Next.js project):
      const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
      });

      The '/api/send-email' route on the server would then use a library 
      like Nodemailer (with your actual email credentials) to format the 
      data into a human-readable email (HTML or plain text) and send it 
      to your personal email address. It is not possible to send emails 
      directly from the browser/client-side (this component).
    */

    try {
      // Simulate API call delay (2 seconds)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log the data to the console for demonstration
      console.log("Form Data Submitted (MOCK API CALL):", formData);
      
      // Display success message
      setStatusMessage('Success! Your message has been sent.');
      
      // Reset form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
        terms: false,
      } as FormData);

    } catch (error) {
      console.error("Submission error:", error);
      setStatusMessage('Error: Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">
            Contact me
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            Ask anything freely. No cost for Consultation
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Row 1: First Name / Last Name (Two Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                           focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 
                           border-2 focus:border-indigo-600 focus:ring-0"
                style={{ borderColor: '#818CF8' }} 
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                           focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 
                           border-2 focus:border-indigo-600 focus:ring-0"
                style={{ borderColor: '#818CF8' }}
                required
              />
            </div>
          </div>

          {/* Row 2: Email / Phone Number (Two Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                           focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 
                           border-2 focus:border-indigo-600 focus:ring-0"
                style={{ borderColor: '#818CF8' }}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                           focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 
                           border-2 focus:border-indigo-600 focus:ring-0"
                style={{ borderColor: '#818CF8' }}
              />
            </div>
          </div>
          
          {/* Row 3: Choose a Topic (Full Width Select) */}
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-900">
              Choose a topic
            </label>
            <div className="relative mt-1">
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="block w-full px-4 py-3 appearance-none border border-gray-900 rounded-lg shadow-sm 
                           focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 
                           border-2 focus:border-indigo-600 focus:ring-0 bg-white text-black"
                style={{ borderColor: '#818CF8' }}
                required
              >
                <option value="">Select one...</option>
                <option value="project">New Project Inquiry</option>
                <option value="job">Job/Internship Opportunity</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
              {/* Custom Arrow for Select */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Row 4: Message (Full Width Textarea) */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-900 rounded-lg shadow-sm text-gray-900
                         focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 
                         border-2 focus:border-indigo-600 focus:ring-0"
              style={{ borderColor: '#818CF8' }}
              required
            ></textarea>
          </div>
          
          {/* Row 5: I accept the terms Checkbox */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I accept the terms
            </label>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div className={`text-center py-2 rounded-lg font-medium ${
              statusMessage.startsWith('Success') ? 'bg-green-100 text-green-700' : 
              statusMessage.startsWith('Error') ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {statusMessage}
            </div>
          )}


          {/* Submit Button (Centered) */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex justify-center items-center px-12 py-3 border border-transparent text-base font-medium rounded-lg 
                         shadow-sm text-white transition duration-300 focus:outline-none 
                         focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 
                         ${isSubmitting 
                            ? 'bg-indigo-400 cursor-not-allowed' 
                            : 'bg-indigo-600 hover:bg-indigo-900 transform hover:scale-[1.02]'}`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};


// --- 5. FOOTER COMPONENT (Simple placeholder) ---
const Footer = () => {
    const footerNavLinks = [
        { name: "Home", href: "#home" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "About me", href: "#about" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookies Settings", href: "#cookies" },
    ];
    
    const contactInfo = [
        { icon: Mail, text: "qasimygv@gmail.com" },
        { icon: Phone, text: "+92 3200986593" },
        { icon: MapPin, text: "Karachi, Pakistan (Remote)" },
    ];

    // Reusing the logo logic structure from Navbar
    // const Logo = () => {
    //     const logoPlaceholderPath = "/images/logo.png";
    //     return (
    //       <div className="flex items-center cursor-pointer">
    //         <img
    //           src={logoPlaceholderPath}
    //           alt="M.Qasim Logo"
    //           className="w-8 h-8 rounded-full object-cover mr-2"
    //           onError={(e) => { e.target.src = 'https://placehold.co/32x32/FFFFFF/1E293B?text=Logo'; }}
    //         />
    //         <span className="text-xl font-bold text-white">M.QASIM</span>
    //       </div>
    //     );
    //   };


    return (
        <footer className="bg-gray-900 pt-16 pb-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* === MAIN GRID SECTION === */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-700">
                    
                    {/* Column 1: Logo & Tagline */}
                    <div className="col-span-2 lg:col-span-2 space-y-4">
                        {/* <Logo /> */}
                        <p className="text-gray-400 text-sm max-w-xs">
                            Driving innovation in Generative AI and building autonomous Agentic Systems.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-indigo-500 transition duration-150">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-indigo-500 transition duration-150">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-indigo-500 transition duration-150">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-indigo-500 transition duration-150">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-base font-semibold text-white uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerNavLinks.map((item) => (
                                <li key={item.name}>
                                    <a 
                                        href={item.href} 
                                        className="text-gray-400 hover:text-indigo-400 text-sm transition duration-150"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-base font-semibold text-white uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3">
                            {legalLinks.map((item) => (
                                <li key={item.name}>
                                    <a 
                                        href={item.href} 
                                        className="text-gray-400 hover:text-indigo-400 text-sm transition duration-150"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info (Moves to new row on smaller screens) */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
                        <h4 className="text-base font-semibold text-white uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                    <item.icon className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-400 text-sm">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* === BOTTOM SECTION: Copyright & Attribution === */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
                    
                    {/* Copyright (Left) */}
                    <p className="text-center md:text-left order-2 md:order-1 mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} M.Qasim. All rights reserved.
                    </p>

                    {/* Made With (Right) */}
                    <p className="order-1 md:order-2">
                        Designed & Built with <span role="img" aria-label="love" className="text-red-500">❤️</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

// --- 6. MAIN APP COMPONENT ---
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <style>{`
        /* Global styles or custom keyframes can go here if needed */
        
        /* Custom input focus style to match the design's purple outline */
        input:focus, textarea:focus, select:focus {
            outline: 2px solid #6366F1; /* indigo-600 */
            box-shadow: 0 0 0 1px #6366F1;
            border-color: #6366F1 !important;
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <SkillsSection/>
        <AchievementsSection/>
        <PortfolioSection/>
        <AboutMe />
        {/* Portfolio section goes here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;