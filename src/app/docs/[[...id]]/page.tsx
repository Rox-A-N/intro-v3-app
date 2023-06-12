import styles from './style.module.css'

const DocsPage= ({ params }) => {
    return <div className={styles.title}>id {params.id}{params.title} Page</div>
}

export default DocsPage