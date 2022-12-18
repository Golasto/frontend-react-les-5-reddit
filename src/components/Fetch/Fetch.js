import '../../App.css'
import React from "react";
import axios from "axios";
import {Subreddit} from "../../pages/subreddit/subreddit";

export function Fetch() {
    const redditData = () => {
        axios.get("https://www.reddit.com/hot.json?limit=15").then(
            (response) => {
                console.log(response)
            }
        )
    }

    return (
        <>
        <div className="container">
            <article className="post">
            <h3>demo</h3>
            <div>
                <p>demo</p>
            </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>
            <article className="post">
                <h3>demo</h3>
                <div>
                    <p>demo</p>
                </div>
            </article>

        </div>
        </>
    );

}