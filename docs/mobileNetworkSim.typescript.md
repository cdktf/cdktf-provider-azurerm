# `mobileNetworkSim` Submodule <a name="`mobileNetworkSim` Submodule" id="@cdktf/provider-azurerm.mobileNetworkSim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkSim <a name="MobileNetworkSim" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim azurerm_mobile_network_sim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

new mobileNetworkSim.MobileNetworkSim(scope: Construct, id: string, config: MobileNetworkSimConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig">MobileNetworkSimConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig">MobileNetworkSimConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putStaticIpConfiguration">putStaticIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetSimPolicyId">resetSimPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetStaticIpConfiguration">resetStaticIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStaticIpConfiguration` <a name="putStaticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putStaticIpConfiguration"></a>

```typescript
public putStaticIpConfiguration(value: IResolvable | MobileNetworkSimStaticIpConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putStaticIpConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration">MobileNetworkSimStaticIpConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putTimeouts"></a>

```typescript
public putTimeouts(value: MobileNetworkSimTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a>

---

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetDeviceType"></a>

```typescript
public resetDeviceType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSimPolicyId` <a name="resetSimPolicyId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetSimPolicyId"></a>

```typescript
public resetSimPolicyId(): void
```

##### `resetStaticIpConfiguration` <a name="resetStaticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetStaticIpConfiguration"></a>

```typescript
public resetStaticIpConfiguration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkSim resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isConstruct"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

mobileNetworkSim.MobileNetworkSim.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformElement"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

mobileNetworkSim.MobileNetworkSim.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformResource"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

mobileNetworkSim.MobileNetworkSim.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

mobileNetworkSim.MobileNetworkSim.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MobileNetworkSim resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MobileNetworkSim to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MobileNetworkSim that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkSim to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simState">simState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.staticIpConfiguration">staticIpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList">MobileNetworkSimStaticIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference">MobileNetworkSimTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.vendorKeyFingerprint">vendorKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.vendorName">vendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.authenticationKeyInput">authenticationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.deviceTypeInput">deviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.integratedCircuitCardIdentifierInput">integratedCircuitCardIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.internationalMobileSubscriberIdentityInput">internationalMobileSubscriberIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.mobileNetworkSimGroupIdInput">mobileNetworkSimGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.operatorKeyCodeInput">operatorKeyCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simPolicyIdInput">simPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.staticIpConfigurationInput">staticIpConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration">MobileNetworkSimStaticIpConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.authenticationKey">authenticationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.deviceType">deviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.integratedCircuitCardIdentifier">integratedCircuitCardIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.internationalMobileSubscriberIdentity">internationalMobileSubscriberIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.mobileNetworkSimGroupId">mobileNetworkSimGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.operatorKeyCode">operatorKeyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simPolicyId">simPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `simState`<sup>Required</sup> <a name="simState" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simState"></a>

```typescript
public readonly simState: string;
```

- *Type:* string

---

##### `staticIpConfiguration`<sup>Required</sup> <a name="staticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.staticIpConfiguration"></a>

```typescript
public readonly staticIpConfiguration: MobileNetworkSimStaticIpConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList">MobileNetworkSimStaticIpConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.timeouts"></a>

```typescript
public readonly timeouts: MobileNetworkSimTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference">MobileNetworkSimTimeoutsOutputReference</a>

---

##### `vendorKeyFingerprint`<sup>Required</sup> <a name="vendorKeyFingerprint" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.vendorKeyFingerprint"></a>

```typescript
public readonly vendorKeyFingerprint: string;
```

- *Type:* string

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

---

##### `authenticationKeyInput`<sup>Optional</sup> <a name="authenticationKeyInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.authenticationKeyInput"></a>

```typescript
public readonly authenticationKeyInput: string;
```

- *Type:* string

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.deviceTypeInput"></a>

```typescript
public readonly deviceTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integratedCircuitCardIdentifierInput`<sup>Optional</sup> <a name="integratedCircuitCardIdentifierInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.integratedCircuitCardIdentifierInput"></a>

```typescript
public readonly integratedCircuitCardIdentifierInput: string;
```

- *Type:* string

---

##### `internationalMobileSubscriberIdentityInput`<sup>Optional</sup> <a name="internationalMobileSubscriberIdentityInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.internationalMobileSubscriberIdentityInput"></a>

```typescript
public readonly internationalMobileSubscriberIdentityInput: string;
```

- *Type:* string

---

##### `mobileNetworkSimGroupIdInput`<sup>Optional</sup> <a name="mobileNetworkSimGroupIdInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.mobileNetworkSimGroupIdInput"></a>

```typescript
public readonly mobileNetworkSimGroupIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatorKeyCodeInput`<sup>Optional</sup> <a name="operatorKeyCodeInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.operatorKeyCodeInput"></a>

```typescript
public readonly operatorKeyCodeInput: string;
```

- *Type:* string

---

##### `simPolicyIdInput`<sup>Optional</sup> <a name="simPolicyIdInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simPolicyIdInput"></a>

```typescript
public readonly simPolicyIdInput: string;
```

- *Type:* string

---

##### `staticIpConfigurationInput`<sup>Optional</sup> <a name="staticIpConfigurationInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.staticIpConfigurationInput"></a>

```typescript
public readonly staticIpConfigurationInput: IResolvable | MobileNetworkSimStaticIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration">MobileNetworkSimStaticIpConfiguration</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MobileNetworkSimTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a>

---

##### `authenticationKey`<sup>Required</sup> <a name="authenticationKey" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.authenticationKey"></a>

```typescript
public readonly authenticationKey: string;
```

- *Type:* string

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integratedCircuitCardIdentifier`<sup>Required</sup> <a name="integratedCircuitCardIdentifier" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.integratedCircuitCardIdentifier"></a>

```typescript
public readonly integratedCircuitCardIdentifier: string;
```

- *Type:* string

---

##### `internationalMobileSubscriberIdentity`<sup>Required</sup> <a name="internationalMobileSubscriberIdentity" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.internationalMobileSubscriberIdentity"></a>

```typescript
public readonly internationalMobileSubscriberIdentity: string;
```

- *Type:* string

---

##### `mobileNetworkSimGroupId`<sup>Required</sup> <a name="mobileNetworkSimGroupId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.mobileNetworkSimGroupId"></a>

```typescript
public readonly mobileNetworkSimGroupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operatorKeyCode`<sup>Required</sup> <a name="operatorKeyCode" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.operatorKeyCode"></a>

```typescript
public readonly operatorKeyCode: string;
```

- *Type:* string

---

##### `simPolicyId`<sup>Required</sup> <a name="simPolicyId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simPolicyId"></a>

```typescript
public readonly simPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkSimConfig <a name="MobileNetworkSimConfig" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.Initializer"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

const mobileNetworkSimConfig: mobileNetworkSim.MobileNetworkSimConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.authenticationKey">authenticationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#authentication_key MobileNetworkSim#authentication_key}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.integratedCircuitCardIdentifier">integratedCircuitCardIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#integrated_circuit_card_identifier MobileNetworkSim#integrated_circuit_card_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.internationalMobileSubscriberIdentity">internationalMobileSubscriberIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#international_mobile_subscriber_identity MobileNetworkSim#international_mobile_subscriber_identity}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.mobileNetworkSimGroupId">mobileNetworkSimGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#mobile_network_sim_group_id MobileNetworkSim#mobile_network_sim_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#name MobileNetworkSim#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.operatorKeyCode">operatorKeyCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#operator_key_code MobileNetworkSim#operator_key_code}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.deviceType">deviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#device_type MobileNetworkSim#device_type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#id MobileNetworkSim#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.simPolicyId">simPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#sim_policy_id MobileNetworkSim#sim_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.staticIpConfiguration">staticIpConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration">MobileNetworkSimStaticIpConfiguration</a>[]</code> | static_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationKey`<sup>Required</sup> <a name="authenticationKey" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.authenticationKey"></a>

```typescript
public readonly authenticationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#authentication_key MobileNetworkSim#authentication_key}.

---

##### `integratedCircuitCardIdentifier`<sup>Required</sup> <a name="integratedCircuitCardIdentifier" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.integratedCircuitCardIdentifier"></a>

```typescript
public readonly integratedCircuitCardIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#integrated_circuit_card_identifier MobileNetworkSim#integrated_circuit_card_identifier}.

---

##### `internationalMobileSubscriberIdentity`<sup>Required</sup> <a name="internationalMobileSubscriberIdentity" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.internationalMobileSubscriberIdentity"></a>

```typescript
public readonly internationalMobileSubscriberIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#international_mobile_subscriber_identity MobileNetworkSim#international_mobile_subscriber_identity}.

---

##### `mobileNetworkSimGroupId`<sup>Required</sup> <a name="mobileNetworkSimGroupId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.mobileNetworkSimGroupId"></a>

```typescript
public readonly mobileNetworkSimGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#mobile_network_sim_group_id MobileNetworkSim#mobile_network_sim_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#name MobileNetworkSim#name}.

---

##### `operatorKeyCode`<sup>Required</sup> <a name="operatorKeyCode" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.operatorKeyCode"></a>

```typescript
public readonly operatorKeyCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#operator_key_code MobileNetworkSim#operator_key_code}.

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#device_type MobileNetworkSim#device_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#id MobileNetworkSim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `simPolicyId`<sup>Optional</sup> <a name="simPolicyId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.simPolicyId"></a>

```typescript
public readonly simPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#sim_policy_id MobileNetworkSim#sim_policy_id}.

---

##### `staticIpConfiguration`<sup>Optional</sup> <a name="staticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.staticIpConfiguration"></a>

```typescript
public readonly staticIpConfiguration: IResolvable | MobileNetworkSimStaticIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration">MobileNetworkSimStaticIpConfiguration</a>[]

static_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#static_ip_configuration MobileNetworkSim#static_ip_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MobileNetworkSimTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#timeouts MobileNetworkSim#timeouts}

---

### MobileNetworkSimStaticIpConfiguration <a name="MobileNetworkSimStaticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.Initializer"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

const mobileNetworkSimStaticIpConfiguration: mobileNetworkSim.MobileNetworkSimStaticIpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.attachedDataNetworkId">attachedDataNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#attached_data_network_id MobileNetworkSim#attached_data_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.sliceId">sliceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#slice_id MobileNetworkSim#slice_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.staticIpv4Address">staticIpv4Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#static_ipv4_address MobileNetworkSim#static_ipv4_address}. |

---

##### `attachedDataNetworkId`<sup>Required</sup> <a name="attachedDataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.attachedDataNetworkId"></a>

```typescript
public readonly attachedDataNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#attached_data_network_id MobileNetworkSim#attached_data_network_id}.

---

##### `sliceId`<sup>Required</sup> <a name="sliceId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.sliceId"></a>

```typescript
public readonly sliceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#slice_id MobileNetworkSim#slice_id}.

---

##### `staticIpv4Address`<sup>Optional</sup> <a name="staticIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.staticIpv4Address"></a>

```typescript
public readonly staticIpv4Address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#static_ipv4_address MobileNetworkSim#static_ipv4_address}.

---

### MobileNetworkSimTimeouts <a name="MobileNetworkSimTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.Initializer"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

const mobileNetworkSimTimeouts: mobileNetworkSim.MobileNetworkSimTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#create MobileNetworkSim#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#delete MobileNetworkSim#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#read MobileNetworkSim#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#update MobileNetworkSim#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#create MobileNetworkSim#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#delete MobileNetworkSim#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#read MobileNetworkSim#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mobile_network_sim#update MobileNetworkSim#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkSimStaticIpConfigurationList <a name="MobileNetworkSimStaticIpConfigurationList" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

new mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.get"></a>

```typescript
public get(index: number): MobileNetworkSimStaticIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration">MobileNetworkSimStaticIpConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MobileNetworkSimStaticIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration">MobileNetworkSimStaticIpConfiguration</a>[]

---


### MobileNetworkSimStaticIpConfigurationOutputReference <a name="MobileNetworkSimStaticIpConfigurationOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

new mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resetStaticIpv4Address">resetStaticIpv4Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStaticIpv4Address` <a name="resetStaticIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resetStaticIpv4Address"></a>

```typescript
public resetStaticIpv4Address(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkIdInput">attachedDataNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.sliceIdInput">sliceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4AddressInput">staticIpv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkId">attachedDataNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.sliceId">sliceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4Address">staticIpv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration">MobileNetworkSimStaticIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachedDataNetworkIdInput`<sup>Optional</sup> <a name="attachedDataNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkIdInput"></a>

```typescript
public readonly attachedDataNetworkIdInput: string;
```

- *Type:* string

---

##### `sliceIdInput`<sup>Optional</sup> <a name="sliceIdInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.sliceIdInput"></a>

```typescript
public readonly sliceIdInput: string;
```

- *Type:* string

---

##### `staticIpv4AddressInput`<sup>Optional</sup> <a name="staticIpv4AddressInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4AddressInput"></a>

```typescript
public readonly staticIpv4AddressInput: string;
```

- *Type:* string

---

##### `attachedDataNetworkId`<sup>Required</sup> <a name="attachedDataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkId"></a>

```typescript
public readonly attachedDataNetworkId: string;
```

- *Type:* string

---

##### `sliceId`<sup>Required</sup> <a name="sliceId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.sliceId"></a>

```typescript
public readonly sliceId: string;
```

- *Type:* string

---

##### `staticIpv4Address`<sup>Required</sup> <a name="staticIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4Address"></a>

```typescript
public readonly staticIpv4Address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MobileNetworkSimStaticIpConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration">MobileNetworkSimStaticIpConfiguration</a>

---


### MobileNetworkSimTimeoutsOutputReference <a name="MobileNetworkSimTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer"></a>

```typescript
import { mobileNetworkSim } from '@cdktf/provider-azurerm'

new mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MobileNetworkSimTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a>

---



