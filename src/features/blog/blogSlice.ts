import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from '../../redux/store';

const API_BLOG_BASE_URL = process.env.REACT_APP_BLOG_BASE_URL;

interface AppSliceState {
  error: string | null;
  isLoading: boolean;
  blogPosts: Blog[];
}

const slice = createSlice({
  name: 'questionnaire',
  initialState: {
    error: null,
    isLoading: false,
    blogPosts: [],
  } as AppSliceState,
  reducers: {
    getBlogPostsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getBlogPostsSuccess: (state, action: PayloadAction<Blog[]>) => {
      state.blogPosts = action.payload;
    },
    getBlogPostsFailure: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const getBlogPosts = (pageNumber: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState();
  if (state.blog.isLoading) {
    return;
  }

  dispatch(getBlogPostsRequest());

  return fetch(`${API_BLOG_BASE_URL}/wp-json/wp/v2/posts/?page=${pageNumber}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        dispatch(getBlogPostsSuccess(data));
      }
    })
    .catch(() => {
      dispatch(getBlogPostsFailure('Error fetching blog posts'));
    });
};

export const selectBlogPosts = (state: RootState) => state.blog.blogPosts;

export const {getBlogPostsRequest, getBlogPostsSuccess, getBlogPostsFailure} = slice.actions;

export default slice.reducer;
