import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestion()
        }
    }

    render(){
        
        return(
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>                 
              {this.props.quiz_question.answer_options.map((answer_options,index)=>{
                return <QuizQuestionButton button_text = {answer_options} key={index}
                clickHandler={this.handleClick.bind(this)}/>
              })}
              </ul>
            </section>
          </main>
        )

    }
}

export default QuizQuestion