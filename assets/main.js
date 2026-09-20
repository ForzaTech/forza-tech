/**
 * Forza Tech (فورزا تک) - Shared Vanilla JavaScript
 * Clean, lightweight, modular, and works offline and on GitHub Pages with 0 build steps.
 */

// All Catalog Products for Global Search & Quick References
const FORZA_PRODUCTS = [
  {
    id: 'novapods-x2',
    name: 'هندزفری بی‌سیم NovaPods X2',
    category: 'headphones',
    categoryLabel: 'هدفون و هندزفری',
    price: '۲,۸۹۰,۰۰۰',
    tag: 'جدید / پرفروش',
    desc: 'کیفیت صدای Hi-Res و نویزکنسلینگ هوشمند با باتری ۳۲ ساعته',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1XElPZYaNN95X8qRQVv5MBVeDvvY3AvVNCf1cl4yhmG9gdyMGQMWuUozlz7tj9JZnWRZ-bce7itbyIpSiPHjPts_kV7Fjad9ymDWLcwvjWGZ90DhNIjHzdWOAI8Ql-J05QenjF5PzS_pWDBeZgUOLzfmX2Uc-oNddv3eONVFOWeim7X5UVjTS0SqmQk-At4wa9IrugzjpUneZgAzvx8a92rrntmfYwCdti6caOsl813RzkBpCBURM'
  },
  {
    id: 'sonic-pro',
    name: 'هدفون بی‌سیم Sonic Pro',
    category: 'headphones',
    categoryLabel: 'هدفون و هندزفری',
    price: '۴,۷۵۰,۰۰۰',
    tag: 'استودیویی',
    desc: 'تفکیک صدای حرفه‌ای استودیویی با درایور تیتانیومی و ۴۵ ساعت دوام باتری',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgXPj4us7N5SbClEwslTerIxiK0LlOkin4v5UbDL9kThXXAvsMoSzdtlQ3TzQgYqjUhVPVHTw6lwT5gKp-xEusskIA8Ne2yRZTuD5WluLcq1IWqnSB7DJpkSy6e8TwPbSydCUGBVb3hKljcq36hJxUdhitiqizT87pIoKsAyR0uW14fQG4YXeGCsw6bsLNYl1GpN_UDTa65HWOzXwQd3Tb3a-paiMTnbWkbd3j8ecA46lSLgq19xdG'
  },
  {
    id: 'volt-20k',
    name: 'پاوربانک Volt 20K',
    category: 'powerbanks',
    categoryLabel: 'پاوربانک',
    price: '۲,۱۵۰,۰۰۰',
    tag: 'توان ۶۵W / سفری',
    desc: 'ظرفیت ۲۰۰۰۰ میلی‌آمپر با خروجی ۶۵ وات PD و بدنه آلومینیومی مات',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvIE0JDioc_tZTly-3njKd1ay1Q2hGvBQ8EIcd7-AralRAm-U4rCI1E1wvH1FtFNPVmr7I40g1qVH-vPKRo143pov8LdAPIIVCSe8ShNvk-n6w0Ys5KTQLScKScn2sl6OipBy-K9qYc17uIKiEtRv-fLfDCeRSpUMIBXqn7EntT8SCFWvvv8UD6sWgTiFOy5hQI8VP0MomiQalGY16h55avUdTA_J5B_1B2QDjmA2A-w9cTTX695Na'
  },
  {
    id: 'gan-65w',
    name: 'شارژر سریع GaN 65W Turbo',
    category: 'chargers',
    categoryLabel: 'شارژر و کابل',
    price: '۲,۴۹۰,۰۰۰',
    tag: 'فناوری GaN / پرتوان',
    desc: 'فناوری گالیوم نیترید، سه پورت همزمان سازگار با لپ‌تاپ و گوشی',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5rlMxoLLXgQ0mVkAbxmONTD-WoPR6YfOgjVSoHbBDskVMtMQnvzO3tqdkaIucJMuz6pwwPKMce_jT3qOTNzhrGtVoJartB6TfsVrWdmQltl4itCS0XorRYOhgb_r5NX4QwsG5IiIbG_s63UKYgv7Ia13cqi4zGNGp_t5dKETFm7cJ0ntGqGgguRRNC7aQWw3-xdEISSbH10kgmedTTyrgrSs7Y_P7P423TAAmm9vdoJpMNXwnENTK'
  },
  {
    id: 'flex-100w',
    name: 'کابل شارژ فست Flex 100W',
    category: 'chargers',
    categoryLabel: 'شارژر و کابل',
    price: '۵۹۰,۰۰۰',
    tag: 'روکش کنفی',
    desc: 'روکش کنفی ضد کشش مقاوم، توان عبور ۱۰۰ وات، طول ۱.۸ متر',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM6hASMHAaWa2e38d8rAlK1h_1DHMUJ9H_7BSjWcEyCwGupwZw3e8sldw7kMWSTAM5rTLQoqUVRnZKSuUNAkBJbe5cFMFlLy7F5ENgDpLYyK4gTSACtoluGBHGZIVWlzb7_797rq3b_AP6fqJ8oE-ZPbF4E8x_layeswJMtIzemk4PV6bd-2yZh_pTs1Gqmi8FKqxF99BzQgwn98doMP67D-rbFg0xyKHE2kwylNZqZt3-lQRqNr9O'
  },
  {
    id: 'magring-15w',
    name: 'شارژر بی‌سیم مگنتی MagRing 15W',
    category: 'chargers',
    categoryLabel: 'شارژر و کابل',
    price: '۱,۳۹۰,۰۰۰',
    tag: 'مگنتیک قوی',
    desc: 'اتصال آهنربایی دقیق و مستحکم، شارژ سریع ایمن سازگار با MagSafe',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMwDclrD_pet7P5cjb3remBa4UD25svF8S7a46Z-Z5mI_Siv8nz43sywNNc949JcvUYxWaEV6vXK5ikN-Xu7_E1b_-H-0Q95gyKUmCZwhvWmv-e2mruadHUoV4h0VXxb9OfvVLx_oJiy60yKZcoHr51yO5doESTx1tCikVK6ZrQtuvwJo-mxbP5Y5TCnmHxATrTGc_zPTpDlzWkIE5AAh6jwE-Y_UW4ozQnKjV-6BsxwoWlvostoYu'
  },
  {
    id: 'clearshield',
    name: 'قاب محافظ شفاف ClearShield',
    category: 'cases',
    categoryLabel: 'قاب و محافظ',
    price: '۷۹۰,۰۰۰',
    tag: 'ضد زردی',
    desc: 'شفافیت بادوام ضد زردی، مقاومت ضد ضربه با ایربگ ضربه‌گیر چهار گوشه',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvGvhsgyNUpJAOsFljmeUEkpcac7XZ2T470e9ydsJ8VBxal43ywKFBxDkhXQKJFTI25Jdx6D6qFIhcjUgkpdPDM2zc26S-Qx8oryQdDKnzWrIr7ldx-LFGj5h1hnq_wrRHvdfXzfJkfm5K6G-EFCqB9K6AWoG47SDOpXarT10b8_3Cuh7PvqJBX11igJ8Gbg4ErzDhlzLVPct95gyhQpfJDiaduH_eMt7hdmg-UtmchaeHlddkUifa'
  },
  {
    id: 'flexdock',
    name: 'استند رومیزی آلومینیومی FlexDock',
    category: 'accessories',
    categoryLabel: 'لوازم جانبی',
    price: '۱,۱۹۰,۰۰۰',
    tag: 'ارگونومیک',
    desc: 'تمام آلومینیوم مات، زاویه متغیر ۳۶۰ درجه، پایه ضد لغزش سیلیکونی',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4xQgTNI_HanKKiUR-5Cuz-c43_b5mkecllCi4e4-QHQxXtkQ3iQvdt7yVQ-qsNHsrnlj4uPUeyx39tBnEjkIGYs5jt3hgJckXcZWWp6MsuUZajhb9OZX-uHBgw2ZgW487FzY9cZqviRzR4p0IxP8iaM1hZx0nEgZ5JXc9ct494BpFmiv9LUHhzI3lq0P4UwJBsGtDYyELIPLzC1SNLp48XuJlm2FLgRP8jhn8nLd7h8mj9E-eHaZv'
  },
  {
    id: 'pulse-s3',
    name: 'ساعت هوشمند پرچمدار Pulse S3',
    category: 'smartwatches',
    categoryLabel: 'ساعت هوشمند',
    price: '۴,۹۹۰,۰۰۰',
    tag: 'پرچمدار',
    desc: 'صفحه امولد همیشه روشن، سنجش اکسیژن و ضربان قلب، استاندارد ضدآب IP68',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApsU8K8SIdAoPdjsHEox0iH0qmN7HdLFDXE97rTbg0pZmmNuKWnkup_-u0EP8LOk3qPAhr9ZkVkMTyyMAw7V5NZwuIDEmlJvOS2-NpUJcHu_qGHUddaTFv0ztHg7uS-lYKmPtgorK1oj766GcyPIiTZJknZkvq33DfJVgPS5JyGo2bLIAHoyONUbo88sOTXWk-2KOYFH58eSUgP7UhuuHMqLsjG142WxyzYt8EyMvd4sfRFp1BqDXG'
  }
];

