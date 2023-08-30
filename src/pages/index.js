import * as React from "react"
import { Link } from "gatsby"
import {Prepr} from "../lib/prepr.js";
import GetArticles from "../queries/get-articles.js";

const IndexPage = ({ serverData }) => {

    const articles = serverData.data.Articles

    return (
        <main>
            <h1>
                My blog site
            </h1>
            <ul>
                {articles.items.map(article => (
                    <li key={article._id}>
                        <Link to={article._slug}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export async function getServerData() {

    const response = await Prepr(GetArticles)

    return {
        props: response,
    }
}
