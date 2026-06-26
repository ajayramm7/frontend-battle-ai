"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("Discovery");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const currencies: Record<string, { symbol: string; rate: number }> = {
    USD: { symbol: "$", rate: 1 },
    EUR: { symbol: "€", rate: 0.9 },
    INR: { symbol: "₹", rate: 83 },
  };

  const getPrice = (base: number) => {
    const rate = currencies[currency].rate;
    const discount = billing === "annual" ? 0.8 : 1;
    return Math.floor(base * rate * discount);
  };

  const features = [
    { title: "Secure Guard", icon: "/SVGs/cog-8-tooth.svg", desc: "We fortify your AI deployments with robust security protocols. Our team ensures every model adheres to strict data privacy standards." },
    { title: "Agent Build", icon: "/SVGs/cube-16-solid.svg", desc: "Tailored AI agents designed for your specific needs. We develop custom logic and workflows that integrate deeply with your existing tools." },
    { title: "Cloud Scale", icon: "/SVGs/arrow-trending-up.svg", desc: "Infrastructure optimization for high-traffic AI apps. We ensure your systems remain fast, responsive, and ready for any level of demand." },
    { title: "Data Mining", icon: "/SVGs/chart-pie.svg", desc: "Transform raw information into actionable intelligence. We build the pipelines and vector stores that power your organization's future." },
  ];
  
  const faqs = [
    { q: "What is the Armory platform?", a: "Armory is a specialized infrastructure for building and deploying custom AI agents. We provide the neural logic and edge nodes required to run autonomous workflows at enterprise scale." },
    { q: "Who is this template designed for?", a: "This template is designed for high-growth startups and enterprise teams building the next era of AI." },
    { q: "How does it differ from a standard chatbot?", a: "Our agents have access to a custom LLM and can automate entire workflows rather than just answering questions." }
  ];

  return (
     <main className="min-h-screen bg-background text-textPrimary">
        {/* Navigation */}
        <header className="fixed top-0 w-full z-50 bg-background border-b border-surface/50 h-16 flex items-center justify-between px-6">
            <div className="flex items-center gap-2 font-sans font-bold text-lg">
                <img src="/SVGs/cube-16-solid.svg" alt="logo" className="w-5 h-5 opacity-80" style={{ filter: 'brightness(0) invert(1)' }} />
                armory
            </div>
            <div className="hidden md:flex gap-8 text-sm font-sans">
                <a href="#" className="hover:text-primary transition-colors">AI Strategy</a>
                <a href="#" className="hover:text-primary transition-colors">Custom Agents</a>
                <a href="#" className="hover:text-primary transition-colors">Process Automation</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </header>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50"></div>
            
            <h1 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter max-w-4xl z-10 leading-tight mb-8">
                Power your future with AI
            </h1>
            <p className="text-textMuted text-lg md:text-xl max-w-2xl z-10 font-light mb-12">
                Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with Armory today.
            </p>
            <button className="z-10 bg-transparent border border-textPrimary text-textPrimary px-8 py-3 font-mono text-sm tracking-widest hover:bg-textPrimary hover:text-background transition-colors flex items-center gap-3">
                Build A Workflow 
                <img src="/SVGs/chevron-right.svg" alt="arrow" className="w-4 h-4 opacity-80" style={{ filter: 'brightness(0) invert(1)' }} />
            </button>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6 border-t border-surface">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-surface/30 border border-surface/30">
                    {features.map((feat, i) => (
                        <div 
                            key={i} 
                            className={`feature-item bg-background p-8 ${i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-1'} ${activeFeature === i ? 'active' : ''}`}
                            onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                        >
                            <div className="w-10 h-10 border border-surface/50 mb-6 flex items-center justify-center p-2">
                                <img src={feat.icon} alt={feat.title} className="w-full h-full opacity-70" style={{ filter: 'brightness(0) invert(1)' }} />
                            </div>
                            <h3 className="text-xl font-medium mb-4">{feat.title}</h3>
                            <div className="feature-content text-textMuted text-sm leading-relaxed">
                                {feat.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Workflow Builder Mockup */}
        <section className="py-24 px-6 border-t border-surface relative bg-[#0B252E]">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p className="font-mono text-xs text-primary mb-4 tracking-widest">// OUR PRODUCT</p>
                    <h2 className="text-4xl md:text-5xl font-sans tracking-tighter">Build logic at scale</h2>
                </div>
                
                <div className="relative h-[400px] border border-surface/50 bg-background/50 flex items-center justify-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" stroke="rgba(241,246,244,0.1)" strokeWidth="2" fill="none">
                        <path d="M 300 200 L 500 200 L 500 150" />
                        <path d="M 300 200 L 500 200 L 500 250" />
                    </svg>
                    <div className="absolute left-[20%] top-[45%] border border-surface bg-background px-4 py-2 font-mono text-xs flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary"></span> Email Trigger
                    </div>
                    <div className="absolute left-[55%] top-[30%] border border-surface bg-background px-4 py-2 font-mono text-xs flex items-center gap-2">
                        <span className="w-2 h-2 bg-textPrimary"></span> AI Agent
                    </div>
                    <div className="absolute left-[55%] top-[60%] border border-surface bg-background px-4 py-2 font-mono text-xs flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary"></span> Telegram
                    </div>
                </div>
            </div>
        </section>

        {/* Live Stats */}
        <section className="py-24 px-6 border-t border-surface">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
                <div className="border-l border-surface/50 pl-6">
                    <p className="font-mono text-xs text-textMuted mb-2">000 STATISTICS</p>
                    <p className="text-6xl font-light tracking-tighter mb-4">12ms</p>
                    <p className="text-sm text-textMuted max-w-[200px]">Average latency for real-time inference.</p>
                </div>
                <div className="border-l border-surface/50 pl-6">
                    <p className="text-6xl font-light tracking-tighter mb-4 mt-6">10x</p>
                    <p className="text-sm text-textMuted max-w-[200px]">Increase in manual task processing speed.</p>
                </div>
                <div className="border-l border-surface/50 pl-6">
                    <p className="text-6xl font-light tracking-tighter mb-4 mt-6">99%</p>
                    <p className="text-sm text-textMuted max-w-[200px]">Uptime for critical agent infrastructure.</p>
                </div>
            </div>
        </section>

        {/* Pricing Matrix */}
        <section className="py-24 px-6 border-t border-surface">
             <div className="max-w-7xl mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                     <h2 className="text-4xl md:text-5xl font-sans tracking-tighter max-w-lg">Quantifiable impact across every deployment.</h2>
                     <div className="flex items-center gap-4">
                         <div className="flex border border-surface/50 p-1">
                             <button className={`px-4 py-2 font-mono text-xs ${billing === 'monthly' ? 'bg-surface text-textPrimary' : 'text-textMuted'}`} onClick={() => setBilling('monthly')}>MONTHLY</button>
                             <button className={`px-4 py-2 font-mono text-xs ${billing === 'annual' ? 'bg-surface text-textPrimary' : 'text-textMuted'}`} onClick={() => setBilling('annual')}>ANNUAL</button>
                         </div>
                         <select className="bg-transparent border border-surface/50 font-mono text-xs px-4 py-2" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                             <option value="USD">USD ($)</option>
                             <option value="EUR">EUR (€)</option>
                             <option value="INR">INR (₹)</option>
                         </select>
                     </div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface/30 border border-surface/30">
                     <div className="bg-background p-10 hover:bg-surface/20 transition-colors">
                         <h3 className="text-xl mb-8">Starter</h3>
                         <p className="text-5xl font-light mb-8">{currencies[currency].symbol}{getPrice(0)}</p>
                         <button className="w-full border border-surface/50 py-3 font-mono text-xs tracking-widest hover:bg-surface transition-colors">CHOOSE</button>
                     </div>
                     <div className="bg-background p-10 hover:bg-surface/20 transition-colors border-x border-primary/30 relative">
                         <div className="absolute top-0 right-0 bg-primary text-background text-[10px] font-mono px-2 py-1 font-bold">PRIME</div>
                         <h3 className="text-xl mb-8">Pro</h3>
                         <p className="text-5xl font-light mb-8">{currencies[currency].symbol}{getPrice(49)}</p>
                         <button className="w-full bg-primary text-background py-3 font-mono text-xs tracking-widest font-bold">CHOOSE</button>
                     </div>
                     <div className="bg-background p-10 hover:bg-surface/20 transition-colors">
                         <h3 className="text-xl mb-8">Enterprise</h3>
                         <p className="text-5xl font-light mb-8">{currencies[currency].symbol}{getPrice(199)}</p>
                         <button className="w-full border border-surface/50 py-3 font-mono text-xs tracking-widest hover:bg-surface transition-colors">CONTACT</button>
                     </div>
                 </div>
             </div>
        </section>

        {/* Tabbed Interface */}
        <section className="py-24 px-6 border-t border-surface">
             <div className="max-w-7xl mx-auto">
                 <div className="text-center mb-16">
                    <p className="font-mono text-xs text-primary mb-4 tracking-widest">// PRODUCT FEATURES</p>
                    <h2 className="text-4xl md:text-5xl font-sans tracking-tighter">Engineered for autonomy</h2>
                 </div>
                 
                 <div className="flex border-b border-surface/50 mb-12 overflow-x-auto">
                     {["Discovery", "Analysis", "Training", "Deploy"].map((tab) => (
                         <button 
                             key={tab}
                             className={`flex-1 py-4 font-mono text-xs tracking-widest border-b-2 transition-colors ${activeTab === tab ? 'border-textPrimary text-textPrimary' : 'border-transparent text-textMuted hover:text-textPrimary'}`}
                             onClick={() => setActiveTab(tab)}
                         >
                             {tab.toUpperCase()}
                         </button>
                     ))}
                 </div>
                 
                 <div className="min-h-[200px] border border-surface/50 p-8 flex items-center justify-center bg-[#0B252E] tab-content" key={activeTab}>
                     <div className="text-center">
                         <div className="w-16 h-16 border border-primary/50 mx-auto mb-6 flex items-center justify-center rotate-45">
                             <div className="-rotate-45 font-mono text-primary text-xs">{activeTab.substring(0, 3).toUpperCase()}</div>
                         </div>
                         <h3 className="text-2xl font-light">{activeTab} Phase</h3>
                     </div>
                 </div>
             </div>
        </section>

        {/* Light Mode Section */}
        <section className="py-24 px-6 bg-textPrimary text-background">
             <div className="max-w-3xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-sans tracking-tighter mb-16">Common inquiries</h2>
                 
                 <div className="divide-y divide-background/20 border-y border-background/20">
                     {faqs.map((faq, i) => (
                         <div key={i} className="py-6 cursor-pointer" onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}>
                             <div className="flex justify-between items-center">
                                 <h4 className="text-lg font-medium">{faq.q}</h4>
                                 <span className="font-mono text-xl">{activeFAQ === i ? '-' : '+'}</span>
                             </div>
                             <div className={`overflow-hidden transition-all duration-300 ${activeFAQ === i ? 'max-h-[200px] mt-4' : 'max-h-0'}`}>
                                 <p className="text-background/70 font-light">{faq.a}</p>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-8 px-6 bg-background border-t border-surface">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
                <div className="md:col-span-2">
                    <p className="font-mono text-xs text-primary mb-4 tracking-widest">// GET STARTED</p>
                    <h2 className="text-3xl font-medium mb-8">Get smarter about<br/>AI systems</h2>
                    <div className="flex border border-surface/50 max-w-md">
                        <input type="email" placeholder="jane@example.com" className="bg-transparent flex-1 px-4 py-3 outline-none text-sm font-mono" />
                        <button className="bg-surface px-6 font-mono text-xs tracking-widest hover:bg-surface/80">SUBSCRIBE</button>
                    </div>
                </div>
                <div>
                    <h4 className="font-mono text-xs text-textMuted mb-6 tracking-widest">COMPANY</h4>
                    <ul className="space-y-4 text-sm font-light">
                        <li><a href="#" className="hover:text-primary">About Us</a></li>
                        <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                        <li><a href="#" className="hover:text-primary">Book A Call</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-mono text-xs text-textMuted mb-6 tracking-widest">POLICIES</h4>
                    <ul className="space-y-4 text-sm font-light">
                        <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="overflow-hidden w-full flex justify-center">
                <h1 className="text-[18vw] font-bold tracking-tighter leading-none text-textPrimary">armory</h1>
            </div>
            <div className="text-center mt-8 text-xs font-mono text-textMuted">
                ©2026 Armory AI. All rights reserved.
            </div>
        </footer>
     </main>
  );
}
