const production = true;
const environment = 'production';

const leadFormUrl =
  production ?
    'https://public.api.dein-ruf.de/email/leadForm' :
    'http://localhost:3010/email/leadForm';

const placeOrderFormUrl =
  production ?
    'https://public.api.dein-ruf.de/email/placeOrderForm' :
    'http://localhost:3010/email/placeOrderForm';

const contactFormUrl =
  production ?
    'https://public.api.dein-ruf.de/email/contactPopupForm' :
    'http://localhost:3010/email/contactPopupForm';

const individualOfferFormUrl =
  production ?
    'https://public.api.dein-ruf.de/email/priceCarouselPopupForm' :
    'http://localhost:3010/email/priceCarouselPopupForm';

const insuranceRecommendationFormUrl =
  production ?
    'https://public.api.dein-ruf.de/email/insuranceRecommendationPopupForm' :
    'http://localhost:3010/email/insuranceRecommendationPopupForm';

const showTransparentOverlay = () => {
  const mainOverlay = document.getElementById('mainOverlay');
  mainOverlay.classList.add('transparent-overlay');
  if (mainOverlay.classList.contains('hidden')) {
    mainOverlay.classList.remove('hidden');
    setTimeout(() => {
      mainOverlay.classList.remove('opacity-0');
    }, 150);
  }
};



const showDarkOverlay = () => {
  const mainOverlay = document.getElementById('mainOverlay');
  mainOverlay.classList.add('dark-overlay');
  if (mainOverlay.classList.contains('hidden')) {
    mainOverlay.classList.remove('hidden');
    setTimeout(() => {
      mainOverlay.classList.remove('opacity-0');
    }, 150);
  }
};

const hideOverlay = () => {
  const mainOverlay = document.getElementById('mainOverlay');
  if (mainOverlay.classList.contains('transparent-overlay')) {
    mainOverlay.classList.remove('transparent-overlay');
  }
  if (mainOverlay.classList.contains('dark-overlay')) {
    mainOverlay.classList.remove('dark-overlay');
  }
  mainOverlay.classList.add('opacity-0');
  setTimeout(() => {
    mainOverlay.classList.add('hidden');
  }, 150);
};

const showTocOverlay = () => {
  const tocOverlay = document.getElementById('tocOverlay');
  if (tocOverlay.classList.contains('hidden')) {
    tocOverlay.classList.remove('hidden');
    setTimeout(() => {
      tocOverlay.classList.remove('opacity-0');
      // tocOverlay.classList.add('dark-overlay');
      setTimeout(() => {

      }, 150);
    }, 150);
  }
};

const hideTocOverlay = () => {
  const tocOverlay = document.getElementById('tocOverlay');
  if (tocOverlay.classList.contains('transparent-overlay')) {
    tocOverlay.classList.add('opacity-0');
    setTimeout(() => {
      tocOverlay.classList.remove('transparent-overlay');
      setTimeout(() => {
        tocOverlay.classList.add('hidden');
      }, 150);
    }, 250);
  }
  if (tocOverlay.classList.contains('dark-overlay')) {
    tocOverlay.classList.add('opacity-0');
    setTimeout(() => {
      tocOverlay.classList.add('hidden');
      setTimeout(() => {

      }, 150);
    }, 150);
  }

};


const disableScroll = () => {
  console.log('disableScroll');
  document.getElementsByTagName('html')[0].removeAttribute('class');
  document.getElementsByTagName('html')[0].setAttribute('class','overflow-hidden');
  if (document.body.classList.contains('overflow-scroll')) {
    document.body.classList.remove('overflow-scroll');
  }
  document.body.classList.add('overflow-scroll');
};

const enableScroll = () => {
  if (document.querySelector('html').classList.contains('overflow-hidden')) {
    document.querySelector('html').classList.remove('overflow-hidden');
  }

  if (document.querySelector('body').classList.contains('overflow-hidden')) {
    document.querySelector('body').classList.remove('overflow-hidden');
  }

  // if (document.body.classList.contains('overflow-scroll')) {
  //   document.body.classList.remove('overflow-scroll');
  // }
};

const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const toBuffer = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

let currentCardCarouselModalTitle;
let currentCardCarouselModalContent;

