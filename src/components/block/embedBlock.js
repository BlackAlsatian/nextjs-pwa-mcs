import styles from './embedBlock.module.scss'

const EmbedBlock = ({
  align,
  caption,
  allowResponsive,
  previewable,
  providerNameSlug,
  responsive,
  type,
  url
}) => {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        loading='lazy'
        title={caption}
        width='560'
        height='315'
        src={url}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen={allowResponsive}
      ></iframe>
    </div>
  )
}
export default EmbedBlock
