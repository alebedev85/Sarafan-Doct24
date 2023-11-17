import './Tools.scss'
import SearchForm from '../SearchForm/SearchForm'
import Sorting from '../Sorting/Sorting'

function Tools({ allUsers, onSearch, onSort, text, statusCheckbox, name }) {
  return (
    <section className="tools">
      <SearchForm
        allUsers={allUsers}
        onSearch={onSearch}
        text={text}
        statusCheckbox={statusCheckbox}
        name={name} />
      <div className='seporator'></div>
      <Sorting
        onSort={onSort} />
    </section>

  )
}

export default Tools