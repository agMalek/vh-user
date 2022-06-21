import { Layout } from "./layout";
import React, { useEffect, useState } from "react"
import { getStorage } from "../../../firebase"

export function Item({ user, position, defaultAvatar }) {

  const storage = getStorage();
  const storageRef = storage.ref()
  const pos = position + 4
  const [avatarUrl, setAvatarUrl] = useState(defaultAvatar)

  useEffect(() => {
    getAvatarUrl()
  }, [])

  const getAvatarUrl = async () => {
    try {
      let res = await storageRef
        .child("images/avatars/" + user.username + ".png")
        .getDownloadURL()
        setAvatarUrl(res)
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <Layout
      user={user}
      position={pos}
      avatarUrl={avatarUrl ? avatarUrl : defaultAvatar}
    />
  )
}