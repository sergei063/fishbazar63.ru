import createHistory from "history/createBrowserHistory";

const history = createHistory();
history.listen((location, action) => {

    if (!location.notScrollToTop){
        window.scrollTo(0, 0)
    }
    //console.log(location);
    //console.log(action);
});

export default history