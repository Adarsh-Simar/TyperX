// Returns Element
export function getElement(identifier, multiple = false)
{
    return multiple ? document.querySelectorAll(identifier) :  document.querySelector(identifier); 
}

