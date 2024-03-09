import { Box, Grid, NoSsr } from "@mui/material";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import RestaurantLeftDetails from '../RestaurantLeftDetails'
import RestaurantRightDetails from '../RestaurantRightDetails'
import { useGetScreenPosition } from '../../../hooks/custom-hooks/useGetScreenPosition'
import { useQuery } from 'react-query'
import { CouponApi } from '../../../hooks/react-query/config/couponApi'
import { onErrorResponse } from '../../ErrorResponse'
import Slider from 'react-slick'
import { Stack } from '@mui/system'
import RestaurantCoupon from '../RestaurantCoupon'
import { RestaurantCouponStack } from '../restaurant-details.style'
import { settings } from '../CouponSettings'
import RestaurantAnnouncementMessege from '../RestaurantAnnouncementMessege'

const StyledImageBox = styled(Box)(({ theme, height, objectfit }) => ({
    height: height,
    width: '100%',
    borderRadius: '0.125rem',
    position: 'relative',
    paddingTop: "24px",
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: objectfit ? objectfit : 'contained',
    },
}))
const TopBanner = ({ details }) => {
    const { global } = useSelector((state) => state.globalSettings)
    const { userData } = useSelector((state) => state.user)
    let currencySymbol
    let currencySymbolDirection
    let digitAfterDecimalPoint

    if (global) {
        currencySymbol = global.currency_symbol
        currencySymbolDirection = global.currency_symbol_direction
        digitAfterDecimalPoint = global.digit_after_decimal_point
    }
    const restaurantCoverUrl = global?.base_urls?.restaurant_cover_photo_url
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    const isXSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const scrollPosition = useGetScreenPosition()
    const { data } = useQuery(
        'restaurant-coupon',
        () => CouponApi.restaurantCoupon(userData?.id, details?.id),
        {
            onError: onErrorResponse,
        }
    )

    return (
        <>
          <NoSsr>
          {/* <Grid item xs={12} sm={6} md={6}>
                <FoodNavigation
                    catetoryMenus={catetoryMenus}
                    setCategoryId={handleCategoryId}
                    category_id={category_id}
                    page_limit={page_limit}
                    setPageLimit={setPageLimit}
                    usein="restaurant"
                    id={0}
                    //  setType={setType}
                />
            </Grid> */}
          </NoSsr>
            {details?.announcement === 1 && details?.announcement_message &&
                <RestaurantAnnouncementMessege storeAnnouncement={details?.announcement_message} />}
        </>
    )
}

export default TopBanner
