import '../app/Images/Support.png';
import '../app/Images/sideRight.png';
import '../app/Images/Scroller with logos.png';
import './Images/profile.png';
import './Images/scroll.png';
export default function Home() {
  return (
    <div className="font-['poppins']">
      {/* bg-gradient-to-r from-base_green to-dark_green */}
      <div className="p-4 items-center top" >
            <div className="text-white text-center">
              <p className="text-6xl mb-4 mt-4 font-semibold">Backed by the best</p>
              <p className="text-3xl font-light">Wealthup is backed and supported by</p>
            </div>
            <img src="Support.png" className="mx-auto pb-4"></img>    
      </div>
      <div>
        <p className="pt-12 font-extrabold text-4xl text-white text-center">Transforming Lives - Financially!</p>

              <div className="grid mb-8 md:mb-12 bg-transparent grid-cols-1  xl:grid-cols-2 ">
                <div className="flex flex-row ">
                  {/* md:pl-14 xl:ml-14 xl:mt-14 pt-12 md:mt-6 */}
                  <figure className="flex flex-col  justify-center text-start text-white xl:pl-9 xl:ml-9 mt-4">
                    <figcaption className="flex items-start space-x-3 pl-7">
                          <img className="rounded-full w-13 h-13 image-profile" src="profile.png" alt="profile picture"/>
                          <div className="space-y-0.5 text-md md:text-xl lg:text-2xl text-left pt-2">
                              <div>Simrin Sirur</div>
                              
                              <div className="font-light text-lg md:text-medium lg:text-md">Journalist</div>
                              <div className='flex flex-col'>
                              <div className="text-lg md:text-md lg:text-md">The Print,Gurugram</div>
                              <br></br>
                              
                          </div>
                          <div className="space-y-0.3 text-md md:text-xl lg:text-xl text-left">
<div className="text-md md:text-xl lg:text-xl text-left">"I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money."
</div>
</div>
                          </div>
                      </figcaption> 

 
                      {/* <blockquote className="">
                          <p className="items-center text-sm md:text-lg lg:text-xl">"I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money."</p>
                      </blockquote> */}

                  </figure>
                          <a className='flex flex-col pl-3' href="https://www.wealthup.me/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white justify-center my-auto mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>    </a>                              
                  
                </div>

              <div className="animate-[bounce_12s_ease-in-out_infinite] customers justify-center mx-auto lg:justify-end">
            <img src="./sideRight.png" alt="Customers" className=''/>
          </div>
        </div>
      </div>
      <div className="footer flex flex-row justify-center">
        <div className="border-r-white">
          <img src="scroll.png"/>
        </div>
        <div className='bg-white w-1 mt-1 mb-1 sm:mt-2 sm:mb-2 md:mt-4 md:mb-4 lg:mt-8 lg:mb-8 '></div>
          <div className=''>
            <img src="Scroller with logos.png"></img>
            </div>
      </div>
    </div>
  )
}
