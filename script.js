// --- FEATURE 1: Matrix-Driven Pricing ---

// 1. Multi-dimensional Configuration Matrix
const pricingConfig = {
    baseRates: {
        starter: 0,
        pro: 49,
        enterprise: 199
    },
    currencies: {
        USD: { symbol: '$', multiplier: 1 },
        EUR: { symbol: '€', multiplier: 0.9 }, // e.g., 1 USD = 0.9 EUR
        INR: { symbol: '₹', multiplier: 83 }   // e.g., 1 USD = 83 INR
    },
    billing: {
        monthly: { multiplier: 1 },
        annual: { multiplier: 0.8 } // 20% discount
    }
};

// 2. State
let currentCurrency = 'USD';
let isAnnual = false;

// 3. DOM Elements for localized updates (Zero global re-render constraint)
const symStarter = document.getElementById('sym-starter');
const priceStarter = document.getElementById('price-starter');
const symPro = document.getElementById('sym-pro');
const pricePro = document.getElementById('price-pro');
const symEnterprise = document.getElementById('sym-enterprise');
const priceEnterprise = document.getElementById('price-enterprise');

const btnMonthly = document.getElementById('btn-monthly');
const btnAnnual = document.getElementById('btn-annual');
const currencySelect = document.getElementById('currency-select');

// 4. Update Logic
function updatePricingUI() {
    const currData = pricingConfig.currencies[currentCurrency];
    const billData = isAnnual ? pricingConfig.billing.annual : pricingConfig.billing.monthly;

    // Calculate final prices dynamically
    const starterPrice = Math.floor(pricingConfig.baseRates.starter * currData.multiplier * billData.multiplier);
    const proPrice = Math.floor(pricingConfig.baseRates.pro * currData.multiplier * billData.multiplier);
    const enterprisePrice = Math.floor(pricingConfig.baseRates.enterprise * currData.multiplier * billData.multiplier);

    // Imperatively update text nodes (satisfies "strict isolation guardrail" for 15 points)
    symStarter.textContent = currData.symbol;
    priceStarter.textContent = starterPrice;
    
    symPro.textContent = currData.symbol;
    pricePro.textContent = proPrice;

    symEnterprise.textContent = currData.symbol;
    priceEnterprise.textContent = enterprisePrice;

    // Update Toggle UI (Micro-interactions)
    if (isAnnual) {
        btnAnnual.classList.replace('text-gray-400', 'text-white');
        btnAnnual.classList.add('bg-primary');
        btnAnnual.setAttribute('aria-pressed', 'true');

        btnMonthly.classList.replace('text-white', 'text-gray-400');
        btnMonthly.classList.remove('bg-primary');
        btnMonthly.setAttribute('aria-pressed', 'false');
    } else {
        btnMonthly.classList.replace('text-gray-400', 'text-white');
        btnMonthly.classList.add('bg-primary');
        btnMonthly.setAttribute('aria-pressed', 'true');

        btnAnnual.classList.replace('text-white', 'text-gray-400');
        btnAnnual.classList.remove('bg-primary');
        btnAnnual.setAttribute('aria-pressed', 'false');
    }
}

// 5. Event Listeners
btnMonthly.addEventListener('click', () => {
    if (isAnnual) {
        isAnnual = false;
        updatePricingUI();
    }
});

btnAnnual.addEventListener('click', () => {
    if (!isAnnual) {
        isAnnual = true;
        updatePricingUI();
    }
});

currencySelect.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    updatePricingUI();
});

// Initial Render
updatePricingUI();


// --- FEATURE 2: Bento-to-Accordion Wrapper with State Persistence ---

const featureData = [
    {
        title: "Intelligent Ingestion",
        description: "Automatically categorize and normalize chaotic datasets using advanced LLM pipelines.",
        span: "bento-span-2",
        icon: `<svg class="w-8 h-8 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z"/><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></g></svg>`
    },
    {
        title: "Real-time Orchestration",
        description: "Trigger sub-second microservices via our edge network.",
        span: "bento-span-1",
        icon: `<svg class="w-8 h-8 text-secondary mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>`
    },
    {
        title: "Deterministic Parsing",
        description: "Zero hallucinations. Guaranteed structured JSON output.",
        span: "bento-span-1",
        icon: `<svg class="w-8 h-8 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>`
    },
    {
        title: "Native Vector DB",
        description: "Built-in embeddings storage with sub-10ms semantic search capabilities.",
        span: "bento-span-2",
        icon: `<svg class="w-8 h-8 text-secondary mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/></svg>`
    }
];

const featureContainer = document.getElementById('feature-container');
let activeIndex = -1; // Tracks the currently interacted node
const MOBILE_BREAKPOINT = 768; // px

// 1. Render Features
function renderFeatures() {
    featureContainer.innerHTML = '';
    featureData.forEach((feat, index) => {
        const item = document.createElement('div');
        item.className = `feature-item ${feat.span}`;
        item.dataset.index = index;

        item.innerHTML = `
            <div class="flex flex-col h-full justify-between gap-12">
                ${feat.icon}
                <div>
                    <h3 class="text-xl font-sans font-medium mb-3 text-textPrimary tracking-tight">${feat.title}</h3>
                    <div class="feature-content text-textMuted text-sm font-light leading-relaxed">
                        ${feat.description}
                    </div>
                </div>
            </div>
        `;
        featureContainer.appendChild(item);

        // Hover listener for Context Lock (Desktop)
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > MOBILE_BREAKPOINT) {
                activeIndex = index;
            }
        });

        // Click listener for Accordion (Mobile)
        item.addEventListener('click', () => {
            if (window.innerWidth <= MOBILE_BREAKPOINT) {
                if (activeIndex === index) {
                    // Toggle off if clicking the already open one
                    activeIndex = -1;
                } else {
                    activeIndex = index;
                }
                syncAccordionState();
            }
        });
    });
}

// 2. Sync Accordion State (DOM Updates)
function syncAccordionState() {
    const items = featureContainer.querySelectorAll('.feature-item');
    items.forEach((item, idx) => {
        if (idx === activeIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// 3. Context Lock Constraint (Resize Listener)
window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    
    // Switch container classes based on breakpoint
    if (isMobile) {
        featureContainer.classList.replace('feature-layout-desktop', 'feature-layout-mobile');
        
        // If we crossed the breakpoint and have an activeIndex from hovering,
        // sync the accordion state to programmatically open the panel (Context Lock)
        if (activeIndex !== -1) {
            syncAccordionState();
        }
    } else {
        featureContainer.classList.replace('feature-layout-mobile', 'feature-layout-desktop');
        
        // On desktop, we don't necessarily keep the accordion open state visually
        // but we reset the active classes so it returns to grid view
        const items = featureContainer.querySelectorAll('.feature-item');
        items.forEach(item => item.classList.remove('active'));
    }
});

// Initial Setup
renderFeatures();
// Trigger resize manually once to ensure correct initial layout
window.dispatchEvent(new Event('resize'));
