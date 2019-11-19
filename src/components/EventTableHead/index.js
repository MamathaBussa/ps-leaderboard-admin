import React, {Component} from 'react'

class EventTableHead extends Component {
  render() {
    const {componentData} = this.props
    return (
      <thead>
        <tr>
          <th scope="col">Sr #</th>
          <th scope="col">Team Names/Game Names</th>
          {componentData.map((event) => (
            <th scope="col">
              <p>{event.eventName}</p>
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}

export default EventTableHead
