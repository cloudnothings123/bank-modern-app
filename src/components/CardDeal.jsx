import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Keep track of all your <br className="sm:block hidden" /> finances in one place
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          No need to follow along with updates from countless apps - HooBank gives you all the information you need in one easily accessible space.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )

export default CardDeal
