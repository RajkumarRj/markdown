import { useState } from "react";
import Markdown from "react-markdown";


export default function Example(){
    const [isActive, setActive] = useState(false);
    const [istActive, setisActive] = useState(false);

    const[reactmark, setmark]= useState("# Markdown preview");

    const handleClick = () => {
        setActive(true);
        setisActive(false);
      };
    
      const handledClick = () => {
        setActive(false);
        setisActive(true);
      };

    return(
        <>
        <div className="full-width">
           <header>
            <div className="buttons">
                <button onClick={handleClick}>write</button>
                <button onClick={handledClick}>Preview</button>
            </div>

           </header>



           <nav><h1>NOTES</h1></nav>
           <main>
            <textarea className={isActive ? 'show':'hide'} value={reactmark} onChange={(e)=> setmark(e.target.value)}>i am textarea</textarea>
            <article  className={istActive ? 'show' :'hide'}>
                <Markdown>{reactmark}</Markdown>
            </article>
           </main>



        </div>
        </>
    );
}