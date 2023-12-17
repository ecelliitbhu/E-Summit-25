import React from 'react'
import Logo from "./logos/Logo.svg";
import EcellLogo from './logos/ecell_logo.svg'
import Cup from './logos/Cup.svg'
import Tec from './logos/Tec.svg'
import Mic from './logos/Mic.svg'
import Image from "next/image";


const WSYA = () => {
    return (
        <>
            <div className="bg-black text-white h-full w-full p-11"
                style={{
                    backgroundImage:
                        "url('https://s3-alpha-sig.figma.com/img/27aa/7f50/8f3153ba02db342062382a63bf906279?Expires=1702857600&Signature=ls4dL9BgWACGJ6cdzCv-zuZNzMvfHuIQD9WAIUXq2XM2BHC9pIw2mN94Wpfbt19R208NYEV8h9dWNhq7nNjuut4HoOBrptOjtP6cfqOa-jtZg~4LpB8~1ir~5wNV5HTa44-vTBefqSqKKocBjNHTo7dUUQgI1guOUHSOHs482P95w1VCjCqK6wctSpBkiB4~-1Ko2NKO0Yk4Po5QXb7o5JcjQxA0WLOZak-LYSWHiT3SeiWnjSy6HvNDVHb5mwdcaW~Rix9lnrDURgD4VyUTqHsEIFj2kOo2oZP5hnoyHBgiYEPyEZoFR-sDM9fguo0nmmNPFVLNr5PlQSXJycFMXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
                    padding: '1.5rem 0.5rem'
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Image src={Logo} width={285}
                        height={90}
                        alt="logo"
                        className="mr--5" />
                    <div className="icon2 p-4"><Image src={EcellLogo} width={90}
                        height={90}
                        alt="logo"
                        className="mr--5" /></div>
                </div>
                <div className="text-center">
                    <h1 className="font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 text-center" style={{ fontSize: '3rem', fontFamily: 'vampire-wars' }}>Why should You Attend ?</h1>
                    <p className='text-2xl max-w-md mb-5'>E-Summit has a range of events, competitions, panel discussions, networking, and pitching opportunities for every vertical of our entrepreneurial society.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <div style={{ marginTop: '2rem' }}><Image src={Cup} width={200} height={36} alt="" />
                            <p className='italic font-bold text-2xl text-gray-400' style={{ fontStyle: 'italic' }}>Events & <br />Competitions</p>
                        </div>
                        <div>
                            <Image src={Tec} width={350} height={36} alt="" />
                            <p className='italic font-bold text-2xl text-gray-400' style={{ margin: '-2rem 0 1.5rem 0', fontStyle: 'italic' }}>Workshops &<br /> Masterclasses</p>
                        </div>

                        <div>
                            <Image src={Mic} width={150} height={36} alt="" />
                            <p className='italic font-bold text-2xl text-gray-400' style={{ fontStyle: 'italic' }}>Talkshows &<br /> Keynote Lecture</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WSYA
