import React, {useState} from 'react'
import './portfolioHighlights.scss'
import YoutubeEmbed from '../youtubeEmbed/YoutubeEmbed'

export default function PortfolioHighlights() {
    const [projectHighlight, setProjectHighlight] = useState(0)
  return (
    <div className='portfolio' id='portfolio' >
    <h1> Portfolio</h1>
    <ul>
    <li onClick={() => setProjectHighlight(0)} className={projectHighlight === 0 ? "portfolioList active" : "portfolioList" }> Noodler.io</li>
    <li onClick={() => setProjectHighlight(1)} className={projectHighlight === 1 ? "portfolioList active" : "portfolioList" }> Dinkupp.com</li>
    <li onClick={() => setProjectHighlight(2)} className={projectHighlight === 2 ? "portfolioList active" : "portfolioList" }> Crypto Galaxy</li>
    <li onClick={() => setProjectHighlight(3)} className={projectHighlight === 3 ? "portfolioList active" : "portfolioList" }> Quantum Market</li>
    <li onClick={() => setProjectHighlight(4)} className={projectHighlight === 4 ? "portfolioList active" : "portfolioList" }> NoobTube</li>
    <li onClick={() => setProjectHighlight(5)} className={projectHighlight === 5 ? "portfolioList active" : "portfolioList" }> Foogle</li>
    <li onClick={() => setProjectHighlight(6)} className={projectHighlight === 6 ? "portfolioList active" : "portfolioList" }> Travel Advisor</li>
    <li onClick={() => setProjectHighlight(7)} className={projectHighlight === 7 ? "portfolioList active" : "portfolioList" }> ShopDev</li>
    <li onClick={() => setProjectHighlight(8)} className={projectHighlight === 8 ? "portfolioList active" : "portfolioList" }> HooBank</li>
    <li onClick={() => setProjectHighlight(9)} className={projectHighlight === 9 ? "portfolioList active" : "portfolioList" }> Other Projects</li>
    </ul>
    {projectHighlight === 0 && <div className='noodler_highlight'>
    <h3 className='centered'>Noodler is a free online DAW where you can create and share musical ideas and turn those ideas into tabs, midi, and audio</h3>
    <div className='landing'>
           <div className='demo'>
               <YoutubeEmbed embedId={'PntnIeZzyqk'}/>
           </div>
           <div className='centered'>
            <a href='https://noodler.io/'>Noodler.io</a>
            </div>
           <div className='landing_body'>

           {/* <div className='landing_head'>With Noodler you can: </div>
           <ul className='landing_list'>
            <li className='landing_points'>Create songs, midi, and tabs</li>
            <li className='landing_points'>Customize tab positions</li>
            <li className='landing_points'> navigate chord changes with chord display and scale display</li>
             <li className='landing_points'>Store files in your personal account or share ideas with the Noodler community</li>
             <li className='landing_points'>Explore every possible scale </li>
             <li className='landing_points'>Create chord progressions from any scale, using any voicing</li>
             <li className='landing_points'>Create arpeggios and patterns to adapt with chord changes</li>
             <li className='landing_points'>Create nested rhythms and rhythms in odd time</li>
             <li className='landing_points'>Use the {`'Map`} function to turn chords into songs quickly</li>
           </ul> */}

           {/* <div className='landing_head'>Noodler is For </div>
           <ul className='landing_list'>
            <li className='landing_points'>Self taught guitarists and bassists who want to learn the fretboard better</li>
            <li className='landing_points'>Music Instructors who never want to run out of material</li>
            <li className='landing_points'>Songwriters want to generate ideas fast</li>
             <li className='landing_points'>Music nerds who want to catalogue every possible chord, rhythm, and scale</li>
             <li className='landing_points'>People who like free stuff</li>
           </ul> */}

           {/* <div className='landing_head'>These features are coming to Noodler 0.3 </div>
           <ul className='landing_list'>
            <li className='landing_points'>Private {`'pools'`} to share your music with a select group of people</li>
            <li className='landing_points'>Chord progression modules, which will make it even easier to work with chord progresisons</li>
            <li className='landing_points'>Audio uploads</li>
             <li className='landing_points'>Smart position lock, which will allow for 3-note per string, 2-note-per string etc tabs to be generated more accurately </li>
             <li className='landing_points'>Updated full song tab editor</li>
             <li className='landing_points'>And more...</li>
           </ul> */}

           {/* <div className='landing_head'>Sign up to join the Noodler community and stay updated!  </div>
          <h2>By signing up today, you guarantee that your personal Noodler account is free for life!</h2>
          <div className='wrapper'>
          <h2>Happy Noodling</h2>
          </div>
          <div className='wrapper'>
          <h2>dev@noodler.io</h2>
          </div>

          <div className='wrapper bottom_link'>
          <a href='/'>
            <div className='landing_head'>
            Noodler Main Page
            </div>
          </a>
          </div>
          <div className='wrapper'>
          <a href='http://playnoodler.io/'>
            <div className='landing_head'>
            Noodler App Page (desktop recommended)
            </div>
          </a>
            </div> */}

        </div>
      </div>
    </div> }
    {projectHighlight === 1 && 
    <div className='dinkupp_highlight'>
    <div className='landing'>
    <h3 className='centered'> Dinkupp is a free online meetup app tailored for Pickleball players</h3>
    <div className='demo'>
    <img className = 'dinkupp_img' src='assets/dinkupp/dinkupp.png' alt=''/>
    </div>
    <div className='centered'>
    <a href='https://dinkupp.com/'>Dinkupp.com</a>
    </div>
    </div>
    </div>}
    {projectHighlight === 2 && 
    <div className='crypto_galaxy_highlight'>
    <div className='landing'>
    <h3 className='centered'> Crypto Galaxy shows the latest crypto prices, news, and trends.</h3>
    <div className='demo'>
    <img className = 'dinkupp_img' src='assets/crypto_galaxy/crypto_galaxy.png' alt=''/>
    </div>
    <div className='centered'>
    <a href='https://capable-baklava-40f9b1.netlify.app/'>Crypto Galaxy</a>
    </div>
    </div>
    </div>}
    {projectHighlight === 3 && 
    <div className='quantum_market_highlight'>
    <div className='landing'>
    <h3 className='centered'> Quantum Market is a landing page for a NFT Market</h3>
    <div className='demo'>
    <img className = 'dinkupp_img' src='assets/quantum_market/quantum_market.png' alt=''/>
    </div>
    <div className='centered'>
    <a href='https://ubiquitous-kringle-556c52.netlify.app/'>Quantum Market</a>
    </div>
    </div>
    </div>}
    {projectHighlight === 4 && 
    <div className='noob_tube_highlight'>
    <div className='landing'>
    <h3 className='centered'> NoobTube is a full functional replica of Youtube</h3>
    <div className='demo'>
    <img className = 'dinkupp_img' src='assets/noob_tube/noob_tube.png' alt=''/>
    </div>
    <div className='centered'>
    <a href='https://gleeful-figolla-a99fd9.netlify.app/'>NoobTube</a>
    </div>
    </div>
    </div>}
    {projectHighlight === 5 && 
    <div className='foogle_highlight'>
    <div className='landing'>
    <h3 className='centered'> Foogle is a fully functional google clone</h3>
    <div className='demo'>
    <img className = 'dinkupp_img' src='assets/foogle/foogle.png' alt=''/>
    </div>
    <div className='centered'>
    <a href='https://dainty-blini-7dc927.netlify.app/search'>Foogle</a>
    </div>
    </div>
    </div>}
    {projectHighlight === 6 && 
    <div className='travel_advisor_highlight'>
    <div className='landing'>
    <h3 className='centered'> Travel Advisor lets you see details on hotels and restaurants from all over the globe</h3>
    <div className='demo'>
    <img className = 'dinkupp_img' src='assets/travel_advisor/travel_advisor.png' alt=''/>
    </div>
    <div className='centered'>
    <a href='https://loquacious-sunshine-89e544.netlify.app/'>Travel Advisor</a>
    </div>
    </div>
    </div>}
    {projectHighlight === 7 && 
    <div className='dinkupp_highlight'>
    <div className='landing'>
    <h3 className='centered'> ShopDev is a prototype dashboard that can be used in conjuction with platforms like Shopify</h3>
    <div className='demo'>
    <img className = 'dinkupp_img' src='assets/shop_dev/shop_dev.png' alt=''/>
    </div>
    <div className='centered'>
    <a href='https://incandescent-gelato-78524a.netlify.app/'>ShopDev</a>
    </div>
    </div>
    </div>}
    {projectHighlight === 8 && 
    <div className='dinkupp_highlight'>
    <div className='landing'>
    <h3 className='centered'> Hoobank is a landing page for a banking app</h3>
    <div className='demo'>
    <img className = 'dinkupp_img' src='assets/hoo_bank/hoo_bank.png' alt=''/>
    </div>
    <div className='centered'>
    <a href='https://creative-meringue-893f8d.netlify.app/'>Hoobank</a>
    </div>
    </div>
    </div>}
    {projectHighlight === 9 && 
    <div className='github_highlight'>
    <div className='landing'>
    <h3 className='centered'> Check out my other projects on github</h3>
    <div className='demo'>
    <div className='img_container'>
    </div>
    <img className = 'github_img' src='assets/github/GitHub-Mark-120px-plus.png' alt=''/>
    </div>
    <div className='centered'>
    <a href='https://github.com/indev-io'>My Github</a>
    </div>
    </div>
    </div>}

    </div>
  )
}
