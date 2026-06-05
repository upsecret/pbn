import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href = "#",
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-8 py-3 rounded-full font-semibold text-sm transition-colors duration-200";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
