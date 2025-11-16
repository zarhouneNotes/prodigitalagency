import Link from "next/link";

export default function WhatsAppBubble() {
  return (
    <Link
      href="https://wa.me/212661235749"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#f6f6f6",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 9999,
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
        `}</style>

        <img
          src="/images/w.png"
          alt="WhatsApp"
          style={{ width: "35px", height: "35px" }}
        />
      </div>
    </Link>
  );
}
