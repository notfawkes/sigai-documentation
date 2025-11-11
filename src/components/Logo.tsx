import "./Logo.css";

export function RotatingLogo() {
  return (
    <div className="logodiv">
      <div className="logo"></div>
      <div className="circle">
        {[
          "T", "C", "E", "T", "-", "A", "C", "M", "-", "S", "I", "G", "A", "I", "-",
          "S", "T", "U", "D", "E", "N", "T", "-", "C", "H", "A", "P", "T", "E", "R",
        ].map((char, i) => (
          <span key={i} style={{ "--i": i + 1 } as React.CSSProperties}>{char}</span>
        ))}
      </div>
    </div>
  );
}
