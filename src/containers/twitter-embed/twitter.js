import React, {Suspense, useContext} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {illustration, twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import landingPerson from "../../assets/lottie/landingPerson.json";

const renderLoader = () => <Loading/>;
const cantDisplayError =
    "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
    setTimeout(function () {
        if (!document.getElementById("twitter").innerHTML.includes("iframe")) {
            document.getElementById("twitter").innerHTML = cantDisplayError;
        }
    }, 10000);
}

var widthScreen = window.screen.width;

export default function Twitter() {
    const {isDark} = useContext(StyleContext);

    if (!twitterDetails.display) {
        return null;
    }
    if (!twitterDetails.userName) {
        console.error("Twitter username for twitter section is missing");
    }
    if (twitterDetails.userName) {
        return (
            <Suspense fallback={renderLoader()}>
                <div className="twitter-main" id="twitter">
                    <div className="centerContent">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName={twitterDetails.userName}
                            options={{height: 400, width: 600}}
                            placeholder={renderLoader()}
                            autoHeight={false}
                            borderColor="#fff"
                            key={isDark ? "1" : "2"}
                            theme={isDark ? "dark" : "light"}
                            noFooter={true}
                            onload={timeOut()}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <img*/}
                    {/*        alt="man sitting on table"*/}
                    {/*        src={require("../../assets/images/manOnTable.svg")}*/}
                    {/*        height={400}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </Suspense>
        );
    } else {
        return null;
    }
}
