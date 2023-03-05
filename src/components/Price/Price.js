import style from "./Price.module.css"
import { Switch } from '@mui/material'

function Price() {
    return (
        <div className={style["wrapper"]}>
            <h2>Honest and thoughtful pricing</h2>
            <div className={style["seccions"]}>
                <div className={style["seccion-left"]}>
                    <h3>$ 6.86/mo</h3>
                    <div className={style["btn"]}>$86,68 billed yearly</div>
                    <div className={style["payment"]}>
                        <p>Pay Yearly</p>
                        <Switch defaultChecked color="default" />
                        <p>Monthly</p>
                    </div>
                    <p>No ads, hidden fees. Your data stays private, and we get to focus on building the best product for you.</p>
                </div>
                <div className={style["seccion-right"]}>
                    <div className={style["information"]}>
                        <h3>Start a 14-days free trial right now.</h3>
                        <div className={style["buttons"]}>
                            <div className={style["google-play"]}></div>
                            <div className={style["app-store"]}></div>
                        </div>
                    </div>
                    <div className={style["image"]}></div>
                </div>
            </div>
        </div>
    )
}

export default Price