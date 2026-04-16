import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export function Contact() {
  const phoneNumber = "5551984601709";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const emailLink = "mailto:silviohink@gmail.com";

  const style =
    `flex items-center gap-2 bg-green-500 font-semibold text-blue-700 transition-opacity px-2 py-1 text-lg rounded-lg w-fit 
     hover:opacity-80 dark:text-[#5d50cf]`;

  return (
    <div className="mt-5 flex flex-col gap-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={style}
      >
        <FaWhatsapp />
        <h1>Telefone: 51-984601709</h1>
      </a>
      <a href={emailLink} className={style}>
        <MdOutlineMailOutline />
        <h1>Email: silviohink@gmail.com</h1>
      </a>
    </div>
  );
}
