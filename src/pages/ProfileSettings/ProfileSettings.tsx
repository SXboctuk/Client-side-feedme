import React from 'react';
import { useTranslation } from 'react-i18next';
import ContentWrapper from '../../components/ContentWrapper';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileNavigation from '../../components/ProfileNavigation';
import Container from '../../components/shared/Container';
import styles from '../../constants/stylesProperty';
import { UserState } from '../../redux/reducers/UserReducer/UserReducer.types';
import SettingsInput from './Components/SettingsInput/SettingsInput';
import {
	ProfileSettingsContentWrapper,
	ProfileSettingsMainTitle,
	ProfileSettingsItemsBlock,
} from './ProfileSettings.Styled';

const ProfileSettings = (props: {
	isOwner: boolean;
	user: UserState;
	refInputUploadFile: React.RefObject<HTMLInputElement>;
	handlerUploadInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlerPhotoClick: (e: React.MouseEvent) => void;
	handlerSaveName: (str: string) => void;
	handlerSaveEmail: (str: string) => void;
	handlerSavePassword: (str: string) => void;
	errorName: string;
	errorEmail: string;
	errorPassword: string;
	handlerChangeName: () => void;
	handlerChangeEmail: () => void;
	handlerChangePassword: () => void;
}) => {
	const { t } = useTranslation();
	const {
		isOwner,
		user,
		refInputUploadFile,
		handlerUploadInput,
		handlerPhotoClick,
		handlerSaveName,
		handlerSaveEmail,
		handlerSavePassword,
		errorName,
		errorEmail,
		errorPassword,
		handlerChangeName,
		handlerChangeEmail,
		handlerChangePassword,
	} = props;
	const { userText, userName, email, image } = user;

	if (!isOwner) {
		return <div>Wooops</div>;
	}

	return (
		<>
			<ContentWrapper>
				<Container maxWidth={styles.screenSize.lg}>
					<ProfileHeader
						imageSrc={image}
						userName={userName}
						userText={userText}
						handlerPhotoClick={handlerPhotoClick}
					/>
					<input
						ref={refInputUploadFile}
						type={'file'}
						onChange={handlerUploadInput}
						accept="image/*"
						hidden
					></input>
					<ProfileNavigation
						itemSelect="settings"
						isOwner={isOwner}
					/>
					<ProfileSettingsContentWrapper>
						<ProfileSettingsMainTitle>
							{t('personalInformation')}
						</ProfileSettingsMainTitle>
						<ProfileSettingsItemsBlock>
							<SettingsInput
								buttonName={t('edit')}
								name={t('name')}
								value={userName}
								saveButton={handlerSaveName}
								error={errorName}
								handlerInputChange={handlerChangeName}
							/>
							<SettingsInput
								buttonName={t('edit')}
								name={t('email')}
								value={email}
								saveButton={handlerSaveEmail}
								error={errorEmail}
								handlerInputChange={handlerChangeEmail}
								isEmail
							/>
							<SettingsInput
								buttonName={t('changeMyPassword')}
								name={t('Password')}
								value={''}
								saveButton={handlerSavePassword}
								error={errorPassword}
								isPassword
								handlerInputChange={handlerChangePassword}
							/>
						</ProfileSettingsItemsBlock>
					</ProfileSettingsContentWrapper>
				</Container>
			</ContentWrapper>
		</>
	);
};

export default ProfileSettings;