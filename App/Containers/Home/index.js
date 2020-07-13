import React, {PureComponent} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import Selectors from '../../Redux/Selectors';
import Actions from '../../Redux/Actions';

import styles from './styles';

class HomeScreen extends PureComponent {
  componentDidMount() {
    this.props.getPostList();
  }

  _renderPostItem = ({item}) => {
    return (
      <TouchableOpacity 
        onPress={() => this._onPostClick(item.id)} 
        style={styles.cardContainer}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  _onPostClick = (id) => {
    this.props.navigation.navigate('Details', {postId: id});
  }

  _renderSeparator = () => {
    return (
      <View style={{height: 1, backgroundColor: 'gray'}}/>
    )
  }

  render() {
    const {posts, isLoading, getPostList} = this.props;
    return (
      <FlatList
        data={posts}
        renderItem={this._renderPostItem}
        keyExtractor={item => item.id.toString()}
        refreshing={isLoading}
        onRefresh={getPostList}
        ItemSeparatorComponent={this._renderSeparator}
        style={styles.mainContainer}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: Selectors.getPostIsLoading(state),
    posts: Selectors.getPostList(state),

  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getPostList: () => dispatch(Actions.postListGetAttempt()),
    //getPostDetails: (postId) => dispatch(Actions.postDetalsGetAttempt(postId)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
