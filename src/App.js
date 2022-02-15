
       import React from 'react';
       import {Cards, Charts, CountryPicker} from './component';
       import styles from './App.module.css';
       import {fetchData} from './api/Apindex';
       import coronaImage from './images/coro.png';

       class App extends React.Component{
              state = {
                     data:{},
                     country:"",
              };
              async componentDidMount(){
                     const fetchedData = await fetchData();
                     this.setState({data: fetchedData});
              }
              handleCountryChange = async(country) =>{
                     const fetchedData = await fetchData(country);
                     this.setState({data:fetchedData, country:country});
              };
              render (){   
                     const {data, country} = this.state;
              return(
                     <>
               <div className={styles.container}>
                <img src={coronaImage} alt="COVID-19" className={styles.images}/>
                <br/>
                <text>
                       <b>Global and Country Wise Cases of Corona Virus</b>
                </text>
                <br/>
                <text>
                       <i>(For a particular country,  select a country below)</i>
                </text>
                <br/>
                <br/>
                <Cards data={data} country={country} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
               </div>
               </>
              );
           }
       }
       export default App;