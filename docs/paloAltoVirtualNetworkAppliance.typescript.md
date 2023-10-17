# `azurerm_palo_alto_virtual_network_appliance`

Refer to the Terraform Registory for docs: [`azurerm_palo_alto_virtual_network_appliance`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance).

# `paloAltoVirtualNetworkAppliance` Submodule <a name="`paloAltoVirtualNetworkAppliance` Submodule" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoVirtualNetworkAppliance <a name="PaloAltoVirtualNetworkAppliance" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance azurerm_palo_alto_virtual_network_appliance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer"></a>

```typescript
import { paloAltoVirtualNetworkAppliance } from '@cdktf/provider-azurerm'

new paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance(scope: Construct, id: string, config: PaloAltoVirtualNetworkApplianceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig">PaloAltoVirtualNetworkApplianceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig">PaloAltoVirtualNetworkApplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.putTimeouts"></a>

```typescript
public putTimeouts(value: PaloAltoVirtualNetworkApplianceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PaloAltoVirtualNetworkAppliance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isConstruct"></a>

```typescript
import { paloAltoVirtualNetworkAppliance } from '@cdktf/provider-azurerm'

paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformElement"></a>

```typescript
import { paloAltoVirtualNetworkAppliance } from '@cdktf/provider-azurerm'

paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformResource"></a>

```typescript
import { paloAltoVirtualNetworkAppliance } from '@cdktf/provider-azurerm'

paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport"></a>

```typescript
import { paloAltoVirtualNetworkAppliance } from '@cdktf/provider-azurerm'

paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PaloAltoVirtualNetworkAppliance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PaloAltoVirtualNetworkAppliance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PaloAltoVirtualNetworkAppliance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoVirtualNetworkAppliance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference">PaloAltoVirtualNetworkApplianceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.virtualHubIdInput">virtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.timeouts"></a>

```typescript
public readonly timeouts: PaloAltoVirtualNetworkApplianceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference">PaloAltoVirtualNetworkApplianceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PaloAltoVirtualNetworkApplianceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a>

---

##### `virtualHubIdInput`<sup>Optional</sup> <a name="virtualHubIdInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.virtualHubIdInput"></a>

```typescript
public readonly virtualHubIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoVirtualNetworkApplianceConfig <a name="PaloAltoVirtualNetworkApplianceConfig" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.Initializer"></a>

```typescript
import { paloAltoVirtualNetworkAppliance } from '@cdktf/provider-azurerm'

const paloAltoVirtualNetworkApplianceConfig: paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#name PaloAltoVirtualNetworkAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#virtual_hub_id PaloAltoVirtualNetworkAppliance#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#id PaloAltoVirtualNetworkAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#name PaloAltoVirtualNetworkAppliance#name}.

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#virtual_hub_id PaloAltoVirtualNetworkAppliance#virtual_hub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#id PaloAltoVirtualNetworkAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PaloAltoVirtualNetworkApplianceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#timeouts PaloAltoVirtualNetworkAppliance#timeouts}

---

### PaloAltoVirtualNetworkApplianceTimeouts <a name="PaloAltoVirtualNetworkApplianceTimeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.Initializer"></a>

```typescript
import { paloAltoVirtualNetworkAppliance } from '@cdktf/provider-azurerm'

const paloAltoVirtualNetworkApplianceTimeouts: paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#create PaloAltoVirtualNetworkAppliance#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#delete PaloAltoVirtualNetworkAppliance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#read PaloAltoVirtualNetworkAppliance#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#create PaloAltoVirtualNetworkAppliance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#delete PaloAltoVirtualNetworkAppliance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_virtual_network_appliance#read PaloAltoVirtualNetworkAppliance#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoVirtualNetworkApplianceTimeoutsOutputReference <a name="PaloAltoVirtualNetworkApplianceTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer"></a>

```typescript
import { paloAltoVirtualNetworkAppliance } from '@cdktf/provider-azurerm'

new paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PaloAltoVirtualNetworkApplianceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a>

---



