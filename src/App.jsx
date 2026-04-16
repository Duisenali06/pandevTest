import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FirstSection from "./pages/FirstSection.jsx";
import {FAQ} from "./pages/FAQ.jsx";
import {Feedback} from "./pages/Feedback.jsx";
import {Teachers} from "./pages/Teachers.jsx";
import Problems from "./pages/Problems.jsx";
import Steps from "./pages/Steps.jsx";
import Platform from "./pages/Platform.jsx";
import Statistics from "./pages/Statistics.jsx";


function App() {

  return (
    <>
      <Header/>
      <FirstSection/>
      <Problems/>
      <Steps  />
      <Platform/>
      <Statistics/>
      <Teachers/>
      <Feedback/>
      <FAQ/>
      <Footer/>

    </>
  )
}

export default App