const cardCarouselItemClick = (event) => {
  const swiperSlide = event.closest('.swiper-slide');
  currentCardCarouselModalTitle = swiperSlide.querySelector('.header').innerHTML;
  currentCardCarouselModalContent = swiperSlide.querySelector('.html').innerHTML;
};

let currentEmailCarouselModalTitle;
let currentEmailCarouselModalContent;

const emailCarouselItemClick = (value) => {
  console.log(value);
  if (value === '1.1') {
    currentEmailCarouselModalContent = /*html*/`
      <p>Sehr geehrte Damen und Herren,</p>
      <p>ich vertrete die o.g. Firma anwaltlich. Die Vollmacht wird anwaltlich versichert.</p>
      <p>Meiner Mandantschaft ist die Meinung seiner Kunden sehr wichtig. Echte Bewertungen und konstruktive Kritik nimmt mein Mandant zum Anlass sein Unternehmen zu verbessern.</p>
      <p>Leider hat mein Mandant in der Vergangenheit mit Bewertungen von Dritten schlechte Erfahrungen gemacht. Solche Bewertungen sind nicht schützenswert und unterliegen nicht der Meinungsfreiheit. Es überwiegt dann das Persönlichkeitsrecht aus Art. 2 Abs. 1, 1 Abs. 1 GG bzw. aus Art. 2. Abs.1, 19 Abs. 3 GG gegenüber der Meinungsfreiheit aus Art. 5 Abs. 1 S. 1 GG.</p>
      <p>Solche fingierten Bewertungen sind wettbewerbswidrig, wenn sie von einem Mitbewerber stammen und können nach dem UWG aber auch gegenüber jedem anderen Dritten abgemahnt werden. Zudem können solche Bewertungen den Straftatbestand der Üblen Nachrede gemäß 187 StGB erfüllen.</p>
      <p>Die einzige Möglichkeit für meinen Mandanten sich vor solchen unberechtigten Bewertungen zu schützen ist das von der Rechtsprechung vorgesehene Prüfverfahren. Daher möchte mein Mandant sein Recht wahrnehmen benannte Bewertung vom Bewertungsportal im Rahmen der von der Rechtsprechung vorgegebenen Regeln überprüfen zu lassen (vgl. BGH, Urteil vom 1. März 2016, Az. VI ZR 34/15; BGH, Urteil vom 27. März 2007, Az. VI ZR 101/06).</p>
    `;
  }
  if (value === '1.2') {
    currentEmailCarouselModalContent = /*html*/`
      <p>Sehr geehrte Damen und Herren,</p><p>wir erhielten eine Beschwerde im Hinblick auf den folgenden von Ihnen verfassten Inhalt auf Google und bitten Sie um Ihre Mithilfe.</p><p class="break-all mb-3">Böse Fakerezension<br>★<br>Dein Unternehmen verdient nur einen Stern!<br>https://www.google.com/maps/place/.4759366,12.4320871,15z/data=!4m</p><p>Der Beschwerdeführer behauptet, dieser Erfahrungsbericht verletze ihn in seinen Rechten.</p><p>Wir bitten Sie nun innerhalb von sieben (7) Kalendertagen darzulegen, inwiefern die vom Beschwerdeführer behauptete Rechtsverletzung nicht vorliegt.</p><p>Google begrüßt ehrliche und unvoreingenommene Erfahrungsberichte. Wir bitten Sie daher freundlich, die Angaben Ihrer Erfahrungsberichts sowie die Hintergründe wie insbesondere den Zeitraum, in dem Sie die beschriebenen Erfahrungen gemacht haben, möglichst konkret darzulegen. Bitte gehen Sie dabei auch explizit auf die einzelnen Punkte des Beschwerdeführers ein und schicken Sie uns Nachweise. Dies können je nach Leistung z.B. Rechnungen, Lieferscheine, Terminkarten, Eintragungen auf Bonuskarten, Rezepte oder ähnliche Nachweise sein. Die zur Verfügung gestellten Informationen werden wir dann gegebenenfalls an den Beschwerdeführer übermitteln, damit dieser dazu Stellung nehmen kann.</p><p>Bitten antworten Sie auf diese Email, damit wir den Fall weiter prüfen können.</p><p>Vielen Dank für Ihre Unterstützung.</p>
    `;
  }
  if (value === '1.3') {
    currentEmailCarouselModalContent = /*html*/`
      <p>Sehr geehrte Damen und Herren,</p>
      <p>ich vertrete die o.g. Firma anwaltlich. Die Vollmacht wird anwaltlich versichert.</p>
      <p>Meiner Mandantschaft ist die Meinung seiner Kunden sehr wichtig. Echte Bewertungen und konstruktive Kritik nimmt mein Mandant zum Anlass sein Unternehmen zu verbessern.</p>
      <p>Leider hat mein Mandant in der Vergangenheit mit Bewertungen von Dritten schlechte Erfahrungen gemacht. Solche Bewertungen sind nicht schützenswert und unterliegen nicht der Meinungsfreiheit. Es überwiegt dann das Persönlichkeitsrecht aus Art. 2 Abs. 1, 1 Abs. 1 GG bzw. aus Art. 2. Abs.1, 19 Abs. 3 GG gegenüber der Meinungsfreiheit aus Art. 5 Abs. 1 S. 1 GG.</p>
      <p>Solche fingierten Bewertungen sind wettbewerbswidrig, wenn sie von einem Mitbewerber stammen und können nach dem UWG aber auch gegenüber jedem anderen Dritten abgemahnt werden. Zudem können solche Bewertungen den Straftatbestand der Üblen Nachrede gemäß 187 StGB erfüllen.</p>
      <p>Die einzige Möglichkeit für meinen Mandanten sich vor solchen unberechtigten Bewertungen zu schützen ist das von der Rechtsprechung vorgesehene Prüfverfahren. Daher möchte mein Mandant sein Recht wahrnehmen benannte Bewertung vom Bewertungsportal im Rahmen der von der Rechtsprechung vorgegebenen Regeln überprüfen zu lassen (vgl. BGH, Urteil vom 1. März 2016, Az. VI ZR 34/15; BGH, Urteil vom 27. März 2007, Az. VI ZR 101/06).</p>
    `;
  }
  if (value === '1.4') {
    currentEmailCarouselModalContent = /*html*/`
      <p>Sehr geehrte Damen und Herren,</p><p>vielen Dank für Ihre Anfrage.</p><p>Gemäß der geltenden Praxis von Google bezüglich der Entfernung von Inhalten haben wir die folgenden Rezensionen entfernt:</p><p class="break-all mb-3">Böse Fakerezension<br>★<br>Dein Unternehmen verdient nur einen Stern!<br>https://www.google.com/maps/place/.4759366,12.4320871,15z/data=!4m</p><p>Mit freundlichen Grüßen</p><p>Ihr Google-Team</p>
    `;
  }
};

