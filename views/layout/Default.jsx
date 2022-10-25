const React = require('react')

class Default extends React.Component{
    render(){
        const { title, comment } = this.props
        return(
            <html>
                <head>
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/comments">View All Comments</a>
                        <a href="/comments/new">Add a New Comment</a>
                    </nav>
                    <h1>{title}</h1>
                    {this.props.children}                    
                </body>
            </html>
        )
    }
}

module.exports = Default