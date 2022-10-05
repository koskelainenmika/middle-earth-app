import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from '../../redux/store';

const API_BLOG_BASE_URL = process.env.REACT_APP_BLOG_BASE_URL;

interface AppSliceState {
  error: string | null;
  isLoading: boolean;
  experienceList: Experience[];
}

const slice = createSlice({
  name: 'experience',
  initialState: {
    error: null,
    isLoading: false,
    experienceList: [],
  } as AppSliceState,
  reducers: {
    getExperienceListRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getExperienceListSuccess: (state, action: PayloadAction<Experience[]>) => {
      state.experienceList = action.payload;
    },
    getExperienceListFailure: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const getExperienceList = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState();
  if (state.experience.isLoading) {
    return;
  }

  dispatch(getExperienceListRequest());

  return fetch(`${API_BLOG_BASE_URL}/wp-json/wp/v2/kokemuspisteet?per_page=100`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        dispatch(getExperienceListSuccess(data));
      }
    })
    .catch(() => {
      dispatch(getExperienceListFailure('Error fetching experience list'));
    });
};

export const selectExperienceList = (state: RootState) => state.experience.experienceList;

export const {getExperienceListRequest, getExperienceListSuccess, getExperienceListFailure} = slice.actions;

export default slice.reducer;
