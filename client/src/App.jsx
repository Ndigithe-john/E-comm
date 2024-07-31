import Header from '@components/Header';
import Footer from '@components/Footer';
function App() {
  return (
    <div className='flex min-h-screen flex-col bg-slate-100'>
      <Header />
      <div className='flex-1' />
      <Footer />
    </div>
  );
}

export default App;
