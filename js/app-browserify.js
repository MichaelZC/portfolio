require("es5-shim")
require("babel/polyfill")
var Promise = require('es6-promise').Promise
import $ from 'jquery'
import React from 'react'
import * as Comps from './comps'

var colorArr = [
    ['#ef5350', '#00897B', '#FBC02D', '#43A047'],
    ['#4DB6AC', '#00897B', '#009688', '#26A69A'],
    ['#FDD835', '#FBC02D', '#FBC02D', '#FDD835'],
    ['#4CAF50', '#66BB6A', '#81C784', '#43A047']
]

var compStyle ={
    position: 'relative'
}

const state = {
    data: {
        0: (<Comps.Logo />),
        1: {
            component: <Comps.About/>,
            0: <Comps.Timer/>,
            1: <Comps.About />,
            2: <div style={{textAlign: 'center'}}><a style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} href='https://github.com/MichaelZC/portfolio'>Github Repo for this Portfolio</a></div>,
            3: <Comps.StoryOne/>
        },
        2: {
            component: <Comps.Work/>,
            0: <Comps.IronYardStory/>,
            1: {
                component: <Comps.ProjectCover description='Week 1'  tech='HTML5, CSS3' image='photosite'></Comps.ProjectCover>,
                0: <Comps.Tech tech={['HTML5', 'CSS3', 'SASS']}/>,
                1: <Comps.Video vid='EPNhSlZmfKo' image='photosite'/>,
                2: <Comps.Rationale text='A simple Photo Blog website, built to be responsive on both Mobile and Large screens.' />,
                3: <Comps.Links repo='https://github.com/MichaelZC/photography_site_mockup' live='http://michaelzc.github.io/photography_site_mockup/'/>
            },
            2: {
                component: <Comps.ProjectCover description='Week 4'  tech='Backbone MVC, Google Maps API, Dark Sky API' image='weather'></Comps.ProjectCover>,
                0: <Comps.Tech tech={['Backbone.JS', 'Routing', 'Google Maps Tools', 'Dark Sky Weather API' ]}/>,
                1: <Comps.Rationale text='A simple single-page web app for checking the weather. Store multiple locations with available emergency weather alerts.'/>,
                2: <Comps.Video vid='ngB0rahrsds' image='weather'/>,
                3: <Comps.Links repo='https://github.com/MichaelZC/weathertracker' live='http://michaelzc.github.io/weathertracker/' />
            },
            3: {
                component: <Comps.ProjectCover description='Week 12' tech='React, Parse API, Google Places API, Material Design'  image='parting'></Comps.ProjectCover>,
                0: <Comps.Tech tech={['React.JS', 'Parse.JS', 'Google Places', 'Material UI']}/>,
                1: <Comps.Rationale text='A web app with a persisting database for use by wine professionals. Log Wine tastings and create Flash Cards for Study.'/>,
                2: <Comps.Links repo='https://github.com/MichaelZC/PartingGlass' live='http://michaelzc.github.io/PartingGlass/#login'/>,
                3: <Comps.Video vid='ZpCNGDgHCqU' image='parting'/>
            }
        },
        3: {
            component: <Comps.Contact/>,
            0: <Comps.Email/>,
            1: <Comps.StoryTwo/>,
            2: <Comps.Phone/>,
            3: <Comps.Contact/>
        }
    },
    path: [],
    latest: function(){
        if(!this.path.length) return this.data
        return this.path.reduce((a, v, i) => a[v], this.data)
    }
}


class Screen extends React.Component {
    constructor(...p){
        super(...p)
        this.state = {
            buttonColor: 'black'
        }
    }
    _navigate(index){
        if (!!state.latest()[index][0]) {
            console.log('exists')
            state.path.push(index)
        }
        this.forceUpdate()
    }
    _back() {
        state.path.pop()
        this.forceUpdate()
    }
    _recolor() {
        this.setState({
            buttonColor: 'rgb(156, 26, 31)'
        })
    }
    _uncolor() {
        this.setState({
            buttonColor: 'black'
        })
    }
    render(){
        var subscreens = state.latest(),
            callback = (i) => this._navigate(i),
            postitioningStyle = {position: 'absolute',
                                top: '50%',
                                left: '50%',
                                height: '3rem',
                                width: '3rem',
                                transform: 'translate(-50%,-50%)',
                                zIndex: '3'},
            backbutton = (state.path.length) ? <div onClick={() => this._back()} onMouseEnter={() => this._recolor()} onMouseLeave={() => this._uncolor()} style={postitioningStyle}><svg style={{transition: 'fill 0.25s ease', fill: this.state.buttonColor}} version="1.1" x="0px" y="0px" viewBox="0 0 99.082 125" enable-background="new 0 0 99.082 100" ><path d="M49.54,0C22.198-0.019,0.027,22.375,0,49.973C0.027,77.614,22.198,100.007,49.54,100  c27.352,0.007,49.521-22.386,49.542-50.027C99.062,22.375,76.892-0.019,49.54,0z M70.215,69.348c-1.205,1.908-4.28,1.232-3.25-1.625  c4.793-13.326-5.39-16.074-14.719-16.074c-3.847,0-7.219,0-7.219,0v13.07L21.232,45.037l23.795-19.679v13.07h2.525  C79.646,38.429,75.014,61.749,70.215,69.348z"/></svg></div> : <span style={{display: 'none'}} />
        return (<div className='screen grid grid-2' style={{height: '100%'}}>
            { Array(4).fill(1).map((v, i) => {
                var currentColors = (!state.path.length) ? 0 : state.path[state.path.length-1]
                if(subscreens[i]._isReactElement){ 
                    return (<div parent={this} style={{backgroundColor: colorArr[currentColors][i], overflow: 'auto'}} onClick={callback.bind(null, i)}>{subscreens[i]}</div>)
                } else if(subscreens[i].component){
                    return <div parent={this} style={{backgroundColor: colorArr[currentColors][i], overflow: 'auto'}} onClick={callback.bind(null, i)}>{subscreens[i].component}</div>
                }
                return subscreens[i]
            }) }
            {backbutton}
        </div>)
    }
}

React.render(<Screen />, document.querySelector('.page'))