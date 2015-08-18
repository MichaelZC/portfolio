import React from 'react'

var centered = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    fontFamily: 'Montserrat'
},
    hrStyle = {border: '0', height: '1px', background: '#ef9a9a'}


export class Logo extends React.Component {
    constructor(...p){
        super(...p)
    }
    componentDidMount() {
    	
    }
    render(){
        return (<div className='title' style={centered}>
                Michael Z. Cheng
                <hr style={hrStyle}/>
                <span style={{fontFamily: 'Neuton'}}>Javascript Developer</span>
            </div>)
    }
}


export class About extends React.Component {
    constructor(...p){
        super(...p)
        this.state = {
            hovered: false
        }
    }
    _hovered() {
        this.setState({
            hovered: true
        })
    }
    _unhover() {
        this.setState({
            hovered: false
        })
    }
    render(){	
        return (<div onMouseEnter={() => this._hovered()} onMouseLeave={() => this._unhover()} style={centered}>
        			<span style={{
                        color: this.state.hovered ? 'white' : 'black'
                    }}>About</span>
        		</div>)
    }
}


export class Work extends React.Component {
    constructor(...p){
        super(...p)
        this.state = {
            hovered: false
        }
    }
    _hovered() {
        this.setState({
            hovered: true
        })
    }
    _unhover() {
        this.setState({
            hovered: false
        })
    }
    render(){
        return (
            <div onMouseEnter={() => this._hovered()} onMouseLeave={() => this._unhover()} style={centered}>
            	<span style={{
                        color: this.state.hovered ? 'white' : 'black'
                    }}>Iron Yard Journey</span>
            </div>
        )
    }
}

export class IronYardStory extends React.Component {
    constructor(...p) {
        super(...p)
    }
    render() {
        return (<div style={{position: 'absolute', padding: '1rem', textAlign: 'center'}}>
                <span style={{fontSize: '1rem'}}>In search of an immersive enviornment to continue learning programming,
                 Michael enrolled in the Front-End Development Course at The Iron Yard Houston. These are some projects he created along the way,
                 they are benchmarks of his growth and evidence of his continued desire to learn.</span>
            </div>)
    }
}

export class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hovered: false
        }
    }
    _hovered() {
        this.setState({
            hovered: true
        })
    }
    _unhover() {
        this.setState({
            hovered: false
        })
    }
    render(){
        return (
            <div onMouseEnter={() => this._hovered()} onMouseLeave={() => this._unhover()} style={centered}>
            	<span style={{
                        color: this.state.hovered ? 'white' : 'black'
                    }}>Contact</span>
            </div>
       )
    }
}

export class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: new Date(),
            dateStarted: new Date(2015, 1, 12)
        }
    }
    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({
                currentTime: new Date()
            }), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        var timeDiff = Math.abs(this.state.currentTime.getTime() - this.state.dateStarted.getTime()),
            diffDays = Math.floor(timeDiff / (1000 * 3600 * 24)),
            boldStyle = {fontWeight: '600', fontFamily: 'Montserrat'}
        return(<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'left', overflow: 'auto'}}>
                <ul style={{listStyleType: 'none', fontSize: '1.5rem'}}>
                <li style={boldStyle}>It's been</li>
                <li>{diffDays} days, </li>
                <li>{this.state.currentTime.getHours()} hours, </li>
                <li>{this.state.currentTime.getMinutes()} minutes, </li>
                <li>{this.state.currentTime.getSeconds()} seconds</li>
                <li style={boldStyle}>Since I Started Coding</li>
                </ul>
            </div>)
        }
}

export class StoryOne extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div style={{position: 'absolute', padding: '1rem', textAlign: 'center'}}>
            <span style={{fontSize: '1rem'}}>Recently graduated from Rice University with a Bachelors in English Literature,
            Michael Cheng fell in love with coding in the very last semester of his undergraduate career.
            After taking an introductory Python course on a whim, he discovered a dormant passion for writing code and algorithmic problem solving.
            He has been learning with a voracious fervor since then.</span>
            </div>)
    }
}

export class StoryTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false
        }
    }
    _hovered() {
        this.setState({
            hovered: true
        })
    }
    _unhover() {
        this.setState({
            hovered: false
        })
    }   
    render() {
        return (<div onMouseEnter={() => this._hovered()} onMouseLeave={() => this._unhover()} style={centered}>
                <a href='../michael_cheng_s_cv.pdf'><span style={{
                        color: this.state.hovered ? 'white' : 'black'
                    }}>Resume</span></a>
            </div>)
    }
}

export class Email extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div style={centered}>
                        <svg style={{height: '5rem', width: '5rem'}} version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.806 31.806">
                <path d="M1.286,12.465c-0.685,0.263-1.171,0.879-1.268,1.606c-0.096,0.728,0.213,1.449,0.806,1.88l6.492,4.724L30.374,2.534
                    L9.985,22.621l8.875,6.458c0.564,0.41,1.293,0.533,1.964,0.33c0.67-0.204,1.204-0.713,1.444-1.368l9.494-25.986
                    c0.096-0.264,0.028-0.559-0.172-0.756c-0.199-0.197-0.494-0.259-0.758-0.158L1.286,12.465z"/>
                <path d="M5.774,22.246l0.055,0.301l1.26,6.889c0.094,0.512,0.436,0.941,0.912,1.148c0.476,0.206,1.025,0.162,1.461-0.119
                    c1.755-1.132,4.047-2.634,3.985-2.722L5.774,22.246z"/>
                    </svg>
                    <hr style={hrStyle}/>
                    <a href='mailto:michael.zhang.cheng@gmail.com?subject=&body=Thanks%20for%20looking%20at%20my%20portfolio!%20I%20look%20forward%20to%20hearing%20from%20you!' style={{fontSize: '1.5rem', textDecoration: 'none'}}>Michael.Zhang.Cheng@gmail.com</a>
                </div>)
    }
}

