import { useEffect, useRef } from "react";
import "./App.css";
import About from "./Components/Content/About";
import Firstcard from "./Components/Content/Firstcard";
import Projects from "./Components/Content/Projects";
import Skills from "./Components/Content/Skills";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  let myRef = useRef();
 
  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entries]) => {
        console.log(entries.target.children);
        let list=[...entries.target.children]
       list.forEach(entry=>{
        entry.classList.toggle('inter',entry.isIntersecting)
        console.log(entry.target)
       })
      },
      {
        threshold: 0.6,
      }
    );
    // myRef.current && observer.observe(myRef.current);

    console.log(myRef)
    let f=[...myRef.current.children];
    f.forEach(may=>{
      may&&observer.observe(may)
    })
    return()=>{
      observer.unobserve(myRef.current)
    }
  }, []);
  

  return (
    <div className="App" ref={myRef}>
      <Header />
      <Firstcard />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