// Toast notification helper
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' ? '✓' : 'ℹ';
  toast.innerHTML = `<span style="color: #34C759; font-weight: bold; font-size: 16px;">${icon}</span><span>${message}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');
  const backdrop = document.getElementById('mobile-menu-backdrop');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);
}

// Global Search Modal
function setupSearchModal() {
  const openBtns = document.querySelectorAll('[data-open-search]');
  const modal = document.getElementById('search-modal');
  const closeBtn = document.getElementById('close-search-modal');
  const backdrop = document.getElementById('search-modal-backdrop');
  const input = document.getElementById('search-modal-input');
  const resultsContainer = document.getElementById('search-results-container');

  if (!modal) return;

  function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 50);
      renderResults('');
    }
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  if (input && resultsContainer) {
    input.addEventListener('input', (e) => {
      renderResults(e.target.value.trim().toLowerCase());
    });
  }

  function renderResults(query) {
    if (!resultsContainer) return;
    const filtered = FORZA_PRODUCTS.filter(p => {
      if (!query) return true;
      return p.name.toLowerCase().includes(query) || 
             p.desc.toLowerCase().includes(query) || 
             p.categoryLabel.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div class="p-8 text-center text-gray-500 text-sm">
          موردی متناسب با عبارت جستجو یافت نشد.
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map(p => `
      <div class="flex items-center justify-between p-3.5 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-100 last:border-0">
        <div class="flex items-center gap-3">
          <img src="${p.image}" alt="${p.name}" class="w-12 h-12 object-contain bg-white rounded-lg p-1 border border-gray-100" />
          <div class="text-right">
            <h5 class="text-sm font-bold text-gray-900">${p.name}</h5>
            <span class="text-xs text-gray-500">${p.categoryLabel} • ${p.price} تومان</span>
          </div>
        </div>
        <a href="https://t.me/MuzanAkuma?text=${encodeURIComponent('سلام، متقاضی سفارش ' + p.name + ' هستم.')}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium shrink-0">
          سفارش
        </a>
      </div>
    `).join('');
  }
}

// Telegram Ordering Helper
function createTelegramOrderLink(productName) {
  const text = encodeURIComponent(`سلام، تمایل به ثبت سفارش محصول ${productName} در فورزا تک دارم. لطفا شرایط ارسال را اعلام بفرمایید.`);
  return `https://t.me/MuzanAkuma?text=${text}`;
}

// Handle Category Query on Products Page
function handleURLCategoryFilter() {
  const urlParams = new URLSearchParams(window.location.search);
  const cat = urlParams.get('category');
  if (cat && typeof window.setCategoryFilter === 'function') {
    const targetBtn = document.querySelector(`[data-category="${cat}"]`);
    if (targetBtn) {
      window.setCategoryFilter(cat, targetBtn);
    }
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupSearchModal();
  handleURLCategoryFilter();
});
