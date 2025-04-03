const ErrorMessage = ({ error }) => {
    return (
        <section className="error-msg">
            <p>Sorry, an error occured: {error.message}</p>
        </section>
    )
}
export default ErrorMessage