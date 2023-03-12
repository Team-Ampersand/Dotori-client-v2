import { CameraIcon } from "assets/svg";
import ModalHeader from "components/Common/atoms/ModalHeader";
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { useCallback, useState } from "react";
import * as S from "./style";
import Cropper, { Area } from 'react-easy-crop'
import { Palette } from "styles/globals";
import { getCroppedImg } from "utils/canvas";
import { ModalProps } from "types";

const ProileImgModal = ({ modalState, setModalState}:ModalProps) => {
    const [imgBase64, setImgBase64] = useState("");
    const [file, setFile] = useState("");
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1)
    
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();

    const onCropComplete = useCallback((croppedArea:Area,croppedAreaPixels:Area) => {
      setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const handleSubmitClick = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(imgBase64, 0, croppedAreaPixels )
            console.log(croppedImage)
            setFile(croppedImage || "")
        } catch (e) {
          console.error(e)
        }
      }, [imgBase64, croppedAreaPixels])

    const handleChangeFile = useCallback((event: any) => {
        event.preventDefault();
        setCroppedAreaPixels(undefined)
        let reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result;
          if(base64) setImgBase64(base64.toString());
        };
        if (event.target.files[0]) {
          reader.readAsDataURL(event.target.files[0]);
          setFile(event.target.files[0]);
        }
    },[])

    return (
        <>
            <ModalOverayWrapper isClick={modalState}>
                <S.ProileImgModalWrapper>
                    <ModalHeader name={imgBase64 ? "이미지 편집" : "프로필 이미지 선택"} setState={setModalState} />
                        {
                            imgBase64 ? (
                                <S.ImgCrop>
                                    <Cropper 
                                        image={imgBase64} 
                                        crop={crop}
                                        zoom={zoom}
                                        aspect={5 / 5}
                                        showGrid={false}
                                        objectFit="vertical-cover"
                                        onCropChange={setCrop}
                                        onZoomChange={setZoom}
                                        onCropComplete={onCropComplete}
                                        style={{ 
                                            containerStyle:{borderRadius: "8px", color:`${Palette.BACKGROUND_CARD}`, width: "100%", height: "100%"},
                                            cropAreaStyle: {borderRadius: "8px", color:`${Palette.BACKGROUND_CARD}`}
                                        }}
                                    />
                                </S.ImgCrop>
                            ) : (
                            <label htmlFor="change_img">
                                <S.AddImgBtn>
                                    <CameraIcon/>
                                    <span>이미지 추가</span>
                                    <input
                                        id="change_img"
                                        type="file"
                                        style={{ display: "none" }}
                                        onChange={handleChangeFile}
                                        accept="image/*"
                                    />
                                </S.AddImgBtn>
                              </label>
                            )
                        }
                    {
                        imgBase64 && 
                        <S.BottomBtns>
                            <S.CancelBtn onClick={() => setImgBase64('')}>취소</S.CancelBtn>
                            <S.SubmitBtn onClick={handleSubmitClick}>확인</S.SubmitBtn>
                        </S.BottomBtns>
                    }
                </S.ProileImgModalWrapper>
            </ModalOverayWrapper>
        </>
    )
}

export default ProileImgModal;