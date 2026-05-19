export default function Whatsapp() {
  const phoneNumber = "917508400002"; // 👉 Replace with your number
  const message = "Hi, I want to know more about your services";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="wa-float" onClick={handleClick}>
        <svg viewBox="0 0 32 32" width="26" height="26">
          <path
            fill="#fff"
            d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.4 32l8.3-2.1c2.3 1.3 4.9 2 7.5 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.7c-2.3 0-4.5-.6-6.5-1.7l-.5-.3-4.9 1.2 1.3-4.8-.3-.5C4 21 3.4 18.6 3.4 16 3.4 9 9 3.4 16 3.4S28.6 9 28.6 16 23 29.1 16 29.1zm7.2-9.5c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.6-.2-.9.2s-1 1.3-1.2 1.5c-.2.2-.4.3-.7.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.1-.8.1-.1.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.3 3.2 1.5 3.4c.2.2 2.5 3.9 6.1 5.4.9.4 1.6.6 2.2.8.9.3 1.7.2 2.3.1.7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5z"
          />
        </svg>
      </div>

      <style>{`
        .wa-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 55px;
          height: 55px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9999;

          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }

        .wa-float:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }

        /* Pulse effect */
        .wa-float::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.5);
          animation: pulse 2s infinite;
          z-index: -1;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .wa-float {
            width: 50px;
            height: 50px;
            bottom: 15px;
            right: 15px;
          }
        }
      `}</style>
    </>
  );
}