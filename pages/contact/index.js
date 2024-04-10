import React, { useState } from "react";
import Circles from "../../components/Circles";
import emailjs from "@emailjs/browser";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Verificar si todos los campos están completos
    const { name, email, subject, message } = fields;
    const formErrors = {};
    if (!name) formErrors.name = true;
    if (!email) formErrors.email = true;
    if (!subject) formErrors.subject = true;
    if (!message) formErrors.message = true;

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      emailjs
        .sendForm(
          "service_jun4y5p",
          "template_lz7rjjr",
          e.target,
          "bkQ8TTDYSyySGv4at"
        )
        .then((result) => {
          console.log(result.text);
          setIsSent(true); // Cambiar el estado a true cuando el correo se envíe con éxito
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="h-full bg-primary/30 ">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Lets <span className="text-accent">connect.</span>
          </motion.h2>
          {!isSent ? ( // Renderizar el formulario si isSent es false
            <motion.form
              onSubmit={sendEmail}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  className={`input ${errors.name && "border-red-500"}`}
                />
                {errors.name && <span className="text-red-500">Completar</span>}
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  className={`input ${errors.email && "border-red-500"}`}
                />
                {errors.email && <span className="text-red-500">Completar</span>}
              </div>
              <input
                type="text"
                placeholder="subject"
                name="subject"
                value={fields.subject}
                onChange={handleChange}
                className={`input ${errors.subject && "border-red-500"}`}
              />
              {errors.subject && <span className="text-red-500">Completar</span>}
              <textarea
                placeholder="message"
                name="message"
                value={fields.message}
                onChange={handleChange}
                className={`textarea ${errors.message && "border-red-500"}`}
              ></textarea>
              {errors.message && <span className="text-red-500">Completar</span>}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] 
                px-8 transition-all duration-300 flex items-center justify-center
                 overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Lets talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[22px]" />
              </motion.button>
            </motion.form>
          ) : (
            // Renderizar el mensaje de envío si isSent es true
            <motion.div
              className="flex-1 flex flex-col gap-6 w-full mx-auto items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.h2 
              variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2">
                Mensaje
                <span className="text-accent"> Enviado!.</span>
              </motion.h2>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
