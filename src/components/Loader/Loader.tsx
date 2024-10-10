import css from './Loader.module.css';

import { TailSpin } from "react-loader-spinner";

export default function Loader() {
    return (
        <div className={css.loader}>
            <TailSpin height='80' width='80' color="black"/>
        </div>
    )
}