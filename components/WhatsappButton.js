import {
   RiWhatsappLine,
  } from "react-icons/ri";

const WhatsappButton = () => {
  const handleWhatsappClick = () => {
    // Reemplaza 'NUMERO_DE_TELEFONO' con el número de teléfono al que deseas enviar el mensaje en formato internacional.
    const phoneNumber = 'NUMERO_DE_TELEFONO';
    const message = '¡Hola! Estoy interesado en contactarte por WhatsApp.';
    const whatsappUrl = `https://wa.me/${+543813274063}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline animate-pulse" onClick={handleWhatsappClick}>
      <RiWhatsappLine className="text-4xl"/>
    </button>
  );
};

export default WhatsappButton;
