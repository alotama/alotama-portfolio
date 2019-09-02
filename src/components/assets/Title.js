import React from "react"

const Text = ({ type, title, className }) => {
  let text = title.split("")

  text = text.map((t, i) => {
    if (t === "." || t === "-" || t === "," || t === "+") {
      return (
        <span key={i} className="color-red">
          {t}
        </span>
      )
    } else {
      return t
    }
  })

  switch (type) {
    case "h2":
      return <h2 className={className}>{text}</h2>
    case "h3":
      return <h3 className={className}>{text}</h3>
    case "h4":
      return <h4 className={className}>{text}</h4>
    case "h5":
      return <h5 className={className}>{text}</h5>
    case "h6":
      return <h6 className={className}>{text}</h6>
    default:
      return <h1 className={className}>{text}</h1>
  }
}

const Div = ({ children }) => <div className="hero__title">{children}</div>

const Title = ({ type, title }) => {
  return (
    <Div>
      <Text type={type} title={title} />
    </Div>
  )
}

export { Title, Text }
