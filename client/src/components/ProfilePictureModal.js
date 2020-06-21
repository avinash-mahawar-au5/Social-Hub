import React, { Component } from 'react';
import Files from 'react-files';
import Rodal from 'rodal';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import cogoToast from 'cogo-toast';
import { connect } from 'react-redux';
import { changeImage } from '../actions/settings';
import { toggleProfilePictureModal } from '../actions/app';
class ProfilePictureModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: null,
		};

		this.cropper = React.createRef();

		// this.onFileSelected = this.onFileSelected.bind(this);
	}
	componentWillUnmount() {
		this.setState(() => ({
			file: null,
		}));
	}

	onFileSelected(File) {
		this.setState(() => ({
			file: File[0],
		}));
	}

	onFileError(error) {
		cogoToast.info(`Whoops, there war aproblem with the image.`, {
			position: 'bottom-right',
		});
	}

	uploadPicture() {
		const crop = this.cropper.current.cropper.getData();

		this.props.changeImage(this.state.file, crop);
	}
	render() {
		const modalCustomStyles = {
			height: 'fit-content',
			width: 'fit-content',
		};

		return (
			<Rodal
				visible={this.props.isVisible}
				onClose={this.props.toggleProfilePictureModal}
				animation={'sideUp'}
				customStyles={modalCustomStyles}>
				<div className='mt-4' style={{ maxWidth: '400px' }}>
					{!this.state.file && (
						<Files
							className='dropzone mt-2'
							dropActiveClassName='dropzone--active'
							accepts={['image/png', 'image/jpg', 'image/jepg']}
							onChange={this.onFileSelected}
							onError={this.onFileError}
							maxFileSize={10000000}
							minFileSize={0}
							clickable>
							<div className='d-flex flex-column h-100 justify-content-center'>
								<h2 className='txt-center'>
									<i className='far fa-file-image'></i>
								</h2>
								<p className='text-center mb-0'>
									Drag and drop your image here or...
								</p>
								<p className='text-center mb-0 btn-link cursor-pointer'>
									Upload from your device
								</p>
							</div>
						</Files>
					)}
					{this.state.file && (
						<Cropper
							ref={this.cropper}
							src={this.state.file.preview.url}
							style={{ height: 500, width: '100%' }}
							dragMode='move'
							zoomable={false}
							aspectRatio={1}
							viewMode={2}
							responsive={true}
							guides={false}
						/>
					)}
				</div>

				<div className='float-right mt-2'>
					<button
						className='btn brn-brand-secondary text-white mt-2'
						onClick={this.props.toggleProfilePictureModal}>
						Cancle
					</button>
					<button
						className='btn btn-brand text-white ml-1 mt-2'
						onClick={this.uploadPicture}
						disabled={!this.state.file}>
						Upload
					</button>
				</div>
			</Rodal>
		);
	}
}

const stateToProps = (state) => ({
	isVisible: state.app.ProfilePictureModal.isVisible,
});

const dispatchToProps = (dispatch) => ({
	changeImage: (binary, crop) => dispatch(changeImage(binary, crop)),
	toggleProfilePictureModal: () => dispatch(toggleProfilePictureModal()),
});

export default connect(stateToProps, dispatchToProps)(ProfilePictureModal);
