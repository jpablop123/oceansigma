"use client";

const WhatsAppButton = () => {
  const phone = "17866949244";
  const message = encodeURIComponent("Hola, me interesa conocer más sobre los servicios de Ocean Sigma.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.35 22.616c-.392 1.098-1.94 2.01-3.172 2.276-.846.18-1.95.322-5.67-1.218-4.762-1.97-7.826-6.804-8.064-7.118-.23-.314-1.926-2.566-1.926-4.892s1.218-3.472 1.65-3.946c.394-.432 1.036-.648 1.65-.648.2 0 .378.01.54.018.432.018.648.044.934.722.354.844 1.218 2.97 1.324 3.186.108.216.216.504.072.792-.136.294-.254.476-.47.73-.216.254-.424.45-.64.724-.2.236-.424.488-.178.934.246.442 1.094 1.804 2.35 2.924 1.614 1.438 2.974 1.886 3.396 2.094.314.154.69.134.942-.134.316-.338.708-.898 1.108-1.452.284-.394.644-.444.99-.298.352.14 2.228 1.05 2.61 1.242.382.192.636.29.73.446.09.154.09.892-.302 1.99z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
