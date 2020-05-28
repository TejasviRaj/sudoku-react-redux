import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import difficultyArray from '../../Sudoku/Board/difficulty';

function Home() {
    return (
        <section >
            <div class="quizContainer" >

        <div className="sudokuRow" > {
            difficultyArray.map((item) =>
            <Link to={process.env.PUBLIC_URL + '/' + item.difficulty} class="sudokuItem">
                    <div class="sudokuLink"
                        >
                        <div className="sudokuHover" >
                            <div className="sudokuHoverContent" > Click to play this sudoku </div> </div > <img className="imgFluid"
                                src={`assets/${item.difficulty}.jpg`}
                                alt="" />
                    </div>
                    <div className="sudokuCaption" >
                        <div className="sudokuCaptionHeading" > {item.difficulty} </div>
                    </div >
            </Link>)}
        </div>
        </div>

        </section >

    );
}

export default Home;