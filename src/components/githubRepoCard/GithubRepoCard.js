import React from "react";
import "./GithubRepoCard.scss";
import {Fade} from "react-reveal";

export default function GithubRepoCard({repo, isDark}) {
    const gifs = {
        'Neuromarketing_Tool': require('../../assets/images/neuromarketing.gif'),
        'RL_Algorithms_Survey': require('../../assets/images/half_cheetah.gif'),
        'PubMed_XMLC': require('../../assets/images/pubmed.gif'),
        'Artificial_Intelligence': require('../../assets/images/artificial_neural_networks.gif')
    }

    function openUrlInNewTab(url, name) {
        if (!url) {
            console.log(`URL in ${name} is undefined`);
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <div>
                <div
                    className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
                    key={repo.node.id}
                    onClick={() => openUrlInNewTab(repo.node.url, repo.node.name)}>
                    <img className="repo-image" width={300} height={200} src={gifs[repo.node.name]} alt="loading..."/>
                    <div>


                        <div className="repo-name-div">
                            <p className="repo-name">{repo.node.name}</p>
                        </div>
                        <p className="repo-description">{repo.node.description}</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
