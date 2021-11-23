import react from 'react';
import Hello from './Hello';

const card =({robots})=>{
    const cardcomponent = robots.map((image,i)=>{
        return (
            // <Hello robots={robots[i].src} />
            <div className="tc dib">
                <img height="170px" width="170px" alt="" style={{backgroundColor:"#a5afd4"}} className="dib tc grow bw-2 shadow-5" src={`${robots[i].src}`}></img>
                <h4>{robots[i].name}</h4>
            </div>
        );
    })
    return (
        // <div>
        //     {cardcomponent}
        // </div>
        robots.map((image,i)=>{
            return (
                // <Hello robots={robots[i].src} />
                <div id={`id`+i} key={`id`+i} className="tc dib"><img height="170px" width="170px" alt="" style={{backgroundColor:"#a5afd4"}} className="dib tc br3 ma2 grow bw shadow-5" src={`https://robohash.org/${robots[i].id}`}></img><h4>{robots[i].name}</h4></div>
            );
        })

    );
}
export default card;