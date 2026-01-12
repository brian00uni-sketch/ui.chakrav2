import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}


const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};

// responsive Width
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1200px',
  xl: '1600px',
  '2xl': '1900px',
}

const spacing = {
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
  },
}

const theme = extendTheme(
  { 
    breakpoints,
    config,
    spacing ,
  },
  {
    styles: {
      global: {
        'html, body': {
          fontFamily: 'SUIT',
          fontSize: '15px',
          color: '#1B1B1B',
          fontWeight: '500',
          lineHeight: '1',
          letterSpacing: 'normal',
          transition: 'all 0.5s ease',
          '*': {
            textDecoration: 'none !important',
            boxShadow: 'none',
          },
          '.nav': {
            p: { 
              sm: '0 5px 20px', 
              xl: '0 12px 20px' 
            },
            '>a': {
              mb: '6px',
              '>div': {
                alignItems: 'center',
                justifyContent: { 
                  sm: 'center', 
                  xl: 'flex-start' 
                },
                h: '44px',
                fontSize: { 
                  sm: '0', 
                  xl: '15px' 
                },
                fontWeight: '500',
                color: '#A4A1B1',
                p: '0 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                '.nav-icon' : {
                  display: 'inline-block',
                  w: '24px',
                  mr: { 
                    sm: '0', 
                    xl: '14px' 
                  },
                  opacity: '.7',
                },
                _hover: {
                  bg: '#262628', 
                  boxShadow: '1px 1px 3px 1px #000',
                  '.nav-icon' : {
                    opacity: '1',
                  },
                },
                '&.active': {
                  color: '#fff',
                  bg: '#6C3DF4',
                  '.nav-icon' : {
                    opacity: '1',
                  },
                  _hover: {
                    bg: '#6C3DF4', 
                    boxShadow: '1px 1px 3px 1px #000'
                  },
                },
                
              },
            },
            '&.type-drawer': {
              p: '0 12px 20px',
              '>a': {
                '>div': {
                  justifyContent: 'flex-start',
                  fontSize: '15px',
                  '.nav-icon' : {
                    mr: '14px',
                  },
                },
              },
              
            },
          },
          '.required': {
            pos: 'relative',
            mr: '20px',
            _after: {
              content: '""',
              pos: 'absolute',
              right: '-8px',
              top: '0',
              w: '7px',
              h: '7px',
              backgroundImage: 'url(/assets/images/icons/ico-required.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 0',
            }
          },
          '.clampLine': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
          '.cm-scroller': {
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#21202e',
            },
            '&::-webkit-scrollbar-corner' : {
              backgroundColor: '#21202e',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#666',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#21202e',
              borderRadius: '8px',
            },
          },
          '.overlay': {
            position: 'fixed',
            left: '0px',
            top: '0px',
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.24)',
            zIndex: '9',
          },
          '&::-webkit-scrollbar': {
            width: '12px',
            height: '12px',
            backgroundColor: '#fff',
          },
          
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ddd',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '2px solid transparent',
          },
          
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#fff',
            borderRadius: '10px',
          },
        },
      },
    },
  },
  {
    components: {
      Container: {
        baseStyle: {
          w: '100%',
          maxW: '100%',
          p: '0',
        },
      },
      Heading: {
        baseStyle: {
          fontSize: '24px',
          color: '#1B1B1B',
          fontWeight: '700',
          fontFamily: 'SUIT',
          m : '0',
        },
        variants: {
          typeMd: {
            fontSize: '24px',
          },
        },
      },
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                ...activeLabelStyles
              },
              label: {
                top: 0,
                left: 0,
                zIndex: 6,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top"
              }
            }
          },
          typeModal: {
            container: {
              mb: '12px',
              label: {
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'space-between',
                fontSize: '14px',
                fontWeight: '600',
                m: '0 0 8px 0',
              },
            },
          },
          typePopover: {
            container: {
              mb: '15px',
              label: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: '600',
                m: '0 0 12px 0',
                '>span': {
                  color: '#1B1B1B',
                },
              },
            },
          },
          typePopoverSm: {
            container: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: '15px',
              label: {
                display: 'flex',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1B1B1B',
                m: '0',
                '>span': {
                  color: '#1B1B1B',
                },
              },
            },
          },
          typePopoverSmHover: {
            container: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: '10px',
              p: '0', //'6px',
              label: {
                display: 'flex',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1B1B1B',
                m: '0',
                '>span': {
                  color: '#1B1B1B',
                },
              },
              // _hover: {
              //   borderRadius: '3px',
              //   bg: '#F3F3F3',
              // },
            },
          },
          typeDrawer: {
            container: {
              mb: '20px',
              label: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: '700',
                m: '0 0 12px 0',
                '>span': {
                  color: '#1B1B1B',
                },
              },
            },
          },
          typeMd: {
            container: {
              pos: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              p: '0',
              m: '0',
              label: {
                display: 'flex',
                alignItems: 'center',
                m: '0 0 15px 0',
              },
            },
          },
        }
      },
      Button: {
        baseStyle: {
          fontFamily: 'SUIT',
          fontWeight: '500',
          lineHeight: '1',
          borderRadius: '4px',
        },
        variants: {
          solid: {
            minW: '100px',
            h: '40px',
            fontFamily: 'Pretendard',
            fontSize: '15px',
            fontWeight: '400',
            color: '#fff',
            padding: '0 14px',
            bg: '#6C3DF4',
            '&:hover': {
              bg: '#5e3eb9',
            },
          },
          typeIcon: {
            pos: 'relative',
            w: '24px',
            minW: 'auto',
            h: '24px',
            fontSize: '24px',
            border: 'none',
            borderRadius: '0',
            padding: '0',
            m: '0',
            bg: 'none',
          },
          typeIconMd: {
            w: '34px',
            minW: 'auto',
            h: '34px',
            fontSize: '19px',
            border: 'solid 1px #C6C6C6',
            padding: '0 7px',
            m: '0',
            bg: 'transparent',
          },
          typeImg: {
            w: '34px',
            minW: 'auto',
            h: '34px',
            padding: '0',
            m: '0',
            bg: 'transparent',
          },
          typeImgXs: {
            w: '26px',
            minW: 'auto',
            h: '26px',
            border: 'solid 1px #DADADA',
            padding: '2px',
            m: '0',
            bg: 'transparent',
            '&:hover': {
              borderColor: '#eaeaed',
              bg: '#eaeaed',
            },
          },
          typeImgSm: {
            w: '32px',
            minW: 'auto',
            h: '32px',
            border: 'solid 1px #C6C6C6',
            padding: '0',
            m: '0',
            bg: 'transparent',
            '&:hover': {
              borderColor: '#454545',
              // bg: '#eee',
            },
          },
          typeWhiteSm: {
            minW: 'auto',
            h: '30px',
            fontSize: '13px',
            color: '#464646',
            border: 'solid 1px #C6C6C6',
            padding: '0 10px',
            background: '#fff',
            '&:hover': {
              borderColor: '#454545',
              // bg: '#eee',
            },
          },
          typeWhiteMd: {
            minW: 'auto',
            h: '34px',
            fontWeight: '600',
            fontSize: '13px',
            color: '#323232',
            border: 'solid 1px #C6C6C6',
            padding: '0 25px',
            background: '#fff',
            '&:hover': {
              borderColor: '#454545',
              // bg: '#eee',
            },
          },
          typeGrayLg: {
            w: '100%',
            minW: 'auto',
            h: '34px',
            fontWeight: '600',
            fontSize: '13px',
            color: '#323232',
            border: 'solid 1px #444',
            padding: '0 25px',
            background: '#393939',
            '&:hover': {
              borderColor: '#666',
              background: '#444',
            },
          },
          typeBlackMd: {
            minW: 'auto',
            h: '34px',
            fontWeight: '600',
            fontSize: '13px',
            color: '#fff',
            border: 'solid 1px #323232',
            padding: '0 25px',
            background: '#323232',
            '&:hover': {
              bg: '#222',
            },
          },
          typeTransSm: {
            minW: 'auto',
            h: '30px',
            fontFamily: 'SUIT',
            fontSize: '13px',
            color: '#464646',
            border: 'solid 1px #C6C6C6',
            padding: '0 10px',
            background: 'transparent',
            '&:hover': {
              borderColor: '#6d6d6d',
            },
          },
          typeBlueSm: {
            minW: 'auto',
            h: '30px',
            fontSize: '13px',
            color: '#fff',
            border: 'solid 1px #6C3DF4',
            padding: '0 10px',
            background: '#6C3DF4',
            '&:hover': {
              bg: '#5e3eb9 !important',
            },
          },
          typeSort: {
            display: 'flex',
            alignItems: 'center',
            w: 'full',
            minW: 'auto',
            h: '28px',
            fontFamily: 'SUIT',
            fontSize: '13px',
            textAlign: 'left',
            color: '#1B1B1B',
            lineHeight: '1.6',
            borderRadius: '4px',
            border: 'solid 1px #fff',
            padding: '0 8px',
            background: 'transparent',
            'img': {
              opacity: '.5',
            },
            '&:hover, &[aria-expanded="true"]': {
              bg: '#f6f6f6',
              borderColor: '#ececec',
              'img': {
                opacity: '1',
              },
            },
            // minW: 'auto',
            // h: 'auto',
            // fontFamily: 'SUIT',
            // fontSize: '13px',
            // color: '#1B1B1B',
            // borderRadius: '4px',
            // padding: '0',
            // background: 'transparent',
            // '&:hover': {
            //   bg: '#eee',
            // },
          },
          paginationBtn: {
            w: '32px',
            minW: 'auto',
            h: '32px',
            border: 'solid 1px transparent',
            borderRadius: '3px',
            padding: '0',
            '&:hover': {
              borderColor: '#C6C6C6',
              bg: '#ececec',
            },
          },
          typeSelectBtn: {
            w: 'calc(100%)',
            h: '34px',
            fontFamily: 'SUIT',
            fontSize: '14px',
            color: '#1B1B1B',
            fontWeight: '500',
            textAlign: 'left',
            border: 'solid 1px #C6C6C6',
            borderRadius: '4px',
            padding: '0 7px 0 12px',
            background: '#fff',
            _hover: {
              borderColor: '#454545',
            },
            img: {
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center center',
            },
            '&[aria-expanded=true]': {
              img: {
                transform: 'rotate(-180deg)',
              },
            },
          },
          typeCopy: {
            pos: 'absolute',
            right: '5px',
            top: '4px',
            w: '27px',
            h: '27px',
            minW: 'auto',
            p: '0',
            // borderRadius: 'full',
            zIndex: '1',
            '.copyBtn': {
              alignItems: 'center',
              justifyContent: 'center',
              width: '27px',
              height: '27px',
              borderRadius: 'full',
              'svg': {
                fontSize: '20px',
              },
             },
            _hover: {
             '.copyBtn': {
                backgroundColor: '#e8e4f3',
                'svg': {
                  'path': {
                    fill: '#6c3df3'
                  },
                },
              },
              '& + input, & + textarea': {
                borderColor: '#909090',
              },
            },
            '.copyBtn.copy': {
              backgroundColor: '#d9d9d9',
            },
          },
          typeTree: {
            justifyContent: 'flex-start',
            minW: 'auto',
            h: '76px',
            fontWeight: '500',
            fontSize: '15px',
            color: '#1B1B1B',
            border: 'solid 1px #ECECEC',
            padding: '20px',
            background: '#fff',
            '&:hover': {
              borderColor: '#909090',
              // 'img': {
              //   boxShadow: '1px 1px 7px 2px #00000030'
              // },
            },
          },
          
        },
      },
      Table: {
        baseStyle: {
          caption : {
            display: 'none',
          },
          table : {
            bg: '#fff',
          },
          th: {
            h: '44px',
            fontSize: '13px',
            color: '#1B1B1B',
            fontFamily: 'SUIT',
            lineHeight: '1',
            textAlign: 'left',
            borderBottom: 'solid 1px #e4e4e4',
            textTransform: "none",
            fontVariantNumeric: 'normal',
            letterSpacing: 'normal',
          },
          td: {
            h: '60px',
            fontSize: '15px',
            color: '#1B1B1B',
            fontFamily: 'SUIT',
            lineHeight: '1.3',
            textAlign: 'left',
            borderBottom: 'solid 1px #ECECEC',
            wordBreak: 'break-all',
            whiteSpace: 'normal',
            textTransform: "none",
            fontVariantNumeric: 'normal',
            letterSpacing: 'normal',
          },
        },
        variants: {
          typeListSm: {
            th: {
              fontSize: '13px',
              fontWeight: '500',
              p: '0 14px',
              borderColor: '#ECECEC',
            },
            td: {
              fontSize: '15px',
              fontWeight: '500',
              p: '10px 23px 9px',
              borderColor: '#ECECEC',
            },
            tbody: {
              tr: {
                _last: {
                  td: {
                    border: 'none',
                  }
                },
              },
            },
          },
          typeList: {
            th: {
              fontSize: '13px',
              fontWeight: '600',
              p: '0 15px',
              // p: '0 20px',
            },
            td: {
              fontSize: '15px',
              fontWeight: '500',
              p: '10px 15px',
            },
            tbody: {
              tr: {
                _last: {
                  td: {
                    border: 'none',
                  }
                },
                '&:hover': {
                  td: {
                    backgroundColor: '#f5f5f5',
                  }
                },
              },
            },
          },
          typeView: {
            table : {
              borderTop: 'solid 1px #ececec',
            },
            th: {
              fontSize: '15px',
              color: '#1b1b1b',
              fontWeight: '500',
              p: '10px 20px',
              borderColor: '#ececec',
              bg: '#fafafa',
            },
            td: {
              p: '10px 20px',
              borderColor: '#ececec',
            },
          },
        }
      },
      Badge: {
        variants: {
          new: {
            textTransform: "none",
            fontSize: '13px',
            lineHeight: '1.3',
            color: '#1D7C4D',
            fontWeight: '600',
            p: '0 0 0 5px',
            m: '0',
          },
          unit: {
            textTransform: "none",
            display: 'flex',
            alignItems: 'center',
            fontSize: '11px',
            lineHeight: '1.3',
            color: '#000',
            fontWeight: '300',
            borderRadius: 'full',
            border: 'solid 1px #e5e5e5',
            p: '3px 5px 3px 10px',
            m: '2px 8px 2px 0',
          },
        }
      },
      Input: {
        baseStyle: {
          field: {
            // height fontSize borderRadius
            fontFamily: 'SUIT',
            fontWeight: '500',
            textAlign: 'left',
            paddingInline: '12px !important',
            border: 'solid 1px #C6C6C6',
            '&::placeholder': {
              color: '#C6C6C6', // '#B1B1B1',
              textIndent:'0',
            },
            _hover: {
              borderColor: '#444',
            },
            _disabled: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
            },
            _readOnly: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
            },
          },
        },
        variants: {
          outline: {
            field: {
              height: '34px',
              fontSize: '14px',
            },
          },
          search: {
            field: {
              width: '250px',
              height: '36px',
              fontFamily: 'Pretendard',
              fontSize: '15px',
              fontWeight: '500',
              pr: '60px',
              borderColor: '#C6C6C6',
              borderRadius: '4px !important',
              background: 'transparent',
              _focus: {
                borderColor: '#6C3DF4',
                // bg: '#f4f4f7',
              },
            },
            addon: {
              pos: 'absolute',
              right: '-4px',
              fontSize: '20px',
              color: '#323232',
            },
            element: {
              right: '30px',
              fontSize: '19px',
              color: '#ccc',
              cursor: 'pointer',
            },
          },
          searchData: {
            field: {
              width: '100%',
              height: '74px',
              fontSize: '22px',
              p: '0',
              border: 'none',
              borderRadius: '0 !important',
              background: '#fff',
              paddingInline: '74px !important',
              _focus: {
                borderColor: '#6C3DF4',
              },
            },
            addon: {
              pos: 'absolute',
              left: '30px',
              top: '20px',
              p: '0',
              zIndex: '1'
            },
            element: {
              right: '65px',
              w: 'auto',
              h: '74px',
              fontSize: '22px',
              color: '#ccc',
              cursor: 'pointer',
            },
          },
          typeMd: {
            field: {
              height: '34px',
              fontSize: '14px',
              borderRadius: '4px',
              paddingInline: '12px 25px !important',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              wordBreak: 'break-all',
            },
          },
          typeNumber: {
            field: {
              height: '34px',
              fontSize: '14px',
              textAlign: 'right',
              borderRadius: '4px',
              _disabled: {
                color: '#B1B1B1',
                bg: '#fff',
                opacity: '1',
              },
              _readOnly: {
                color: '#B1B1B1',
                bg: '#fff',
                opacity: '1',
              },
            },
          },
          typeCopy: {
            field: {
              height: '34px',
              fontSize: '14px',
              borderRadius: '4px',
              paddingInline: '12px 25px !important',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              wordBreak: 'break-all',
              '&:hover': {
                borderColor: '#909090 !important',
              },
            },
            _disabled: {
              '&:hover': {
                borderColor: '#909090',
              },
            },
            _readOnly: {
              _hover: {
                borderColor: '#909090',
              },
            },
          },
        }
      },
      Tooltip: {
        baseStyle: {
          fontSize: '13px',
          fontWeight: '400',
          lineHeight: '1',
          borderRadius: '4px',
          color: '#fff',
          p: '5px 10px',
          bg: '#2d3748',
        },
        variants: {
          typeSm: {
            fontSize: '11px',
            fontWeight: '400',
            lineHeight: '1',
            borderRadius: '2px',
            color: '#fff',
            p: '5px 10px',
          },
        },
      },
      Modal: {
        baseStyle: {
          dialog: {
            w: '500px',
            maxW: 'auto',
            boxShadow: '1px 1px 7px 2px #00000030'
          },
          closeButton: {
            top: '25px',
            right: '30px',
            fontSize: '13.5px',
            color: '#6D6D6D',
          },
          header: {
            fontSize: '18px',
            fontWeight: '800',
            p: '30px 30px 30px',
          },
          body: {
            p: '0px 30px 0px',
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },
            
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },
            
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
          },
          footer: {
            p: '20px 30px 30px',
          },
        },
        variants: {
          typeAlert: {
            dialog: {
              w: '370px',
              maxW: 'auto',
              borderRadius: '4px',
              bg: '#fff',
            },
            header: {
              fontSize: '16px',
              fontWeight: '700',
              p: '20px 20px 0px',
            },
            body: {
              minH: '50px',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: '#1b1b1b',
              p: '20px 20px 10px',
            },
            footer: {
              p: '20px',
            },
          },
          typeMd: {
            dialog: {
              w: '500px',
              maxW: '500px',
              minW: '500px',
            },
            closeButton: {
              top: '25px',
              right: '25px',
              fontSize: '13px',
            },
            header: {
              display: 'flex',
              fontSize: '18px',
              fontWeight: '800',
              color: '#1B1B1B',
              p: '30px 30px 30px',
            },
            body: {
              p: '0px 30px 20px',
              m: '0px',
              // '&::-webkit-scrollbar': {
              //   width: '10px',
              //   height: '10px',
              //   borderRadius: '10px',
              //   backgroundColor: '#f9f9f9',
              // },
              
              // '&::-webkit-scrollbar-thumb': {
              //   backgroundColor: '#898989',
              //   borderRadius: '8px',
              //   backgroundClip: 'padding-box',
              //   border: '2px solid transparent',
              // },
              
              // '&::-webkit-scrollbar-track': {
              //   backgroundColor: '#f9f9f9',
              //   width: '10px',
              //   borderRadius: '10px',
              // },
            },
            footer: {
              p: '10px 30px 30px',
            },
          },
        },
      },
      Menu: {
        variants: {
          typeAccount: {
            list: {
              w: '120px',
              minW: 'auto',
              p: '5px 0',
              m: '-5px 0 0 -5px',
              borderRadius: '4px',
              bg: '#fff',
            },
            item: {
              h: '36px',
              fontSize: '14px',
              p: '0px 20px',
              mb: '10px',
              color: '#323232',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
              _last: {
                mb: '0',
              },
            },
          },
          typeSorting: {
            list: {
              w: '180px',
              minW: 'auto',
              p: '10px',
              m: '-5px 0 0 ',
              border: 'none',
              borderRadius: '4px',
              bg: '#fff',
              boxShadow: '1px 1px 5px 1px #00000020'
            },
            item: {
              h: '31px',
              fontFamily: 'SUIT',
              fontSize: '14px',
              fontWeight: '500',
              p: '0px 5px',
              borderRadius: '4px',
              mb: '10px',
              color: '#323232',
              _hover: {
                bg: '#f6f6f6',
              },
              _focus: {
                bg: '#f6f6f6',
              },
              _last: {
                mb: '0',
              },
            },
          },
          typeSelect: {
            list: {
              minWidth: 'auto',
              fontFamily: 'SUIT',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1b1b1b',
              p: '0',
              marginTop:'-6px',
              marginBottom:'-6px',
              border: 'solid 1px #C6C6C6',
              borderRadius: '4px',
              bg: '#fff',
              maxHeight: '200px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
              'button': {
                pos: 'relative',
                fontFamily: 'SUIT',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1b1b1b',
                pl: '12px',
                pr: '12px',
                '.chakra-menu__icon-wrapper': {
                  pos: 'absolute',
                  right: '5px',
                  fontSize: '10px',
                  'svg': {
                    color: '#6C3DF4',
                  },
                },
              },
            },
            item: {
              padding: '10px 25px 10px 15px',
              color: '#1a1a1a',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
            },
          },
          typeSelect02: {
            button: {
              pos: 'relative',
              w: 'calc(100%)',
              h: '34px',
              fontFamily: 'SUIT',
              fontSize: '14px',
              color: '#1B1B1B',
              fontWeight: '500',
              textAlign: 'left',
              border: 'solid 1px #C6C6C6',
              borderRadius: '4px',
              padding: '0 7px 0 12px',
              backgroundColor: '#fff',
              _hover: {
                borderColor: '#454545',
              },
              _after : {
                content: '""',
                pos: 'absolute',
                right: '7px',
                top: '50%',
                width: '20px',
                height: '20px',
                marginTop: '-10px',
                backgroundImage: 'url(/assets/images/icons/ico-select.svg)',
                backgroundSize: '20px 20px',
                transition: 'transform 0.2s ease-out',
              },
              '&[aria-expanded=true]': {
                _after: {
                  transform: 'rotate(-180deg)',
                },
                '& + div .chakra-menu__menu-list' : {
                  display: 'block',
                },
              },
            },
            list: {
              display: 'none',
              minWidth: 'auto',
              fontFamily: 'SUIT',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1b1b1b',
              p: '0',
              marginTop:'-6px',
              marginBottom:'-6px',
              border: 'solid 1px #C6C6C6',
              borderRadius: '4px',
              bg: '#fff',
              maxHeight: '200px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
              'button': {
                pos: 'relative',
                fontFamily: 'SUIT',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1b1b1b',
                pl: '12px',
                pr: '12px',
                '.chakra-menu__icon-wrapper': {
                  pos: 'absolute',
                  right: '5px',
                  fontSize: '10px',
                  'svg': {
                    color: '#6C3DF4',
                  },
                },
              },
            },
            item: {
              padding: '10px 25px 10px 15px',
              color: '#1a1a1a',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
            },
          },




          typeModal: {
            list: {
              w: '430px',
              p: '0',
              fontSize: '14px',
              fontWeight: '300',
              marginTop:'-7px',
              borderRadius: '3px',
              border: 'solid 1px #dedede',
              bg: '#fff',
              maxHeight: '150px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            },
            item: {
              padding: '10px 25px 10px 15px',
              color: '#1a1a1a',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
            },
          },

        }
      },
      Popover: {
        baseStyle: {
          content: {
            maxWidth: '500px',
            width: '500px',
            p: '0',
          },
          closeButton: {
            top: '25px',
            right: '30px',
            fontSize: '13.5px',
            color: '#6D6D6D',
          },
          header: {
            fontSize: '18px',
            fontWeight: '800',
            p: '30px 30px 30px',
            border: 'none',
          },
          body: {
            p: '0px 30px 0px',
          },
          footer: {
            textAlign: 'right',
            p: '20px 30px 30px',
            border: 'none',
          }
        },
        variants: {
          typeScroll: {
            body: {
              p: '0px 20px 0px 30px',
              maxHeight: 'calc(100vh - 250px)',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            },
          },
        },
      },
      Text: {
        baseStyle: {
          m: '0',
          p: '0',
        },
        variants: {
          typeNav: {
            height: '30px',
            fontSize: '13px',
            fontWeight: '500',
            fontFamily: 'Pretendard',
            lineHeight: '30px',
            color: '#6C6B7F',
            textAlign: {
              sm: 'center',
              xl: 'left',
            },
            m: {
              sm: '0',
              xl: '20px 0 6px 10px',
            },
          },
          typeNavDrawer: {
            height: '30px',
            fontSize: '13px',
            fontWeight: '500',
            fontFamily: 'Pretendard',
            lineHeight: '30px',
            color: '#6C6B7F',
            textAlign: 'left',
            m: '20px 0 6px 10px',
          },
          typeSm: {
            fontSize: '13px',
            fontWeight: '500',
            color: '#6D6D6D',
          },
          typeSm02: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#1b1b1b',
          },
          typeMd: {
            fontFamily: 'SUIT',
            fontSize: '15px',
            fontWeight: '600',
            color: '#1b1b1b',
          },
          typeMd02: {
            fontFamily: 'SUIT',
            fontSize: '15px',
            fontWeight: '500',
            color: '#1b1b1b',
          },
          typeLg: {
            fontFamily: 'SUIT',
            fontSize: '16px',
            fontWeight: '800',
            color: '#1b1b1b',
          },
          typeXl: {
            fontFamily: 'SUIT',
            fontSize: '24px',
            fontWeight: '700',
            color: '#1b1b1b',
          },
          typeDesc: {
            fontFamily: 'SUIT',
            fontSize: '14px',
            fontWeight: '500',
            color: '#1B1B1B',
            lineHeight: '1.4',
          },
          typeMessage: {
            fontFamily: 'SUIT',
            fontSize: '12px',
            fontWeight: '500',
          },
          typeDt: {
            fontFamily: 'SUIT',
            fontSize: '14px',
            fontWeight: '700',
            color: '#1b1b1b',
            lineHeight: '1.5',
          },
          typeDd: {
            fontFamily: 'SUIT',
            fontSize: '14px',
            fontWeight: '500',
            color: '#6D6D6D',
            lineHeight: '1.5',
          },
          typeBox: {
            h: '25px',
            fontFamily: 'SUIT',
            fontSize: '14px',
            fontWeight: '500',
            color: '#1B1B1B',
            lineHeight: '25px',
            borderRadius: '4px',
            p: '0 10px',
            bg: '#EDEDED',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            wordBreak: 'break-all',
          },
          typeLine: {
            fontSize: '13px',
            fontWeight: '500',
            color: '#323232',
            textDecoration: 'underline !important',
            textUnderlineOffset : '2px',
          },
        }
      },
      Textarea: {
        variants: {
          typeSm: {
            height: '60px',
            minHeight: '60px',
            fontSize: '14px',
            fontFamily: 'SUIT',
            fontWeight: '500',
            textAlign: 'left',
            lineHeight: '1.5',
            paddingInline: '12px !important',
            border: 'solid 1px #C6C6C6',
            borderRadius: '4px',
            resize: 'none',
            _hover: {
              borderColor: '#444',
            },
            '&::placeholder': {
              color: '#B1B1B1',
              textIndent:'0',
            },
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },
            
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },
            
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
            _disabled: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#F9F9F9',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#F9F9F9',
              },
            },
            _readOnly: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#F9F9F9',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#F9F9F9',
              },
            },
          },
          typeMd: {
            // height fontSize borderRadius
            height: '150px',
            fontSize: '14px',
            fontFamily: 'SUIT',
            fontWeight: '500',
            textAlign: 'left',
            borderRadius: '4px',
            paddingInline: '12px 25px !important',
            border: 'solid 1px #C6C6C6',
            resize: 'none',
            _hover: {
              borderColor: '#444',
            },
            '&::placeholder': {
              color: '#B1B1B1',
              textIndent:'0',
            },
            // '&:focus': {
            //   borderColor: '#3725FF',
            // },
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },
            
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },
            
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
            _disabled: {
              color: '#6D6D6D',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#f6f6f6',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#f6f6f6',
              },
            },
            _readOnly: {
              color: '#6D6D6D',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#f6f6f6',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#f6f6f6',
              },
            },
          },
        }
      },
      Drawer: {
        // transform: translateX(0%) translateY(2px) translateZ(0px);
        baseStyle: {
          overlay: {
            bg: 'blackAlpha.400',
          },
          header: {
            flex: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            h: '58px',
            p: '0 10px',
            borderBottom: 'solid 1px #e5e5e5',
            'button': {
              boxShadow: 'none !important'
            },
          },
          body: {
            p: '30px 20px 50px 30px',
            maxHeight: 'calc(100vh - 58px)',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },
            
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },
            
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
          },
        },
        variants: {
          sidebar: {
            dialogContainer: {
              w: '1px',
              h: '1px',
            },
          },
        },
      },
      Tabs: {
        baseStyle: {
          tablist: {
            p: '5px',
            mb: '20px',
            borderRadius: '4px',
            bg: '#f0ecfb',
          },
          tab: {
            h: '32px',
            fontSize: '13px',
            color: '#1B1B1B',
            fontWeight: '500',
            p: '12px 0',
            _selected: {
              color: '#1B1B1B', 
              borderRadius: '4px',
              bg: '#fff',
            },
          },
          tabpanels: {
          },
          tabpanel: {
            p: '0',
          },
        },
        variants: {
          unstyled: {
            tab: {
              fontSize: '13px',
              color: '#1B1B1B',
              fontWeight: '500',
            },
          },
        },
      },
      Link: {
        variants: {
          typeLink: {
            color: '#1b1b1b',
            lineHeight: '1.4',
            textDecoration: 'underline !important',
            textUnderlineOffset : '3px',
            _hover: {
              color: '#6c3df4',
            },
          },
          typeLine: {
            color: '#1b1b1b',
            lineHeight: '1.4',
            textDecoration: 'underline !important',
            textUnderlineOffset : '2px',
            _hover: {
              color: '#6c3df4',
            },
          },
          typeUrl: {
            color: '#2D7EFF',
            lineHeight: '1.5',
            textDecoration: 'underline !important',
            textUnderlineOffset : '2px',
            _hover: {
              color: '#6c3df4',
            },
          },
          typeList: {
            display: 'block',
            fontSize: '14px',
            color: '#1b1b1b',
            lineHeight: '1.5',
            p: '2px 15px',
            m: '2px 0',
            _hover: {
              bg: '#f0f0f0',
            },
          },
        },
      },
      Accordion: {
        baseStyle: {
          root: {
          },
          container: {
            border:'none',
          },
          button: {
            pos: 'relative',
            alignItems: 'center',
            height: '40px',
            borderRadius: '4px',
            p: '0',
            m: '0',
            bg: 'transparent',
            _hover: {
              bg: 'transparent',
            },
          },
          panel: {
            p: '0',
          },
          icon: {
            pos: 'relative',
            w: '30px',
            h: '30px',
            bg: 'transparent',
          },
        },
        variants: {
          typeLast: {
            container: {
              paddingBottom: '10px',
              // borderBottom: 'solid 1px #e5e5e5',
            },
            button: {
              pos: 'relative',
              _after: {
                content: '""',
                position: 'absolute',
                left: '0px',
                bottom: '-10px',
                width: '100%',
                height: '1px',
                bg: '#e5e5e5',
              },
              '&[aria-expanded="true"]': {
                _after: {
                  content: 'none',
                },
              },
            },
          },
          typeTree: {
            container: {
              border:'none',
            },
            button: {
              justifyContent: 'flex-start',
              alignItems: 'center',
              h: '32px',
              fontSize : '20px',
              p: '2px',
              borderRadius: '4px',
              bg: 'transparent',
              mb: '2px',
              _expanded: {
                bg: '#f0ecfb',
                'svg': { 
                  transform: 'rotate(90deg)',
                },
                '&.active': { 
                  bg: '#ECECEC',
                },
              },
              
            },
            panel: {
              p: '0',
              mb: '2px',
            },
            icon: {
              w: '20px',
              mr: '5px',
              borderRadius: '4px',
              bg: 'transparent',
              _hover: {
                bg: '#ececec',
              },
            },
            root: {
              '&.typeTable': {
                button: {
                  _expanded: {
                    'svg': {
                      transform: 'rotate(0deg)',
                    },
                  },
                },
              },
            },
            
          },
        },
      },
      Checkbox: {
        variants: {
          typeLabelNone: {
            container: {
              m: '0',
            },
            control: {
              w: '16px',
              h: '16px',
              borderWidth: '1px',
              borderColor: '#909090',
              borderRadius: '2px',
              boxShadow: 'none',
              _focusVisible: {
                boxShadow: 'none',
              },
            },
            icon: {
              w: '8px',
              h: '8px',
            },
            label: {
              fontSize: '0',
              m: '0',
            },
          },
          typeBlue: {
            container: {
              m: '0',
            },
            control: {
              w: '16px',
              h: '16px',
              borderWidth: '1px',
              borderColor: '#909090',
              borderRadius: '2px',
              boxShadow: 'none',
              '&[data-hover], &:hover': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
              _focusVisible: {
                boxShadow: 'none',
              },
              '&[data-checked]': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
            },
            icon: {
              w: '8px',
              h: '8px',
              color: '#6C3DF4',
            },
            label: {
              fontSize: '0',
              m: '0',
            },
          },
        },
      },
      Tag: {
        baseStyle: {
          container: {
            display: 'flex',
            alignItems: 'center',
            minW: 'auto',
            minH: 'auto',
            p: '0 10px',
            bg: '#fff',
          },
          label: {
            textTransform: "none",
            fontSize: '13px',
            fontWeight: '500',
            color: '#1B1B1B',
            lineHeight: '1.5',
          },
          closeButton: {},
        },
        variants: {
          typeLine: {
            container: {
              h: '30px',
              borderRadius: 'full',
              border: 'solid 1px #E4E4E4',
              cursor: 'pointer',
              _hover: {
                borderColor: '#909090',
              },
              '&.active': {
                borderColor: '#6C3DF4',
                bg: '#f0ecfb',
              },
            },
            label: {
              p: '0 5px',
            },
          },
        },
      },
      Alert: {
        variants: {
          toastInfo: {
            container: {
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: "#fff",
              // p: '10px 15px',
              borderRadius: '6px',
              bg: '#5176D5',
              '>button': {
                display: 'none',
                top: '9px',
                right: '13px',
              },
            },
            icon: {
              width: '20px',
              height: '20px',
              marginRight: '10px',
              backgroundImage: 'url(/assets/images/icons/ico-toast-info.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 1px',
              '>svg' : {
                display: 'none',
              },
            },
            title: {
              fontWeight: '700',
              mb: '5px',
            },
            description: {
            },
          },
          toastError: {
            container: {
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: "#323232",
              p: '8px 15px',
              border: 'solid 1px #e53e3e',
              borderRadius: '6px',
              bg: '#e53e3e10',
              '>button': {
                display: 'none',
                top: '9px',
                right: '13px',
              },
            },
            icon: {
              width: '20px',
              height: '20px',
              marginRight: '10px',
              backgroundImage: 'url(/assets/images/icons/ico-toast-error.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 1px',
              '>svg' : {
                display: 'none',
              },
            },
            title: {
              fontWeight: '700',
              mb: '5px',
            },
            description: {
            },
          },
          toastSuccess: {
            container: {
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: "#323232",
              p: '8px 15px',
              border: 'solid 1px #6fc491',
              borderRadius: '6px',
              bg: '#f0f7f3',
              '>button': {
                display: 'none',
                top: '9px',
                right: '13px',
              },
            },
            icon: {
              width: '20px',
              height: '20px',
              marginRight: '10px',
              backgroundImage: 'url(/assets/images/icons/ico-toast-success.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 1px',
              '>svg' : {
                display: 'none',
              },
            },
            title: {
              fontWeight: '700',
              mb: '5px',
            },
            description: {
            },
          },
          toastWarning: {
            container: {
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: "#323232",
              p: '8px 15px',
              border: 'solid 1px #dd6b20',
              borderRadius: '6px',
              bg: '#dd6b2010',
              '>button': {
                display: 'none',
                top: '9px',
                right: '13px',
              },
            },
            icon: {
              width: '20px',
              height: '20px',
              marginRight: '10px',
              backgroundImage: 'url(/assets/images/icons/ico-toast-warning.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 1px',
              '>svg' : {
                display: 'none',
              },
            },
            title: {
              fontWeight: '700',
              mb: '5px',
            },
            description: {
            },
          },
        },
      },
    }
  }
)

export default theme
