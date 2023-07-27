import { useState, useMemo } from 'react';
import '../App.scss'

const Table = ({ data }) => {
  const [searchValue, setSearchValue] = useState('');
  const [sortConfig, setSortConfig] = useState({ id: null, direction: null });

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSortClick = (id) => {
    let direction = 'ascending';
    if ( 
      sortConfig &&
      sortConfig.id === id &&
      sortConfig.direction === 'ascending'
    ) {
      console.log(123)
      direction = 'descending';
    }
    setSortConfig({ id, direction });
  };

  const sortedData = useMemo(() => {
    let dataCopy = [...data]
    dataCopy.sort((a, b) => {
      if (a[sortConfig.id] < b[sortConfig.id]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.id] > b[sortConfig.id]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return dataCopy;
  },[data, sortConfig]) 

  const filteredData = sortedData.filter((data) => {
      return Object.values(data).some((value) =>
        value.toString().toLowerCase().includes(searchValue.toLowerCase())
      )
    }
  );

  return (
    <>
      <label className='searchLabel'>
        <input className='search' type='text' value={searchValue} onChange={handleSearchChange} />
      </label>
      <div className='tableWrap'>
        <table className='table'>
          <thead>
            <tr className='tableHead'>
              <th 
              onClick={() => handleSortClick('id')} 
              className={`${sortConfig.direction === 'ascending' && sortConfig.id === 'id' ?  '' : 'active'}`}>
                ID
              </th>
              <th 
              onClick={() => handleSortClick('title')} 
              className={`${sortConfig.direction === 'ascending' && sortConfig.id === 'title' ? '' : 'active'}`}>
                Title
              </th>
              <th 
              onClick={() => handleSortClick('body')} 
              className={`${sortConfig.direction === 'ascending' && sortConfig.id === 'body' ? '' : 'active'}`}>
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(data => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;