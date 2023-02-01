import styles from "../styles/Porta.module.css"
import PortaModel from '../Model/Porta'

interface PortaProps {
    porta: PortaModel
}
 
export default function porta(props:PortaProps) {
    const porta = props.value

    const framecolor = porta.framecolor ? styles.framecolor : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.framework} ${framecolor}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.piso}></div>
        </div>
    )
}