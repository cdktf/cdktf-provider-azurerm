# `devTestVirtualNetwork` Submodule <a name="`devTestVirtualNetwork` Submodule" id="@cdktf/provider-azurerm.devTestVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestVirtualNetwork <a name="DevTestVirtualNetwork" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network azurerm_dev_test_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

new devTestVirtualNetwork.DevTestVirtualNetwork(scope: Construct, id: string, config: DevTestVirtualNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig">DevTestVirtualNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig">DevTestVirtualNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putSubnet"></a>

```typescript
public putSubnet(value: DevTestVirtualNetworkSubnet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putSubnet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: DevTestVirtualNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevTestVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isConstruct"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

devTestVirtualNetwork.DevTestVirtualNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformElement"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformResource"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevTestVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevTestVirtualNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevTestVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevTestVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference">DevTestVirtualNetworkSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference">DevTestVirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.uniqueIdentifier">uniqueIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.labNameInput">labNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.subnetInput">subnetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.labName">labName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.subnet"></a>

```typescript
public readonly subnet: DevTestVirtualNetworkSubnetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference">DevTestVirtualNetworkSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: DevTestVirtualNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference">DevTestVirtualNetworkTimeoutsOutputReference</a>

---

##### `uniqueIdentifier`<sup>Required</sup> <a name="uniqueIdentifier" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.uniqueIdentifier"></a>

```typescript
public readonly uniqueIdentifier: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labNameInput`<sup>Optional</sup> <a name="labNameInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.labNameInput"></a>

```typescript
public readonly labNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.subnetInput"></a>

```typescript
public readonly subnetInput: DevTestVirtualNetworkSubnet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevTestVirtualNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.labName"></a>

```typescript
public readonly labName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestVirtualNetworkConfig <a name="DevTestVirtualNetworkConfig" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

const devTestVirtualNetworkConfig: devTestVirtualNetwork.DevTestVirtualNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.labName">labName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#lab_name DevTestVirtualNetwork#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#name DevTestVirtualNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#resource_group_name DevTestVirtualNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#description DevTestVirtualNetwork#description}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#id DevTestVirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#tags DevTestVirtualNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.labName"></a>

```typescript
public readonly labName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#lab_name DevTestVirtualNetwork#lab_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#name DevTestVirtualNetwork#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#resource_group_name DevTestVirtualNetwork#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#description DevTestVirtualNetwork#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#id DevTestVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.subnet"></a>

```typescript
public readonly subnet: DevTestVirtualNetworkSubnet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#subnet DevTestVirtualNetwork#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#tags DevTestVirtualNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevTestVirtualNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#timeouts DevTestVirtualNetwork#timeouts}

---

### DevTestVirtualNetworkSubnet <a name="DevTestVirtualNetworkSubnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

const devTestVirtualNetworkSubnet: devTestVirtualNetwork.DevTestVirtualNetworkSubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.sharedPublicIpAddress">sharedPublicIpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a></code> | shared_public_ip_address block. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.useInVirtualMachineCreation">useInVirtualMachineCreation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#use_in_virtual_machine_creation DevTestVirtualNetwork#use_in_virtual_machine_creation}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.usePublicIpAddress">usePublicIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#use_public_ip_address DevTestVirtualNetwork#use_public_ip_address}. |

---

##### `sharedPublicIpAddress`<sup>Optional</sup> <a name="sharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.sharedPublicIpAddress"></a>

```typescript
public readonly sharedPublicIpAddress: DevTestVirtualNetworkSubnetSharedPublicIpAddress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a>

shared_public_ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#shared_public_ip_address DevTestVirtualNetwork#shared_public_ip_address}

---

##### `useInVirtualMachineCreation`<sup>Optional</sup> <a name="useInVirtualMachineCreation" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.useInVirtualMachineCreation"></a>

```typescript
public readonly useInVirtualMachineCreation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#use_in_virtual_machine_creation DevTestVirtualNetwork#use_in_virtual_machine_creation}.

---

##### `usePublicIpAddress`<sup>Optional</sup> <a name="usePublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.usePublicIpAddress"></a>

```typescript
public readonly usePublicIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#use_public_ip_address DevTestVirtualNetwork#use_public_ip_address}.

---

### DevTestVirtualNetworkSubnetSharedPublicIpAddress <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

const devTestVirtualNetworkSubnetSharedPublicIpAddress: devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress.property.allowedPorts">allowedPorts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>[]</code> | allowed_ports block. |

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress.property.allowedPorts"></a>

```typescript
public readonly allowedPorts: IResolvable | DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>[]

allowed_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#allowed_ports DevTestVirtualNetwork#allowed_ports}

---

### DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

const devTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts: devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.property.backendPort">backendPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#backend_port DevTestVirtualNetwork#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.property.transportProtocol">transportProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#transport_protocol DevTestVirtualNetwork#transport_protocol}. |

---

##### `backendPort`<sup>Optional</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#backend_port DevTestVirtualNetwork#backend_port}.

---

##### `transportProtocol`<sup>Optional</sup> <a name="transportProtocol" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#transport_protocol DevTestVirtualNetwork#transport_protocol}.

---

### DevTestVirtualNetworkTimeouts <a name="DevTestVirtualNetworkTimeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

const devTestVirtualNetworkTimeouts: devTestVirtualNetwork.DevTestVirtualNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#create DevTestVirtualNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#delete DevTestVirtualNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#read DevTestVirtualNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#update DevTestVirtualNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#create DevTestVirtualNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#delete DevTestVirtualNetwork#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#read DevTestVirtualNetwork#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_test_virtual_network#update DevTestVirtualNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestVirtualNetworkSubnetOutputReference <a name="DevTestVirtualNetworkSubnetOutputReference" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

new devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.putSharedPublicIpAddress">putSharedPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetSharedPublicIpAddress">resetSharedPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetUseInVirtualMachineCreation">resetUseInVirtualMachineCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetUsePublicIpAddress">resetUsePublicIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSharedPublicIpAddress` <a name="putSharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.putSharedPublicIpAddress"></a>

```typescript
public putSharedPublicIpAddress(value: DevTestVirtualNetworkSubnetSharedPublicIpAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.putSharedPublicIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a>

---

##### `resetSharedPublicIpAddress` <a name="resetSharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetSharedPublicIpAddress"></a>

```typescript
public resetSharedPublicIpAddress(): void
```

##### `resetUseInVirtualMachineCreation` <a name="resetUseInVirtualMachineCreation" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetUseInVirtualMachineCreation"></a>

```typescript
public resetUseInVirtualMachineCreation(): void
```

##### `resetUsePublicIpAddress` <a name="resetUsePublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetUsePublicIpAddress"></a>

```typescript
public resetUsePublicIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.sharedPublicIpAddress">sharedPublicIpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference">DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.sharedPublicIpAddressInput">sharedPublicIpAddressInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.useInVirtualMachineCreationInput">useInVirtualMachineCreationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.usePublicIpAddressInput">usePublicIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.useInVirtualMachineCreation">useInVirtualMachineCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.usePublicIpAddress">usePublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sharedPublicIpAddress`<sup>Required</sup> <a name="sharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.sharedPublicIpAddress"></a>

```typescript
public readonly sharedPublicIpAddress: DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference">DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference</a>

---

##### `sharedPublicIpAddressInput`<sup>Optional</sup> <a name="sharedPublicIpAddressInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.sharedPublicIpAddressInput"></a>

```typescript
public readonly sharedPublicIpAddressInput: DevTestVirtualNetworkSubnetSharedPublicIpAddress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a>

---

##### `useInVirtualMachineCreationInput`<sup>Optional</sup> <a name="useInVirtualMachineCreationInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.useInVirtualMachineCreationInput"></a>

```typescript
public readonly useInVirtualMachineCreationInput: string;
```

- *Type:* string

---

##### `usePublicIpAddressInput`<sup>Optional</sup> <a name="usePublicIpAddressInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.usePublicIpAddressInput"></a>

```typescript
public readonly usePublicIpAddressInput: string;
```

- *Type:* string

---

##### `useInVirtualMachineCreation`<sup>Required</sup> <a name="useInVirtualMachineCreation" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.useInVirtualMachineCreation"></a>

```typescript
public readonly useInVirtualMachineCreation: string;
```

- *Type:* string

---

##### `usePublicIpAddress`<sup>Required</sup> <a name="usePublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.usePublicIpAddress"></a>

```typescript
public readonly usePublicIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevTestVirtualNetworkSubnet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a>

---


### DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

new devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.get"></a>

```typescript
public get(index: number): DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>[]

---


### DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

new devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resetBackendPort">resetBackendPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resetTransportProtocol">resetTransportProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPort` <a name="resetBackendPort" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resetBackendPort"></a>

```typescript
public resetBackendPort(): void
```

##### `resetTransportProtocol` <a name="resetTransportProtocol" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resetTransportProtocol"></a>

```typescript
public resetTransportProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.transportProtocolInput">transportProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.backendPort">backendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.transportProtocol">transportProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.backendPortInput"></a>

```typescript
public readonly backendPortInput: number;
```

- *Type:* number

---

##### `transportProtocolInput`<sup>Optional</sup> <a name="transportProtocolInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.transportProtocolInput"></a>

```typescript
public readonly transportProtocolInput: string;
```

- *Type:* string

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>

---


### DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

new devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.putAllowedPorts">putAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resetAllowedPorts">resetAllowedPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedPorts` <a name="putAllowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.putAllowedPorts"></a>

```typescript
public putAllowedPorts(value: IResolvable | DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.putAllowedPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>[]

---

##### `resetAllowedPorts` <a name="resetAllowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resetAllowedPorts"></a>

```typescript
public resetAllowedPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.allowedPorts">allowedPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.allowedPortsInput">allowedPortsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPorts`<sup>Required</sup> <a name="allowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.allowedPorts"></a>

```typescript
public readonly allowedPorts: DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList</a>

---

##### `allowedPortsInput`<sup>Optional</sup> <a name="allowedPortsInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.allowedPortsInput"></a>

```typescript
public readonly allowedPortsInput: IResolvable | DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevTestVirtualNetworkSubnetSharedPublicIpAddress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a>

---


### DevTestVirtualNetworkTimeoutsOutputReference <a name="DevTestVirtualNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { devTestVirtualNetwork } from '@cdktf/provider-azurerm'

new devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevTestVirtualNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a>

---



