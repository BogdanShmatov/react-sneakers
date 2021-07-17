import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
       
        <div className="d-flex align-center justify-between mb-40">
           <h1 className="mb-40">Все кроссовки</h1>
              <div className="search-block">
                <img src="/img/search.svg" alt="Search"/>
                  <input placeholder="Поиск..."/>

              </div>
        </div>

        <div className="d-flex">
            <Card price={'12 990'} title={'Мужские Кроссовки Nike Blazer Mid Suede'} img={'/img/sneakers/1.jpg'}/>
            <Card price={'16 990'} title={'Мужские Кроссовки Nike Blazer Mid Suede'} img={'/img/sneakers/2.jpg'}/>
            <Card price={'4 990'} title={'Мужские Кроссовки Nike Blazer Mid Suede'} img={'/img/sneakers/3.jpg'}/>
            <Card price={'22 990'} title={'Мужские Кроссовки Nike Blazer Mid Suede'} img={'/img/sneakers/4.jpg'}/>

        </div>
      </div>
    </div>
  );
}

export default App;
