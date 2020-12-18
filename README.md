# React SplitView Controller

A SplitView Controller for React, following the Master-Detail pattern, described [here](https://blogs.windows.com/windowsdeveloper/2017/05/01/master-master-detail-pattern/).

## Usage Example

```jsx
import { SplitView, DetailHeader, MasterContainer, withDetailId } from "react-splitview-controller";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const listItems = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  ...
];

function MyListItemComponent({ item }) {
  return (
    <div>
      Title: {item.title}
    </div>
  );
}

function renderMasterContainer() {
  return (
    <MasterContainer
      header={<h1>Master</h1>}
      listItems={listItems}
      ListItemComponent={MyListItemComponent}
    />
  );
}

function MyDetailContainer({ detailId }) {
  return (
    <div>
      <DetailHeader
        title={`Details of Item ${detailId}`}
        mediaQuery="(max-width: 599px)"
        backButton={<p>Zurück</p>}
      />
    </div>
  );
}
const DetailContainer = withDetailId(MyDetailContainer);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" render={props => (
              <SplitView
                master={renderMasterContainer()}
                detail={<DetailContainer />}
                mediaQuery="(max-width: 599px)"
              />
          )}/>
        </Switch>
      </Router>
    </div>
  );
}


```
