export default function Layout(props) {

    const { children } = props
    const header = (
        <header>
            <h1>GymMetry</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )
    const footer = (
        <footer>
            <p>Built by <a href="https://nasghoi.github.io/web-portfolio/" target="_blank">Nasghoi</a><br />Styled with <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}