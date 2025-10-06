# `extendedLocationCustomLocation` Submodule <a name="`extendedLocationCustomLocation` Submodule" id="@cdktf/provider-azurerm.extendedLocationCustomLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExtendedLocationCustomLocation <a name="ExtendedLocationCustomLocation" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location azurerm_extended_location_custom_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

new extendedLocationCustomLocation.ExtendedLocationCustomLocation(scope: Construct, id: string, config: ExtendedLocationCustomLocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig">ExtendedLocationCustomLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig">ExtendedLocationCustomLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetHostType">resetHostType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication"></a>

```typescript
public putAuthentication(value: ExtendedLocationCustomLocationAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts"></a>

```typescript
public putTimeouts(value: ExtendedLocationCustomLocationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetHostType` <a name="resetHostType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetHostType"></a>

```typescript
public resetHostType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExtendedLocationCustomLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExtendedLocationCustomLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExtendedLocationCustomLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference">ExtendedLocationCustomLocationAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference">ExtendedLocationCustomLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIdsInput">clusterExtensionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceIdInput">hostResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostTypeInput">hostTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIds">clusterExtensionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceId">hostResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostType">hostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authentication"></a>

```typescript
public readonly authentication: ExtendedLocationCustomLocationAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference">ExtendedLocationCustomLocationAuthenticationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeouts"></a>

```typescript
public readonly timeouts: ExtendedLocationCustomLocationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference">ExtendedLocationCustomLocationTimeoutsOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: ExtendedLocationCustomLocationAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---

##### `clusterExtensionIdsInput`<sup>Optional</sup> <a name="clusterExtensionIdsInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIdsInput"></a>

```typescript
public readonly clusterExtensionIdsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `hostResourceIdInput`<sup>Optional</sup> <a name="hostResourceIdInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceIdInput"></a>

```typescript
public readonly hostResourceIdInput: string;
```

- *Type:* string

---

##### `hostTypeInput`<sup>Optional</sup> <a name="hostTypeInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostTypeInput"></a>

```typescript
public readonly hostTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ExtendedLocationCustomLocationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

---

##### `clusterExtensionIds`<sup>Required</sup> <a name="clusterExtensionIds" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIds"></a>

```typescript
public readonly clusterExtensionIds: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `hostResourceId`<sup>Required</sup> <a name="hostResourceId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceId"></a>

```typescript
public readonly hostResourceId: string;
```

- *Type:* string

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostType"></a>

```typescript
public readonly hostType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExtendedLocationCustomLocationAuthentication <a name="ExtendedLocationCustomLocationAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.Initializer"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

const extendedLocationCustomLocationAuthentication: extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#value ExtendedLocationCustomLocation#value}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#type ExtendedLocationCustomLocation#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#value ExtendedLocationCustomLocation#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#type ExtendedLocationCustomLocation#type}.

---

### ExtendedLocationCustomLocationConfig <a name="ExtendedLocationCustomLocationConfig" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.Initializer"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

const extendedLocationCustomLocationConfig: extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.clusterExtensionIds">clusterExtensionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostResourceId">hostResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostType">hostType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterExtensionIds`<sup>Required</sup> <a name="clusterExtensionIds" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.clusterExtensionIds"></a>

```typescript
public readonly clusterExtensionIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}.

---

##### `hostResourceId`<sup>Required</sup> <a name="hostResourceId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostResourceId"></a>

```typescript
public readonly hostResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.authentication"></a>

```typescript
public readonly authentication: ExtendedLocationCustomLocationAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#authentication ExtendedLocationCustomLocation#authentication}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}.

---

##### `hostType`<sup>Optional</sup> <a name="hostType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostType"></a>

```typescript
public readonly hostType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ExtendedLocationCustomLocationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#timeouts ExtendedLocationCustomLocation#timeouts}

---

### ExtendedLocationCustomLocationTimeouts <a name="ExtendedLocationCustomLocationTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.Initializer"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

const extendedLocationCustomLocationTimeouts: extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#create ExtendedLocationCustomLocation#create}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#delete ExtendedLocationCustomLocation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#read ExtendedLocationCustomLocation#read}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#update ExtendedLocationCustomLocation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#create ExtendedLocationCustomLocation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#delete ExtendedLocationCustomLocation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#read ExtendedLocationCustomLocation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/extended_location_custom_location#update ExtendedLocationCustomLocation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExtendedLocationCustomLocationAuthenticationOutputReference <a name="ExtendedLocationCustomLocationAuthenticationOutputReference" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

new extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExtendedLocationCustomLocationAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---


### ExtendedLocationCustomLocationTimeoutsOutputReference <a name="ExtendedLocationCustomLocationTimeoutsOutputReference" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer"></a>

```typescript
import { extendedLocationCustomLocation } from '@cdktf/provider-azurerm'

new extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExtendedLocationCustomLocationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

---



