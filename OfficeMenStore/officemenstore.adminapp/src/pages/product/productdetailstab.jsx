import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  Rating,
} from '@material-tailwind/react';

import React, { useState, useRef, useEffect } from 'react';
import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ProfileInfoCard, MessageCard } from '@/widgets/cards';
import { platformSettingsData, conversationsData, projectsData } from '@/data';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slicse/cartSlice';
import { toast } from 'react-toastify';

export function ProductDetailsTab() {
  return (
    <>
      <div>ProductDetailsTab</div>
    </>
  );
}

export default ProductDetailsTab;
