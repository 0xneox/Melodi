import Head from 'next/head'
export default function Home() {
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Binary Bodi</title>
        <link rel="icon" href="/images/fab.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav144.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav144.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav144.ico" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta property="og:title" content="BinaryBodi" key="ogtitle" />
        <meta property="og:description" content="A Web3 Social Experiment by streamlining Meta" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://binarybodi.xyz" key="ogurl" />
        <meta property="og:site_name" content="https://binarybodi.xy" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:domain" content="BinaryBodi" key="twdomain" />
        <meta property="twitter:url" content="https://twitter.com/binarybodi" key="twurl" />
        <meta name="twitter:title" content="BinaryBodi" key="twtitle" />
        <meta name="twitter:description" content="A Web3 Social Experiment by streamlining Meta " key="twdesc" />
      </Head>

      <div >
        <div className="flex items-center justify-between w-full ">
          <a href="/home" className=""><img src="images/melodi.jpeg" width="70" alt="" className="logo-image" /></a><span></span>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans ">
            <a href="/home" className="text-2xl Roboto-Thin text-white hover:text-black m-6">Home</a>
            <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
   
          </nav>
        </div>
      </div>

      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between	">
          <div className="lg:w-/1 w-/2">
            <br></br>
            <h1 className="text-5xl montserrat text-blau py-5 ">Melodi</h1>
            <br></br>
   
            <p className="text-2xl  text-blau Poppitandfinchsans">Yo, Welcome to Melodi - Where PMs Become Memes 🔥</p>
          </div>

        </div>
        <div id="traits" className="flex flex-wrap justify-around ">
          <div className=" p-4"><img src="images/melodi.jpeg" alt="" width="300px" className="feature-image" layout="responsive" objectFit="contain" /></div>
          <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
            <p className="text-blau Montserrat-Light text-2xl">WTF is Melodi? 🤔</p>
            <p className="text-2xl text-white  items-center justify-between  Poppitandfinch">Melodi's the internet's clapback to boring politics. We took Meloni and Modi, slapped 'em together, and boom – meme gold. It's giving unexpected collab energy, and we're here for it.

            </p><br></br>
            <p className="text-blau Montserrat-Light text-2xl">The Melodi Mood 🌊</p>
            <p className="text-2xl text-white items-center justify-between Poppitandfinch">Watch how this random word mashup turned into a whole vibe. We're uniting countries faster than any UN meeting ever could. It's not diplomacy – it's meme-plomacy.

            </p>

          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-full">
          <div className="lg:w-2/2 w-/4">
            <p className="text-blau Poppitandfinchsans text-2xl justify-around">God-Tier Melodi Memes 💯</p>
            <p className="text-2xl text-white items-center justify-between Poppitandfinch ">
            Think you can out-meme the masters? Prove it. Drop your Melodi creations and let the people decide.   </p>
          </div>
        </div>

        <div id="gallery" className="  ">


          <br></br><br></br>
          <p className="text-blau Montserrat-Light text-4xl py-3 ">Drop Your Melodi Heat 🎤</p>
          <p className="text-2xl text-white items-center justify-between  Poppitandfinch">Keeping it 💯: Melodi's just for the lolz. We're not here to start beef with any governments. Stay chill, fam.


         
          </p>
        </div>
        <div id="traits" className="flex flex-wrap justify-around ">
          <div className=" p-4"><img src="images/melodi.jpeg" alt="" width="300px" className="feature-image" layout="responsive" objectFit="contain" /></div>

        
        </div>
        <div className="lg:w-/2 w-/4 " id="about">
          <p className="text-2xl text-white  Poppitandfinch">
          </p>

          <p className="text-2xl text-white items-center justify-between Poppitandfinch">
cxx
          </p>
          <div id="traits" className="flex flex-wrap justify-around  w-full 	mx-6 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
              <img className="lg:w-1/2 w-3/4" img src="images/melodi.jpeg" alt="" width="780px" className="feature-image" layout="responsive" objectFit="contain" />
            </div>
            <p className="text-2xl text-white justify-around items-center Poppitandfinch">   xxx
            </p>
          </div>
          <br></br>
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/home" className=""><img src="images/melodi.jpeg" width="70" alt="" className="logo-image" /></a><span></span>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/home" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
         

              <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>


            </nav>
          </div>
        </div>
      </div>
      <p className="text-1xl text-white my-6  Poppitandfinch">All rights granted (c) <span className="text-blau text-1xl Poppitandfinchsans">Melodi </span></p>
    </div>

  )
}
