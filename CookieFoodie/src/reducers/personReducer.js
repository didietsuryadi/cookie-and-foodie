import * as ActionTypes from '../actions/constants'

const initialState = {
                       id: 1,
                       name: "Didit Suryadi",
                       email: 'didietsuryadi@gmail.com',
                       photo: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
                       bio:'An Ordinary Person who love food, cook and code',
                       collections:[
                         {
                           id: 1,
                           photo: 'https://indonesiawow.com/wp-content/uploads/2014/04/getuk-lindri-keju.jpg',
                           caption: 'Siapa yang tau makanan ini?',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             },
                             {
                               id:4
                             },
                             {
                               id:5
                             },
                             {
                               id:6
                             },
                             {
                               id:7
                             },
                             {
                               id:2
                             },
                             {
                               id:3
                             },
                             {
                               id:4
                             },
                             {
                               id:5
                             },
                             {
                               id:6
                             },
                             {
                               id:7
                             },
                             {
                               id:2
                             },
                             {
                               id:3
                             },
                             {
                               id:4
                             },
                             {
                               id:5
                             },
                             {
                               id:6
                             },
                             {
                               id:7
                             }
                           ]
                         },
                         {
                           id: 2,
                           photo: 'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
                           caption: 'Ala-ala korean food',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             }
                           ]
                         },
                         {
                           id: 3,
                           photo: 'https://www.pegipegi.com/travel/wp-content/uploads/2016/11/indomie-abang-adek.jpg',
                           caption: 'Mantaps Jiwaaaaaa',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             }
                           ]
                         },
                         {
                           id: 4,
                           photo: 'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
                           caption: 'Udon Every One !!!',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             }
                           ]
                         },
                         {
                           id: 1,
                           photo: 'https://indonesiawow.com/wp-content/uploads/2014/04/getuk-lindri-keju.jpg',
                           caption: 'Siapa yang tau makanan ini?',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             },
                             {
                               id:4
                             },
                             {
                               id:5
                             },
                             {
                               id:6
                             },
                             {
                               id:7
                             },
                             {
                               id:2
                             },
                             {
                               id:3
                             },
                             {
                               id:4
                             },
                             {
                               id:5
                             },
                             {
                               id:6
                             },
                             {
                               id:7
                             },
                             {
                               id:2
                             },
                             {
                               id:3
                             },
                             {
                               id:4
                             },
                             {
                               id:5
                             },
                             {
                               id:6
                             },
                             {
                               id:7
                             }
                           ]
                         },
                         {
                           id: 2,
                           photo: 'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
                           caption: 'Ala-ala korean food',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             }
                           ]
                         },
                         {
                           id: 3,
                           photo: 'https://www.pegipegi.com/travel/wp-content/uploads/2016/11/indomie-abang-adek.jpg',
                           caption: 'Mantaps Jiwaaaaaa',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             }
                           ]
                         },
                         {
                           id: 4,
                           photo: 'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
                           caption: 'Udon Every One !!!',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             }
                           ]
                         },
                         {
                           id: 1,
                           photo: 'https://indonesiawow.com/wp-content/uploads/2014/04/getuk-lindri-keju.jpg',
                           caption: 'Siapa yang tau makanan ini?',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             },
                             {
                               id:4
                             },
                             {
                               id:5
                             },
                             {
                               id:6
                             },
                             {
                               id:7
                             },
                             {
                               id:2
                             },
                             {
                               id:3
                             },
                             {
                               id:4
                             },
                             {
                               id:5
                             },
                             {
                               id:6
                             },
                             {
                               id:7
                             },
                             {
                               id:2
                             },
                             {
                               id:3
                             },
                             {
                               id:4
                             },
                             {
                               id:5
                             },
                             {
                               id:6
                             },
                             {
                               id:7
                             }
                           ]
                         },
                         {
                           id: 2,
                           photo: 'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
                           caption: 'Ala-ala korean food',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             }
                           ]
                         },
                         {
                           id: 3,
                           photo: 'https://www.pegipegi.com/travel/wp-content/uploads/2016/11/indomie-abang-adek.jpg',
                           caption: 'Mantaps Jiwaaaaaa',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             }
                           ]
                         },
                         {
                           id: 4,
                           photo: 'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
                           caption: 'Udon Every One !!!',
                           comments: [
                             {
                               id:2,
                               photo:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17796810_1528327353867346_2307441963031332454_n.jpg?oh=52089af2e62ddac1f985d1f81c92870d&oe=598DDD93',
                               username: 'husna',
                               comment: 'juossss'
                             },
                             {
                               id:3,
                               photo:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15826037_10202661895744567_7363835638348475132_n.jpg?oh=6397f14ebbf3e873263c21cc6024ac44&oe=59993265",
                               username:'arsakp',
                               comment: 'mantap souulll'
                             },
                           ],
                           likes: [
                             {
                               id:2
                             },
                             {
                               id:3
                             }
                           ]
                         },
                       ],
                       subscribers:[
                         {
                           id:2
                         },
                         {
                           id:3
                         },
                         {
                           id:4
                         },
                         {
                           id:5
                         },
                         {
                           id:6
                         },
                         {
                           id:7
                         }
                       ],
                       reviewers:[
                         {
                           id:2
                         },
                         {
                           id:3
                         },
                         {
                           id:4
                         },
                         {
                           id:5
                         },
                         {
                           id:6
                         },
                         {
                           id:7
                         }
                       ],
                       likes:[
                         {
                           id:2
                         },
                         {
                           id:3
                         },
                         {
                           id:4
                         },
                         {
                           id:5
                         },
                         {
                           id:6
                         },
                         {
                           id:7
                         }
                       ]
                     }

export const personReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.GET_PERSON:
        return action.payload
      case ActionTypes.CREATE_PERSON:
        return [...state, action.payload]
      case ActionTypes.UPDATE_PERSON:
        return state.map(todo => todo.id === action.payload.id ? Object.assign({}, todo, {title: action.payload.title}) :todo)
      case ActionTypes.DELETE_PERSON:
        return state.filter(todo => todo !== action.payload)
      default: return state
  }
}
