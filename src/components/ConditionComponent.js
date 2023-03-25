import {useState} from 'react';
export default function ConditionComponent(){
    const [display , setDisplay] = useState(true);
    let output;

    // if(!display){
    //     output = 'This is a conditional component';
    // }else{
    //     output = 'Nothing to see here';
    // }
    // return(
    //     <div>
    //         <h3>
    //             {output}
    //         </h3>
    //     </div>
    // )

    return display ? (
        
        <div>
            <h3>
                This is a conditional component
            </h3>
        </div>
    ):(

        <div>
            <h3> 
                Nothing to see here
            </h3>
        </div>
    )
}