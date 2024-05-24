// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Group, Menu } from '@mantine/core'
// import React from 'react'
// import { Locale, i18n } from '../../../i18n'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'

// export default function LanguageSwitcher() {
//     const pathName = usePathname();
//     const redirectedPathName = (locale: Locale) => {
//         if (!pathName) return "/";
//         const segments = pathName.split("/");
//         segments[1] = locale;
//         return segments.join("/");
//     };
//     return (
//         <Menu trigger="hover" transitionProps={{ exitDuration: 150 }} withinPortal withArrow>
//             <Menu.Target>

//                 <a
//                     className='linkHover'
//                 >
//                     <Group gap={'xs'}>
//                         <span>RU</span>
//                         <FontAwesomeIcon icon={faAngleDown} />
//                     </Group>
//                 </a>
//             </Menu.Target>
//             <Menu.Dropdown>
//                 {
//                     i18n.locales.map((localeName) => {
//                         return (
//                             <Menu.Item key={localeName}>
//                                 <Link href={redirectedPathName(localeName)}>
//                                     {localeName}
//                                 </Link>
//                             </Menu.Item>
//                         );
//                     })
//                 }
//                 <Menu.Item>
//                     RU
//                 </Menu.Item>
//                 <Menu.Item>
//                     ES
//                 </Menu.Item>
//             </Menu.Dropdown>
//         </Menu>
//     )
// }
