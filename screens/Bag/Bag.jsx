import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { Button } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "./../../reduxsystem/slices/SingleProductSlice";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Bag = () => {
  const { singlePrdouct } = useSelector((state) => state.SingleProd);

  // useRoute
  const {
    params: { singleProdId },
  } = useRoute();

  // dispatching
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(getSingleProduct(singleProdId));
  }, []);

  return (
    <View style={tw`pt-10 w-full h-full px-3 bg-[#f9f9f9]`}>
      <View style={tw`justify-end items-end w-full`}>
        <Button>
          <EvilIcons name="search" size={24} color="black" />
        </Button>
      </View>

      <Text style={tw`font-bold text-2xl mt-4`}>My Bag</Text>

      <View>
        {/* card */}
        <View style={tw`w-full mt-4 flex-row shadow-md bg-white rounded-lg`}>
          {/* Image container */}
          <View style={tw`w-[30%]`}>
            <Image
              style={tw`w-full h-[130px] bg-gray-200   `}
              source={{
                uri: singlePrdouct?.images && singlePrdouct?.images[0],
              }}
            />
          </View>
          {/* Content container */}
          <View style={tw`w-[70%] px-2 py-2`}>
            {/* text & three-dots icon */}
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`font-bold`}>{singlePrdouct.brand}</Text>
              <Entypo name="dots-three-vertical" size={20} color="gray" />
            </View>
            {/* color & size */}
            <View style={tw`flex-row gap-4`}>
              <Text>
                <Text style={tw`text-gray-500`}>Color:</Text> Black
              </Text>
              <Text>
                <Text style={tw`text-gray-500`}>Size:</Text> L
              </Text>
            </View>
            {/* Buttons & price */}
            <View style={tw`flex-row justify-between items-center mt-5`}>
              {/* Buttons */}
              <View style={tw`flex-row gap-3 items-center`}>
                <View
                  style={tw`bg-white shadow-lg rounded-full w-[35px] h-[35px] justify-center items-center`}
                >
                  <AntDesign name="minus" size={24} color="gray" />
                </View>
                <Text>1</Text>
                <View
                  style={tw`bg-white shadow-lg rounded-full w-[35px] h-[35px] justify-center items-center`}
                >
                  <AntDesign name="plus" size={24} color="gray" />
                </View>
              </View>
              {/* Price */}
              <Text>{singlePrdouct.price}$</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Bag;
