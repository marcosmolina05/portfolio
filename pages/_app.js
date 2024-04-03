import Head from "next/head"; // Importa Head correctamente
import "../styles/globals.css";

//components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Head>
            {" "}
            {/* Coloca el componente Head aquí */}
            <title>Marcos Molina - Portfolio</title>
            <meta
              name="description"
              content="Marcos Molina Araoz."
            />
            <meta
              name="keywords"
              content="appointment setter, editor de videos, content manager"
            />
            <meta name="author" content="Marcos Molina Araoz" />
            <link rel="icon" href="/favicon/favicon.ico" sizes="16x16" />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link
              rel="icon"
              href="/favicon/favicon-32x32.png"
              type="image/png"
              sizes="32x32"
            />
            <link
              rel="icon"
              href="/favicon/favicon-96x96.png"
              type="image/png"
              sizes="96x96"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link rel="manifest" href="/site.webmanifest" />



            <meta property="og:url" content="https://marcosmolinaaraoz.com.ar" />
            <meta property="og:title" content="Marcos Molina" />
            <meta property="og:locale" content="es-Argentina" />
            <meta
              property="og:description"
              content="Marcos Molina Araoz. Me especializo como Sales Developer Representative, Appointment Setter, Content Manager y Web Development."
            />
             
            <meta
              property="og:image"
              content="https://raw.githubusercontent.com/marcosmolina05/portfolio/main/public/.png"
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />
            <meta property="og:image:alt" content="mario_molina logo" />



          </Head>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
