import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";


export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return (
        
        <html>
          <head>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
            
            <style>
              /* Add custom CSS here */
            </style>
          </head>
          <body className="bg-cyan-200">
            <header className="cyan-200 p-6">
              <div className="container mx-auto">
                <img src="src\images\Logo.png" alt="Logo" />
              </div>
            </header>
            <div className="container mx-auto p-6">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="bg-cyan-200 rounded-lg p-4">
                  <img src="src\images\Lokalita oscadnica.png" alt="Oščadnica" />
                  
                 <button><img className="my-20" src="src\images\Raca.png" alt="Snowparadise Veľká Rača" /></button> 
                 <button><img src="src\images\Gajuz.png" alt="Sportcentrum Oščadnica" /></button> 
                  </div>
                </div>

                
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="cyan-200 rounded-lg p-4">
                  <img src="src\images\Lokalita makov.png" alt="Makov" />
                  <button><img className="my-20" src="src\images\Kasarne.png" alt="Kasárne Javorníky" /></button> 
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="cyan-200 rounded-lg p-4">

                    <div className="flex justify-end">
                      <button><img className="" src="src\images\Profil.png" alt="Profil" /></button>
                      <button><img className="flex-initial" src="src\images\Oblubene.png" alt="Obľúbené" /></button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-gray-800 text-white p-6">
              <div className="container mx-auto">
              <a href="#" onClick={handleLogOut}>Log Out</a>

              </div>
            </footer>
          </body>
        </html>
        
    )
}