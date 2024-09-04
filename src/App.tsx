import Header from './components/Header';
import Example from './components/Example';
import Footer from './components/Footer';

const App = () => {



      return (
            <div className="relative overflow-hidden">
                  {/* Fixed Background Container */}
                  <div className="fixed inset-0 bg-[url('/bg.png')] bg-cover h-screen -z-10"></div>

                  {/* Scrollable Content */}
                  <div className="relative z-10">

                        {/* Header Section */}
                        <Header />

                        {/* EXAMPLE SECTION */}
                        <Example />

                        {/* FOOTER SECTION */}
                        <Footer />

                  </div>
            </div>
      );
};

export default App;
