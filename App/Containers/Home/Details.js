import React, {PureComponent} from 'react';
import {Button, View, Text, ActivityIndicator, FlatList, TextInput, Plaform} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';

import Selectors from '../../Redux/Selectors';
import Actions from '../../Redux/Actions';

class DetailsScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
    }
  }

  componentDidMount() {
    const {navigation} = this.props;
    const postId = navigation.getParam('postId', 0);

    this.props.getPostDetails(postId);
    this.props.getPostComments(postId);
  }

  componentWillUnMount() {
    this.props.clearCommentSearchText();
  }

  _onSearch = (text) => {
    this.setState({
      textInputValue: text
    });
    this.props.setCommentSearchText(text);
  }

  _renderLoadingScreen = () => {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator />
      </View>
    );
  }

  _renderSeparator = () => {
    return (
      <View style={styles.Separator} />
    )
  }

  _renderPostDetails = () => {
    const { title, body } = this.props.postDetails;

    return (
        <View style={styles.postDetailsContainer}>
            <Text style={styles.postDetailsTitle}>
                {title}
            </Text>

            <Text style={styles.postDetailsBody}>
                {body}
            </Text>

            <TextInput
                style={styles.searchBox}
                placeholder='Search in comments'
                onChangeText={this._onSearch}
                autoCorrect={false}
                clearButtonMode='always'
                value={this.state.textInputValue}
            />
        </View>
    )
  }

  _renderCommentItem = ({ item }) => {
    const { email, name, body } = item;

    return (
        <View style={styles.commentContainer}>
            <Text style={styles.commentNameText}>
                {name}
            </Text>
            <Text style={styles.commentBodyText}>
                {body}
            </Text>
            <Text style={styles.commentEmailText}>
                By {email}
            </Text>
        </View>
    )
  };

  render() {
    const {postComments, isLoadingDetails, isLoadingComment, getPostComments, postDetails} = this.props;

    if (isLoadingDetails) { 
      return this._renderLoadingScreen();
    }

    return (
      <FlatList
        data={postComments}
        renderItem={this._renderCommentItem}
        ListHeaderComponent={this._renderPostDetails}
        ItemSeparatorComponent={this._renderSeparator}
        contentContainerStyle={styles.detailContainer}
        keyExtractor={item => item.id.toString()}
        refreshing={isLoadingComment}
        onRefresh={() => getPostComments(postDetails.id)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  let postComments = Selectors.getPostComments(state);
  const searchText = Selectors.getUiCommentSearchText(state);

  if (searchText && searchText.length > 0) {
    const searchTextInLowerCase = searchText.toLowerCase();
    postComments = postComments.filter(comment => {     
      return comment.name.toLowerCase().indexOf(searchTextInLowerCase) > 0 
      || comment.body.toLowerCase().indexOf(searchTextInLowerCase) > 0 
      || comment.email.toLowerCase().indexOf(searchTextInLowerCase) > 0
    });
  }
  return {
    postDetails: Selectors.getPostDetails(state),
    isLoadingDetails: Selectors.getPostDetailsIsLoading(state),
    postComments,
    isLoadingComment: Selectors.getPostCommentsIsLoading(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostDetails: (postId) => dispatch(Actions.postDetailGetAttempt(postId)),
    getPostComments: (postId) => dispatch(Actions.postCommentGetAttempt(postId)),
    setCommentSearchText: (text) => dispatch(Actions.setCommentSearchText(text)),
    clearCommentSearchText: () => dispatch(Actions.clearCommentSearchText()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
