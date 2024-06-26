import Head from 'next/head'
export default function Home() {
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Melodi</title>
        <link rel="icon" href="/images/fab.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav144.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav144.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav144.ico" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta property="og:title" content="Melodi" key="ogtitle" />
        <meta property="og:description" content="Melodi" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="Melodi" key="ogurl" />
        <meta property="og:site_name" content="Melodi" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:domain" content="Melodi" key="twdomain" />
        <meta property="twitter:url" content="https://twitter.com/Melodi" key="twurl" />
        <meta name="twitter:title" content="Melodi" key="twtitle" />
        <meta name="twitter:description" content="Melodi " key="twdesc" />
      </Head>
      <div >
        <div className="flex items-center justify-between w-full pb-6">
          <a href="/home" className=""><img src="images/" width="70" alt="" className="logo-image" /></a><span></span>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans ">
            <a href="/home" className="text-2xl Roboto-Thin text-white hover:text-black m-6">Home</a>
        
       
            <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
          </nav>
        </div>
      </div>
      <div className="md:w-1/2 w-3/4 " id="about">
        <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">

          <h1 className="text-5xl montserrat text-blau">Who TF is Behind Melodi?🕵️‍♂️</h1>
          <p className="text-2xl text-white my-6  Poppitandfinch">Sup, fellow degens! 👋 Welcome to the Melodi metaverse, where politics meets memes in the wildest crossover event since Ethereum went PoS.
We're just a bunch of based anons who got tired of watching the normies scroll through boring political news. So we decided to ape into the Melodi phenomenon and create this decentralized meme hub. 🚀
  </p>
          <p className="text-2xl text-white my-6  Poppitandfinch"> We're just a bunch of based anons who got tired of watching the normies scroll through boring political news. So we decided to ape into the Melodi phenomenon and create this decentralized meme hub. 🚀
          .</p>   </div>

        <img className="img feature-image" src="images/melodi.jpeg" alt="" width="300px"/>


        <p className="text-2xl text-white my-6  Poppitandfinch">

          <br></br>  We're building this community on the blockchain of laughter, with each meme an NFT of pure joy. 
          No rugs here, just 100% organic, free-range Melodi content.
 
Join our telegram "Melodi Maxis" to earn $MELODI tokens and participate in our weekly meme farming yields.
 Remember, .
WAGMI, but only if we keep the memes flowing and the vibes high. So strap in, anon. It's gonna be a wild ride to meme singularity! 🎢💫


         </p>
      </div>
      <div id="traits" className="flex flex-wrap justify-around ">
          <div className=" p-4"></div>
          <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
            <p className="text-blau Montserrat-Light text-2xl">Why Melodi? 🤔</p>
            <p className="text-2xl text-white  items-center justify-between  Poppitandfinch">Because in a world of FUD and FOMO, sometimes you just need to sit back and enjoy the absurdity of it all. 
            We're basically the DeFi of political humor – high risk, high reward, and totally addictive.
            </p><br></br>
            <p className="text-blau Montserrat-Light text-2xl">1 MELODI = 1 MELODI 🌊</p>
            <p className="text-2xl text-white items-center justify-between Poppitandfinch">Disclaimer: This is not financial advice. We're not licensed memologists. Please meme responsibly.

            </p>

          </div>
        </div>
      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/home" className=""><img src="images/melodi.jpeg" width="70" alt="" className="logo-image" /></a><span></span>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="/home" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
       
  
  
            <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>

        
          </nav>
        </div>
      </div>
      <p className="text-1xl text-white my-6  Poppitandfinch">All rights granted (c) <span className="text-blau text-1xl Poppitandfinchsans">Melodi </span></p>
    </div>
  )
}
