import css from './Loader.module.css';

import { TailSpin } from 'react-loader-spinner';

const Loader: React.FC = () => {
    return (
        <div className={css.loader}>
            <TailSpin height='80' width='80' color="black"/>
        </div>
    )
};

export default Loader;