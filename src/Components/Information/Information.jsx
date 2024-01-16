'use client'
import { Slide } from "react-reveal"
import './Information.css'
const data1 = [
    {
        title: 'Use as a browser extension or mobile app',
        description: 'Available as a browser extension and as a mobile app, BitWallet equips you with a key vault, secure login, simple NFT and Crypto storage and transfer.',
        img: "/assets/wallet-illo.svg"
    }

]

const data2 = [{
    title: 'Security for your digital assets',
    description: 'BitWallet generates passwords and keys on your device, so only you have access to your accounts and data. Assistance navigating through various decentralised websites and blockchain apps.',
    img: "/assets/Explore-illo.png"

}]

const data3 = [{
    title: 'Zero downtime',
    description: 'Web3 and blockchain are driving the era of zero downtime, revolutionizing digital systems with uninterrupted and secure operations.',
    img: "/assets/Browse-illo.png"
}]
const Information = () => {
    return (
        <>
            <div className="content">
                {data1.map((item, index) => (
                    <div key={index} className="content1">
                        <Slide left>
                            <div className="content-text1">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </Slide>
                        <div className="content-img ">
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>
                ))}
                {data2.map((item, index) => (
                    <div key={index} className="content2">
                        <div className="content-img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <Slide right>
                            <div className="content-text2" >
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </Slide>
                    </div>
                ))}

                {data3.map((item, index) => (
                    <div key={index} className="content1">
                        <Slide left>
                            <div className="content-text1">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </Slide>
                        <div className="content-img">
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Information;