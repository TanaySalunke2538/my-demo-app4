import './App.css';
import Navbar from './unauth/component/navbar';
import Bumpups from './unauth/component/Bumpups';
import Timestamps from './unauth/component/Timestamps';
import Footer from './unauth/component/Footer';

function App() {
  return (
    <div className="App">
      {/* ==================== HEADER SECTION ==================== */}
      <header className="app-header">
        <Navbar />
      </header>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="app-main">
        {/* Timestamps Component Section */}
        <section className="app-section">
          <Timestamps />
        </section>

        {/* Bumpups Component Section */}
        <section className="app-section">
          <Bumpups />
        </section>
      </main>

      {/* ==================== FOOTER SECTION ==================== */}
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
