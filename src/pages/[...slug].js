import * as React from "react"
import {Prepr} from "../lib/prepr.js";
import GetArticleDetail from "../queries/get-article-detail.js";

const IndexPage = ({ serverData }) => {

    const article = serverData.data.Article

    return (
        <main>
            <h1>
                {article.title}
            </h1>

            {article.content.map((content,index) => (
                <div key={index}>

                    {
                        content.__typename === "Assets" &&
                        <img src={content.items[0].url} width="300" height="250" alt="{article.title}" />
                    }

                    {
                        content.__typename === 'Text' &&
                        <div dangerouslySetInnerHTML={{ __html: content.body }}></div>
                    }
                </div>
            ))}
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export async function getServerData(props) {

    const slug = props.params['slug'];
    const response = await Prepr(GetArticleDetail, {slug})

    return {
        props: response,
    }
}
