import Page from '../UX/Page/Page';
const splashStyle = {
  backgroundColor:'#000',
  color:'#fff',
  display:"flex",
  alignItems:'center',
  justifyContent:'center',
  flex:1,
  flexDirection:'column',
  minHeight:'100vh'
}
const Splash = ()=>{
  return(
    <Page>
      <section style={splashStyle}>
       <h2>Medexp V1.0</h2>
       <h3>Loading ...</h3>
      </section>
    </Page>
  )
}

export default Splash;
