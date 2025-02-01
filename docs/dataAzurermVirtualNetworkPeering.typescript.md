# `dataAzurermVirtualNetworkPeering` Submodule <a name="`dataAzurermVirtualNetworkPeering` Submodule" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualNetworkPeering <a name="DataAzurermVirtualNetworkPeering" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering azurerm_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer"></a>

```typescript
import { dataAzurermVirtualNetworkPeering } from '@cdktf/provider-azurerm'

new dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering(scope: Construct, id: string, config: DataAzurermVirtualNetworkPeeringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig">DataAzurermVirtualNetworkPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig">DataAzurermVirtualNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermVirtualNetworkPeeringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVirtualNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct"></a>

```typescript
import { dataAzurermVirtualNetworkPeering } from '@cdktf/provider-azurerm'

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement"></a>

```typescript
import { dataAzurermVirtualNetworkPeering } from '@cdktf/provider-azurerm'

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource"></a>

```typescript
import { dataAzurermVirtualNetworkPeering } from '@cdktf/provider-azurerm'

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport"></a>

```typescript
import { dataAzurermVirtualNetworkPeering } from '@cdktf/provider-azurerm'

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermVirtualNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermVirtualNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermVirtualNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowGatewayTransit">allowGatewayTransit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowVirtualNetworkAccess">allowVirtualNetworkAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.onlyIpv6PeeringEnabled">onlyIpv6PeeringEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.peerCompleteVirtualNetworksEnabled">peerCompleteVirtualNetworksEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.remoteVirtualNetworkId">remoteVirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference">DataAzurermVirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.useRemoteGateways">useRemoteGateways</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowForwardedTraffic`<sup>Required</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowForwardedTraffic"></a>

```typescript
public readonly allowForwardedTraffic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowGatewayTransit`<sup>Required</sup> <a name="allowGatewayTransit" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowGatewayTransit"></a>

```typescript
public readonly allowGatewayTransit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowVirtualNetworkAccess`<sup>Required</sup> <a name="allowVirtualNetworkAccess" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```typescript
public readonly allowVirtualNetworkAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `onlyIpv6PeeringEnabled`<sup>Required</sup> <a name="onlyIpv6PeeringEnabled" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.onlyIpv6PeeringEnabled"></a>

```typescript
public readonly onlyIpv6PeeringEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `peerCompleteVirtualNetworksEnabled`<sup>Required</sup> <a name="peerCompleteVirtualNetworksEnabled" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.peerCompleteVirtualNetworksEnabled"></a>

```typescript
public readonly peerCompleteVirtualNetworksEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `remoteVirtualNetworkId`<sup>Required</sup> <a name="remoteVirtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```typescript
public readonly remoteVirtualNetworkId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermVirtualNetworkPeeringTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference">DataAzurermVirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `useRemoteGateways`<sup>Required</sup> <a name="useRemoteGateways" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.useRemoteGateways"></a>

```typescript
public readonly useRemoteGateways: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermVirtualNetworkPeeringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualNetworkPeeringConfig <a name="DataAzurermVirtualNetworkPeeringConfig" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.Initializer"></a>

```typescript
import { dataAzurermVirtualNetworkPeering } from '@cdktf/provider-azurerm'

const dataAzurermVirtualNetworkPeeringConfig: dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}.

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermVirtualNetworkPeeringTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#timeouts DataAzurermVirtualNetworkPeering#timeouts}

---

### DataAzurermVirtualNetworkPeeringTimeouts <a name="DataAzurermVirtualNetworkPeeringTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts.Initializer"></a>

```typescript
import { dataAzurermVirtualNetworkPeering } from '@cdktf/provider-azurerm'

const dataAzurermVirtualNetworkPeeringTimeouts: dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#read DataAzurermVirtualNetworkPeering#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/data-sources/virtual_network_peering#read DataAzurermVirtualNetworkPeering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualNetworkPeeringTimeoutsOutputReference <a name="DataAzurermVirtualNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermVirtualNetworkPeering } from '@cdktf/provider-azurerm'

new dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermVirtualNetworkPeeringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

---



