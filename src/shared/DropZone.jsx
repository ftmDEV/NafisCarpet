import React, {useState, useEffect} from 'react';
import PropType from 'prop-types';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import Constant from '../../utils/constant';

const CustomeDropZone = props => {
  const {name, onChange, maxFiles, defaultValue, label} = props;
  const [files, setFiles] = useState('');

  const handleChangeStatus = ({file}, status) => {
    if (typeof onChange === 'function' && status === 'done') {
      onChange(file, name);
    }
  };

  const convertUrlToFile = () => {
    if (defaultValue[0]) {
      fetch(defaultValue).then(res => {
        res.arrayBuffer().then(buf => {
          const file = new File([buf], 'image_data_url.pdf', {
            type: 'file/pdf',
          });
          setFiles({file});
        });
      });
    }
  };

  useEffect(() => {
    convertUrlToFile();
  }, []);

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      maxFiles={maxFiles}
      initialFiles={[files.file]}
      inputContent={label}
      name={name}
      // className={classes.root}
      styles={{
        dropzone: {
          width: '100%',
          margin: '10px 0',
          padding: 0,
          overflow: 'hidden',
          minHeight: 50,
          border: '1px solid #eeee !important',
          outline: 'none',
        },
        preview: {height: 'auto'},
        inputLabel: {
          color: '#d1d1d1',
          fontFamily: 'IranSans !important',
          fontWeight: '100',
        },
        previewImage: {maxHeight: 100},
      }}
    />
  );
};

CustomeDropZone.propTypes = {
  name: PropType.string,
  onChange: PropType.func.isRequired,
  maxFiles: PropType.number,
  defaultValue: PropType.arrayOf(PropType.object),
  label: PropType.string,
  // picture: PropType.string,
};
CustomeDropZone.defaultProps = {
  name: '',
  maxFiles: 1,
  defaultValue: [{}],
  label: Constant.USER_UPGRAGE.UPLOAD,
};

export default CustomeDropZone;
