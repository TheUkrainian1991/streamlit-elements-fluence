import dynamic from "next/dynamic"
import ElementsLoading from "../../ElementsLoading"

const mui: ElementsRecord = {
  Accordion: dynamic(() => import("@mui/material/Accordion"), { loading: ElementsLoading, ssr: false }),
  AccordionActions: dynamic(() => import("@mui/material/AccordionActions"), { loading: ElementsLoading, ssr: false }),
  AccordionDetails: dynamic(() => import("@mui/material/AccordionDetails"), { loading: ElementsLoading, ssr: false }),
  AccordionSummary: dynamic(() => import("@mui/material/AccordionSummary"), { loading: ElementsLoading, ssr: false }),
  Alert: dynamic(() => import("@mui/material/Alert"), { loading: ElementsLoading, ssr: false }),
  AlertTitle: dynamic(() => import("@mui/material/AlertTitle"), { loading: ElementsLoading, ssr: false }),
  AppBar: dynamic(() => import("@mui/material/AppBar"), { loading: ElementsLoading, ssr: false }),
  Autocomplete: dynamic(() => import("@mui/material/Autocomplete"), { loading: ElementsLoading, ssr: false }),
  Avatar: dynamic(() => import("@mui/material/Avatar"), { loading: ElementsLoading, ssr: false }),
  AvatarGroup: dynamic(() => import("@mui/material/AvatarGroup"), { loading: ElementsLoading, ssr: false }),
  Backdrop: dynamic(() => import("@mui/material/Backdrop"), { loading: ElementsLoading, ssr: false }),
  Badge: dynamic(() => import("@mui/material/Badge"), { loading: ElementsLoading, ssr: false }),
  BottomNavigation: dynamic(() => import("@mui/material/BottomNavigation"), { loading: ElementsLoading, ssr: false }),
  BottomNavigationAction: dynamic(() => import("@mui/material/BottomNavigationAction"), { loading: ElementsLoading, ssr: false }),
  Box: dynamic(() => import("@mui/material/Box"), { loading: ElementsLoading, ssr: false }),
  Breadcrumbs: dynamic(() => import("@mui/material/Breadcrumbs"), { loading: ElementsLoading, ssr: false }),
  Button: dynamic(() => import("@mui/material/Button"), { loading: ElementsLoading, ssr: false }),
  ButtonBase: dynamic(() => import("@mui/material/ButtonBase"), { loading: ElementsLoading, ssr: false }),
  ButtonGroup: dynamic(() => import("@mui/material/ButtonGroup"), { loading: ElementsLoading, ssr: false }),
  Card: dynamic(() => import("@mui/material/Card"), { loading: ElementsLoading, ssr: false }),
  CardActionArea: dynamic(() => import("@mui/material/CardActionArea"), { loading: ElementsLoading, ssr: false }),
  CardActions: dynamic(() => import("@mui/material/CardActions"), { loading: ElementsLoading, ssr: false }),
  CardContent: dynamic(() => import("@mui/material/CardContent"), { loading: ElementsLoading, ssr: false }),
  CardHeader: dynamic(() => import("@mui/material/CardHeader"), { loading: ElementsLoading, ssr: false }),
  CardMedia: dynamic(() => import("@mui/material/CardMedia"), { loading: ElementsLoading, ssr: false }),
  Checkbox: dynamic(() => import("@mui/material/Checkbox"), { loading: ElementsLoading, ssr: false }),
  Chip: dynamic(() => import("@mui/material/Chip"), { loading: ElementsLoading, ssr: false }),
  CircularProgress: dynamic(() => import("@mui/material/CircularProgress"), { loading: ElementsLoading, ssr: false }),
  ClickAwayListener: dynamic(() => import("@mui/material/ClickAwayListener"), { loading: ElementsLoading, ssr: false }),
  Collapse: dynamic(() => import("@mui/material/Collapse"), { loading: ElementsLoading, ssr: false }),
  Container: dynamic(() => import("@mui/material/Container"), { loading: ElementsLoading, ssr: false }),
  CssBaseline: dynamic(() => import("@mui/material/CssBaseline"), { loading: ElementsLoading, ssr: false }),
  Dialog: dynamic(() => import("@mui/material/Dialog"), { loading: ElementsLoading, ssr: false }),
  DialogActions: dynamic(() => import("@mui/material/DialogActions"), { loading: ElementsLoading, ssr: false }),
  DialogContent: dynamic(() => import("@mui/material/DialogContent"), { loading: ElementsLoading, ssr: false }),
  DialogContentText: dynamic(() => import("@mui/material/DialogContentText"), { loading: ElementsLoading, ssr: false }),
  DialogTitle: dynamic(() => import("@mui/material/DialogTitle"), { loading: ElementsLoading, ssr: false }),
  Divider: dynamic(() => import("@mui/material/Divider"), { loading: ElementsLoading, ssr: false }),
  Drawer: dynamic(() => import("@mui/material/Drawer"), { loading: ElementsLoading, ssr: false }),
  Fab: dynamic(() => import("@mui/material/Fab"), { loading: ElementsLoading, ssr: false }),
  Fade: dynamic(() => import("@mui/material/Fade"), { loading: ElementsLoading, ssr: false }),
  FilledInput: dynamic(() => import("@mui/material/FilledInput"), { loading: ElementsLoading, ssr: false }),
  FormControl: dynamic(() => import("@mui/material/FormControl"), { loading: ElementsLoading, ssr: false }),
  FormControlLabel: dynamic(() => import("@mui/material/FormControlLabel"), { loading: ElementsLoading, ssr: false }),
  FormGroup: dynamic(() => import("@mui/material/FormGroup"), { loading: ElementsLoading, ssr: false }),
  FormHelperText: dynamic(() => import("@mui/material/FormHelperText"), { loading: ElementsLoading, ssr: false }),
  FormLabel: dynamic(() => import("@mui/material/FormLabel"), { loading: ElementsLoading, ssr: false }),
  GlobalStyles: dynamic(() => import("@mui/material/GlobalStyles"), { loading: ElementsLoading, ssr: false }),
  Grid: dynamic(() => import("@mui/material/Grid"), { loading: ElementsLoading, ssr: false }),
  Grow: dynamic(() => import("@mui/material/Grow"), { loading: ElementsLoading, ssr: false }),
  Hidden: dynamic(() => import("@mui/material/Hidden"), { loading: ElementsLoading, ssr: false }),
  Icon: dynamic(() => import("@mui/material/Icon"), { loading: ElementsLoading, ssr: false }),
  IconButton: dynamic(() => import("@mui/material/IconButton"), { loading: ElementsLoading, ssr: false }),
  ImageList: dynamic(() => import("@mui/material/ImageList"), { loading: ElementsLoading, ssr: false }),
  ImageListItem: dynamic(() => import("@mui/material/ImageListItem"), { loading: ElementsLoading, ssr: false }),
  ImageListItemBar: dynamic(() => import("@mui/material/ImageListItemBar"), { loading: ElementsLoading, ssr: false }),
  Input: dynamic(() => import("@mui/material/Input"), { loading: ElementsLoading, ssr: false }),
  InputAdornment: dynamic(() => import("@mui/material/InputAdornment"), { loading: ElementsLoading, ssr: false }),
  InputBase: dynamic(() => import("@mui/material/InputBase"), { loading: ElementsLoading, ssr: false }),
  InputLabel: dynamic(() => import("@mui/material/InputLabel"), { loading: ElementsLoading, ssr: false }),
  LinearProgress: dynamic(() => import("@mui/material/LinearProgress"), { loading: ElementsLoading, ssr: false }),
  Link: dynamic(() => import("@mui/material/Link"), { loading: ElementsLoading, ssr: false }),
  List: dynamic(() => import("@mui/material/List"), { loading: ElementsLoading, ssr: false }),
  ListItem: dynamic(() => import("@mui/material/ListItem"), { loading: ElementsLoading, ssr: false }),
  ListItemAvatar: dynamic(() => import("@mui/material/ListItemAvatar"), { loading: ElementsLoading, ssr: false }),
  ListItemButton: dynamic(() => import("@mui/material/ListItemButton"), { loading: ElementsLoading, ssr: false }),
  ListItemIcon: dynamic(() => import("@mui/material/ListItemIcon"), { loading: ElementsLoading, ssr: false }),
  ListItemSecondaryAction: dynamic(() => import("@mui/material/ListItemSecondaryAction"), { loading: ElementsLoading, ssr: false }),
  ListItemText: dynamic(() => import("@mui/material/ListItemText"), { loading: ElementsLoading, ssr: false }),
  ListSubheader: dynamic(() => import("@mui/material/ListSubheader"), { loading: ElementsLoading, ssr: false }),
  Menu: dynamic(() => import("@mui/material/Menu"), { loading: ElementsLoading, ssr: false }),
  MenuItem: dynamic(() => import("@mui/material/MenuItem"), { loading: ElementsLoading, ssr: false }),
  MenuList: dynamic(() => import("@mui/material/MenuList"), { loading: ElementsLoading, ssr: false }),
  MobileStepper: dynamic(() => import("@mui/material/MobileStepper"), { loading: ElementsLoading, ssr: false }),
  Modal: dynamic(() => import("@mui/material/Modal"), { loading: ElementsLoading, ssr: false }),
  NativeSelect: dynamic(() => import("@mui/material/NativeSelect"), { loading: ElementsLoading, ssr: false }),
  OutlinedInput: dynamic(() => import("@mui/material/OutlinedInput"), { loading: ElementsLoading, ssr: false }),
  Pagination: dynamic(() => import("@mui/material/Pagination"), { loading: ElementsLoading, ssr: false }),
  PaginationItem: dynamic(() => import("@mui/material/PaginationItem"), { loading: ElementsLoading, ssr: false }),
  Paper: dynamic(() => import("@mui/material/Paper"), { loading: ElementsLoading, ssr: false }),
  Popover: dynamic(() => import("@mui/material/Popover"), { loading: ElementsLoading, ssr: false }),
  Popper: dynamic(() => import("@mui/material/Popper"), { loading: ElementsLoading, ssr: false }),
  Portal: dynamic(() => import("@mui/material/Portal"), { loading: ElementsLoading, ssr: false }),
  Radio: dynamic(() => import("@mui/material/Radio"), { loading: ElementsLoading, ssr: false }),
  RadioGroup: dynamic(() => import("@mui/material/RadioGroup"), { loading: ElementsLoading, ssr: false }),
  Rating: dynamic(() => import("@mui/material/Rating"), { loading: ElementsLoading, ssr: false }),
  ScopedCssBaseline: dynamic(() => import("@mui/material/ScopedCssBaseline"), { loading: ElementsLoading, ssr: false }),
  Select: dynamic(() => import("@mui/material/Select"), { loading: ElementsLoading, ssr: false }),
  Skeleton: dynamic(() => import("@mui/material/Skeleton"), { loading: ElementsLoading, ssr: false }),
  Slide: dynamic(() => import("@mui/material/Slide"), { loading: ElementsLoading, ssr: false }),
  Slider: dynamic(() => import("@mui/material/Slider"), { loading: ElementsLoading, ssr: false }),
  Snackbar: dynamic(() => import("@mui/material/Snackbar"), { loading: ElementsLoading, ssr: false }),
  SnackbarContent: dynamic(() => import("@mui/material/SnackbarContent"), { loading: ElementsLoading, ssr: false }),
  SpeedDial: dynamic(() => import("@mui/material/SpeedDial"), { loading: ElementsLoading, ssr: false }),
  SpeedDialAction: dynamic(() => import("@mui/material/SpeedDialAction"), { loading: ElementsLoading, ssr: false }),
  SpeedDialIcon: dynamic(() => import("@mui/material/SpeedDialIcon"), { loading: ElementsLoading, ssr: false }),
  Stack: dynamic(() => import("@mui/material/Stack"), { loading: ElementsLoading, ssr: false }),
  Step: dynamic(() => import("@mui/material/Step"), { loading: ElementsLoading, ssr: false }),
  StepButton: dynamic(() => import("@mui/material/StepButton"), { loading: ElementsLoading, ssr: false }),
  StepConnector: dynamic(() => import("@mui/material/StepConnector"), { loading: ElementsLoading, ssr: false }),
  StepContent: dynamic(() => import("@mui/material/StepContent"), { loading: ElementsLoading, ssr: false }),
  StepIcon: dynamic(() => import("@mui/material/StepIcon"), { loading: ElementsLoading, ssr: false }),
  StepLabel: dynamic(() => import("@mui/material/StepLabel"), { loading: ElementsLoading, ssr: false }),
  Stepper: dynamic(() => import("@mui/material/Stepper"), { loading: ElementsLoading, ssr: false }),
  StyledEngineProvider: dynamic(() => import("@mui/material/StyledEngineProvider"), { loading: ElementsLoading, ssr: false }),
  SvgIcon: dynamic(() => import("@mui/material/SvgIcon"), { loading: ElementsLoading, ssr: false }),
  SwipeableDrawer: dynamic(() => import("@mui/material/SwipeableDrawer"), { loading: ElementsLoading, ssr: false }),
  Switch: dynamic(() => import("@mui/material/Switch"), { loading: ElementsLoading, ssr: false }),
  Tab: dynamic(() => import("@mui/material/Tab"), { loading: ElementsLoading, ssr: false }),
  TabScrollButton: dynamic(() => import("@mui/material/TabScrollButton"), { loading: ElementsLoading, ssr: false }),
  Table: dynamic(() => import("@mui/material/Table"), { loading: ElementsLoading, ssr: false }),
  TableBody: dynamic(() => import("@mui/material/TableBody"), { loading: ElementsLoading, ssr: false }),
  TableCell: dynamic(() => import("@mui/material/TableCell"), { loading: ElementsLoading, ssr: false }),
  TableContainer: dynamic(() => import("@mui/material/TableContainer"), { loading: ElementsLoading, ssr: false }),
  TableFooter: dynamic(() => import("@mui/material/TableFooter"), { loading: ElementsLoading, ssr: false }),
  TableHead: dynamic(() => import("@mui/material/TableHead"), { loading: ElementsLoading, ssr: false }),
  TablePagination: dynamic(() => import("@mui/material/TablePagination"), { loading: ElementsLoading, ssr: false }),
  TableRow: dynamic(() => import("@mui/material/TableRow"), { loading: ElementsLoading, ssr: false }),
  TableSortLabel: dynamic(() => import("@mui/material/TableSortLabel"), { loading: ElementsLoading, ssr: false }),
  Tabs: dynamic(() => import("@mui/material/Tabs"), { loading: ElementsLoading, ssr: false }),
  TextField: dynamic(() => import("@mui/material/TextField"), { loading: ElementsLoading, ssr: false }),
  TextareaAutosize: dynamic(() => import("@mui/material/TextareaAutosize"), { loading: ElementsLoading, ssr: false }),
  ToggleButton: dynamic(() => import("@mui/material/ToggleButton"), { loading: ElementsLoading, ssr: false }),
  ToggleButtonGroup: dynamic(() => import("@mui/material/ToggleButtonGroup"), { loading: ElementsLoading, ssr: false }),
  Toolbar: dynamic(() => import("@mui/material/Toolbar"), { loading: ElementsLoading, ssr: false }),
  Tooltip: dynamic(() => import("@mui/material/Tooltip"), { loading: ElementsLoading, ssr: false }),
  Typography: dynamic(() => import("@mui/material/Typography"), { loading: ElementsLoading, ssr: false }),
  Zoom: dynamic(() => import("@mui/material/Zoom"), { loading: ElementsLoading, ssr: false }),
}

