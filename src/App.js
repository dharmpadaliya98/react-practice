import React from 'react';
import './style.css';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

const testData = [
  {
    name: 'Dan Abramov',
    avatar_url: 'https://avatars.githubusercontent.com/u/51234?v=4',
    company: '@facebook ',
  },
  {
    name: 'dharm',
    avatar_url: 'https://avatars.githubusercontent.com/u/52696?v=4',
    company: '@instagram',
  },
];

const CardList = (props) => {
  return (
    <div>
      {props.profile.map((profile) => (
        <Card {...profile} />
      ))}
    </div>
  );
};

class Form extends React.Component {
  state = { userName: '' };

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    console.log(resp);
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="github username"
          required
        />
        <button>Add me</button>
      </form>
    );
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div>
        <div className="github-profile" style={{ margin: '1rem' }}>
          <img src={profile.avatar_url} style={{ width: '25%' }} alt="" />
          <div
            className="info"
            style={{ display: 'inline-block', marginLeft: 10 }}
          >
            <p className="name" style={{ fontSize: '125%' }}>
              {profile.name}
            </p>
            <div className="company">{profile.company}</div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profile: testData,
  //   };
  // }

  state = { profile: testData };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profile={this.state.profile} />
      </div>
    );
  }
}

export default App;
