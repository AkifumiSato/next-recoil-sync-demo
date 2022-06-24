import styles from './Counter.module.css'
import { useRecoilState } from 'recoil'
import { countState } from './recoil'

export const Counter = () => {
  const [count, setCount] = useRecoilState(countState)

  return (
    <div className={styles.container}>
      <div>count: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  )
}