export class Phone extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(<div style={centered}>
                    <svg style={{height: '5rem'}} version="1.1" x="0px" y="0px" viewBox="-489 491 100 125" enable-background="new -489 491 100 100" ><path d="M-439,567.1c7.1,0,12.5-5.4,12.5-12.5c0-7.1-5.4-12.5-12.5-12.5s-12.5,5.4-12.5,12.5C-451.5,561.8-446.1,567.1-439,567.1z   M-481.9,579.6c-3.6-67.9,89.3-67.9,85.7,0c0,1.8,0,1.8-1.8,1.8h-82.1C-481.9,581.4-481.9,581.4-481.9,579.6z M-389,520.7  c-23.2-26.8-76.8-26.8-100,0l8.9,12.5l16.1-8.9c3.6-1.8,3.6-8.9,3.6-8.9c8.9-5.4,33.9-5.4,42.9,0c0,0,0,7.1,3.6,8.9l16.1,8.9  L-389,520.7z"/></svg>
                    <hr style={hrStyle}/>
                    <a href='tel:9178818669' style={{fontSize: '1.5rem', textDecoration: 'none'}}>(917)-881-8669</a>
                </div>)
    }
}

export class ProjectCover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: 0
        }
    }
    _hover() {
        this.setState({
            opacity: 1
        })
    }
    _unhover() {
        this.setState({
            opacity: 0
        })
    }
    render() {
        return (<div onMouseLeave={() => this._unhover()} onMouseEnter={() => this._hover()} style={{...centered, height: '100%', width: '100%'}}>
                <ul style={{listStyleType: 'none'}}>
                <li>{this.props.description}</li>
                <li style={{fontFamily: 'Neuton'}}>{this.props.tech}</li>
                </ul>
                <img style={{...centered, height: '75%', width: '75%', transition: 'all 0.25s ease', opacity: this.state.opacity}} src={`../images/${this.props.image}.png`}/>
            </div>)
    }
}

export class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: 1,
            imageSize: '75',
            pos: 1,
            buttonFill: 'grey'
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({
            imageSize: '100'
        }), 250)
    }
    repos() {
        this.setState({
            opacity: 0,
            pos: 0
        })
    }
    _hover() {
        this.setState({
            buttonFill: '#ef5350'
        })
    }
    _unhover() {
        this.setState({
            buttonFill: 'grey'
        })
    }
    render() {
        return(<div onClick={()=> this.repos()} onMouseEnter={() => this._hover()} onMouseLeave={() => this._unhover()}>
            <img style={{...centered, border: '1px solid black', height: `${this.state.imageSize}%`, width: `${this.state.imageSize}%`, transition: 'all 0.5s ease', opacity: this.state.opacity, zIndex: `${this.state.pos}`}} src={`../images/${this.props.image}.png`}/>
            <svg style={{...centered, transition: 'all 0.5s ease', opacity: this.state.opacity, zIndex: `${this.state.pos}`, height: '8rem', fill: this.state.buttonFill}} version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" ><path d="M50.002,3.162c-25.826,0-46.835,21.009-46.835,46.841c0,25.826,21.009,46.835,46.835,46.835  c25.826,0,46.83-21.009,46.83-46.835C96.832,24.171,75.828,3.162,50.002,3.162z M50.002,86.871  c-20.36,0-36.875-16.508-36.875-36.868c0-20.369,16.515-36.874,36.875-36.874c20.361,0,36.873,16.505,36.873,36.874  C86.875,70.363,70.363,86.871,50.002,86.871z"/><path d="M40.563,34.64c-0.829-0.833-2.949-0.833-2.949,0v33.845c0,0.834,2.125,0.834,2.957,0l27.781-15.417  c0.832-0.829,0.846-2.178,0.016-3.01L40.563,34.64z"/></svg>
            <span style={centered}>
            <iframe width="420" height="315" src={`https://www.youtube.com/embed/${this.props.vid}`} frameborder="0" allowfullscreen></iframe>
            </span>
            </div>)
    }
}

export class Rationale extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(<div style={{position: 'absolute', padding: '1rem', textAlign: 'center'}}>
                <span style={{fontSize: '2rem'}}>{this.props.text}</span>
            </div>)
    }
}

export class Links extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(<ul style={{...centered, listStyleType: 'none', transform: 'translate(-50%, -60%)'}}>
            <a href={this.props.repo}><li>Github Repo</li></a>
            <a href={this.props.live}><li>Live Page</li></a>
            </ul>)
    }
}

export class Tech extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(<div style={centered}>
            Technology Used
            <ul style={{listStyleType: 'none', fontSize: '1.5rem'}}>
            {this.props.tech.map((tech) => <li>{tech}</li>)}
            </ul>
            </div>)
    }
}