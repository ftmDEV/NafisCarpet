import { useState, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ErrorContext } from "src/contexts/error/errorContext";
import { setToStore, getFromStore, removeFromStore } from "src/utils/store";
import { useSnackbar } from "notistack";
// eslint-disable-next-line import/no-named-as-default-member
import Constant from "../utils/constant";

export const useGetData = (url) => {
  const API_URL = Constant.API_ADDRESS + url;
  // const option = {
  //   headers: {
  //     Authorization: `JWT ${getFromStore('token')}`,
  //   },
  // };
  const history = useHistory();
  const { dispatch } = useContext(ErrorContext);
  const [data, setData] = useState({
    loading: true,
    result: null,
  });
  const callAPI = useCallback(async () => {
    try {
      const response = await axios.get(API_URL);
      const result = response.data;
      setData({ loading: false, data: result });
    } catch (error) {
      const apiError = error.response.data;
      if (apiError.code === Constant.ERROR.UNAUTHORIZED) {
        removeFromStore("token");
        history.push("login");
      }
      dispatch({
        type: Constant.ACTION_TYPE.SHOW_ERROR,
        payload: apiError,
      });
      setData({ loading: false, result: null });
    }
  }, [url]);
  return [data, callAPI];
};

export const usePostData = (url, params) => {
  const API_URL = Constant.API_ADDRESS + url;
  const option = {
    headers: {
      Authorization: `JWT ${getFromStore("token")}`,
    },
  };
  // const {enqueueSnackbar} = useSnackbar();
  // const history = useHistory();
  const { dispatch } = useContext(ErrorContext);
  const [data, setData] = useState({
    loading: false,
    result: null,
  });
  const callAPI = useCallback(async () => {
    try {
      setData({ loading: true, result: null });
      const result = await axios.post(API_URL, params, option);
      setData({ loading: false, result });
      // enqueueSnackbar('Information was recorded successfully!', {variant: 'success'});
    } catch (error) {
      // const apiError = error.response.data;

      // if (apiError.code === Constant.ERROR.UNAUTHORIZED) {
      //   removeFromStore('token');
      //   history.push('login');
      // }

      dispatch({
        type: Constant.ACTION_TYPE.SHOW_ERROR,
        // payload: apiError,
      });
      setData({ loading: false, result: null });
    }
  }, [url, params]);
  return [data, callAPI];
};

