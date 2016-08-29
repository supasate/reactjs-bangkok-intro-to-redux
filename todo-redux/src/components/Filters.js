import React from 'react'
import classNames from 'classnames'
import filters from '../constants/filters'

const Filters = ({ selectedFilter, onSelectFilter }) => {
  const allFilterClass = classNames({
    selected: selectedFilter === filters.ALL,
  })

  const activeFilterClass = classNames({
    selected: selectedFilter === filters.ACTIVE,
  })

  const completedFilterClass = classNames({
    selected: selectedFilter === filters.COMPLETED,
  })

  return (
    <ul className="filters">
      <li>
        <a
          className={allFilterClass}
          onClick={() => onSelectFilter(filters.ALL)}
        >
          All
        </a>
      </li>
      <span>&nbsp;</span>
      <li>
        <a
          className={activeFilterClass}
          onClick={() => onSelectFilter(filters.ACTIVE)}
        >
            Active
        </a>
      </li>
      <span>&nbsp;</span>
      <li>
        <a
          className={completedFilterClass}
          onClick={() => onSelectFilter(filters.COMPLETED)}
        >
          Completed
        </a>
      </li>
    </ul>
  )
}

Filters.propTypes = {
  selectedFilter: React.PropTypes.string.isRequired,
  onSelectFilter: React.PropTypes.func.isRequired,
}

export default Filters
