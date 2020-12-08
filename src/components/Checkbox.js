import React from 'react'

const Checkbox = React.forwardRef(({indeterminate, ...rest}, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef       
    
    React.useEffect(() => {
     resolvedRef.current.indeterminate = indeterminate   
    }, [indeterminate, resolvedRef])

    return (
        <>
            <input type='Checkbox' ref={resolvedRef} { ...rest }/>
        </>
    )
})

export default Checkbox
