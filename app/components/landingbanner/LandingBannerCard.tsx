import React from 'react'

interface LandingBannerCardProps {
    title: string;
    description: string;
}


const LandingBannerCard: React.FC<LandingBannerCardProps> = ({ title, description }) => {
    return (
        <div className="bannerboxWrapper">
            <h2 className="hompagecardh2">{title}</h2>
            <p className="hompagecardPara">{description}</p>
        </div>
    )
}

export default LandingBannerCard
