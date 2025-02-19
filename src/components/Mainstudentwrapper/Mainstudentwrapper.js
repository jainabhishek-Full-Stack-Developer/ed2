import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Mainstudentwrapper = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Mainstudentwrapper;
