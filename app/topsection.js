const TopSection = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#020917] p-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

                <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-5xl font-bold text-white px-4 mb-4">Welcome to Atletico Brisbane, <span className="font-semibold text-[#3cfffc]">a organized club in Brisbane</span></h1>
                    <p className="text-gray-300 px-4 mb-4">This is a small paragraph that provides additional information about the header.</p>
                    <p className="text-2xl font-semibold text-[#3cfffc] px-4 mb-4">
                        Come and Join us for weekly games !
                    </p>
                    <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Click Me</button>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <svg
                        className="w-[300px] relative"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <style>
                                {`
                                @keyframes dash {
                                    0% { stroke-dashoffset: 0; }
                                    100% { stroke-dashoffset: 502; }
                                }

                                @keyframes pulse {
                                    0% { stroke-width: 2; }
                                    50% { stroke-width: 5; }
                                    100% { stroke-width: 2; }
                                }

                                @keyframes earth-orbit {
                                    0% { transform: rotate(0deg); }
                                    100% { transform: rotate(360deg); }
                                }

                                .dotted-line {
                                    stroke: #3cfffc;
                                    stroke-dasharray: 4;
                                    animation: dash 25s linear infinite, pulse 3s infinite ease-in-out;
                                }

                                .atletico-text {
                                    font-size: 14px;
                                    fill: #ffffff;
                                    text-anchor: middle;
                                    alignment-baseline: middle;
                                    animation: flip 3s infinite ease-in-out;
                                    transform-origin: center;
                                }

                                .earth-orbit {
                                    width: 100px;
                                    height: 100px;
                                    animation: earth-orbit 25s linear infinite;
                                    transform-origin: center;
                                }

                                .earth {
                                    fill: #3cfffc;
                                }
                                `}
                            </style>
                        </defs>
                        <circle cx="100" cy="100" r="90" fill="none" stroke="#3cfffc" strokeWidth="2" className="dotted-line" />

                        
                        <g className="fireworks">
                            <circle className="firework" cx="36" cy="36" r="5" fill="yellow">
                                <animate 
                                    attributeName="r" 
                                    from="5" 
                                    to="15" 
                                    dur="0.5s" 
                                    begin="0s; firework.end" 
                                    fill="freeze" 
                                    repeatCount="indefinite" />
                                <animate 
                                    attributeName="opacity" 
                                    from="1" 
                                    to="0" 
                                    dur="0.5s" 
                                    begin="0s; firework.end" 
                                    fill="freeze" 
                                    repeatCount="indefinite" />
                            </circle>
                            <circle className="firework" cx="160" cy="30" r="5" fill="blue">
                                <animate 
                                    attributeName="r" 
                                    from="5" 
                                    to="15" 
                                    dur="0.5s" 
                                    begin="0.2s; firework.end" 
                                    fill="freeze" 
                                    repeatCount="indefinite" />
                                <animate 
                                    attributeName="opacity" 
                                    from="1" 
                                    to="0" 
                                    dur="0.5s" 
                                    begin="0.2s; firework.end" 
                                    fill="freeze" 
                                    repeatCount="indefinite" />
                            </circle>
                        </g>
                                            
                        <text x="100" y="95" className="atletico-text text-yellow">Atletico</text>
                        <text x="100" y="115" className="atletico-text text-blue-300">Brisbane</text>
                        

                       
                        <g className="earth-orbit">
                            <circle cx="100" cy="100" r="42" fill="none" stroke="#3cfffc" strokeWidth="2" />
                            <image
                                href="/images/planet-earth.png" 
                                x="90" y="60" width="20" height="20"
                                transform="translate(-10, -10)"
                            />
                        </g>        
                    </svg>

                    
                </div>
            </div>
        </div>
    )
}
export default TopSection;