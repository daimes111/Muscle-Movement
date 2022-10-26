const React = require('react')

class Default extends React.Component{
    render(){
        const { title, comment } = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/comments">View All Comments</a>
                        Change Muscle Group
                        <a href="/comments/new">Add a New Comment</a>
                        Log In
                    </nav>
                    {/* <div>Muscle Diagram</div> */}
                    <h1>{title}</h1>
                    {this.props.children}                    
                </body>
                <footer>Created By Devon</footer>
            </html>
        )
    }
}

module.exports = Default