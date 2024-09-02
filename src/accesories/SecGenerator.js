import React from 'react';
import { BsArrowRight } from "react-icons/bs";


function SecGenerator({apiData,header, descriptiveText,date}) {


    if (!apiData) {
        return <div>Loading or no data available</div>;
    }

    return (
        <div>
            <div className="secGenContainer">
                <div className="sectionHeader">
                    <h1>{header}</h1>
                </div>

                <soan>{date}</soan>
                <div className="description">
                    <p>{descriptiveText}</p>
                </div>

                {/* Card template */}
                <div className="secgencardcontainer">
                    {apiData.map((data, index) => (
                        <div
                            className="secgenCard"
                            key={index}
                            style={{
                                backgroundImage: `url(${data.bgimage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                // width: `${width}`,
                                // height: `${height}`,
                                 // Correct style format
                            }}
                        >
                            <div className="overlay"></div>
                            <div className="secCardContent">
                                <h2>{data.header}</h2>
                                <p>{data.descrip}</p>
                                <a href={data.href}>
                                <button className='goherebtn' style={{textAlign:'center', justifyContent:'center'}} >
                                {data.label} <BsArrowRight />
                </button>
                                    </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SecGenerator;
