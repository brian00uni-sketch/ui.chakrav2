import { createIcon } from "@chakra-ui/react";



export const IcoAccordion = createIcon({
  displayName: "IcoAccordion",
  viewBox: "0 0 30 30",
  d: "M19.6005 11.9616L20.6543 13.0154L15.0005 18.6692L9.34665 13.0154L10.4005 11.9616L15.0005 16.5616L19.6005 11.9616Z",
});
// path: (<path d="M19.6005 11.9616L20.6543 13.0154L15.0005 18.6692L9.34665 13.0154L10.4005 11.9616L15.0005 16.5616L19.6005 11.9616Z" fill="#6D6D6D"/>),


export const SortBg = createIcon({
  displayName: "SortBg",
  viewBox: "0 0 8 13",
  d: "M8 4.5l-4-4-4 4h8zM0 8.5l4 4 4-4H0z",
});
export const SortDn = createIcon({
  displayName: "SortDn",
  viewBox: "0 0 8 13",
  d: "M0 8.5l4 4 4-4H0z",
});
export const SortUp = createIcon({
  displayName: "SortUp",
  viewBox: "0 0 8 13",
  d: "M8 4.5l-4-4-4 4h8z",
});



/*
import { Icon, AccordionIcon, ... } from '@chakra-ui/react';
import {IcoAccordion, SortBg, SortDn, SortUp, ... } from 'theme/createIcon';

<Icon as={SortBg} color={'#f91'} fontSize={'10px'} />
<Icon as={SortDn} color={'#fff'} fontSize={'15px'} />
<Icon as={SortUp} color={'#f55'} fontSize={'20px'} />
<Icon as={IcoAccordion} />
<AccordionIcon as={IcoAccordion} />
*/

