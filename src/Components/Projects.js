import ProjectTile from "./ProjectTile";

const Projects = () => {
    return (
        <section id="Projects">
            <h2 id="proj-label" for="projects">A Few of My Projects:</h2>
            <div id="project-container">

                <ProjectTile />

                <div id="plant-it" class="project-tile">
                <a class="proj-name" href="https://www.youtube.com/watch?v=3BkPeem3JZ8" target="_blank">
                    Garden Helper
                </a>
                <br />
                <span class="proj-blurb">Plant-It is a Garden Helper/Organizer built with Javascript and Python using the Flask framework</span>
                <iframe id="plantit-vid" src="https://www.youtube.com/embed/3BkPeem3JZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div id="tone-vis" class="project-tile">
                <a href="https://www.youtube.com/watch?v=BltQane09q4" target="_blank">
                    <span class="proj-name">Tone Visualizer</span>
                </a>
                <br />
                <span class="proj-blurb">Create visuals and sounds (with WebAudio API) , built with Javascript and Python and the Django framework</span>
                <iframe id="tone-vis-vid" src="https://www.youtube.com/embed/BltQane09q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div id="pherkad" class="project-tile">
                <a href="https://chrispy-miracle.github.io/Pherkad/" target="_blank">
                    <span class="proj-name">Band Web Page</span>
                </a>
                <br />
                <span class="proj-blurb">Need something simple?  A basic static web page designed and created for my band Pherkad, built with HTML and CSS</span>
                <a href="https://chrispy-miracle.github.io/Pherkad/" target="_blank">
                    <img class="project-pics" src="images/LtFA Album cover.jpg" alt="pic of my band Pherkad's album 'Learning to Fly Again'" />
                </a>
                </div>

                <div id="cash-grab" class="project-tile">
                <a href="https://play.unity.com/en/games/2416626f-4290-435c-9414-ed5d46267394/cash-grab" target="_blank">
                    <span class="proj-name">Cash Grab</span> 
                </a>
                <br />
                <span class="proj-blurb">Grab as much as you can in this fast paced 3D money grab game built with C# with the Unity game engine!</span>
                <a href="https://play.unity.com/en/games/2416626f-4290-435c-9414-ed5d46267394/cash-grab" target="_blank">
                    <img class="project-pics" src="images/Cash Grab.png" alt="image of cash grab money box game" />
                </a>
                </div>
            </div>
        </section>

    )
}

export default Projects;