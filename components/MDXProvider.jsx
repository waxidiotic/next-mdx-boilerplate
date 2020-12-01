import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Accordion,
  Alert,
  AlertDialog,
  Avatar,
  AspectRatioBox,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  Button,
  ButtonGroup,
  Callout,
  Code,
  Checkbox,
  CheckboxGroup,
  CloseButton,
  Collapse,
  ControlBox,
  CircularProgress,
  Divider,
  Drawer,
  Editable,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputAddon,
  InputGroup,
  Kbd,
  Link,
  List,
  Stack,
  SimpleGrid,
  Menu,
  Modal,
  NumberInput,
  Portal,
  Popover,
  Progress,
  PseudoBox,
  Radio,
  RadioGroup,
  RadioButtonGroup,
  Select,
  Skeleton,
  Slider,
  Spinner,
  Stat,
  Switch,
  Tabs,
  Tag,
  Text,
  Textarea,
  Tooltip,
  VisuallyHidden,
} from '@chakra-ui/core'

const mdComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  p: (props) => <Text as="p" {...props} />,
  a: (props) => <Link as="a" {...props} />,
  Accordion,
  Alert,
  AlertDialog,
  Avatar,
  AspectRatioBox,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  Button,
  ButtonGroup,
  Callout,
  Code,
  Checkbox,
  CheckboxGroup,
  CloseButton,
  Collapse,
  ControlBox,
  CircularProgress,
  Divider,
  Drawer,
  Editable,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputAddon,
  InputGroup,
  Kbd,
  Link,
  List,
  Stack,
  SimpleGrid,
  Menu,
  Modal,
  NumberInput,
  Portal,
  Popover,
  Progress,
  PseudoBox,
  Radio,
  RadioGroup,
  RadioButtonGroup,
  Select,
  Skeleton,
  Slider,
  Spinner,
  Stat,
  Switch,
  Tabs,
  Tag,
  Text,
  Textarea,
  Tooltip,
  VisuallyHidden,
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
