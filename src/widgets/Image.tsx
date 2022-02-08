type ImageProps = {
  src: string
  classes?: string
}

export const Image = ({src, classes}: ImageProps) => <img src={src} alt={""} className={`self-center ${classes}`}/>

