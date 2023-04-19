import './App.css';
import { Provider } from 'react-redux';
import Head from './component/Head';
import Body from './component/Body';
import store from './utils/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainContainer from './component/MainContainer';
import WatchPage from './component/WatchPage';
import Demo from './component/Demo';
import Demo2 from './component/Demo2';


const appRouter = createBrowserRouter([{
  path:"/" ,
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>
  },
  {
    path:"watch",
    element:<WatchPage/>
  },
  {
    path:"demo",
    element:<><Demo/><Demo2/></>
  }
]

}])
function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      {/* <Body/> */}

       {/* here my component will change according to appRouter */}
       <RouterProvider router={appRouter}/>
      
      {/* {
        Header
        Body
         sidebar
           Menuitems
         Maincontainer
            Buttonlist
            videocontainer
              videocard
      } */}
    </div>
    </Provider>
  );
}

export default App;
