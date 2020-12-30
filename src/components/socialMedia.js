import React, { Component } from "react";

function mapIcon(socialMedia) {
    const media = socialMedia.replace(/ /g, '-');
    switch (socialMedia) {
        case 'email':
            return (
                <i className={'fa fa-envelope'}/>
            );
        case 'quora':
            return (
                <i className='fa fa-fw'>
                    <strong className='fa-quora'>Q</strong>
                </i>
            );
        default:
            return (
                <i className={`fa fa-${media}`}/>
            );
    }
}

class SocialMedia extends Component {
    render() {
        return (
            <ul className={this.props.ulClass}>
                {
                this.props.profiles.map( (profile, index) => {
                    const icon = mapIcon(profile.network.toLowerCase());
                    return (
                        <li key={index}>
                            <a href={profile.url}>
                                {icon}
                            </a>
                        </li>
                    );
                    })
                }
            </ul>
        );
    }
}

export default SocialMedia;
