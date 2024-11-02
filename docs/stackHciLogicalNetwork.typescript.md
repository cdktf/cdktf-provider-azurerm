# `stackHciLogicalNetwork` Submodule <a name="`stackHciLogicalNetwork` Submodule" id="@cdktf/provider-azurerm.stackHciLogicalNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciLogicalNetwork <a name="StackHciLogicalNetwork" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network azurerm_stack_hci_logical_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

new stackHciLogicalNetwork.StackHciLogicalNetwork(scope: Construct, id: string, config: StackHciLogicalNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig">StackHciLogicalNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig">StackHciLogicalNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet"></a>

```typescript
public putSubnet(value: StackHciLogicalNetworkSubnet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: StackHciLogicalNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

---

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetDnsServers"></a>

```typescript
public resetDnsServers(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciLogicalNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackHciLogicalNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackHciLogicalNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackHciLogicalNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackHciLogicalNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference">StackHciLogicalNetworkSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference">StackHciLogicalNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationIdInput">customLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServersInput">dnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnetInput">subnetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchNameInput">virtualSwitchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationId">customLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchName">virtualSwitchName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnet"></a>

```typescript
public readonly subnet: StackHciLogicalNetworkSubnetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference">StackHciLogicalNetworkSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: StackHciLogicalNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference">StackHciLogicalNetworkTimeoutsOutputReference</a>

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationIdInput"></a>

```typescript
public readonly customLocationIdInput: string;
```

- *Type:* string

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServersInput"></a>

```typescript
public readonly dnsServersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnetInput"></a>

```typescript
public readonly subnetInput: StackHciLogicalNetworkSubnet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackHciLogicalNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

---

##### `virtualSwitchNameInput`<sup>Optional</sup> <a name="virtualSwitchNameInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchNameInput"></a>

```typescript
public readonly virtualSwitchNameInput: string;
```

- *Type:* string

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationId"></a>

```typescript
public readonly customLocationId: string;
```

- *Type:* string

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchName"></a>

```typescript
public readonly virtualSwitchName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciLogicalNetworkConfig <a name="StackHciLogicalNetworkConfig" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

const stackHciLogicalNetworkConfig: stackHciLogicalNetwork.StackHciLogicalNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.customLocationId">customLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.virtualSwitchName">virtualSwitchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.customLocationId"></a>

```typescript
public readonly customLocationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.subnet"></a>

```typescript
public readonly subnet: StackHciLogicalNetworkSubnet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#subnet StackHciLogicalNetwork#subnet}

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.virtualSwitchName"></a>

```typescript
public readonly virtualSwitchName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackHciLogicalNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#timeouts StackHciLogicalNetwork#timeouts}

---

### StackHciLogicalNetworkSubnet <a name="StackHciLogicalNetworkSubnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

const stackHciLogicalNetworkSubnet: stackHciLogicalNetwork.StackHciLogicalNetworkSubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipAllocationMethod">ipAllocationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#ip_allocation_method StackHciLogicalNetwork#ip_allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipPool">ipPool</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>[]</code> | ip_pool block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a></code> | route block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.vlanId">vlanId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#vlan_id StackHciLogicalNetwork#vlan_id}. |

---

##### `ipAllocationMethod`<sup>Required</sup> <a name="ipAllocationMethod" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipAllocationMethod"></a>

```typescript
public readonly ipAllocationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#ip_allocation_method StackHciLogicalNetwork#ip_allocation_method}.

---

##### `addressPrefix`<sup>Optional</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}.

---

##### `ipPool`<sup>Optional</sup> <a name="ipPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipPool"></a>

```typescript
public readonly ipPool: IResolvable | StackHciLogicalNetworkSubnetIpPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>[]

ip_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#ip_pool StackHciLogicalNetwork#ip_pool}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.route"></a>

```typescript
public readonly route: StackHciLogicalNetworkSubnetRoute;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#route StackHciLogicalNetwork#route}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#vlan_id StackHciLogicalNetwork#vlan_id}.

---

### StackHciLogicalNetworkSubnetIpPool <a name="StackHciLogicalNetworkSubnetIpPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

const stackHciLogicalNetworkSubnetIpPool: stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#end StackHciLogicalNetwork#end}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#start StackHciLogicalNetwork#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#end StackHciLogicalNetwork#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#start StackHciLogicalNetwork#start}.

---

### StackHciLogicalNetworkSubnetRoute <a name="StackHciLogicalNetworkSubnetRoute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

const stackHciLogicalNetworkSubnetRoute: stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.nextHopIpAddress">nextHopIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#next_hop_ip_address StackHciLogicalNetwork#next_hop_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}. |

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}.

---

##### `nextHopIpAddress`<sup>Required</sup> <a name="nextHopIpAddress" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.nextHopIpAddress"></a>

```typescript
public readonly nextHopIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#next_hop_ip_address StackHciLogicalNetwork#next_hop_ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}.

---

### StackHciLogicalNetworkTimeouts <a name="StackHciLogicalNetworkTimeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

const stackHciLogicalNetworkTimeouts: stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#create StackHciLogicalNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#delete StackHciLogicalNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#read StackHciLogicalNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#update StackHciLogicalNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#create StackHciLogicalNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#delete StackHciLogicalNetwork#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#read StackHciLogicalNetwork#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/stack_hci_logical_network#update StackHciLogicalNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciLogicalNetworkSubnetIpPoolList <a name="StackHciLogicalNetworkSubnetIpPoolList" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

new stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.get"></a>

```typescript
public get(index: number): StackHciLogicalNetworkSubnetIpPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciLogicalNetworkSubnetIpPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>[]

---


### StackHciLogicalNetworkSubnetIpPoolOutputReference <a name="StackHciLogicalNetworkSubnetIpPoolOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

new stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciLogicalNetworkSubnetIpPool;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>

---


### StackHciLogicalNetworkSubnetOutputReference <a name="StackHciLogicalNetworkSubnetOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

new stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putIpPool">putIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetAddressPrefix">resetAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetIpPool">resetIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpPool` <a name="putIpPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putIpPool"></a>

```typescript
public putIpPool(value: IResolvable | StackHciLogicalNetworkSubnetIpPool[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putIpPool.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>[]

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute"></a>

```typescript
public putRoute(value: StackHciLogicalNetworkSubnetRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

---

##### `resetAddressPrefix` <a name="resetAddressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetAddressPrefix"></a>

```typescript
public resetAddressPrefix(): void
```

##### `resetIpPool` <a name="resetIpPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetIpPool"></a>

```typescript
public resetIpPool(): void
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetRoute"></a>

```typescript
public resetRoute(): void
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetVlanId"></a>

```typescript
public resetVlanId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPool">ipPool</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList">StackHciLogicalNetworkSubnetIpPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference">StackHciLogicalNetworkSubnetRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefixInput">addressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethodInput">ipAllocationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPoolInput">ipPoolInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.routeInput">routeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethod">ipAllocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipPool`<sup>Required</sup> <a name="ipPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPool"></a>

```typescript
public readonly ipPool: StackHciLogicalNetworkSubnetIpPoolList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList">StackHciLogicalNetworkSubnetIpPoolList</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.route"></a>

```typescript
public readonly route: StackHciLogicalNetworkSubnetRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference">StackHciLogicalNetworkSubnetRouteOutputReference</a>

---

##### `addressPrefixInput`<sup>Optional</sup> <a name="addressPrefixInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefixInput"></a>

```typescript
public readonly addressPrefixInput: string;
```

- *Type:* string

---

##### `ipAllocationMethodInput`<sup>Optional</sup> <a name="ipAllocationMethodInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethodInput"></a>

```typescript
public readonly ipAllocationMethodInput: string;
```

- *Type:* string

---

##### `ipPoolInput`<sup>Optional</sup> <a name="ipPoolInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPoolInput"></a>

```typescript
public readonly ipPoolInput: IResolvable | StackHciLogicalNetworkSubnetIpPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>[]

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.routeInput"></a>

```typescript
public readonly routeInput: StackHciLogicalNetworkSubnetRoute;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

---

##### `ipAllocationMethod`<sup>Required</sup> <a name="ipAllocationMethod" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethod"></a>

```typescript
public readonly ipAllocationMethod: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackHciLogicalNetworkSubnet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

---


### StackHciLogicalNetworkSubnetRouteOutputReference <a name="StackHciLogicalNetworkSubnetRouteOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

new stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefixInput">addressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddressInput">nextHopIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddress">nextHopIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressPrefixInput`<sup>Optional</sup> <a name="addressPrefixInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefixInput"></a>

```typescript
public readonly addressPrefixInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nextHopIpAddressInput`<sup>Optional</sup> <a name="nextHopIpAddressInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddressInput"></a>

```typescript
public readonly nextHopIpAddressInput: string;
```

- *Type:* string

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nextHopIpAddress`<sup>Required</sup> <a name="nextHopIpAddress" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddress"></a>

```typescript
public readonly nextHopIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackHciLogicalNetworkSubnetRoute;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

---


### StackHciLogicalNetworkTimeoutsOutputReference <a name="StackHciLogicalNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackHciLogicalNetwork } from '@cdktf/provider-azurerm'

new stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciLogicalNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

---



