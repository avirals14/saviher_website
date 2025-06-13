import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div data-theme="saviher" className="flex flex-col min-h-screen bg-base-100">
      {loading && (
        <div className="fixed inset-0 bg-base-100 bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <p className="text-base-content font-medium">Loading...</p>
          </div>
        </div>
      )}
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

// Add getInitialProps to handle static optimization
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  
  return { pageProps };
};

export default MyApp; 