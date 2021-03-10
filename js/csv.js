let globalData
d3.dsv(";","./data/pets-citizens.csv")
  .then( function( data ) {
    console.log( data.length ); 
    globalData = data;   
  } )
  .catch( function( error ) {
    // handle error
    console.log('error', error);    
       
  } );

 
  

  