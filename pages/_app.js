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
            <link rel="icon" href="/favicon/favicon.ico" sizes="16x16" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
            <link rel="icon" href="/favicon/favicon-96x96.png" type="image/png" sizes="96x96" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>            
            <link rel="manifest" href="/site.webmanifest" />
          </Head>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
