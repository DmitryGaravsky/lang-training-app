import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
//
const SpeakerButton = ({ text, voice }) => {
    const utterThis = new SpeechSynthesisUtterance(text);
    const speechSynthesis = window.speechSynthesis;
    //
    const speak = (event) => {
        event.preventDefault()
        utterThis.voice = voice;
        utterThis.lang = voice.lang;    
        speechSynthesis.speak(utterThis)
    };
    //
    return (
        <IconButton aria-label="settings" size='large' onClick={speak}>
            <VolumeUpIcon />
        </IconButton>
    )
}

export default SpeakerButton;