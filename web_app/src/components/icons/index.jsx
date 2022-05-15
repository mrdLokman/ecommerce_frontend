import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export const CustomSearchIcon = ({ className = "w-6 h-6" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
    )
};

export const ShoppingCartIcon = ({ className = "w-6 h-6" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    )
};

export const FavoriteIcon = ({ className = "w-6 h-6" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    )
};




export const SliderLeftArrow = ({ color, size=16}) => {
    return (
        <ArrowLeftIcon color={color} fontSize={size} />
    )
};

export const SliderRightArrow = ({ color, size=16}) => {
    return (
        <ArrowRightIcon color={color} fontSize={size} />
    )
};

export const CustomSendIcon = ({className = ""}) => {
    return (
        <div className={className}>
            <SendIcon />
        </div> 
    )
};


export const CustomFacebookIcon = ({className = ""}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <FacebookIcon />
        </div> 
    )
};

export const CustomTwitterIcon = ({className = ""}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <TwitterIcon />
        </div> 
    )
};

export const CustomInstagramIcon = ({className = ""}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <InstagramIcon />
        </div> 
    )
};


export const CustomAddressIcon = ({className = ""}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <HomeIcon />
        </div> 
    )
};

export const CustomPhoneIcon = ({className = ""}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <LocalPhoneIcon />
        </div> 
    )
};

export const CustomEMailIcon = ({className = ""}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <EmailIcon />
        </div> 
    )
};



export const CustomAddIcon = ({className = ""}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <AddIcon />
        </div> 
    )
};

export const CustomRemoveIcon = ({className = ""}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <RemoveIcon />
        </div> 
    )
};
