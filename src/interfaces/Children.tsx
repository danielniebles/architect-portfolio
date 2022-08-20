export default interface Children {
  children?: React.ReactNode | React.ReactNode[],
  customClass?: string,
  imageUrl?: string,
  title?: string,
  textBackground?: string,
  onClick?: () => void,
  link?: string,
  target?: string,
  icon?: string,
}