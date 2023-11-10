---
sidebar_position: 3
---

# LSP3

### getProfileMetadata

▸ **getProfileMetadata**(`contract`): `Promise`\<`LSP3ProfileMetadata`\>

Returns a object of type LSP3ProfileMetadata.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `contract` | `ERC725Y` |

#### Returns

`Promise`\<`LSP3ProfileMetadata`\>

**`Since`**

v0.0.1

**`Throws`**

- When fails fetching the data from the stored url.
- When the fetched data is not `LSP3ProfileMetadata`.

**`See`**

https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-Profile-Metadata.md

**`Example`**

```
getProfileMetadata(ERC725Y) //=>
// {
//   LSP3Profile: {
//     description: "",
//     links: [],
//     name: "",
//     tags: []
//   }
// }
```

#### Defined in

[LSP3/getProfileMetadata/getProfileMetadata.ts:44](https://github.com/lukso-network/lsp-utils/blob/afc7430/src/LSP3/getProfileMetadata/getProfileMetadata.ts#L44)

---

### isProfileMetadata

▸ **isProfileMetadata**(`object`): object is LSP3ProfileMetadata

Returns `true` is the passed object is an LSP3 Profile Metadata, `false` otherwise.

#### Parameters

| Name     | Type  | Description                       |
| :------- | :---- | :-------------------------------- |
| `object` | `any` | The object that is to be checked. |

#### Returns

object is LSP3ProfileMetadata

**`Since`**

v0.0.1

**`See`**

https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-Profile-Metadata.md

**`Example`**

```
isProfileMetadata({ LSP3Profile: { description: "", links: [], name: "", tags: [] } }) //=> true
isProfileMetadata({ description: "", links: [], name: "", tags: [] }) //=> false
```

#### Defined in

[LSP3/isProfileMetadata/isProfileMetadata.ts:16](https://github.com/lukso-network/lsp-utils/blob/afc7430/src/LSP3/isProfileMetadata/isProfileMetadata.ts#L16)
