import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <img src="assets/KR-cropped.jpg" alt="Michaela Raines by MJM" />
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>About Me</h2>
                    <p>Having tried my hand at marketing, events, and even acting, I finally found an industry that spoke to my love of continuous learning when I landed a position in tech sales. I quickly found myself poking around the developers' space, and when curiosity got the best of me I dove into programming head-first.</p>
                    <p>Jan - May 2021 I studied introductory data analysis at the University of Pennsylvania, and in October I will graduate from Eleven Fifty Academy's software development immersive bootcamp with experience writing <a href="#portfolio">full-stack .NET applications</a>.</p>
                    <p>When I'm not studying and writing code, I love to travel with my husband, Michael, and our mini Aussie puppy, Félix. I enjoy charcoal sketching and (much to my husband's dismay) home renovation in my spare time.</p>
                </div>
            </div>
        </div>
    )
}