const $notificationElement = document.getElementById('notification');
const $notificationButton = document.getElementById('notificationButton');
const $notificationMessage = document.getElementById('notificationMessage');

// options object
const options = {
  transition: 'transition-opacity',
  duration: 1000,
  timing: 'ease-out',

  // callback functions
  onHide: (context, element) => {
    console.log('Notification has been closed.');
  }
};

// const dismiss = new Dismiss($notificationElement, $notificationButton, options);

const showNotification = (message) => {
  $notificationMessage.innerHTML = message;
  if ($notificationElement.classList.contains('hidden')) {
    $notificationElement.classList.remove('hidden');
    setTimeout(() => {
      $notificationElement.classList.remove('opacity-0');
      $notificationElement.style.zIndex = '500';
    }, 150);
  }
};

const hideNotification = (message) => {
  $notificationElement.classList.add('opacity-0');
  $notificationElement.style.zIndex = '-1';
};

const scrollToElement = (selector) => {
  const element = document.querySelector(selector);
  element.scrollIntoView({behavior: 'smooth', block: 'start'});
  setTimeout(() => {
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
    setTimeout(() => {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
        setTimeout(() => {
          element.scrollIntoView({behavior: 'smooth', block: 'start'});
          setTimeout(() => {
            element.scrollIntoView({behavior: 'smooth', block: 'start'});
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 100);
};

let pdfURL = '';
const pdfEmbedAPIKey = environment === 'production' ? '90e0c08d7c384270a964367f962df733' : (environment === 'staging' ? 'f6c6f655d0a546329479f56ce0fcd4ed' : '21bd9f9311aa4c0793e55fcd8101d0c8');

const setPdfUrl = (value) => {
  console.log(value);
  pdfURL = value;
};

// ----------------------------------------------------------------------------------------------------

/**
 * Copyright (c) 2020 Google Inc
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


const GA_ID = 'G-68CQGNCWGW';
const GID = 'G-68CQGNCWGW';

(() => {
  console.log('G-68CQGNCWGW');
})();

const exposed = {};
if (location.search) {
  var a = document.createElement("a");
  a.href = location.href;
  a.search = "";
  history.replaceState(null, null, a.href);
}



function prefetch(e) {
  if (e.target.tagName != "A") {
    return;
  }
  if (e.target.origin != location.origin) {
    return;
  }
  /**
   * Return the given url with no fragment
   * @param {string} url potentially containing a fragment
   * @return {string} url without fragment
   */
  const removeUrlFragment = (url) => url.split("#")[0];
  if (
    removeUrlFragment(window.location.href) === removeUrlFragment(e.target.href)
  ) {
    return;
  }
  var l = document.createElement("link");
  l.rel = "prefetch";
  l.href = e.target.href;
  document.head.appendChild(l);
}

/**
 * Injects a script into document.head
 * @param {string} src path of script to be injected in <head>
 * @return {Promise} Promise object that resolves on script load event
 */
const dynamicScriptInject = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    document.head.appendChild(script);
    script.addEventListener("load", () => {
      resolve(script);
    });
  });
};





function expose(name, fn) {
  exposed[name] = fn;
}

let cip = null;


const getScrollbarWidth = () => {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

// List Modal 2 Custom 1
// List Modal 3
let currentReviewPortalName = 'Google';

// Dynamic Contact Modal
let dynamicContactModalDataHsOverlayId;
let dynamicContactModalText;
let dynamicContactModalFormVisible = false;
let text = '';

const dynamicContactModalFormFooterHTML = `
  <button type="button" class="opacity-0 hidden hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" data-hs-overlay="#hs-vertically-centered-modal">
  Close
  </button>
  <button id="submitdynamicContactModal" type="button" class="submit-btn w-max text-white bg-[var(--s)] hover:bg-[var(--sl)] rounded-full text-sm px-5 py-2.5 text-center font-semibold inline-flex items-center justify-center">
  <svg id="submitButtonLoading" aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin hidden" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
  </svg>
  <span>
    Senden
  </span>
  </button>
`;

const dynamicContactModalFormHTML = `
  <div id="step01"><label for="inputName" class="block text-sm font-medium mb-2 dark:text-white">Firma / Name</label><input id="inputName" type="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 mb-3" placeholder=""><label for="inputContact" class="block text-sm font-medium mb-2 dark:text-white">Telefonnummer / Email</label><input id="inputContact" type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 mb-3" placeholder=""><p class="text-[12px] text-gray-500 dark:text-gray-400">Beim Absenden, übermitteln Sie die Daten an Dein-Ruf.de. Die Informationspflichten zum Datenschutz, insbesondere zur Rechtsgrundlage, finden Sie unter diesem <a href="https://www.dein-ruf.de/datenschutzerklaerung/" target="_blank" class="font-semibold text-blue-600">Link</a>.</p></div><div id="step02" class="p-4 sm:p-10 text-center overflow-y-auto hidden"><span class="mb-4 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="currentColor"><path d="m378-348.609 356.217-355.652q11.006-11.13 28.829-11.13 17.824 0 30.519 10.972 11.131 11.973 11.131 30.344 0 18.371-11.131 29.727L407.957-259.304q-12.154 12.13-29.969 12.13-17.814 0-28.945-12.13L166.87-440.913q-12.131-11.722-11.914-29.752.218-18.031 12.19-30.161 11.538-11.696 29.627-11.696 18.088 0 30.445 11.696L378-348.609Z"/></svg></span><h3 class="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">Vielen Dank für Ihre Anfrage!</h3><p class="text-gray-500">Wir werden uns schnellstmöglich bei Ihnen melden.</p><div class="mt-6 flex justify-center gap-x-4"><button type="button" class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#dynamicContactModal">Schließen</button></div></div>
`;