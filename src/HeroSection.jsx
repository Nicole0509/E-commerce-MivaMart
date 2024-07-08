import './App.css'

export default function () {
  return (
    <div className='HeroSection'>
      <div className='HeroSectionText'>
        <h3>Make memories with Miva</h3>
        <p>Explore our curated selection of premium quality designed and handmade pieces to elevate your decor</p>
      </div>
      <div>
        <div className='HeroSectionImageContainer'>
          <div className='HeroSectionBackground'></div>
          <img src='/images/hero1.jpg' alt='hero page picture'/>
        </div>
      </div>
    </div>
  )
}