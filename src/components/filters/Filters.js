import {Btn} from '../btn/Btn';

import styles from './filters.module.scss';

const Filters =() => {
    return(
        <section className={styles.filters}>
            <div className={styles.filters__inpwrapper}>
                <label className={styles.filters__label} htmlFor="username">Lookiing for</label>
                <input placeholder='start typing here...' maxLength='20' className={styles.filters__input} type="text" id="username"></input>
            </div>
            <div className={styles.filters__btnswrapper}>
                <div className={styles.filters__choise}>Or filter</div>
                <div className={styles.filters__btns}>
                    <Btn text='Brazil'/>
                    <Btn text='Kenya'/>
                    <Btn text='Columbia'/>
                </div>
            </div>
        </section>
    )
};

export default Filters;