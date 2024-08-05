import { useState } from 'react';
import './Calculator.css'
function Calculator() {
    const [value,setValue] = useState('');
    return ( 
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className='display'>
                        <input type="text" value={value}/>
                    </div>
                    <div>
                        <input onClick={()=>setValue('')} type="button" value={'C'}/>
                        <input onClick={()=>setValue(value.slice(0, -1))} type="button" value={'DE'}/>
                        <input type="button" value={'%'}/>
                        <input onClick={()=>setValue(value+"/")} type="button" value={'/'}/>
                    </div>
                    <div>
                        <input onClick={()=>setValue(value+"7")} type="button" value={'7'}/>
                        <input onClick={()=>setValue(value+"8")} type="button" value={'8'}/>
                        <input onClick={()=>setValue(value+"9")} type="button" value={'9'}/>
                        <input onClick={()=>setValue(value+"*")} type="button" value={'X'}/>
                    </div>
                    <div>
                        <input onClick={()=>setValue(value+"4")} type="button" value={'4'}/>
                        <input onClick={()=>setValue(value+"5")} type="button" value={'5'}/>
                        <input onClick={()=>setValue(value+"6")} type="button" value={'6'}/>
                        <input onClick={()=>setValue(value+"+")} type="button" value={'+'}/>
                    </div>
                    <div>
                        <input onClick={()=>setValue(value+"1")} type="button" value={'1'}/>
                        <input onClick={()=>setValue(value+"2")} type="button" value={'2'}/>
                        <input onClick={()=>setValue(value+"3")} type="button" value={'3'}/>
                        <input onClick={()=>setValue(value+"-")} type="button" value={'-'}/>
                    </div>
                    <div>
                        <input type="button" value={'+/-'}/>
                        <input onClick={()=>setValue(value+"0")} type="button" value={'0'}/>
                        <input onClick={()=>setValue(value+".")} type="button" value={','}/>
                        <input onClick={()=>setValue(eval(value))} type="button" value={'='}/>
                    </div>
                    
                </form>
            </div>
        </div>
     );
}

export default Calculator;