import Header from '@components/Header';
import Footer from '@components/Footer';
import HomeScreen from '@screens/Home';
function App() {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <Header />

      <div className='h-[56px] sm:h-[64px] lg:h-[106px]' />
      <main className='flex-grow'>
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
}

export default App;
