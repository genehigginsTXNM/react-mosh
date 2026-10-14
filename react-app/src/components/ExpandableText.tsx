import React from 'react'

interface Props {
  maxChars?: number;
  children: string;
  onClick?: () => void;
}

const onHandleClick = () => {
 ;
}

const ExpandableText = ({ maxChars, children, onClick }: Props) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div>
      
      {children.length > maxChars ? children.substring(maxChars) : children}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  )
}

export default ExpandableText