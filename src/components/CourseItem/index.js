import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class CourseItem extends Component {
  render() {
    const {details} = this.props
    const {id, logoUrl, name} = details
    return (
      <Link className="nav-link" to={`courses/${id}`}>
        <li className="listItem">
          <img src={logoUrl} alt={name} />
          <p className="LinkItems">{name}</p>
        </li>
      </Link>
    )
  }
}

export default CourseItem
