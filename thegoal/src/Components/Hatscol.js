/* import React from 'react';
import Hats from './Hats';
import './Hatscol.css';

const Hatscol = () => {
  const hatlist = ['Backlog', 'Refinement', 'Design', 'Development', 'Testing', 'Production'];

  return (
    <div className='hats-buckets'>
      {hatlist.map((hat, index) => (
        <Hats key={index} className={hat} title={hat} />
      ))}
    </div>
  );
};

export default Hatscol;
 */

/* import React from 'react';
import Hats from './Hats';
import './Hatscol.css';

const Hatscol = ({ valList }) => {
  const hatlist = ['Backlog', 'Refinement', 'Design', 'Development', 'Testing', 'Production'];

  return (
    <div className='hats-buckets'>
      {hatlist.map((hat, index) => (
        <Hats key={index} className={hat} title={hat} value={valList[index]} />
      ))}
    </div>
  );
};

export default Hatscol; */



import React from 'react';
import './Hatscol.css';
import Hats from './Hats';

const Hatscol = ({ valList }) => {
  const hatlist = ['Backlog', 'Refinement', 'Design', 'Development', 'Testing', 'Production'];

  return (
    <div className='hats-buckets'>
      {hatlist.map((hat, index) => (
        <Hats key={index} className={hat} id={hatlist[index]} title={hat} value={valList[index]} currentValue={valList[index]} />
      ))}
    </div>
  );
};

export default Hatscol;
