import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { fetchData} from '../Container/Store/Action/Action';
import Navbars from './Navbar/Navbars';
import CardMain from '../Container/Card/CardMain';
import Paginations from '../Component/Pagination/Paginations'; //pagination
import style from './App.module.css';
import Button from 'react-bootstrap/Button'
// import Search from '../Component/Filter/Search/Search';
import Category from '../Component/Filter/Category/Category';
import Type from '../Component/Filter/Type/Type';
// import Sorting from '../Component/Sorting/Sorting'

class App extends Component {

  componentDidMount = () => {
    this.props.getD();
  }
  resets = () => {
    window.location.reload();
  }
  
  render() {
    const perPage = this.props.cardData.perPage; // getting perpage
    const activePage = this.props.cardData.activePage; //getting active page
    const cardPost = this.props.cardData.DataB; // getting data from DB
    const name=this.props.cardData.name; //getting name of type of product selected
    const name1=this.props.cardData.name1 //getting name of company of product selected
    const categoryId=this.props.cardData.companySortId; //getting id of company selected
    const typeSortId=this.props.cardData.typeSortId;//getting id of type of product selected
    const error=this.props.cardData.error // error in case of failure of data fetching
    let cardPosts = [];
    let cardP=[];

     if(typeSortId !== 0){ //filer according to type of product and company name
      cardP=cardPost.filter(item=>item.category.id ===typeSortId);
      if(categoryId !== 0){
        cardP=cardP.filter(item=>item.company.id ===categoryId);
      }
    }
     else {
       cardP=cardPost;
       if(categoryId !== 0){
        cardP=cardP.filter(item=>item.company.id ===categoryId);
        console.log("after",cardP)
      }
     }
    
    let length=0;
    length=cardP.length;  //getting length of data from DB

    if (this.props.cardData.dec) {    // sorting according to id and others, currently not in use
      cardPosts = cardP.sort((x, y) => {
        return y.id - x.id;
      });
    }
    else {
      cardPosts = cardP.sort((x, y) => {  
        return x.id - y.id;
      });
    }
    let slice = cardPosts.slice((activePage - 1) * perPage, perPage * activePage); //slice of data
    let card=(<h1>Product Not Found</h1>); 
    if(slice.length !==0){
      card = slice.map((p, index) => {
        return (
            <CardMain id={p.id} name={p.name} price={p.price} img={p.imgUrl}
              tax={p.tax} discount={p.discount} company={p.company.name} key={p.id} />
        )
      })
    }

   
    return (
      <div>
        <Navbars />
        {error === ""? <Container className={style.m_top}>
        <div style={{margin: "20px auto",textAlign:"center"}}>
          <p>You have selected <span className={style.all}>{name}</span> product type and 
          <span className={style.all}> {name1}</span> company </p>
          </div>
          <div className={style.tA}>
          <Button variant="outline-info" onClick={this.resets}>Reset</Button>
            {/* <Search /> */}
            <Category />
            <Type />
            {/* <Sorting /> */}
          </div>
          
          <div className={style.band}>
            {card}          
            </div>
          <Row>
            <Col>
              <Paginations length={length} />
            </Col>
          </Row>
        </Container>:error} 
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cardData: state.reducer2,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getD: () => dispatch(fetchData()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
 