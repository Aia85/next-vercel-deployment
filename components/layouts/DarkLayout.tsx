import * as React from "react"

interface Props {
  children?: React.ReactNode;
}

export const DarkLayout:React.FC<Props> = ({children}) => {
  return (
    <div style={{
        backgroundColor: '#869393',
        padding: '10px',
        borderRadius: '5px'
    }}
    >
        <h3>DarkLayout</h3>
        {children}
    </div>
  )
}