const dataGrid: ElementsRecord = {
  DataGrid: dynamic(() => import("@mui/x-data-grid").then(m => m.DataGrid), { loading: ElementsLoading, ssr: false }),
  GridActionsCellItem: dynamic(() => import("@mui/x-data-grid").then(m => m.GridActionsCellItem), { loading: ElementsLoading, ssr: false }),
  GridToolbar: dynamic(() => import("@mui/x-data-grid").then(m => m.GridToolbar), { loading: ElementsLoading, ssr: false }),
  GridToolbarColumnsButton: dynamic(() => import("@mui/x-data-grid").then(m => m.GridToolbarColumnsButton), { loading: ElementsLoading, ssr: false }),
  GridToolbarContainer: dynamic(() => import("@mui/x-data-grid").then(m => m.GridToolbarContainer), { loading: ElementsLoading, ssr: false }),
  GridToolbarDensitySelector: dynamic(() => import("@mui/x-data-grid").then(m => m.GridToolbarDensitySelector), { loading: ElementsLoading, ssr: false }),
  GridToolbarExport: dynamic(() => import("@mui/x-data-grid").then(m => m.GridToolbarExport), { loading: ElementsLoading, ssr: false }),
  GridToolbarFilterButton: dynamic(() => import("@mui/x-data-grid").then(m => m.GridToolbarFilterButton), { loading: ElementsLoading, ssr: false }),
}

const dataGridPro: ElementsRecord = {
  DataGridPro: dynamic(() => import("@mui/x-data-grid-pro").then(m => m.DataGridPro), { loading: ElementsLoading, ssr: false }),
}


const thirdParty: ElementsRecord = {
  SwipeableViews: dynamic(() => import("react-swipeable-views-react-18-fix"), { loading: ElementsLoading, ssr: false }),
}

const elements: ElementsRecord = {
  ...mui,
  ...dataGrid,
  ...dataGridPro,
  ...thirdParty,
}

const loadMuiElements: ElementsLoader = element => elements[element]

export default loadMuiElements
