import React from 'react';

class CardForm extends React.Component {
    addFlashCard = (e) => {
        e.preventDefault();
        this.props.addFlashCardItem(this.front.value, this.back.value)
        this.form.reset()
    }


    render() {
        return(
            <form ref={n => this.form = n} onSubmit={this.addFlashCard}>
                <input ref={n => this.front = n} placeholder="Add Front of Flash Card" />
                 <input ref={n => this.back = n} placeholder="Add Back of Flash Card" />
                 < button > submit card </button>
            </form>    
        )
    }
}

export default CardForm;