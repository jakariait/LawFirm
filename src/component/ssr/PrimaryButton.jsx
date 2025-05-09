import Link from "next/link";

const PrimaryButton = ({ children, onClick, href }) => {
  const className =
    "bg-[#E6AE47] text-black px-6 py-2 rounded-sm font-bold border-2 border-transparent hover:bg-black hover:text-[#E6AE47] hover:border-[#E6AE47] transition-colors duration-400 ease-in-out cursor-pointer flex items-center justify-center";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default PrimaryButton;
