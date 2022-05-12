import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const CustomSearchIcon = ({ className = "w-6 h-6" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
    )
};

export const ShoppingCart = ({ color, size=16 }) => {
    return (
        <ShoppingCartOutlined color={color} fontSize={size} />
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

