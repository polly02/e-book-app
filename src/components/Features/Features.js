import { useEffect, useState } from "react"
import style from "./Features.module.css"

function Features() {
    const [editor, editorChange] = useState(false)
    const [preview, previewChange] = useState(false)

    useEffect(()=>{}, [editor, preview])

    return (
        <div className={style["wrapper"]}>
            <h1>Explore more features</h1>
            <div className={style["wrapper-features"]}>
                <div className={style["features"]} onClick={()=>editorChange(!editor)}>
                    <p>Internal editor</p>
                </div>
                <div className={style["features"]}>
                    <p>Compact preview</p>
                </div>
                <div className={style["features"]}>
                    <p>Convenient search</p>
                </div>
                <div className={style["features"]}>
                    <p>Audio version</p>
                </div>
            </div>

            <div className={style["editor-information"]}>
                <div className={style["information"]}>
                    <h2>Internal editor</h2>
                    <p>While reading, you can easily change the color, font, text size, line spacing, and other attributes.</p>
                    <p>Mark up and annotate text passages, bookmark your current page, translate selected parts of the text or copy it.</p>
                </div>
                <div className={style["img1"]}></div>
            </div>
            <div className={style["preview-information"]}>
                <div className={style["information"]}>
                    <h2>Compact preview</h2>
                    <p>Each book has a compact menu with everything you need - starting from the rating, the number of pages, language and a brief introduction of the book, and ending with the choice of book format - read view and audio.</p>
                </div>
                <div className={style["img2"]}></div>
            </div>
        </div>
    )
}

export default Features