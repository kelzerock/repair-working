interface ButtonInterface {
  className: string,
  text: string,
}

const Button = ({className, text}: ButtonInterface) => {
  return (
    <>
      <button className={className}>{text}</button>
    </>
  )
}

export default Button;