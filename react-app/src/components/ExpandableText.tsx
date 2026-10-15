import React from 'react'

interface Props {
  maxChars?: number;
  children: string;
  onClick?: () => void;
}

const onHandleClick = () => {
 ;
}

const ExpandableText = ({ maxChars=100, children, onClick }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div>
      
      {children.length <= maxChars ?  
        <p> {children} </p> : 
        <>
        <p> {isExpanded ?
            children :
            children.substring(0, maxChars)
           }... </p> 
           <button onClick={() => setIsExpanded(!isExpanded)}>
             {isExpanded ? "Less" : "More"}
           </button>
           </>
      }
      
    </div>
  )
}

export default ExpandableText