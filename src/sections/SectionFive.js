import React from 'react'
import SecGenerator from '../accesories/SecGenerator'

function SectionFive() {
    const EventObj = [
        {
            bgimage:'youthLeague.jpg',
            header:'FOOTBALL EVENT',
            descrip:'N-yOUTH League coming up, september staytuned',
            href:'#',
            label:'Veiw More',
            
        },
    ]
  return (
    <div>
        <SecGenerator
         header='Events'
         descriptiveText='Below is a list of our upcoming events'
         apiData={EventObj}
         date='12TH SEPTEMBER 2024'
         />
    </div>
  )
}

export default SectionFive