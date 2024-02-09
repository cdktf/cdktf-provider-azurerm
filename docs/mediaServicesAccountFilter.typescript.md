# `mediaServicesAccountFilter` Submodule <a name="`mediaServicesAccountFilter` Submodule" id="@cdktf/provider-azurerm.mediaServicesAccountFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesAccountFilter <a name="MediaServicesAccountFilter" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter azurerm_media_services_account_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

new mediaServicesAccountFilter.MediaServicesAccountFilter(scope: Construct, id: string, config: MediaServicesAccountFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig">MediaServicesAccountFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig">MediaServicesAccountFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange">putPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTrackSelection">putTrackSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetFirstQualityBitrate">resetFirstQualityBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetPresentationTimeRange">resetPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTrackSelection">resetTrackSelection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPresentationTimeRange` <a name="putPresentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange"></a>

```typescript
public putPresentationTimeRange(value: MediaServicesAccountFilterPresentationTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts"></a>

```typescript
public putTimeouts(value: MediaServicesAccountFilterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>

---

##### `putTrackSelection` <a name="putTrackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTrackSelection"></a>

```typescript
public putTrackSelection(value: IResolvable | MediaServicesAccountFilterTrackSelection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTrackSelection.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>[]

---

##### `resetFirstQualityBitrate` <a name="resetFirstQualityBitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetFirstQualityBitrate"></a>

```typescript
public resetFirstQualityBitrate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPresentationTimeRange` <a name="resetPresentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetPresentationTimeRange"></a>

```typescript
public resetPresentationTimeRange(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrackSelection` <a name="resetTrackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTrackSelection"></a>

```typescript
public resetTrackSelection(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesAccountFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MediaServicesAccountFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaServicesAccountFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaServicesAccountFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesAccountFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRange">presentationTimeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference">MediaServicesAccountFilterPresentationTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference">MediaServicesAccountFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelection">trackSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList">MediaServicesAccountFilterTrackSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrateInput">firstQualityBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountNameInput">mediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRangeInput">presentationTimeRangeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelectionInput">trackSelectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrate">firstQualityBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `presentationTimeRange`<sup>Required</sup> <a name="presentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRange"></a>

```typescript
public readonly presentationTimeRange: MediaServicesAccountFilterPresentationTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference">MediaServicesAccountFilterPresentationTimeRangeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeouts"></a>

```typescript
public readonly timeouts: MediaServicesAccountFilterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference">MediaServicesAccountFilterTimeoutsOutputReference</a>

---

##### `trackSelection`<sup>Required</sup> <a name="trackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelection"></a>

```typescript
public readonly trackSelection: MediaServicesAccountFilterTrackSelectionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList">MediaServicesAccountFilterTrackSelectionList</a>

---

##### `firstQualityBitrateInput`<sup>Optional</sup> <a name="firstQualityBitrateInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrateInput"></a>

```typescript
public readonly firstQualityBitrateInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mediaServicesAccountNameInput`<sup>Optional</sup> <a name="mediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountNameInput"></a>

```typescript
public readonly mediaServicesAccountNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `presentationTimeRangeInput`<sup>Optional</sup> <a name="presentationTimeRangeInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRangeInput"></a>

```typescript
public readonly presentationTimeRangeInput: MediaServicesAccountFilterPresentationTimeRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MediaServicesAccountFilterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>

---

##### `trackSelectionInput`<sup>Optional</sup> <a name="trackSelectionInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelectionInput"></a>

```typescript
public readonly trackSelectionInput: IResolvable | MediaServicesAccountFilterTrackSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>[]

---

##### `firstQualityBitrate`<sup>Required</sup> <a name="firstQualityBitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrate"></a>

```typescript
public readonly firstQualityBitrate: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesAccountFilterConfig <a name="MediaServicesAccountFilterConfig" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

const mediaServicesAccountFilterConfig: mediaServicesAccountFilter.MediaServicesAccountFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#media_services_account_name MediaServicesAccountFilter#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#name MediaServicesAccountFilter#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#resource_group_name MediaServicesAccountFilter#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.firstQualityBitrate">firstQualityBitrate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#first_quality_bitrate MediaServicesAccountFilter#first_quality_bitrate}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#id MediaServicesAccountFilter#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.presentationTimeRange">presentationTimeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | presentation_time_range block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.trackSelection">trackSelection</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>[]</code> | track_selection block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#media_services_account_name MediaServicesAccountFilter#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#name MediaServicesAccountFilter#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#resource_group_name MediaServicesAccountFilter#resource_group_name}.

---

##### `firstQualityBitrate`<sup>Optional</sup> <a name="firstQualityBitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.firstQualityBitrate"></a>

```typescript
public readonly firstQualityBitrate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#first_quality_bitrate MediaServicesAccountFilter#first_quality_bitrate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#id MediaServicesAccountFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `presentationTimeRange`<sup>Optional</sup> <a name="presentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.presentationTimeRange"></a>

```typescript
public readonly presentationTimeRange: MediaServicesAccountFilterPresentationTimeRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

presentation_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#presentation_time_range MediaServicesAccountFilter#presentation_time_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaServicesAccountFilterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#timeouts MediaServicesAccountFilter#timeouts}

---

##### `trackSelection`<sup>Optional</sup> <a name="trackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.trackSelection"></a>

```typescript
public readonly trackSelection: IResolvable | MediaServicesAccountFilterTrackSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>[]

track_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#track_selection MediaServicesAccountFilter#track_selection}

---

### MediaServicesAccountFilterPresentationTimeRange <a name="MediaServicesAccountFilterPresentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

const mediaServicesAccountFilterPresentationTimeRange: mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.unitTimescaleInMilliseconds">unitTimescaleInMilliseconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#unit_timescale_in_milliseconds MediaServicesAccountFilter#unit_timescale_in_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.endInUnits">endInUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#end_in_units MediaServicesAccountFilter#end_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.forceEnd">forceEnd</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#force_end MediaServicesAccountFilter#force_end}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.liveBackoffInUnits">liveBackoffInUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#live_backoff_in_units MediaServicesAccountFilter#live_backoff_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.presentationWindowInUnits">presentationWindowInUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#presentation_window_in_units MediaServicesAccountFilter#presentation_window_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.startInUnits">startInUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#start_in_units MediaServicesAccountFilter#start_in_units}. |

---

##### `unitTimescaleInMilliseconds`<sup>Required</sup> <a name="unitTimescaleInMilliseconds" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.unitTimescaleInMilliseconds"></a>

```typescript
public readonly unitTimescaleInMilliseconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#unit_timescale_in_milliseconds MediaServicesAccountFilter#unit_timescale_in_milliseconds}.

---

##### `endInUnits`<sup>Optional</sup> <a name="endInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.endInUnits"></a>

```typescript
public readonly endInUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#end_in_units MediaServicesAccountFilter#end_in_units}.

---

##### `forceEnd`<sup>Optional</sup> <a name="forceEnd" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.forceEnd"></a>

```typescript
public readonly forceEnd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#force_end MediaServicesAccountFilter#force_end}.

---

##### `liveBackoffInUnits`<sup>Optional</sup> <a name="liveBackoffInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.liveBackoffInUnits"></a>

```typescript
public readonly liveBackoffInUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#live_backoff_in_units MediaServicesAccountFilter#live_backoff_in_units}.

---

##### `presentationWindowInUnits`<sup>Optional</sup> <a name="presentationWindowInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.presentationWindowInUnits"></a>

```typescript
public readonly presentationWindowInUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#presentation_window_in_units MediaServicesAccountFilter#presentation_window_in_units}.

---

##### `startInUnits`<sup>Optional</sup> <a name="startInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.startInUnits"></a>

```typescript
public readonly startInUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#start_in_units MediaServicesAccountFilter#start_in_units}.

---

### MediaServicesAccountFilterTimeouts <a name="MediaServicesAccountFilterTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

const mediaServicesAccountFilterTimeouts: mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#create MediaServicesAccountFilter#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#delete MediaServicesAccountFilter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#read MediaServicesAccountFilter#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#update MediaServicesAccountFilter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#create MediaServicesAccountFilter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#delete MediaServicesAccountFilter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#read MediaServicesAccountFilter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#update MediaServicesAccountFilter#update}.

---

### MediaServicesAccountFilterTrackSelection <a name="MediaServicesAccountFilterTrackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

const mediaServicesAccountFilterTrackSelection: mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>[]</code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection.property.condition"></a>

```typescript
public readonly condition: IResolvable | MediaServicesAccountFilterTrackSelectionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#condition MediaServicesAccountFilter#condition}

---

### MediaServicesAccountFilterTrackSelectionCondition <a name="MediaServicesAccountFilterTrackSelectionCondition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

const mediaServicesAccountFilterTrackSelectionCondition: mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#operation MediaServicesAccountFilter#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.property">property</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#property MediaServicesAccountFilter#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#value MediaServicesAccountFilter#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#operation MediaServicesAccountFilter#operation}.

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#property MediaServicesAccountFilter#property}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/media_services_account_filter#value MediaServicesAccountFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesAccountFilterPresentationTimeRangeOutputReference <a name="MediaServicesAccountFilterPresentationTimeRangeOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

new mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetEndInUnits">resetEndInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetForceEnd">resetForceEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits">resetLiveBackoffInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits">resetPresentationWindowInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetStartInUnits">resetStartInUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndInUnits` <a name="resetEndInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetEndInUnits"></a>

```typescript
public resetEndInUnits(): void
```

##### `resetForceEnd` <a name="resetForceEnd" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetForceEnd"></a>

```typescript
public resetForceEnd(): void
```

##### `resetLiveBackoffInUnits` <a name="resetLiveBackoffInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits"></a>

```typescript
public resetLiveBackoffInUnits(): void
```

##### `resetPresentationWindowInUnits` <a name="resetPresentationWindowInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits"></a>

```typescript
public resetPresentationWindowInUnits(): void
```

##### `resetStartInUnits` <a name="resetStartInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetStartInUnits"></a>

```typescript
public resetStartInUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnitsInput">endInUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEndInput">forceEndInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput">liveBackoffInUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput">presentationWindowInUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnitsInput">startInUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMillisecondsInput">unitTimescaleInMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnits">endInUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEnd">forceEnd</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits">liveBackoffInUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits">presentationWindowInUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnits">startInUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilliseconds">unitTimescaleInMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInUnitsInput`<sup>Optional</sup> <a name="endInUnitsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnitsInput"></a>

```typescript
public readonly endInUnitsInput: number;
```

- *Type:* number

---

##### `forceEndInput`<sup>Optional</sup> <a name="forceEndInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEndInput"></a>

```typescript
public readonly forceEndInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `liveBackoffInUnitsInput`<sup>Optional</sup> <a name="liveBackoffInUnitsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput"></a>

```typescript
public readonly liveBackoffInUnitsInput: number;
```

- *Type:* number

---

##### `presentationWindowInUnitsInput`<sup>Optional</sup> <a name="presentationWindowInUnitsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput"></a>

```typescript
public readonly presentationWindowInUnitsInput: number;
```

- *Type:* number

---

##### `startInUnitsInput`<sup>Optional</sup> <a name="startInUnitsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnitsInput"></a>

```typescript
public readonly startInUnitsInput: number;
```

- *Type:* number

---

##### `unitTimescaleInMillisecondsInput`<sup>Optional</sup> <a name="unitTimescaleInMillisecondsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMillisecondsInput"></a>

```typescript
public readonly unitTimescaleInMillisecondsInput: number;
```

- *Type:* number

---

##### `endInUnits`<sup>Required</sup> <a name="endInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnits"></a>

```typescript
public readonly endInUnits: number;
```

- *Type:* number

---

##### `forceEnd`<sup>Required</sup> <a name="forceEnd" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEnd"></a>

```typescript
public readonly forceEnd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `liveBackoffInUnits`<sup>Required</sup> <a name="liveBackoffInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits"></a>

```typescript
public readonly liveBackoffInUnits: number;
```

- *Type:* number

---

##### `presentationWindowInUnits`<sup>Required</sup> <a name="presentationWindowInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits"></a>

```typescript
public readonly presentationWindowInUnits: number;
```

- *Type:* number

---

##### `startInUnits`<sup>Required</sup> <a name="startInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnits"></a>

```typescript
public readonly startInUnits: number;
```

- *Type:* number

---

##### `unitTimescaleInMilliseconds`<sup>Required</sup> <a name="unitTimescaleInMilliseconds" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilliseconds"></a>

```typescript
public readonly unitTimescaleInMilliseconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaServicesAccountFilterPresentationTimeRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

---


### MediaServicesAccountFilterTimeoutsOutputReference <a name="MediaServicesAccountFilterTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

new mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesAccountFilterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>

---


### MediaServicesAccountFilterTrackSelectionConditionList <a name="MediaServicesAccountFilterTrackSelectionConditionList" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

new mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.get"></a>

```typescript
public get(index: number): MediaServicesAccountFilterTrackSelectionConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesAccountFilterTrackSelectionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>[]

---


### MediaServicesAccountFilterTrackSelectionConditionOutputReference <a name="MediaServicesAccountFilterTrackSelectionConditionOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

new mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.propertyInput">propertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesAccountFilterTrackSelectionCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>

---


### MediaServicesAccountFilterTrackSelectionList <a name="MediaServicesAccountFilterTrackSelectionList" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

new mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.get"></a>

```typescript
public get(index: number): MediaServicesAccountFilterTrackSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesAccountFilterTrackSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>[]

---


### MediaServicesAccountFilterTrackSelectionOutputReference <a name="MediaServicesAccountFilterTrackSelectionOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer"></a>

```typescript
import { mediaServicesAccountFilter } from '@cdktf/provider-azurerm'

new mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.putCondition"></a>

```typescript
public putCondition(value: IResolvable | MediaServicesAccountFilterTrackSelectionCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList">MediaServicesAccountFilterTrackSelectionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.condition"></a>

```typescript
public readonly condition: MediaServicesAccountFilterTrackSelectionConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList">MediaServicesAccountFilterTrackSelectionConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | MediaServicesAccountFilterTrackSelectionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesAccountFilterTrackSelection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>

---



