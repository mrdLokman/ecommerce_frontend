import SearchIcon from '@mui/icons-material/Search';

export const CustomSearchIcon = ({focused=false, color, size=16}) => {
    return (
        <SearchIcon color={color} focused={focused} size={size} />
    )
};