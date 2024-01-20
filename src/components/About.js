import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <>
            <h1>About us Component</h1>
            {/* <User /> */}
            <iframe width="460" height="215" src="https://www.youtube.com/embed/IKdxbDJ_kM8?si=OndOAy6OkmSKh2CF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <UserClass name="chinkiu" location="Chsandigargh" />
        </>
    )
}
export default About;