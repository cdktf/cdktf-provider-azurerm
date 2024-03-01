# `mediaAssetFilter` Submodule <a name="`mediaAssetFilter` Submodule" id="@cdktf/provider-azurerm.mediaAssetFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaAssetFilter <a name="MediaAssetFilter" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter azurerm_media_asset_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

new mediaAssetFilter.MediaAssetFilter(scope: Construct, id: string, config: MediaAssetFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig">MediaAssetFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig">MediaAssetFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange">putPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTrackSelection">putTrackSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetFirstQualityBitrate">resetFirstQualityBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetPresentationTimeRange">resetPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTrackSelection">resetTrackSelection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPresentationTimeRange` <a name="putPresentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange"></a>

```typescript
public putPresentationTimeRange(value: MediaAssetFilterPresentationTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts"></a>

```typescript
public putTimeouts(value: MediaAssetFilterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

---

##### `putTrackSelection` <a name="putTrackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTrackSelection"></a>

```typescript
public putTrackSelection(value: IResolvable | MediaAssetFilterTrackSelection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTrackSelection.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>[]

---

##### `resetFirstQualityBitrate` <a name="resetFirstQualityBitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetFirstQualityBitrate"></a>

```typescript
public resetFirstQualityBitrate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPresentationTimeRange` <a name="resetPresentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetPresentationTimeRange"></a>

```typescript
public resetPresentationTimeRange(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrackSelection` <a name="resetTrackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTrackSelection"></a>

```typescript
public resetTrackSelection(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaAssetFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isConstruct"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

mediaAssetFilter.MediaAssetFilter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformElement"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

mediaAssetFilter.MediaAssetFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformResource"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

mediaAssetFilter.MediaAssetFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

mediaAssetFilter.MediaAssetFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MediaAssetFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaAssetFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaAssetFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaAssetFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRange">presentationTimeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference">MediaAssetFilterPresentationTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference">MediaAssetFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelection">trackSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList">MediaAssetFilterTrackSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetIdInput">assetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrateInput">firstQualityBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRangeInput">presentationTimeRangeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelectionInput">trackSelectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetId">assetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrate">firstQualityBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `presentationTimeRange`<sup>Required</sup> <a name="presentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRange"></a>

```typescript
public readonly presentationTimeRange: MediaAssetFilterPresentationTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference">MediaAssetFilterPresentationTimeRangeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeouts"></a>

```typescript
public readonly timeouts: MediaAssetFilterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference">MediaAssetFilterTimeoutsOutputReference</a>

---

##### `trackSelection`<sup>Required</sup> <a name="trackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelection"></a>

```typescript
public readonly trackSelection: MediaAssetFilterTrackSelectionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList">MediaAssetFilterTrackSelectionList</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetIdInput"></a>

```typescript
public readonly assetIdInput: string;
```

- *Type:* string

---

##### `firstQualityBitrateInput`<sup>Optional</sup> <a name="firstQualityBitrateInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrateInput"></a>

```typescript
public readonly firstQualityBitrateInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `presentationTimeRangeInput`<sup>Optional</sup> <a name="presentationTimeRangeInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRangeInput"></a>

```typescript
public readonly presentationTimeRangeInput: MediaAssetFilterPresentationTimeRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MediaAssetFilterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

---

##### `trackSelectionInput`<sup>Optional</sup> <a name="trackSelectionInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelectionInput"></a>

```typescript
public readonly trackSelectionInput: IResolvable | MediaAssetFilterTrackSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>[]

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

---

##### `firstQualityBitrate`<sup>Required</sup> <a name="firstQualityBitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrate"></a>

```typescript
public readonly firstQualityBitrate: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaAssetFilterConfig <a name="MediaAssetFilterConfig" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

const mediaAssetFilterConfig: mediaAssetFilter.MediaAssetFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.assetId">assetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.firstQualityBitrate">firstQualityBitrate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.presentationTimeRange">presentationTimeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | presentation_time_range block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.trackSelection">trackSelection</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>[]</code> | track_selection block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}.

---

##### `firstQualityBitrate`<sup>Optional</sup> <a name="firstQualityBitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.firstQualityBitrate"></a>

```typescript
public readonly firstQualityBitrate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `presentationTimeRange`<sup>Optional</sup> <a name="presentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.presentationTimeRange"></a>

```typescript
public readonly presentationTimeRange: MediaAssetFilterPresentationTimeRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

presentation_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#presentation_time_range MediaAssetFilter#presentation_time_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaAssetFilterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#timeouts MediaAssetFilter#timeouts}

---

##### `trackSelection`<sup>Optional</sup> <a name="trackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.trackSelection"></a>

```typescript
public readonly trackSelection: IResolvable | MediaAssetFilterTrackSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>[]

track_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#track_selection MediaAssetFilter#track_selection}

---

### MediaAssetFilterPresentationTimeRange <a name="MediaAssetFilterPresentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

const mediaAssetFilterPresentationTimeRange: mediaAssetFilter.MediaAssetFilterPresentationTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.endInUnits">endInUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#end_in_units MediaAssetFilter#end_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.forceEnd">forceEnd</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#force_end MediaAssetFilter#force_end}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.liveBackoffInUnits">liveBackoffInUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#live_backoff_in_units MediaAssetFilter#live_backoff_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.presentationWindowInUnits">presentationWindowInUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#presentation_window_in_units MediaAssetFilter#presentation_window_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.startInUnits">startInUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#start_in_units MediaAssetFilter#start_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.unitTimescaleInMiliseconds">unitTimescaleInMiliseconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#unit_timescale_in_miliseconds MediaAssetFilter#unit_timescale_in_miliseconds}. |

---

##### `endInUnits`<sup>Optional</sup> <a name="endInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.endInUnits"></a>

```typescript
public readonly endInUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#end_in_units MediaAssetFilter#end_in_units}.

---

##### `forceEnd`<sup>Optional</sup> <a name="forceEnd" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.forceEnd"></a>

```typescript
public readonly forceEnd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#force_end MediaAssetFilter#force_end}.

---

##### `liveBackoffInUnits`<sup>Optional</sup> <a name="liveBackoffInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.liveBackoffInUnits"></a>

```typescript
public readonly liveBackoffInUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#live_backoff_in_units MediaAssetFilter#live_backoff_in_units}.

---

##### `presentationWindowInUnits`<sup>Optional</sup> <a name="presentationWindowInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.presentationWindowInUnits"></a>

```typescript
public readonly presentationWindowInUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#presentation_window_in_units MediaAssetFilter#presentation_window_in_units}.

---

##### `startInUnits`<sup>Optional</sup> <a name="startInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.startInUnits"></a>

```typescript
public readonly startInUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#start_in_units MediaAssetFilter#start_in_units}.

---

##### `unitTimescaleInMiliseconds`<sup>Optional</sup> <a name="unitTimescaleInMiliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.unitTimescaleInMiliseconds"></a>

```typescript
public readonly unitTimescaleInMiliseconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#unit_timescale_in_miliseconds MediaAssetFilter#unit_timescale_in_miliseconds}.

---

### MediaAssetFilterTimeouts <a name="MediaAssetFilterTimeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

const mediaAssetFilterTimeouts: mediaAssetFilter.MediaAssetFilterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#create MediaAssetFilter#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#delete MediaAssetFilter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#read MediaAssetFilter#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#update MediaAssetFilter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#create MediaAssetFilter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#delete MediaAssetFilter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#read MediaAssetFilter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#update MediaAssetFilter#update}.

---

### MediaAssetFilterTrackSelection <a name="MediaAssetFilterTrackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

const mediaAssetFilterTrackSelection: mediaAssetFilter.MediaAssetFilterTrackSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>[]</code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection.property.condition"></a>

```typescript
public readonly condition: IResolvable | MediaAssetFilterTrackSelectionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#condition MediaAssetFilter#condition}

---

### MediaAssetFilterTrackSelectionCondition <a name="MediaAssetFilterTrackSelectionCondition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

const mediaAssetFilterTrackSelectionCondition: mediaAssetFilter.MediaAssetFilterTrackSelectionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#operation MediaAssetFilter#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.property">property</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#property MediaAssetFilter#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#value MediaAssetFilter#value}. |

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#operation MediaAssetFilter#operation}.

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#property MediaAssetFilter#property}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/media_asset_filter#value MediaAssetFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaAssetFilterPresentationTimeRangeOutputReference <a name="MediaAssetFilterPresentationTimeRangeOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

new mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetEndInUnits">resetEndInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetForceEnd">resetForceEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits">resetLiveBackoffInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits">resetPresentationWindowInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetStartInUnits">resetStartInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetUnitTimescaleInMiliseconds">resetUnitTimescaleInMiliseconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndInUnits` <a name="resetEndInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetEndInUnits"></a>

```typescript
public resetEndInUnits(): void
```

##### `resetForceEnd` <a name="resetForceEnd" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetForceEnd"></a>

```typescript
public resetForceEnd(): void
```

##### `resetLiveBackoffInUnits` <a name="resetLiveBackoffInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits"></a>

```typescript
public resetLiveBackoffInUnits(): void
```

##### `resetPresentationWindowInUnits` <a name="resetPresentationWindowInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits"></a>

```typescript
public resetPresentationWindowInUnits(): void
```

##### `resetStartInUnits` <a name="resetStartInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetStartInUnits"></a>

```typescript
public resetStartInUnits(): void
```

##### `resetUnitTimescaleInMiliseconds` <a name="resetUnitTimescaleInMiliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetUnitTimescaleInMiliseconds"></a>

```typescript
public resetUnitTimescaleInMiliseconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnitsInput">endInUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEndInput">forceEndInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput">liveBackoffInUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput">presentationWindowInUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnitsInput">startInUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilisecondsInput">unitTimescaleInMilisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnits">endInUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEnd">forceEnd</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits">liveBackoffInUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits">presentationWindowInUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnits">startInUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMiliseconds">unitTimescaleInMiliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInUnitsInput`<sup>Optional</sup> <a name="endInUnitsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnitsInput"></a>

```typescript
public readonly endInUnitsInput: number;
```

- *Type:* number

---

##### `forceEndInput`<sup>Optional</sup> <a name="forceEndInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEndInput"></a>

```typescript
public readonly forceEndInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `liveBackoffInUnitsInput`<sup>Optional</sup> <a name="liveBackoffInUnitsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput"></a>

```typescript
public readonly liveBackoffInUnitsInput: number;
```

- *Type:* number

---

##### `presentationWindowInUnitsInput`<sup>Optional</sup> <a name="presentationWindowInUnitsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput"></a>

```typescript
public readonly presentationWindowInUnitsInput: number;
```

- *Type:* number

---

##### `startInUnitsInput`<sup>Optional</sup> <a name="startInUnitsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnitsInput"></a>

```typescript
public readonly startInUnitsInput: number;
```

- *Type:* number

---

##### `unitTimescaleInMilisecondsInput`<sup>Optional</sup> <a name="unitTimescaleInMilisecondsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilisecondsInput"></a>

```typescript
public readonly unitTimescaleInMilisecondsInput: number;
```

- *Type:* number

---

##### `endInUnits`<sup>Required</sup> <a name="endInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnits"></a>

```typescript
public readonly endInUnits: number;
```

- *Type:* number

---

##### `forceEnd`<sup>Required</sup> <a name="forceEnd" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEnd"></a>

```typescript
public readonly forceEnd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `liveBackoffInUnits`<sup>Required</sup> <a name="liveBackoffInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits"></a>

```typescript
public readonly liveBackoffInUnits: number;
```

- *Type:* number

---

##### `presentationWindowInUnits`<sup>Required</sup> <a name="presentationWindowInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits"></a>

```typescript
public readonly presentationWindowInUnits: number;
```

- *Type:* number

---

##### `startInUnits`<sup>Required</sup> <a name="startInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnits"></a>

```typescript
public readonly startInUnits: number;
```

- *Type:* number

---

##### `unitTimescaleInMiliseconds`<sup>Required</sup> <a name="unitTimescaleInMiliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMiliseconds"></a>

```typescript
public readonly unitTimescaleInMiliseconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaAssetFilterPresentationTimeRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

---


### MediaAssetFilterTimeoutsOutputReference <a name="MediaAssetFilterTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

new mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaAssetFilterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

---


### MediaAssetFilterTrackSelectionConditionList <a name="MediaAssetFilterTrackSelectionConditionList" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

new mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.get"></a>

```typescript
public get(index: number): MediaAssetFilterTrackSelectionConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaAssetFilterTrackSelectionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>[]

---


### MediaAssetFilterTrackSelectionConditionOutputReference <a name="MediaAssetFilterTrackSelectionConditionOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

new mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetProperty">resetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperation` <a name="resetOperation" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetProperty` <a name="resetProperty" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetProperty"></a>

```typescript
public resetProperty(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.propertyInput">propertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaAssetFilterTrackSelectionCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>

---


### MediaAssetFilterTrackSelectionList <a name="MediaAssetFilterTrackSelectionList" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

new mediaAssetFilter.MediaAssetFilterTrackSelectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.get"></a>

```typescript
public get(index: number): MediaAssetFilterTrackSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaAssetFilterTrackSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>[]

---


### MediaAssetFilterTrackSelectionOutputReference <a name="MediaAssetFilterTrackSelectionOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer"></a>

```typescript
import { mediaAssetFilter } from '@cdktf/provider-azurerm'

new mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.putCondition"></a>

```typescript
public putCondition(value: IResolvable | MediaAssetFilterTrackSelectionCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList">MediaAssetFilterTrackSelectionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.condition"></a>

```typescript
public readonly condition: MediaAssetFilterTrackSelectionConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList">MediaAssetFilterTrackSelectionConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | MediaAssetFilterTrackSelectionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaAssetFilterTrackSelection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>

---



