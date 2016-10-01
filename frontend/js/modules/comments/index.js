
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

export default (function () {
  //console.log(React);
  //console.log(ReactDOM);
})();

const commentsBlock = document.getElementById('comments');

var comenstsData;

const Form = React.createClass({
  getInitialState: function () {
    return {
      btnIsDisabled : false,
      authorIsEmpty: true,
      textIsEmpty: true,
      isFormHidden: localStorage.isCommented || false
    }
  },

  btnClickHandler: function (e) {
    e.preventDefault();

  },

  onFieldChange: function (name, e) {
    if (e.target.value.trim().length > 0) {
      this.setState({[''+ name]: false})
    } else {
      this.setState({[''+ name]: true})
    }
  },

  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.author).focus();
  },

  onFocusTextarea: function (e) {
    if (e.target.value === 'Ваш комментарий...') {
      e.target.value = '';
    }
  },

  onBlurTextarea: function (e) {
    if (e.target.value === '') {
      e.target.value = 'Ваш комментарий...';
    }
  },

  onSubmitHandler: function (e) {
    e.preventDefault();
    const that = this;
    let form = that.refs.form;

    $.ajax({
      type: 'POST',
      url: form.action,
      data: $(form).serialize()
    }).done(function (data) {
        localStorage.isCommented = true;
        that.setState({'isFormHidden' : 'true', 'data': data});
        console.log(data);
        form.reset();
        //form.innerHTML = '<h1 class="color-success text-center">Ваше мнение важно для нас! <br />Комментарий будет добавлен после модерации. </h1>'
    });

  },

  render: function () {
    const formStyle = {
      maxWidth: '600px'
    };
    const textareaStyle = {
      minHeight: '100px'
    };
    return (
        <div>
          <form
              ref="form"
              //className={(this.state.isFormHidden === 'true') ? 'is-hidden' : ''}
              action='/feedback'
              method='POST'
              id="comments-form"
              style={formStyle}
              onSubmit={this.onSubmitHandler}
          >
            <p>
            <input
                ref="author"
                name="name"
                type="text"
                placeholder="Имя"
                onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
            />
            </p>
            <p>
              <textarea
                style={textareaStyle}
                ref="msg"
                name="msg"
                id="comments-textarea"
                cols="30"
                rows="30"
                defaultValue="Ваш комментарий..."
                onFocus={this.onFocusTextarea}
                onBlur={this.onBlurTextarea}
                onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
            ></textarea>
            </p>
            <p>
              <input
                  className="btn-primary"
                  id="sbm-comment"
                  disabled={this.state.btnIsDisabled || this.state.authorIsEmpty || this.state.textIsEmpty}
                  type="submit"/>
            </p>
          </form>
        </div>
    )
  }
});

const Comment = React.createClass({
  render: function () {
    return (
    <div>
      <header className="comment__head cf"><strong className="comment__author">{this.props.data.name}</strong>
        <date className="comment__date">{this.props.data.date}</date>
      </header>
      <section className="comment__content">
        {this.props.data.msg}
      </section>
    </div>
    )
  }
});

const Comments = React.createClass({
  getInitialState: function () {
    return {
      'data': []
    }
  },
  componentDidMount: function () {
    const that = this;
    $.get('/feedback/get', function (data) {
      that.setState({
        'data': data
      })
    });
  },
  render: function () {
    let templates;

    if (this.state.data.length) {
      templates = this.state.data.map(function (item, index) {
        return (
            <li className="comment__field" key={index}>
              <Comment data={item} />
            </li>
        )
      })

    } else {
      templates = <div>Комментариев нет!</div>
    }

    return (
        <ul className="comments-tree">
          {templates}
        </ul>

    );
  }
})

const App = React.createClass({
  render: function() {
    return (
        <div>
          <Form />
          <Comments />
        </div>
    )
  }
});

if (commentsBlock) {
  ReactDOM.render(
      <App />,
      commentsBlock
  );
}