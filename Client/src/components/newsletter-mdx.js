import React from "react"
const config = require('../../site-config');

const NewsLetterMDX = () => {
    return (
        config.newsletterFeatureToggle && <p><strong><a href="/resources/newsletter">Newsletter</a></strong><br></br>
            Our regularly updated newsletter provides timely articles to help you achieve your financial goals.
        </p>
    )
}

export default NewsLetterMDX