export const usePostFormData = (url, formData) => {
  const API_URL = Constant.API_ADDRESS + url;
  const option = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${getFromStore("token")}`,
    },
  };

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { dispatch } = useContext(ErrorContext);
  const [data, setData] = useState({
    loading: true,
    result: null,
  });
  const callAPI = useCallback(async () => {
    try {
      const result = await axios.post(API_URL, formData, option);
      setData({ loading: false, result });
      enqueueSnackbar("Data is confirmed successfuly!", { variant: "success" });
    } catch (error) {
      const apiError = error.response.data;
      if (apiError.code === Constant.ERROR.UNAUTHORIZED) {
        removeFromStore("token");
        history.push("login");
      }
      dispatch({
        type: Constant.ACTION_TYPE.SHOW_ERROR,
        payload: apiError,
      });
      setData({ loading: false, result: null });
    }
  }, [url, formData]);
  return [data, callAPI];
};

export const usePostRegister = (url, params) => {
  const API_URL = Constant.API_ADDRESS + url;
  const option = {
    headers: {
      // Authorization: `bearer ${getFromStore('token')}`,
      content_type: "application/json",
      Access_Control_Allow_Origin: "*",
      Access_Control_Allow_Methods: "GET, POST, OPTIONS",
      Access_Control_Allow_Headers: "authorizationToken",
      // ("Access-Control-Allow-Origin", "*"
      // Origin: 'https://foo.example',
    },
  };
  const history = useHistory();
  const { dispatch } = useContext(ErrorContext);
  const [data, setData] = useState({
    loading: false,
    result: null,
    error: false,
  });
  const callAPI = useCallback(async () => {
    try {
      setData({ loading: true });
      const result = await axios.post(API_URL, params, option);
      setData({ loading: false, result });
      history.push("verification");
    } catch (error) {
      const apiError = error.response.data.message;
      dispatch({
        type: Constant.ACTION_TYPE.SHOW_ERROR,
        payload: apiError,
      });
      setData({ loading: false, result: null, error: true });
    }
  }, [url, params]);
  return [data, callAPI];
};

export const usePutOTP = (url, params) => {
  const API_URL = Constant.API_ADDRESS + url;
  const { dispatch } = useContext(ErrorContext);
  const [, setData] = useState({
    loading: true,
    result: null,
  });
  const callAPI = useCallback(async () => {
    try {
      const result = await axios.put(API_URL, params);
      setData({ loading: false, result });
    } catch (error) {
      const apiError = error.response.data;
      if (apiError.code === Constant.ERROR.UNAUTHORIZED) {
        console.log("Error", error);
      }
      dispatch({
        type: Constant.ACTION_TYPE.SHOW_ERROR,
        payload: apiError,
      });
      setData({ loading: false, result: null });
    }
  }, [url, params]);
  return [callAPI];
};

export const usePutData = (url, params) => {
  const API_URL = Constant.API_ADDRESS + url;
  // const option = {
  //   headers: {
  //     Authorization: `bearer ${  getFromStore('token')}`,
  //   },
  // };
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { dispatch } = useContext(ErrorContext);
  const [data, setData] = useState({
    loading: false,
    result: null,
  });
  const callAPI = useCallback(async () => {
    try {
      setData({ loading: true, result: null });
      const result = await axios.put(API_URL, params);
      setData({ loading: false, result });
      enqueueSnackbar("Information was recorded successfully!", {
        variant: "success",
      });
    } catch (error) {
      const apiError = error.response.data;
      if (apiError.code === Constant.ERROR.UNAUTHORIZED) {
        removeFromStore("token");
        history.push("login");
      }
      dispatch({
        type: Constant.ACTION_TYPE.SHOW_ERROR,
        payload: apiError,
      });
      setData({ loading: false, result: null });
    }
  }, [url, params]);
  return [data, callAPI];
};

export const useDeleteData = (url) => {
  const API_URL = Constant.API_ADDRESS + url;
  const option = {
    headers: {
      Authorization: `bearer ${getFromStore("token")}`,
    },
  };
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { dispatch } = useContext(ErrorContext);
  const [data, setData] = useState({
    loading: true,
    result: null,
  });
  const callAPI = useCallback(async () => {
    try {
      const result = await axios.delete(API_URL, option);
      setData({ loading: false, result });
      enqueueSnackbar("The record was removed!", { variant: "success" });
    } catch (error) {
      const apiError = error.response.data;
      if (apiError.code === Constant.ERROR.UNAUTHORIZED) {
        removeFromStore("token");
        history.push("login");
      }
      dispatch({
        type: Constant.ACTION_TYPE.SHOW_ERROR,
        payload: apiError,
      });
      setData({ loading: false, result: null });
    }
  }, [url]);
  return [data, callAPI];
};

export const usePostLogin = (url, params) => {
  const API_URL = Constant.API_ADDRESS + url;

  const history = useHistory();
  const { dispatch } = useContext(ErrorContext);
  const [data, setData] = useState({
    loading: false,
    result: null,
  });
  const callAPI = useCallback(async () => {
    try {
      const accountData = {
        phone_number: params.phone_number,
        password: params.password,
      };
      setData({ loading: true });
      const result = await axios.post(API_URL, accountData);
      setData({ loading: false, result });
      setToStore("token", result.data.access);
      history.push("dashboard");
    } catch (error) {
      const apiError = error.response.data.message;
      dispatch({
        type: Constant.ACTION_TYPE.SHOW_ERROR,
        payload: apiError,
      });
      setData({ loading: false, result: null });
    }
  }, [url, params]);
  return [data, callAPI];
};
