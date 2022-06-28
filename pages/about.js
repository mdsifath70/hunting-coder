export default function About() {
    let services = [];
    for (let i = 1; i <= 15; i++) {
        services.push(i);
    }

    return (
        <section className="about">
            <div className="container">
                <h2>About hunting coder</h2>
                <p>
                    If you don&apos;t, then you&apos;ve come to the right place.
                    In 1994, when blogs began, a blog was more of a personal
                    diary that people shared online. In this online journal, you
                    could talk about your daily life or share about things that
                    you were doing. Then, people saw an opportunity to
                    communicate information in a new way online. Thus began the
                    beautiful world of blogging.
                </p>
                <h2>Service offers</h2>
                <p>
                    Then, people saw an opportunity to communicate information
                    in a new way online. Thus began the beautiful world of
                    blogging.
                </p>
                <ul>
                    {services.map((service, i) => (
                        <li key={i}>Service {service}</li>
                    ))}
                </ul>
                <h2>About contact</h2>
                <p>
                    A blog (a shortened version of “weblog”) is an online
                    journal or informational website displaying information in
                    reverse chronological order, with the latest posts appearing
                    first, at the top. It is a platform where a writer or a
                    group of writers share their views on an individual subject.
                </p>
            </div>
        </section>
    );
}
