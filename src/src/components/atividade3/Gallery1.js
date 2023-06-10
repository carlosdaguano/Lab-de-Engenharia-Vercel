import React from "react";

const Profile = () => {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

const Gallery1 = () => {
    return (
        <section>
            <h1>Gallery</h1>
            <h2>Amazing scientists</h2>
            <Profile />
            <Profile />
            <Profile />
        </section>

    );
}

export default Gallery1;