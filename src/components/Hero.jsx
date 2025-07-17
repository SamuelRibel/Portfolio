import Bandeira from "../assets/Img/brasil.png"

export function Hero(){
    return(
        <div className="hero-block">
            <h1 className="hero-name">Samuel Ribeiro</h1>
            <div className="under-name-wraper">
                <img className="bandeira" src={Bandeira} alt="" />
                <p className="under-name">Minas Gerais, BR | Full-Stack developer</p>
            </div>
            <p className="phrase">"I am always doing that which I cannot do, in order that I may learn how to do it." — Pablo Picasso</p>
            <div className="">

            </div>
        </div>
        
        
    )
}