import React from 'react'

const WidgetTags = () => {
  

    const tags = ['C','css','html','java','javascript','react','mongodb','express','node','mysql','php','python','next.js','node.js']
    
    return (
    <div className='widget-tags'>
        <h3>Watched Tags</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tag)=> (
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags
