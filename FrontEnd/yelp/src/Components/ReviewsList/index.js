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
  
  starsRender = (rate) => {
    let stars=[];
    for (let i=1; i<=5; i++) {
      if (i <= rate) { 
        stars.push(<Star color="yellow" />) 
      } else {
        stars.push(<StarBorder color="grey" />)  
      }
    }
    return <div>{stars}</div>;
  }

  render() {
    // extra variables
    const reviews = this.props.reviews; // array of reviews

    return (
      <Table selectable={false}>

        <TableBody displayRowCheckbox={false}>
        {reviews.map((review, index) => {
          return <TableRow className="ReviewsListItem" key={index}>
            <TableRowColumn><b>{review.user.firstName} S. </b><br/><br/> {review.created_at} </TableRowColumn>
            <TableRowColumn> {this.starsRender(review.rate)} <br/><br/> {review.content} </TableRowColumn>
          </TableRow>
        })};
        </TableBody>

      </Table>
    );
  }

}

export default ReviewsList;