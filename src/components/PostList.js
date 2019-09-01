import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Robson Marques",
          avatar: "https://avatars3.githubusercontent.com/u/861751?s=400&v=4"
        },
        date: "01 Sep 2019",
        content:
          "Alguem ai sabe como o Carlos desenvolveu este projeto, sabem se ele utizou React?",
        comments: [
          {
            id: 2,
            author: {
              name: "Carlos Augusto",
              avatar:
                "https://scontent.fplu9-2.fna.fbcdn.net/v/t1.0-1/p160x160/60345227_2337534443203038_5797085223912996864_n.jpg?_nc_cat=101&_nc_oc=AQmlCzYKvBA7z--0qpSgr3pV9tl0rj5z4ZulDOfABhUy1_D35450Q5etpR0Qre3gc3A&_nc_ht=scontent.fplu9-2.fna&oh=a37d07228574bcbc9817aa00629cf814&oe=5DCEB3EC"
            },
            date: "02 Sep 2019",
            content:
              "Realmente utilizei React, este projeto foi feito como atividade 04 do curso de Bootcamp da Rocketseat, onde estou aprendendo as tecnologias NodeJS, React e React-Native. \n como dica depois baixa o plugin React Dev Tools com ele vc consegue visualizar se a pagina foi feita com a tecnologia React, muito bacana. Valeu! "
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "João Pedro Schmitz",
          avatar: "https://avatars1.githubusercontent.com/u/26466516?s=400&v=4"
        },
        date: "04 Sep 2019",
        content:
          "Fala Devvvvv, e ai como está indo no curso do Bootcamp? Curtindo?",
        comments: [
          {
            id: 4,
            author: {
              name: "Carlos Augusto",
              avatar:
                "https://scontent.fplu9-2.fna.fbcdn.net/v/t1.0-1/p160x160/60345227_2337534443203038_5797085223912996864_n.jpg?_nc_cat=101&_nc_oc=AQmlCzYKvBA7z--0qpSgr3pV9tl0rj5z4ZulDOfABhUy1_D35450Q5etpR0Qre3gc3A&_nc_ht=scontent.fplu9-2.fna&oh=a37d07228574bcbc9817aa00629cf814&oe=5DCEB3EC"
            },
            date: "04 Jun 2019",
            content:
              "Fala ai Jedi Master, senhor do conselho, estou gostando demais do curso é bem puxado precisa de dedicação mas o apredizado é recompensador. Abraço!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
