import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import '../../style.css';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import HalfStar from 'material-ui/svg-icons/toggle/star-half';
import Star from 'material-ui/svg-icons/toggle/star';
class ReviewsList extends React.Component {

  render() {
    // extra variables
    const reviews = this.props.reviews;
    const rate = reviews.rate;
    const stars = 
      (reviews.rate === 4) ? <StarBorder color="black"/> : <StarBorder color="black"/>
 
    return (
      <Table selectable={false}>

        <TableBody displayRowCheckbox={false}>
        {reviews.map((review, index) => {
          return <TableRow className="ReviewsListItem" key={index}>
            <TableRowColumn><b>{review.user.firstName} S. </b><br/><br/> {review.created_at} </TableRowColumn>
            <TableRowColumn> {stars} <br/><br/> {review.content} </TableRowColumn>
          </TableRow>
        })};
        </TableBody>

      </Table>
    );
  }

}

export default ReviewsList;


